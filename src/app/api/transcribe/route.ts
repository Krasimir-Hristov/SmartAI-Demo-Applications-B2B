import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod';
import { getAppEnvConfig } from '@/config/envConfig';
import { SUPPORTED_LOCALES } from '@/features/i18n';

const transcribeRequestSchema = z.object({
  audioBase64: z.string().min(60).max(8_000_000),
  locale: z.enum(SUPPORTED_LOCALES),
});

const whisperResponseSchema = z.object({
  text: z.string().optional(),
});

const chatAudioResponseSchema = z.object({
  choices: z
    .array(
      z.object({
        message: z
          .object({
            content: z.string().nullable().optional(),
          })
          .optional(),
      })
    )
    .optional(),
});

const LOCALE_HINT_MAP: Record<(typeof SUPPORTED_LOCALES)[number], string> = {
  de: 'German (Deutsch)',
  bg: 'Bulgarian (Български)',
  en: 'English',
  tr: 'Turkish (Türkçe)',
};

const tryOpenRouterWhisper = async (
  apiKey: string,
  appUrl: string,
  model: string,
  audioBase64: string
): Promise<string> => {
  try {
    const upstream = await fetch('https://openrouter.ai/api/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': appUrl,
        'X-Title': 'SmartAI Demo Applications - Whisper Voice Dictation',
      },
      body: JSON.stringify({
        model,
        input_audio: {
          data: audioBase64,
          format: 'wav',
        },
      }),
      signal: AbortSignal.timeout(25000),
    });

    if (!upstream.ok) {
      return '';
    }

    const rawJson: unknown = await upstream.json();
    const parsed = whisperResponseSchema.safeParse(rawJson);
    return parsed.success ? (parsed.data.text ?? '').trim() : '';
  } catch {
    return '';
  }
};

const tryMultimodalChatTranscription = async (
  apiKey: string,
  appUrl: string,
  model: string,
  audioBase64: string,
  locale: (typeof SUPPORTED_LOCALES)[number]
): Promise<string> => {
  try {
    const upstream = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': appUrl,
        'X-Title': 'SmartAI Demo Applications - Voice Dictation',
      },
      body: JSON.stringify({
        model,
        temperature: 0,
        max_tokens: 400,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: `Transcribe the spoken voice message accurately in the exact language spoken (expected UI language: ${LOCALE_HINT_MAP[locale]}, or DE/BG/EN/TR). Output ONLY the raw transcribed words without commentary or quotes.`,
              },
              {
                type: 'input_audio',
                input_audio: {
                  data: audioBase64,
                  format: 'wav',
                },
              },
            ],
          },
        ],
      }),
      signal: AbortSignal.timeout(25000),
    });

    if (!upstream.ok) {
      return '';
    }

    const upstreamJson: unknown = await upstream.json();
    const parsed = chatAudioResponseSchema.safeParse(upstreamJson);
    const rawText = parsed.success
      ? parsed.data.choices?.[0]?.message?.content?.trim() ?? ''
      : '';
    return rawText.replace(/^["'„“]|["'“”]$/g, '').trim();
  } catch {
    return '';
  }
};

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  try {
    const rawBody: unknown = await request.json();
    const parsed = transcribeRequestSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid audio payload.' }, { status: 400 });
    }

    const { audioBase64, locale } = parsed.data;
    const env = getAppEnvConfig();

    if (!env.OPENROUTER_API_KEY) {
      return NextResponse.json({ text: '', engine: 'browser-fallback' as const });
    }

    const whisperText = await tryOpenRouterWhisper(
      env.OPENROUTER_API_KEY,
      env.NEXT_PUBLIC_APP_URL,
      env.OPENROUTER_AUDIO_MODEL,
      audioBase64
    );

    if (whisperText) {
      return NextResponse.json({ text: whisperText, engine: 'openrouter-audio' as const });
    }

    const multimodalText = await tryMultimodalChatTranscription(
      env.OPENROUTER_API_KEY,
      env.NEXT_PUBLIC_APP_URL,
      env.OPENROUTER_MODEL,
      audioBase64,
      locale
    );

    if (multimodalText) {
      return NextResponse.json({ text: multimodalText, engine: 'openrouter-audio' as const });
    }

    return NextResponse.json({ text: '', engine: 'browser-fallback' as const });
  } catch {
    return NextResponse.json(
      { error: 'Unable to transcribe audio right now.' },
      { status: 500 }
    );
  }
};

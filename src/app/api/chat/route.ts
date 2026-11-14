import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod';
import { getAppEnvConfig } from '@/config/envConfig';
import {
  buildFallbackRagReply,
  buildRagSystemPrompt,
  DEMO_VERTICAL_SLUGS,
  getDemoBySlug,
} from '@/features/catalog';
import { SUPPORTED_LOCALES } from '@/features/i18n';
import { loadCatalogBundle } from '@/features/i18n/serverLoaders';

const chatRequestSchema = z.object({
  slug: z.enum(DEMO_VERTICAL_SLUGS),
  locale: z.enum(SUPPORTED_LOCALES),
  messages: z
    .array(
      z.object({
        role: z.enum(['user', 'assistant']),
        content: z.string().trim().min(1).max(2000),
      })
    )
    .min(1)
    .max(20),
});

const openRouterResponseSchema = z.object({
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

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  try {
    const rawBody: unknown = await request.json();
    const parsed = chatRequestSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid chat request parameters.' },
        { status: 400 }
      );
    }

    const { slug, locale, messages } = parsed.data;
    const demo = getDemoBySlug(slug);

    if (!demo) {
      return NextResponse.json({ error: 'Unknown portal reference.' }, { status: 404 });
    }

    const catalogBundle = await loadCatalogBundle(locale);
    const demoCopy = catalogBundle[demo.slug];

    const lastUserMessage =
      [...messages].reverse().find((msg) => msg.role === 'user')?.content ?? '';
    const env = getAppEnvConfig();

    if (!env.OPENROUTER_API_KEY) {
      return NextResponse.json({
        reply: buildFallbackRagReply(demo, demoCopy, locale, lastUserMessage),
        engine: 'fallback' as const,
      });
    }

    const systemPrompt = buildRagSystemPrompt(demo, demoCopy, locale);

    try {
      const upstream = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': env.NEXT_PUBLIC_APP_URL,
          'X-Title': 'SmartAI Demo Applications — Custom RAG Client Portals',
        },
        body: JSON.stringify({
          model: env.OPENROUTER_MODEL,
          temperature: 0.2,
          max_tokens: 900,
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages.slice(-10),
          ],
        }),
        signal: AbortSignal.timeout(25000),
      });

      if (!upstream.ok) {
        return NextResponse.json({
          reply: buildFallbackRagReply(demo, demoCopy, locale, lastUserMessage),
          engine: 'fallback' as const,
        });
      }

      const upstreamJson: unknown = await upstream.json();
      const parsedUpstream = openRouterResponseSchema.safeParse(upstreamJson);
      const replyContent = parsedUpstream.success
        ? parsedUpstream.data.choices?.[0]?.message?.content?.trim()
        : undefined;

      if (!replyContent) {
        return NextResponse.json({
          reply: buildFallbackRagReply(demo, demoCopy, locale, lastUserMessage),
          engine: 'fallback' as const,
        });
      }

      return NextResponse.json({
        reply: replyContent,
        engine: 'live' as const,
      });
    } catch {
      return NextResponse.json({
        reply: buildFallbackRagReply(demo, demoCopy, locale, lastUserMessage),
        engine: 'fallback' as const,
      });
    }
  } catch {
    return NextResponse.json(
      { error: 'Unable to process chat request right now.' },
      { status: 500 }
    );
  }
};

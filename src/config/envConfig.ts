import fs from 'node:fs';
import path from 'node:path';
import { z } from 'zod';

const cleanEnvValue = (rawValue: string | undefined): string | undefined => {
  if (!rawValue) {
    return undefined;
  }
  const cleaned = rawValue.trim().replace(/^["']|["']$/g, '').trim();
  return cleaned.length > 0 ? cleaned : undefined;
};

const readLocalEnvFallback = (): Record<string, string> => {
  try {
    const envPath = path.join(process.cwd(), '.env.local');
    if (!fs.existsSync(envPath)) {
      return {};
    }
    const content = fs.readFileSync(envPath, 'utf8').replace(/^\uFEFF/, '');
    const result: Record<string, string> = {};
    for (const line of content.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) {
        continue;
      }
      const sepIndex = trimmed.indexOf('=');
      if (sepIndex <= 0) {
        continue;
      }
      const key = trimmed.slice(0, sepIndex).replace(/^\uFEFF/, '').trim();
      const value = cleanEnvValue(trimmed.slice(sepIndex + 1));
      if (key && value) {
        result[key] = value;
      }
    }
    return result;
  } catch {
    return {};
  }
};

const envSchema = z.object({
  OPENROUTER_API_KEY: z.string().min(1).optional(),
  OPENROUTER_MODEL: z.string().min(1).default('google/gemini-2.5-flash'),
  OPENROUTER_AUDIO_MODEL: z.string().min(1).default('openai/whisper-large-v3'),
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
});

export type AppEnvConfig = z.infer<typeof envSchema>;

export const getAppEnvConfig = (): AppEnvConfig => {
  const procApiKey =
    cleanEnvValue(process.env.OPENROUTER_API_KEY) ??
    cleanEnvValue(process.env['\uFEFFOPENROUTER_API_KEY']);
  const localEnv = procApiKey ? {} : readLocalEnvFallback();

  const parsed = envSchema.safeParse({
    OPENROUTER_API_KEY: procApiKey ?? localEnv.OPENROUTER_API_KEY,
    OPENROUTER_MODEL:
      cleanEnvValue(process.env.OPENROUTER_MODEL) ??
      localEnv.OPENROUTER_MODEL ??
      'google/gemini-2.5-flash',
    OPENROUTER_AUDIO_MODEL:
      cleanEnvValue(process.env.OPENROUTER_AUDIO_MODEL) ??
      localEnv.OPENROUTER_AUDIO_MODEL ??
      'openai/whisper-large-v3',
    NEXT_PUBLIC_APP_URL:
      cleanEnvValue(process.env.NEXT_PUBLIC_APP_URL) ??
      localEnv.NEXT_PUBLIC_APP_URL ??
      'http://localhost:3000',
  });

  if (!parsed.success) {
    return {
      OPENROUTER_API_KEY: undefined,
      OPENROUTER_MODEL: 'google/gemini-2.5-flash',
      OPENROUTER_AUDIO_MODEL: 'openai/whisper-large-v3',
      NEXT_PUBLIC_APP_URL: 'http://localhost:3000',
    };
  }

  return parsed.data;
};

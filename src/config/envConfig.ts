import { z } from 'zod';

const envSchema = z.object({
  OPENROUTER_API_KEY: z.string().min(1).optional(),
  OPENROUTER_MODEL: z.string().min(1).default('google/gemini-2.5-flash'),
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
});

export type AppEnvConfig = z.infer<typeof envSchema>;

export const getAppEnvConfig = (): AppEnvConfig => {
  const parsed = envSchema.safeParse({
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
    OPENROUTER_MODEL: process.env.OPENROUTER_MODEL || 'google/gemini-2.5-flash',
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  });

  if (!parsed.success) {
    return {
      OPENROUTER_API_KEY: undefined,
      OPENROUTER_MODEL: 'google/gemini-2.5-flash',
      NEXT_PUBLIC_APP_URL: 'http://localhost:3000',
    };
  }

  return parsed.data;
};

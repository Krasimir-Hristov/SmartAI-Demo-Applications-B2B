'use client';

import { useCallback, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { z } from 'zod';
import { useDemoCopy, type DemoVerticalConfig } from '@/features/catalog';
import type { SupportedLocale } from '@/features/i18n';
import type { ChatMessageItem, RagEngineMode } from './types';

const apiChatResponseSchema = z.object({
  reply: z.string(),
  engine: z.enum(['live', 'fallback']).optional(),
});

interface UseRagChatResult {
  messages: readonly ChatMessageItem[];
  isLoading: boolean;
  engineMode: RagEngineMode;
  errorText: string | null;
  sendMessage: (text: string) => Promise<void>;
  resetChat: () => void;
}

export const useRagChat = (demo: DemoVerticalConfig): UseRagChatResult => {
  const locale = useLocale() as SupportedLocale;
  const tChat = useTranslations('chat');
  const demoCopy = useDemoCopy(demo.slug);
  const [userMessages, setUserMessages] = useState<ChatMessageItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [engineMode, setEngineMode] = useState<RagEngineMode>('live');
  const [errorText, setErrorText] = useState<string | null>(null);

  const welcomeMessage: ChatMessageItem = {
    id: `welcome-${demo.slug}-${locale}`,
    role: 'assistant',
    content: demoCopy.aiWelcomeMessage,
  };

  const messages: readonly ChatMessageItem[] = [welcomeMessage, ...userMessages];

  const resetChat = useCallback(() => {
    setUserMessages([]);
    setErrorText(null);
  }, []);

  const sendMessage = useCallback(
    async (rawText: string) => {
      const text = rawText.trim();
      if (!text || isLoading) {
        return;
      }

      const nextUserMsg: ChatMessageItem = {
        id: `user-${Date.now()}`,
        role: 'user',
        content: text,
      };

      const conversationHistory = [...userMessages, nextUserMsg].map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      setUserMessages((prev) => [...prev, nextUserMsg]);
      setIsLoading(true);
      setErrorText(null);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            slug: demo.slug,
            locale,
            messages: conversationHistory,
          }),
        });

        if (!response.ok) {
          setErrorText(tChat('errorFallback'));
          return;
        }

        const json: unknown = await response.json();
        const parsed = apiChatResponseSchema.safeParse(json);

        if (!parsed.success) {
          setErrorText(tChat('errorFallback'));
          return;
        }

        if (parsed.data.engine) {
          setEngineMode(parsed.data.engine);
        }

        const assistantMsg: ChatMessageItem = {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: parsed.data.reply,
        };

        setUserMessages((prev) => [...prev, assistantMsg]);
      } catch {
        setErrorText(tChat('errorFallback'));
      } finally {
        setIsLoading(false);
      }
    },
    [demo.slug, isLoading, locale, tChat, userMessages]
  );

  return {
    messages,
    isLoading,
    engineMode,
    errorText,
    sendMessage,
    resetChat,
  };
};

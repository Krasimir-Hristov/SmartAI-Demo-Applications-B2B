'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Bot,
  Loader2,
  Mic,
  Minimize2,
  RotateCcw,
  Send,
  ShieldCheck,
  Sparkles,
  Square,
  Tag,
  User,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { MINI_OFFER_SUMMARIES, useDemoCopy, type DemoVerticalConfig } from '@/features/catalog';
import { LanguageSwitcher, type SupportedLocale } from '@/features/i18n';
import { useRagChat } from './useRagChat';
import { useVoiceDictation } from './useVoiceDictation';

interface RagChatWidgetProps {
  demo: DemoVerticalConfig;
  onCollapse?: () => void;
}

export const RagChatWidget: React.FC<RagChatWidgetProps> = ({ demo, onCollapse }) => {
  const locale = useLocale() as SupportedLocale;
  const tChat = useTranslations('chat');
  const tPortal = useTranslations('portal');
  const demoCopy = useDemoCopy(demo.slug);
  const miniOffer = MINI_OFFER_SUMMARIES[demo.slug][locale];
  const { messages, isLoading, engineMode, errorText, sendMessage, resetChat } = useRagChat(demo);
  const [draft, setDraft] = useState('');
  const messagesListRef = useRef<HTMLDivElement | null>(null);

  const { isRecording, isTranscribing, voiceError, toggleRecording } = useVoiceDictation({
    locale,
    errorUnsupported: tChat('voiceUnsupported'),
    errorFailed: tChat('voiceError'),
    onTranscript: (spokenText) => {
      setDraft((prev) => (prev.trim() ? `${prev.trim()} ${spokenText}` : spokenText));
    },
  });

  useEffect(() => {
    if (messages.length <= 1 && !isLoading) {
      return;
    }
    const container = messagesListRef.current;
    if (!container) {
      return;
    }
    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
  }, [messages.length, isLoading]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const current = draft;
    if (!current.trim() || isLoading || isTranscribing) {
      return;
    }
    setDraft('');
    await sendMessage(current);
  };

  return (
    <section
      aria-label={demoCopy.aiPersonaName}
      className="flex h-[710px] max-h-[calc(100vh-7.5rem)] flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#121216]/95 shadow-2xl"
    >
      <header className="space-y-2 border-b border-zinc-800/80 bg-zinc-950/80 px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/15 text-emerald-300">
              <Bot className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h2 className="truncate text-sm font-semibold text-zinc-100">
                {demoCopy.aiPersonaName}
              </h2>
              <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="truncate">
                  {engineMode === 'live' ? tChat('liveBadge') : tChat('fallbackBadge')}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={resetChat}
              aria-label={tChat('clearButton')}
              title={tChat('clearButton')}
              className="inline-flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900/80 px-2 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-zinc-700 hover:text-zinc-100"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">{tChat('clearButton')}</span>
            </button>

            {onCollapse && (
              <button
                type="button"
                onClick={onCollapse}
                aria-label={tPortal('collapseChat')}
                title={tPortal('collapseChat')}
                className="inline-flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900/80 px-2 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-zinc-700 hover:text-zinc-100"
              >
                <Minimize2 className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
          <LanguageSwitcher compact />
          <span className="truncate text-[11px] font-medium text-zinc-400">
            {demo.headlineValue}
          </span>
        </div>
      </header>

      <div className="border-b border-zinc-800/80 bg-zinc-900/60 px-4 py-2 text-[11px]">
        <div className="flex items-center justify-between gap-2 text-zinc-200">
          <span className="inline-flex items-center gap-1.5 font-semibold truncate">
            <Tag className="h-3 w-3 shrink-0 text-emerald-400" aria-hidden="true" />
            <span className="truncate">{miniOffer.shortSummary}</span>
          </span>
        </div>
        <p className="mt-0.5 truncate text-zinc-400">
          <span className="font-semibold text-emerald-300">{miniOffer.miniOfferPrice}:</span>{' '}
          {miniOffer.miniOfferTitle}
        </p>
      </div>

      <div ref={messagesListRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div
                aria-hidden="true"
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${
                  isUser
                    ? 'border-zinc-700 bg-zinc-800 text-zinc-200'
                    : 'border-emerald-500/30 bg-emerald-500/15 text-emerald-300'
                }`}
              >
                {isUser ? <User className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5" />}
              </div>
              <div
                className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  isUser
                    ? 'bg-emerald-500/20 text-emerald-50 border border-emerald-500/30'
                    : 'bg-zinc-900/90 text-zinc-200 border border-zinc-800/80'
                }`}
              >
                {msg.content}
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center gap-2 text-xs text-emerald-300/90 pl-9">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span>{tChat('thinkingLabel')}</span>
          </div>
        )}

        {(errorText || voiceError) && (
          <p
            role="alert"
            className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs text-rose-200"
          >
            {voiceError ?? errorText}
          </p>
        )}
      </div>

      <div className="border-t border-zinc-800/80 bg-zinc-950/60 px-4 pt-3 pb-3.5">
        <p className="mb-2 text-[11px] font-medium text-zinc-400">
          {tChat('quickQuestionsLabel')}
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {demoCopy.quickQuestions.map((question) => (
            <button
              key={question}
              type="button"
              disabled={isLoading || isTranscribing}
              onClick={() => {
                void sendMessage(question);
              }}
              aria-label={question}
              className="rounded-lg border border-zinc-800 bg-zinc-900/90 px-2.5 py-1.5 text-left text-xs text-zinc-300 transition hover:border-emerald-500/40 hover:bg-zinc-800 hover:text-emerald-200 disabled:opacity-50"
            >
              {question}
            </button>
          ))}
        </div>

        {(isRecording || isTranscribing) && (
          <div
            role="status"
            className={`mb-2 flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-xs ${
              isRecording
                ? 'border-rose-500/40 bg-rose-500/10 text-rose-200'
                : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200'
            }`}
          >
            {isRecording ? (
              <span className="h-2 w-2 animate-ping rounded-full bg-rose-400" />
            ) : (
              <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
            )}
            <span>{isRecording ? tChat('voiceListening') : tChat('voiceTranscribing')}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              void toggleRecording();
            }}
            disabled={isLoading || isTranscribing}
            aria-label={isRecording ? tChat('voiceStop') : tChat('voiceStart')}
            title={isRecording ? tChat('voiceStop') : tChat('voiceStart')}
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-xl border px-3 py-2.5 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-45 ${
              isRecording
                ? 'animate-pulse border-rose-500 bg-rose-500 text-white shadow-lg'
                : 'border-zinc-700 bg-zinc-900 text-zinc-200 hover:border-emerald-500/50 hover:text-emerald-200'
            }`}
          >
            {isRecording ? (
              <Square className="h-4 w-4 fill-current" aria-hidden="true" />
            ) : (
              <Mic className="h-4 w-4 text-emerald-400" aria-hidden="true" />
            )}
            <span className="hidden sm:inline">
              {isRecording ? tChat('voiceStop') : tChat('voiceStart')}
            </span>
          </button>

          <input
            type="text"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder={tChat('inputPlaceholder')}
            aria-label={tChat('inputPlaceholder')}
            maxLength={2000}
            className="min-w-0 flex-1 rounded-xl border border-zinc-800 bg-zinc-900/90 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30"
          />

          <button
            type="submit"
            disabled={isLoading || isTranscribing || !draft.trim()}
            aria-label={tChat('sendButton')}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-emerald-500 px-3.5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-45"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">{tChat('sendButton')}</span>
          </button>
        </form>

        <div className="mt-2 flex items-center gap-1.5 text-[11px] text-zinc-500">
          <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-emerald-400/80" aria-hidden="true" />
          <span>{tChat('disclaimer')}</span>
        </div>
      </div>
    </section>
  );
};

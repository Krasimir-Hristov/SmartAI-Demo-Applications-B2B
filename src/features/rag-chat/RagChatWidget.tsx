'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Bot, Minimize2, RotateCcw, Send, ShieldCheck, Sparkles, User } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useDemoCopy, type DemoVerticalConfig } from '@/features/catalog';
import { useRagChat } from './useRagChat';

interface RagChatWidgetProps {
  demo: DemoVerticalConfig;
  onCollapse?: () => void;
}

export const RagChatWidget: React.FC<RagChatWidgetProps> = ({ demo, onCollapse }) => {
  const tChat = useTranslations('chat');
  const tPortal = useTranslations('portal');
  const demoCopy = useDemoCopy(demo.slug);
  const { messages, isLoading, engineMode, errorText, sendMessage, resetChat } = useRagChat(demo);
  const [draft, setDraft] = useState('');
  const scrollEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages.length, isLoading]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const current = draft;
    if (!current.trim() || isLoading) {
      return;
    }
    setDraft('');
    await sendMessage(current);
  };

  return (
    <section
      aria-label={demoCopy.aiPersonaName}
      className="flex h-[680px] max-h-[calc(100vh-8.5rem)] flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#121216]/95 shadow-2xl"
    >
      <header className="flex items-center justify-between gap-3 border-b border-zinc-800/80 bg-zinc-950/70 px-4 py-3.5">
        <div className="flex items-center gap-3 min-w-0">
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

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={resetChat}
            aria-label={tChat('clearButton')}
            title={tChat('clearButton')}
            className="inline-flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-zinc-700 hover:text-zinc-100"
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
              className="inline-flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-zinc-700 hover:text-zinc-100"
            >
              <Minimize2 className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden xl:inline">{tPortal('collapseChat')}</span>
            </button>
          )}
        </div>
      </header>

      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
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

        {errorText && (
          <p
            role="alert"
            className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs text-rose-200"
          >
            {errorText}
          </p>
        )}

        <div ref={scrollEndRef} />
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
              disabled={isLoading}
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

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder={tChat('inputPlaceholder')}
            aria-label={tChat('inputPlaceholder')}
            maxLength={2000}
            className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900/90 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30"
          />
          <button
            type="submit"
            disabled={isLoading || !draft.trim()}
            aria-label={tChat('sendButton')}
            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-45"
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

'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Bot,
  ChevronDown,
  ChevronUp,
  Loader2,
  Mic,
  Minimize2,
  RotateCcw,
  Send,
  ShieldCheck,
  Sparkles,
  Square,
  User,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useDemoCopy, type DemoVerticalConfig } from '@/features/catalog';
import { LanguageSwitcher, type SupportedLocale } from '@/features/i18n';
import { CHAT_HEADER_THEMES } from './chatThemes';
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
  const chatTheme = CHAT_HEADER_THEMES[demo.slug];
  const { messages, isLoading, engineMode, errorText, sendMessage, resetChat } = useRagChat(demo);
  const [draft, setDraft] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
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
    setShowSuggestions(false);
    await sendMessage(current);
  };

  const handleQuickQuestion = async (question: string) => {
    setShowSuggestions(false);
    await sendMessage(question);
  };

  return (
    <section
      aria-label={demoCopy.aiPersonaName}
      className="flex h-[680px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
    >
      <header
        className={`shrink-0 space-y-2 bg-linear-to-r ${chatTheme.headerClass} px-4 py-3 text-white`}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/15 text-emerald-300">
              <Bot className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h2 className="truncate text-sm font-bold text-white">{demoCopy.aiPersonaName}</h2>
              <div className="flex items-center gap-1.5 text-[11px] text-zinc-200">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                <span className="truncate">
                  {engineMode === 'live' ? tChat('liveBadge') : tChat('fallbackBadge')}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => {
                resetChat();
                setShowSuggestions(true);
              }}
              aria-label={tChat('clearButton')}
              title={tChat('clearButton')}
              className="inline-flex items-center gap-1 rounded-lg border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white transition hover:bg-white/20"
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
                className="inline-flex items-center gap-1 rounded-lg border border-white/20 bg-white/10 px-2 py-1 text-xs font-semibold text-white transition hover:bg-white/20"
              >
                <Minimize2 className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
          <LanguageSwitcher compact />
          <span className="truncate rounded-full border border-white/20 bg-white/15 px-2.5 py-0.5 text-[11px] font-bold text-white">
            {demo.headlineValue}
          </span>
        </div>
      </header>

      <div
        ref={messagesListRef}
        className="min-h-[340px] flex-1 space-y-4 overflow-y-auto bg-[#F8FAFC] px-4 py-4"
      >
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div
                aria-hidden="true"
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border ${
                  isUser
                    ? 'border-slate-800 bg-slate-900 text-white'
                    : 'border-slate-200 bg-white text-slate-900 shadow-xs'
                }`}
              >
                {isUser ? <User className="h-4 w-4" /> : <Sparkles className="h-4 w-4 text-emerald-600" />}
              </div>
              <div
                className={`max-w-[86%] whitespace-pre-line rounded-2xl border px-4 py-3 text-sm leading-relaxed shadow-xs ${
                  isUser
                    ? `${chatTheme.userBubbleClass} font-medium`
                    : 'border-slate-200 bg-white font-medium text-slate-900'
                }`}
              >
                {msg.content}
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50/80 px-3.5 py-2 text-xs font-bold text-emerald-900 w-fit ml-10">
            <Loader2 className="h-3.5 w-3.5 animate-spin text-emerald-600" aria-hidden="true" />
            <span>{tChat('thinkingLabel')}</span>
          </div>
        )}

        {(errorText || voiceError) && (
          <p
            role="alert"
            className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-800"
          >
            {voiceError ?? errorText}
          </p>
        )}
      </div>

      <div className="shrink-0 border-t border-slate-200 bg-white px-4 pt-2.5 pb-3">
        <div className="mb-2 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setShowSuggestions((prev) => !prev)}
            aria-label={tChat('quickQuestionsLabel')}
            className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-500 hover:text-slate-800"
          >
            <span>{tChat('quickQuestionsLabel')}</span>
            {showSuggestions ? (
              <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
            )}
          </button>
        </div>

        {showSuggestions && (
          <div className="mb-2.5 flex flex-wrap gap-1.5">
            {demoCopy.quickQuestions.map((question) => (
              <button
                key={question}
                type="button"
                disabled={isLoading || isTranscribing}
                onClick={() => {
                  void handleQuickQuestion(question);
                }}
                aria-label={question}
                title={question}
                className="max-w-full truncate rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-left text-[11px] font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 hover:text-slate-950 disabled:opacity-50"
              >
                {question}
              </button>
            ))}
          </div>
        )}

        {(isRecording || isTranscribing) && (
          <div
            role="status"
            className={`mb-2 flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-xs font-semibold ${
              isRecording
                ? 'border-rose-300 bg-rose-50 text-rose-800'
                : 'border-emerald-300 bg-emerald-50 text-emerald-800'
            }`}
          >
            {isRecording ? (
              <span className="h-2 w-2 animate-ping rounded-full bg-rose-500" />
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
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-xl border px-3 py-2.5 text-xs font-bold transition disabled:cursor-not-allowed disabled:opacity-45 ${
              isRecording
                ? 'animate-pulse border-rose-600 bg-rose-600 text-white shadow-md'
                : 'border-slate-200 bg-slate-50 text-slate-800 hover:border-slate-300 hover:bg-slate-100'
            }`}
          >
            {isRecording ? (
              <Square className="h-4 w-4 fill-current" aria-hidden="true" />
            ) : (
              <Mic className={`h-4 w-4 ${chatTheme.badgeTextClass}`} aria-hidden="true" />
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
            className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900"
          />

          <button
            type="submit"
            disabled={isLoading || isTranscribing || !draft.trim()}
            aria-label={tChat('sendButton')}
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-bold shadow-sm transition disabled:cursor-not-allowed disabled:opacity-45 ${chatTheme.sendBtnClass}`}
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">{tChat('sendButton')}</span>
          </button>
        </form>

        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-slate-500">
          <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-emerald-600" aria-hidden="true" />
          <span className="truncate">{tChat('disclaimer')}</span>
        </div>
      </div>
    </section>
  );
};

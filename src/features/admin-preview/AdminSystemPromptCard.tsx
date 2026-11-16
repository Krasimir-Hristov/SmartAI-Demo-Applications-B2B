'use client';

import React, { useState } from 'react';
import { Bot, Check, Code2, Copy, Cpu, Mic } from 'lucide-react';
import { useLocale } from 'next-intl';
import type { DemoVerticalConfig, DemoVerticalCopy, DemoVerticalSlug } from '@/features/catalog';
import type { SupportedLocale } from '@/features/i18n';
import {
  buildChatbotSystemPrompt,
  CHATBOT_REGISTRY,
  REGISTERED_CHATBOTS_LIST,
} from '@/features/system-prompts';

interface AdminSystemPromptCardProps {
  demo: DemoVerticalConfig;
  demoCopy: DemoVerticalCopy;
  onSelectSlug: (slug: DemoVerticalSlug) => void;
}

interface PromptInspectorCopy {
  cardTitle: string;
  cardSubtitle: string;
  registryLabel: string;
  copyPromptBtn: string;
  copiedPromptBtn: string;
  fileSourceHint: string;
}

const INSPECTOR_COPY: Record<SupportedLocale, PromptInspectorCopy> = {
  bg: {
    cardTitle: '4. Регистър на 8-те AI Чатбота & Изолиран System Prompt (RAG Контекст)',
    cardSubtitle:
      'Всяка от 8-те оферти има собствен регистриран AI Чатбот (BOT-01 до BOT-08) с изолирано XML досие (<verified_client_dossier>), така че ботът знае само конкретната оферта на клиента.',
    registryLabel: 'Бърз преглед на 8-те регистрирани чатбота:',
    copyPromptBtn: 'Копирай System Prompt',
    copiedPromptBtn: 'Копирано!',
    fileSourceHint: 'Файл в кода: src/features/system-prompts/chatbotRegistry.ts & SYSTEM_PROMPTS.md',
  },
  de: {
    cardTitle: '4. Register der 8 KI-Chatbots & Isolierter System-Prompt (RAG-Kontext)',
    cardSubtitle:
      'Jedes der 8 Angebote verfügt über einen eigenen registrierten KI-Chatbot (BOT-01 bis BOT-08) mit isolierter XML-Mandantenakte (<verified_client_dossier>).',
    registryLabel: 'Schnellwahl der 8 registrierten Chatbots:',
    copyPromptBtn: 'System-Prompt kopieren',
    copiedPromptBtn: 'Kopiert!',
    fileSourceHint: 'Quelldatei: src/features/system-prompts/chatbotRegistry.ts & SYSTEM_PROMPTS.md',
  },
  en: {
    cardTitle: '4. Registry of the 8 AI Chatbots & Isolated System Prompt (RAG Context)',
    cardSubtitle:
      'Each of the 8 offers has its own dedicated registered AI Chatbot (BOT-01 to BOT-08) with an isolated XML client dossier (<verified_client_dossier>).',
    registryLabel: 'Quick-switch between the 8 registered chatbots:',
    copyPromptBtn: 'Copy System Prompt',
    copiedPromptBtn: 'Copied!',
    fileSourceHint: 'Source file: src/features/system-prompts/chatbotRegistry.ts & SYSTEM_PROMPTS.md',
  },
  tr: {
    cardTitle: '4. 8 Yapay Zeka Chatbot Kaydı ve İzole System Prompt (RAG Bağlamı)',
    cardSubtitle:
      '8 teklifin her biri, izole edilmiş XML müşteri dosyasına (<verified_client_dossier>) sahip ayrı bir kayıtlı AI Chatbot (BOT-01 – BOT-08) kullanır.',
    registryLabel: '8 kayıtlı chatbot arasında geçiş yapın:',
    copyPromptBtn: 'System Prompt Kopyala',
    copiedPromptBtn: 'Kopyalandı!',
    fileSourceHint: 'Kaynak dosya: src/features/system-prompts/chatbotRegistry.ts & SYSTEM_PROMPTS.md',
  },
};

export const AdminSystemPromptCard: React.FC<AdminSystemPromptCardProps> = ({
  demo,
  demoCopy,
  onSelectSlug,
}) => {
  const locale = useLocale() as SupportedLocale;
  const copy = INSPECTOR_COPY[locale];
  const [copied, setCopied] = useState(false);

  const botSpec = CHATBOT_REGISTRY[demo.slug];
  const fullSystemPrompt = buildChatbotSystemPrompt(demo, demoCopy, locale);

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(fullSystemPrompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="mt-6 rounded-3xl border border-emerald-500/30 bg-[#121216]/95 p-6 shadow-2xl space-y-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/35 bg-emerald-500/15 px-3 py-1 text-xs font-mono font-bold text-emerald-300">
              <Bot className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{botSpec.botId}</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-[11px] font-mono text-zinc-300">
              <Cpu className="h-3 w-3 text-sky-400" aria-hidden="true" />
              <span>{botSpec.llmModel}</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-[11px] font-mono text-zinc-300">
              <Mic className="h-3 w-3 text-amber-400" aria-hidden="true" />
              <span>{botSpec.voiceModel}</span>
            </span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-zinc-50 font-display">
            {copy.cardTitle}
          </h2>
          <p className="mt-1 max-w-3xl text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {copy.cardSubtitle}
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            void handleCopyPrompt();
          }}
          aria-label={copy.copyPromptBtn}
          className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-4 py-2.5 text-xs font-bold text-emerald-200 transition hover:bg-emerald-500/25"
        >
          {copied ? (
            <Check className="h-4 w-4 text-emerald-300" aria-hidden="true" />
          ) : (
            <Copy className="h-4 w-4" aria-hidden="true" />
          )}
          <span>{copied ? copy.copiedPromptBtn : copy.copyPromptBtn}</span>
        </button>
      </div>

      <div>
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
          {copy.registryLabel}
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
          {REGISTERED_CHATBOTS_LIST.map((item) => {
            const isActive = item.slug === demo.slug;
            return (
              <button
                key={item.botId}
                type="button"
                onClick={() => onSelectSlug(item.slug)}
                aria-label={`${item.botId} (${item.companyName})`}
                aria-pressed={isActive}
                className={`rounded-xl border px-2.5 py-2 text-left transition ${
                  isActive
                    ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-200'
                    : 'border-zinc-800 bg-zinc-950/80 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                <span className="block font-mono text-[10px] font-bold">#{item.numberLabel}</span>
                <span className="block truncate text-[11px] font-semibold">
                  {item.botId.replace(/^BOT-\d+-/, '')}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 bg-zinc-900/70 px-4 py-2.5 text-xs">
          <span className="inline-flex items-center gap-1.5 font-mono text-emerald-300">
            <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
            <span>
              {botSpec.botId} • {demoCopy.aiPersonaName} • {botSpec.routePath}
            </span>
          </span>
          <span className="font-mono text-[11px] text-zinc-400">{copy.fileSourceHint}</span>
        </div>

        <pre className="max-h-96 overflow-y-auto p-4 font-mono text-xs leading-relaxed text-zinc-200 whitespace-pre-wrap">
          {fullSystemPrompt}
        </pre>
      </div>
    </article>
  );
};

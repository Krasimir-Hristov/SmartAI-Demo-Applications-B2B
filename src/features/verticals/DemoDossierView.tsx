'use client';

import React, { useState } from 'react';
import { Bot, CheckCircle2, FileText, MapPin, Sparkles, UserCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useDemoCopy, type DemoVerticalConfig } from '@/features/catalog';

interface DemoDossierViewProps {
  demo: DemoVerticalConfig;
  isChatCollapsed: boolean;
  onExpandChat: () => void;
}

export const DemoDossierView: React.FC<DemoDossierViewProps> = ({
  demo,
  isChatCollapsed,
  onExpandChat,
}) => {
  const tPortal = useTranslations('portal');
  const demoCopy = useDemoCopy(demo.slug);
  const [showActionToast, setShowActionToast] = useState(false);

  const handleSimulatedAction = () => {
    setShowActionToast(true);
    window.setTimeout(() => setShowActionToast(false), 4500);
  };

  return (
    <div className={isChatCollapsed ? 'lg:col-span-12 space-y-6' : 'lg:col-span-7 space-y-6'}>
      <section
        aria-label={demoCopy.title}
        className="relative overflow-hidden rounded-3xl border border-zinc-800/90 bg-[#121216]/95 p-6 shadow-xl"
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 bg-linear-to-br ${demo.accent.glowClasses}`}
        />
        <div className="relative z-10">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${demo.accent.badgeClasses}`}
            >
              <span className="font-mono">#{demo.numberLabel}</span>
              <span>•</span>
              <span>{demoCopy.industry}</span>
            </span>

            <span className="rounded-full border border-zinc-800 bg-zinc-950/90 px-3 py-1 text-[11px] font-mono text-zinc-400">
              {tPortal('stepBadge')}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-50 font-display mb-2">
            {demoCopy.title}
          </h1>
          <p className="text-sm text-zinc-300/90 leading-relaxed mb-5">
            {demoCopy.subtitle}
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800/90 bg-zinc-950/80 p-3">
              <span className="block text-[11px] text-zinc-500 mb-0.5">
                {tPortal('offerRefLabel')}
              </span>
              <span className="font-mono text-xs font-semibold text-zinc-200">
                {demo.offerReference}
              </span>
            </div>

            <div className="rounded-2xl border border-zinc-800/90 bg-zinc-950/80 p-3">
              <span className="flex items-center gap-1 text-[11px] text-zinc-500 mb-0.5">
                <UserCheck className="h-3 w-3" aria-hidden="true" />
                <span>{tPortal('clientLabel')}</span>
              </span>
              <span className="block truncate text-xs font-semibold text-zinc-200">
                {demo.clientName}
              </span>
            </div>

            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3">
              <span className="flex items-center gap-1 text-[11px] text-emerald-300/80 mb-0.5">
                <MapPin className="h-3 w-3" aria-hidden="true" />
                <span>{demo.city}</span>
              </span>
              <span className="block text-sm font-bold text-emerald-200">
                {demo.headlineValue}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section aria-label={tPortal('dossierHeading')} className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-base font-bold text-zinc-100 font-display">
            {tPortal('dossierHeading')}
          </h2>
          {isChatCollapsed && (
            <button
              type="button"
              onClick={onExpandChat}
              aria-label={tPortal('expandChat')}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-3.5 py-2 text-xs font-bold text-zinc-950 transition hover:bg-emerald-400"
            >
              <Bot className="h-4 w-4" aria-hidden="true" />
              <span>{tPortal('expandChat')}</span>
            </button>
          )}
        </div>

        {demo.dossierSections.map((section) => {
          const secCopy = demoCopy.sections[section.id];
          if (!secCopy) {
            return null;
          }

          return (
            <article
              key={section.id}
              className="rounded-2xl border border-zinc-800 bg-[#121216]/90 p-5"
            >
              <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
                <span
                  className={`rounded-lg border px-2.5 py-1 text-[11px] font-mono font-semibold ${demo.accent.chipClasses}`}
                >
                  {section.badge}
                </span>
                {section.highlightMetric && (
                  <span className="text-xs font-bold text-zinc-100">
                    {section.highlightMetric}
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-zinc-50 mb-1.5">{secCopy.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-3.5">
                {secCopy.summary}
              </p>

              <ul className="space-y-2">
                {secCopy.keyPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </section>

      <section
        aria-label={tPortal('documentsHeading')}
        className="rounded-2xl border border-zinc-800 bg-[#121216]/90 p-5"
      >
        <h2 className="text-sm font-bold text-zinc-100 mb-3">
          {tPortal('documentsHeading')}
        </h2>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {demo.documents.map((doc) => (
            <div
              key={doc.id}
              className="rounded-xl border border-zinc-800/90 bg-zinc-950/75 p-3"
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <FileText className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                <span className="rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-[10px] text-zinc-400">
                  {doc.fileType} • {doc.sizeLabel}
                </span>
              </div>
              <p className="truncate text-xs font-semibold text-zinc-100">
                {demoCopy.documents[doc.id] ?? doc.fileName}
              </p>
              <p className="truncate font-mono text-[11px] text-zinc-500">
                {doc.fileName}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-label={tPortal('agenticPreviewHeading')}
        className="rounded-2xl border border-amber-500/25 bg-linear-to-r from-amber-500/10 via-[#121216] to-[#121216] p-5"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-300 mb-1">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{tPortal('agenticPreviewHeading')}</span>
            </span>
            <p className="text-sm font-medium text-zinc-200">
              {demoCopy.agenticCapabilityHint}
            </p>
          </div>
          <button
            type="button"
            onClick={handleSimulatedAction}
            aria-label={tPortal('agenticPreviewCta')}
            className="shrink-0 rounded-xl border border-amber-400/40 bg-amber-400/15 px-4 py-2 text-xs font-semibold text-amber-200 transition hover:bg-amber-400/25"
          >
            {tPortal('agenticPreviewCta')}
          </button>
        </div>

        {showActionToast && (
          <p
            role="status"
            className="mt-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2 text-xs text-emerald-200"
          >
            {tPortal('agenticPreviewToast')}
          </p>
        )}
      </section>
    </div>
  );
};

'use client';

import React, { useState } from 'react';
import { Bot, CheckCircle2, FileCheck2, MapPin, Sparkles, UserCheck, Zap } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { MINI_OFFER_SUMMARIES, useDemoCopy, type DemoVerticalConfig } from '@/features/catalog';
import type { SupportedLocale } from '@/features/i18n';
import {
  DealConversionBar,
  IndexedDocsCard,
  PORTAL_VISUAL_THEMES,
  type DealPackageChoice,
} from '@/features/verticals/shared';

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
  const locale = useLocale() as SupportedLocale;
  const tPortal = useTranslations('portal');
  const demoCopy = useDemoCopy(demo.slug);
  const miniOffer = MINI_OFFER_SUMMARIES[demo.slug][locale];
  const theme = PORTAL_VISUAL_THEMES[demo.slug];
  const [triggerChoice, setTriggerChoice] = useState<DealPackageChoice | null>(null);

  return (
    <div className={isChatCollapsed ? 'lg:col-span-12 space-y-7' : 'lg:col-span-7 space-y-7'}>
      <section
        aria-label={demoCopy.title}
        className={`overflow-hidden rounded-3xl border ${theme.accentBorderClass} bg-white shadow-xl`}
      >
        <div className={`bg-linear-to-r ${theme.chatHeaderGradientClass} px-6 py-6 sm:px-8 text-white`}>
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" aria-hidden="true" />
              <span className="font-mono">#{demo.numberLabel}</span>
              <span>•</span>
              <span>{demoCopy.industry}</span>
            </span>

            <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[11px] font-mono text-zinc-200">
              {theme.benchmarkLabel}
            </span>
          </div>

          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-emerald-300">
            {miniOffer.shortSummary}
          </p>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-display mb-2">
            {demoCopy.title}
          </h1>
          <p className="text-sm sm:text-base text-zinc-200/90 leading-relaxed">
            {demoCopy.subtitle}
          </p>
        </div>

        <div className="p-6 sm:p-7">
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                {tPortal('offerRefLabel')}
              </span>
              <span className="font-mono text-sm font-bold text-slate-900">
                {demo.offerReference}
              </span>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4">
              <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                <UserCheck className={`h-3.5 w-3.5 ${theme.accentIconClass}`} aria-hidden="true" />
                <span>{tPortal('clientLabel')}</span>
              </span>
              <span className="block truncate text-sm font-bold text-slate-900">
                {demo.clientName}
              </span>
            </div>

            <div className={`rounded-2xl border ${theme.accentBorderClass} ${theme.accentSoftBgClass} p-4`}>
              <span className={`flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider ${theme.accentTextClass} mb-0.5`}>
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{demo.city}</span>
              </span>
              <span className={`block text-base font-extrabold ${theme.accentTextClass}`}>
                {demo.headlineValue}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section aria-label={tPortal('dossierHeading')} className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 font-display">
            <FileCheck2 className={`h-5 w-5 ${theme.accentIconClass}`} aria-hidden="true" />
            <span>{tPortal('dossierHeading')}</span>
          </h2>
          {isChatCollapsed && (
            <button
              type="button"
              onClick={onExpandChat}
              aria-label={tPortal('expandChat')}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition ${theme.primaryCtaClass}`}
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
              className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <span
                  className={`rounded-full border px-3 py-1 font-mono text-xs font-bold ${theme.accentBadgeClass}`}
                >
                  {section.badge}
                </span>
                {section.highlightMetric && (
                  <span className={`rounded-lg px-2.5 py-1 text-xs font-extrabold ${theme.accentSoftBgClass} ${theme.accentTextClass}`}>
                    {section.highlightMetric}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-slate-900 font-display mb-1.5">
                {secCopy.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {secCopy.summary}
              </p>

              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {secCopy.keyPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3 text-xs sm:text-sm font-medium text-slate-800"
                  >
                    <CheckCircle2
                      className={`mt-0.5 h-4 w-4 shrink-0 ${theme.accentIconClass}`}
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
        aria-label={miniOffer.miniOfferTitle}
        className={`rounded-3xl border-2 ${theme.accentBorderClass} bg-white p-6 shadow-md`}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider ${theme.accentBadgeClass}`}
            >
              <Zap className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{miniOffer.miniOfferPrice}</span>
            </span>
            <h2 className="mt-2 text-lg font-extrabold text-slate-900 font-display">
              {miniOffer.miniOfferTitle}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">{miniOffer.miniOfferDetails}</p>
          </div>
          <button
            type="button"
            onClick={() => setTriggerChoice('mini')}
            aria-label={miniOffer.miniOfferTitle}
            className={`shrink-0 rounded-2xl px-5 py-3 text-xs font-bold transition ${theme.primaryCtaClass}`}
          >
            {miniOffer.miniOfferPrice}
          </button>
        </div>
      </section>

      <IndexedDocsCard demo={demo} />

      <DealConversionBar
        demo={demo}
        externalTriggerChoice={triggerChoice}
        onResetExternalTrigger={() => setTriggerChoice(null)}
      />
    </div>
  );
};

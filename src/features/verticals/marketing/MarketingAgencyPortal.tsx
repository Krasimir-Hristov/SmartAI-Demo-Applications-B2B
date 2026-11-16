'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Bot,
  CheckCircle2,
  Clock,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useDemoCopy, type DemoVerticalConfig } from '@/features/catalog';
import type { SupportedLocale } from '@/features/i18n';
import { DealConversionBar, IndexedDocsCard } from '@/features/verticals/shared';
import { MARKETING_PORTAL_DATA } from './marketingPortalData';

interface MarketingAgencyPortalProps {
  demo: DemoVerticalConfig;
  isChatCollapsed: boolean;
  onExpandChat: () => void;
}

export const MarketingAgencyPortal: React.FC<MarketingAgencyPortalProps> = ({
  demo,
  isChatCollapsed,
  onExpandChat,
}) => {
  const locale = useLocale() as SupportedLocale;
  const tPortal = useTranslations('portal');
  const demoCopy = useDemoCopy(demo.slug);
  const content = MARKETING_PORTAL_DATA[locale];
  const [selectedScope, setSelectedScope] = useState<'q2' | 'sprint'>('q2');

  return (
    <div className={isChatCollapsed ? 'lg:col-span-12 space-y-7' : 'lg:col-span-7 space-y-7'}>
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        aria-label={demoCopy.title}
        className="relative overflow-hidden rounded-3xl border border-indigo-900/40 bg-linear-to-br from-[#1E1B4B] via-[#2E1065] to-[#13112E] p-6 sm:p-8 text-white shadow-2xl"
      >
        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                <span>EXECUTIVE GROWTH PROPOSAL • {demo.offerReference}</span>
              </span>
              <h1 className="mt-1 text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
                {demoCopy.title}
              </h1>
            </div>

            <div className="flex rounded-xl border border-white/20 bg-white/10 p-1">
              <button
                type="button"
                onClick={() => setSelectedScope('q2')}
                aria-label="Q2 Full Retainer 14.800 Euro"
                aria-pressed={selectedScope === 'q2'}
                className={`rounded-lg px-3 py-1.5 text-xs font-extrabold transition ${
                  selectedScope === 'q2' ? 'bg-violet-500 text-white' : 'text-indigo-200'
                }`}
              >
                Q2 Full (14.800 €)
              </button>
              <button
                type="button"
                onClick={() => setSelectedScope('sprint')}
                aria-label="14-Tage Test-Sprint 3.900 Euro"
                aria-pressed={selectedScope === 'sprint'}
                className={`rounded-lg px-3 py-1.5 text-xs font-extrabold transition ${
                  selectedScope === 'sprint' ? 'bg-amber-400 text-slate-950' : 'text-indigo-200'
                }`}
              >
                14d Sprint (3.900 €)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-indigo-200">
                {content.kpiInvestmentLabel}
              </span>
              <span className="mt-1 block font-mono text-2xl font-extrabold text-white">
                {selectedScope === 'q2' ? '14.800 €' : '3.900 €'}
              </span>
              <span className="mt-0.5 block text-xs text-violet-200">
                {selectedScope === 'q2' ? content.kpiInvestmentSub : '14 Tage Proof-of-Concept'}
              </span>
            </div>

            <div className="rounded-2xl border border-emerald-400/35 bg-emerald-500/15 p-4">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-emerald-200">
                {content.kpiLeadsLabel}
              </span>
              <span className="mt-1 block font-mono text-2xl font-extrabold text-emerald-300">
                {selectedScope === 'q2' ? '85 – 110 MQLs' : '15 – 22 MQLs'}
              </span>
              <span className="mt-0.5 block text-xs text-emerald-100/85">
                {content.kpiLeadsSub}
              </span>
            </div>

            <div className="rounded-2xl border border-amber-300/35 bg-amber-400/15 p-4">
              <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{content.kpiRoiLabel}</span>
              </span>
              <span className="mt-1 block font-mono text-2xl font-extrabold text-amber-200">
                {selectedScope === 'q2' ? '4,2x ROI' : '3,1x Pilot-ROI'}
              </span>
              <span className="mt-0.5 block text-xs text-amber-100/85">{content.kpiRoiSub}</span>
            </div>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/20 bg-slate-950 shadow-xl">
            <Image
              src="/images/marketing/hero-campaign-analytics.jpg"
              alt={content.heroImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.section>

      {isChatCollapsed && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onExpandChat}
            aria-label={tPortal('expandChat')}
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-violet-500"
          >
            <Bot className="h-4 w-4" aria-hidden="true" />
            <span>{tPortal('expandChat')}</span>
          </button>
        </div>
      )}

      <motion.section
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        aria-label={content.budgetHeading}
        className="rounded-3xl border border-indigo-100 bg-white p-6 sm:p-7 shadow-lg space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <h2 className="flex items-center gap-2.5 text-lg font-extrabold text-slate-900 font-display">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
              <BarChart3 className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>{content.budgetHeading}</span>
          </h2>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
            {content.budgetTotalBadge}
          </span>
        </div>

        <div className="space-y-4">
          {content.budgetLines.map((line) => (
            <div
              key={line.id}
              className="rounded-2xl border border-slate-200/90 bg-slate-50/75 p-4 space-y-2.5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">{line.label}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{line.sublabel}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="block font-mono text-base font-extrabold text-slate-900">
                    {line.amount}
                  </span>
                  <span className="inline-block rounded-md bg-violet-100 px-2 py-0.5 font-mono text-[11px] font-bold text-violet-800">
                    {line.percent}% Share
                  </span>
                </div>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                <div
                  className={`h-full rounded-full bg-linear-to-r ${line.barClass}`}
                  style={{ width: `${line.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        aria-label={content.creativeHeading}
        className="rounded-3xl border border-indigo-100 bg-white p-6 sm:p-7 shadow-lg space-y-6"
      >
        <h2 className="flex items-center gap-2.5 text-lg font-extrabold text-slate-900 font-display">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>{content.creativeHeading}</span>
        </h2>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-md">
          <Image
            src="/images/marketing/creative-motion-preview.jpg"
            alt={content.creativeImageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover"
          />
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {content.creativeDeliverables.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 text-xs sm:text-sm font-medium text-slate-800"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-slate-100">
          <p className="mb-3.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
            <Clock className="h-4 w-4 text-violet-600" aria-hidden="true" />
            <span>{content.timelineHeading}</span>
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
            {content.timelinePhases.map((phase, idx) => (
              <div
                key={phase.dayRange}
                className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-3.5"
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="font-mono text-[11px] font-bold text-violet-700">
                    {phase.dayRange}
                  </span>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-[10px] font-bold text-white">
                    {idx + 1}
                  </span>
                </div>
                <p className="text-xs font-bold text-slate-900">{phase.title}</p>
                <p className="mt-1 text-[11px] text-slate-600 leading-snug">{phase.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <IndexedDocsCard demo={demo} />
      <DealConversionBar demo={demo} />
    </div>
  );
};

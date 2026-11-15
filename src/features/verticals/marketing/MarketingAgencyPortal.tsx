'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  BarChart3,
  Bot,
  CheckCircle2,
  Clock,
  MapPin,
  Sparkles,
  TrendingUp,
  UserCheck,
  Zap,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { MINI_OFFER_SUMMARIES, useDemoCopy, type DemoVerticalConfig } from '@/features/catalog';
import type { SupportedLocale } from '@/features/i18n';
import {
  DealConversionBar,
  IndexedDocsCard,
  type DealPackageChoice,
} from '@/features/verticals/shared';
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
  const miniOffer = MINI_OFFER_SUMMARIES[demo.slug][locale];
  const [triggerChoice, setTriggerChoice] = useState<DealPackageChoice | null>(null);

  return (
    <div className={isChatCollapsed ? 'lg:col-span-12 space-y-6' : 'lg:col-span-7 space-y-6'}>
      <section
        aria-label={demoCopy.title}
        className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-[#121216]/95 p-6 shadow-2xl"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-br from-violet-500/15 via-indigo-500/5 to-transparent"
        />

        <div className="relative z-10 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/35 bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-200">
              <span className="font-mono">#{demo.numberLabel}</span>
              <span>•</span>
              <span>{demoCopy.industry}</span>
            </span>

            <span className="rounded-full border border-zinc-800 bg-zinc-950/90 px-3 py-1 text-[11px] font-mono text-violet-300">
              {content.stepBadge}
            </span>
          </div>

          <div>
            <p className="mb-1 text-xs font-semibold text-violet-300">
              {miniOffer.shortSummary}
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-50 font-display">
              {demoCopy.title}
            </h1>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{demoCopy.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/85 p-3.5">
              <span className="block text-[11px] text-zinc-400">{content.kpiInvestmentLabel}</span>
              <span className="mt-0.5 block text-lg font-bold text-zinc-50">
                {demo.headlineValue}
              </span>
              <span className="text-[11px] text-violet-300">{content.kpiInvestmentSub}</span>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/85 p-3.5">
              <span className="block text-[11px] text-zinc-400">{content.kpiLeadsLabel}</span>
              <span className="mt-0.5 block text-lg font-bold text-emerald-300">85 – 110 MQLs</span>
              <span className="text-[11px] text-zinc-400">{content.kpiLeadsSub}</span>
            </div>

            <div className="rounded-2xl border border-violet-500/35 bg-violet-500/10 p-3.5">
              <span className="flex items-center gap-1 text-[11px] text-violet-200">
                <TrendingUp className="h-3 w-3" aria-hidden="true" />
                <span>{content.kpiRoiLabel}</span>
              </span>
              <span className="mt-0.5 block text-lg font-bold text-violet-100">4,2x ROI</span>
              <span className="text-[11px] text-violet-200/80">{content.kpiRoiSub}</span>
            </div>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-violet-500/25 bg-zinc-950">
            <Image
              src="/images/marketing/hero-campaign-analytics.jpg"
              alt={content.heroImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400">
            <span className="inline-flex items-center gap-1.5">
              <UserCheck className="h-3.5 w-3.5 text-violet-400" aria-hidden="true" />
              <span>
                {tPortal('clientLabel')}: <strong className="text-zinc-200">{demo.clientName}</strong>
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono">
              <MapPin className="h-3.5 w-3.5 text-violet-400" aria-hidden="true" />
              <span>
                {demo.city} • {demo.offerReference}
              </span>
            </span>
          </div>
        </div>
      </section>

      {isChatCollapsed && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onExpandChat}
            aria-label={tPortal('expandChat')}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-zinc-950 transition hover:bg-emerald-400"
          >
            <Bot className="h-4 w-4" aria-hidden="true" />
            <span>{tPortal('expandChat')}</span>
          </button>
        </div>
      )}

      <section
        aria-label={content.budgetHeading}
        className="rounded-3xl border border-zinc-800 bg-[#121216]/95 p-6 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="flex items-center gap-2 text-base font-bold text-zinc-50 font-display">
            <BarChart3 className="h-4 w-4 text-violet-400" aria-hidden="true" />
            <span>{content.budgetHeading}</span>
          </h2>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
            {content.budgetTotalBadge}
          </span>
        </div>

        <div className="space-y-4">
          {content.budgetLines.map((line) => (
            <div
              key={line.id}
              className="rounded-2xl border border-zinc-800/90 bg-zinc-950/75 p-4 space-y-2"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100">{line.label}</h3>
                  <p className="text-xs text-zinc-400">{line.sublabel}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="block text-sm font-bold text-zinc-50">{line.amount}</span>
                  <span className="font-mono text-[11px] text-violet-300">{line.percent}%</span>
                </div>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-900">
                <div
                  className={`h-full rounded-full bg-linear-to-r ${line.barClass}`}
                  style={{ width: `${line.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-label={content.creativeHeading}
        className="rounded-3xl border border-zinc-800 bg-[#121216]/95 p-6 space-y-5"
      >
        <h2 className="flex items-center gap-2 text-base font-bold text-zinc-50 font-display">
          <Sparkles className="h-4 w-4 text-violet-400" aria-hidden="true" />
          <span>{content.creativeHeading}</span>
        </h2>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
          <Image
            src="/images/marketing/creative-motion-preview.jpg"
            alt={content.creativeImageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover"
          />
        </div>

        <ul className="space-y-2">
          {content.creativeDeliverables.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-200">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="pt-2 border-t border-zinc-800/80">
          <p className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            <Clock className="h-3.5 w-3.5 text-violet-400" aria-hidden="true" />
            <span>{content.timelineHeading}</span>
          </p>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-4">
            {content.timelinePhases.map((phase) => (
              <div
                key={phase.dayRange}
                className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-3"
              >
                <span className="font-mono text-[11px] font-bold text-violet-300">
                  {phase.dayRange}
                </span>
                <p className="mt-0.5 text-xs font-semibold text-zinc-100">{phase.title}</p>
                <p className="mt-0.5 text-[11px] text-zinc-400">{phase.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-label={miniOffer.miniOfferTitle}
        className="rounded-3xl border border-amber-400/35 bg-linear-to-r from-amber-500/10 via-[#121216] to-[#121216] p-5"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-300">
              <Zap className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{content.miniOfferBadge}</span>
            </span>
            <h2 className="mt-0.5 text-base font-bold text-zinc-50">{miniOffer.miniOfferTitle}</h2>
            <p className="mt-1 text-xs text-zinc-300">{miniOffer.miniOfferDetails}</p>
          </div>
          <button
            type="button"
            onClick={() => setTriggerChoice('mini')}
            aria-label={content.miniOfferOrderButton}
            className="shrink-0 rounded-xl bg-amber-400 px-4 py-2.5 text-xs font-bold text-zinc-950 transition hover:bg-amber-300"
          >
            {content.miniOfferOrderButton}
          </button>
        </div>
      </section>

      <IndexedDocsCard demo={demo} accentIconClass="text-violet-400" />

      <DealConversionBar
        demo={demo}
        externalTriggerChoice={triggerChoice}
        onResetExternalTrigger={() => setTriggerChoice(null)}
      />
    </div>
  );
};

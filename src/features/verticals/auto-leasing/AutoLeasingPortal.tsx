'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  BatteryCharging,
  Bot,
  CarFront,
  CheckCircle2,
  FileSpreadsheet,
  MapPin,
  ShieldCheck,
  UserCheck,
  Wrench,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { MINI_OFFER_SUMMARIES, useDemoCopy, type DemoVerticalConfig } from '@/features/catalog';
import type { SupportedLocale } from '@/features/i18n';
import {
  DealConversionBar,
  IndexedDocsCard,
  type DealPackageChoice,
} from '@/features/verticals/shared';
import { AUTO_LEASING_PORTAL_DATA } from './autoLeasingPortalData';
import { AutoVehicleGallery } from './AutoVehicleGallery';

interface AutoLeasingPortalProps {
  demo: DemoVerticalConfig;
  isChatCollapsed: boolean;
  onExpandChat: () => void;
}

export const AutoLeasingPortal: React.FC<AutoLeasingPortalProps> = ({
  demo,
  isChatCollapsed,
  onExpandChat,
}) => {
  const locale = useLocale() as SupportedLocale;
  const tPortal = useTranslations('portal');
  const demoCopy = useDemoCopy(demo.slug);
  const content = AUTO_LEASING_PORTAL_DATA[locale];
  const miniOffer = MINI_OFFER_SUMMARIES[demo.slug][locale];

  const [triggerChoice, setTriggerChoice] = useState<DealPackageChoice | null>(null);

  return (
    <div className={isChatCollapsed ? 'lg:col-span-12 space-y-6' : 'lg:col-span-7 space-y-6'}>
      <section
        aria-label={demoCopy.title}
        className="relative overflow-hidden rounded-3xl border border-sky-500/30 bg-[#121216]/95 p-6 shadow-2xl"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-br from-sky-500/15 via-cyan-500/5 to-transparent"
        />

        <div className="relative z-10 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/35 bg-sky-500/15 px-3 py-1 text-xs font-semibold text-sky-200">
              <span className="font-mono">#{demo.numberLabel}</span>
              <span>•</span>
              <span>{demoCopy.industry}</span>
            </span>

            <span className="rounded-full border border-zinc-800 bg-zinc-950/90 px-3 py-1 text-[11px] font-mono text-sky-300">
              {content.stepBadge}
            </span>
          </div>

          <div>
            <p className="mb-1 text-xs font-semibold text-sky-300">{miniOffer.shortSummary}</p>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-50 font-display">
              {demoCopy.title}
            </h1>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{demoCopy.subtitle}</p>
          </div>

          <AutoVehicleGallery
            slides={content.gallerySlides}
            fallbackTitle={demoCopy.title}
            fallbackCity={demo.city}
          />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-sky-500/35 bg-sky-500/10 p-3.5">
              <span className="block text-[11px] text-sky-200/80">{content.kpiRateLabel}</span>
              <span className="mt-0.5 block text-lg font-bold text-sky-100">
                {demo.headlineValue}
              </span>
              <span className="text-[11px] text-sky-200/80">{content.kpiRateSub}</span>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/85 p-3.5">
              <span className="block text-[11px] text-zinc-400">{content.kpiPowerLabel}</span>
              <span className="mt-0.5 block text-base font-bold text-zinc-100">
                {content.kpiPowerValue}
              </span>
              <span className="text-[11px] text-zinc-400">{content.kpiPowerSub}</span>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/85 p-3.5">
              <span className="flex items-center gap-1 text-[11px] text-zinc-400">
                <BatteryCharging className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                <span>{content.kpiBatteryLabel}</span>
              </span>
              <span className="mt-0.5 block text-base font-bold text-emerald-300">
                {content.kpiBatteryValue}
              </span>
              <span className="text-[11px] text-zinc-400">{content.kpiBatterySub}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400">
            <span className="inline-flex items-center gap-1.5">
              <UserCheck className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
              <span>
                {tPortal('clientLabel')}: <strong className="text-zinc-200">{demo.clientName}</strong>
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono">
              <MapPin className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
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
        aria-label={content.leaseHeading}
        className="rounded-3xl border border-zinc-800 bg-[#121216]/95 p-6 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="flex items-center gap-2 text-base font-bold text-zinc-50 font-display">
            <FileSpreadsheet className="h-4 w-4 text-sky-400" aria-hidden="true" />
            <span>{content.leaseHeading}</span>
          </h2>
          <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-1 text-[11px] font-mono text-sky-300">
            {content.leaseBadge}
          </span>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-sky-500/25 bg-zinc-950/85 p-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
              <Image
                src="/images/auto/taycan-exterior-stuttgart.jpg"
                alt={content.gallerySlides[0]?.label ?? demoCopy.title}
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
            <div className="relative hidden h-16 w-24 shrink-0 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 sm:block">
              <Image
                src="/images/auto/taycan-cockpit-interior.jpg"
                alt={content.gallerySlides[1]?.label ?? demo.companyName}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-zinc-50">{demoCopy.title}</p>
              <p className="truncate text-xs text-zinc-400">
                {content.kpiPowerValue} • {demo.offerReference}
              </p>
            </div>
          </div>
          <div className="shrink-0 text-left sm:text-right">
            <span className="block text-[11px] text-zinc-400">{content.kpiRateLabel}</span>
            <span className="text-sm font-bold text-sky-300">{demo.headlineValue}</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/75 divide-y divide-zinc-800/80">
          {content.leaseRows.map((row) => (
            <div
              key={row.label}
              className={`flex items-center justify-between gap-4 px-4 py-3 text-xs sm:text-sm ${
                row.highlight ? 'bg-sky-500/10 font-bold text-sky-100' : 'text-zinc-200'
              }`}
            >
              <div>
                <p>{row.label}</p>
                <span className="text-[11px] text-zinc-400">{row.note}</span>
              </div>
              <span className="shrink-0 font-mono font-bold">{row.value}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-950/90 px-4 py-2.5 text-xs">
          <span className="text-zinc-400">{content.taxAdvantageLabel}</span>
          <span className="font-mono font-bold text-emerald-300">{content.taxAdvantageValue}</span>
        </div>
      </section>

      <section
        aria-label={content.dekraHeading}
        className="rounded-3xl border border-zinc-800 bg-[#121216]/95 p-6 space-y-4"
      >
        <h2 className="flex items-center gap-2 text-base font-bold text-zinc-50 font-display">
          <CarFront className="h-4 w-4 text-sky-400" aria-hidden="true" />
          <span>{content.dekraHeading}</span>
        </h2>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
          <Image
            src="/images/auto/taycan-dekra-battery-check.jpg"
            alt={content.gallerySlides[2]?.label ?? content.dekraHeading}
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover"
          />
        </div>

        <ul className="space-y-2.5">
          {content.dekraSpecs.map((spec) => (
            <li key={spec} className="flex items-start gap-2.5 text-sm text-zinc-200">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" aria-hidden="true" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-label={miniOffer.miniOfferTitle}
        className="rounded-3xl border border-sky-400/35 bg-linear-to-r from-sky-500/10 via-[#121216] to-[#121216] p-5"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-sky-300">
              <Wrench className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{content.miniOfferBadge}</span>
            </span>
            <h2 className="mt-0.5 text-base font-bold text-zinc-50">{miniOffer.miniOfferTitle}</h2>
            <p className="mt-1 text-xs text-zinc-300">{miniOffer.miniOfferDetails}</p>
          </div>
          <button
            type="button"
            onClick={() => setTriggerChoice('mini')}
            aria-label={content.miniOfferButton}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-sky-400 px-4 py-2.5 text-xs font-bold text-zinc-950 transition hover:bg-sky-300"
          >
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{content.miniOfferButton}</span>
          </button>
        </div>
      </section>

      <IndexedDocsCard demo={demo} accentIconClass="text-sky-400" />

      <DealConversionBar
        demo={demo}
        externalTriggerChoice={triggerChoice}
        onResetExternalTrigger={() => setTriggerChoice(null)}
      />
    </div>
  );
};

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Bot,
  CalendarClock,
  CheckCircle2,
  CreditCard,
  FileSpreadsheet,
  HeartPulse,
  MapPin,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { MINI_OFFER_SUMMARIES, useDemoCopy, type DemoVerticalConfig } from '@/features/catalog';
import type { SupportedLocale } from '@/features/i18n';
import {
  DealConversionBar,
  IndexedDocsCard,
  type DealPackageChoice,
} from '@/features/verticals/shared';
import { MEDICAL_CLINIC_PORTAL_DATA, type MedicalSlideMeta } from './medicalClinicPortalData';

interface MedicalClinicPortalProps {
  demo: DemoVerticalConfig;
  isChatCollapsed: boolean;
  onExpandChat: () => void;
}

export const MedicalClinicPortal: React.FC<MedicalClinicPortalProps> = ({
  demo,
  isChatCollapsed,
  onExpandChat,
}) => {
  const locale = useLocale() as SupportedLocale;
  const tPortal = useTranslations('portal');
  const demoCopy = useDemoCopy(demo.slug);
  const content = MEDICAL_CLINIC_PORTAL_DATA[locale];
  const miniOffer = MINI_OFFER_SUMMARIES[demo.slug][locale];

  const [activeSlideId, setActiveSlideId] = useState<MedicalSlideMeta['id']>('implantPlan');
  const [triggerChoice, setTriggerChoice] = useState<DealPackageChoice | null>(null);

  const fallbackSlide: MedicalSlideMeta = {
    id: 'implantPlan',
    imageSrc: '/images/medical/dental-3d-implant-plan.jpg',
    label: demoCopy.title,
    caption: demo.city,
  };

  const activeSlide =
    content.gallerySlides.find((slide) => slide.id === activeSlideId) ??
    content.gallerySlides[0] ??
    fallbackSlide;

  return (
    <div className={isChatCollapsed ? 'lg:col-span-12 space-y-6' : 'lg:col-span-7 space-y-6'}>
      <section
        aria-label={demoCopy.title}
        className="relative overflow-hidden rounded-3xl border border-rose-500/30 bg-[#121216]/95 p-6 shadow-2xl"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-br from-rose-500/15 via-pink-500/5 to-transparent"
        />

        <div className="relative z-10 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/35 bg-rose-500/15 px-3 py-1 text-xs font-semibold text-rose-200">
              <span className="font-mono">#{demo.numberLabel}</span>
              <span>•</span>
              <span>{demoCopy.industry}</span>
            </span>

            <span className="rounded-full border border-zinc-800 bg-zinc-950/90 px-3 py-1 text-[11px] font-mono text-rose-300">
              {content.stepBadge}
            </span>
          </div>

          <div>
            <p className="mb-1 text-xs font-semibold text-rose-300">{miniOffer.shortSummary}</p>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-50 font-display">
              {demoCopy.title}
            </h1>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{demoCopy.subtitle}</p>
          </div>

          <div className="space-y-3">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-rose-500/25 bg-zinc-950">
              <Image
                src={activeSlide.imageSrc}
                alt={activeSlide.label}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/45 to-transparent p-4">
                <p className="text-sm font-bold text-zinc-50">{activeSlide.label}</p>
                <p className="text-xs text-zinc-300">{activeSlide.caption}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {content.gallerySlides.map((slide) => {
                const isSelected = slide.id === activeSlide.id;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveSlideId(slide.id)}
                    aria-label={slide.label}
                    aria-pressed={isSelected}
                    className={`rounded-xl border px-3 py-2 text-left text-xs font-semibold transition ${
                      isSelected
                        ? 'border-rose-400/60 bg-rose-400/15 text-rose-200'
                        : 'border-zinc-800 bg-zinc-950/80 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    {slide.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-rose-500/35 bg-rose-500/10 p-3.5">
              <span className="block text-[11px] text-rose-200/80">{content.kpiCopayLabel}</span>
              <span className="mt-0.5 block text-lg font-bold text-rose-100">
                {content.kpiCopayValue}
              </span>
              <span className="text-[11px] text-rose-200/80">{content.kpiCopaySub}</span>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/85 p-3.5">
              <span className="block text-[11px] text-zinc-400">{content.kpiImplantLabel}</span>
              <span className="mt-0.5 block text-base font-bold text-zinc-100">
                {content.kpiImplantValue}
              </span>
              <span className="text-[11px] text-zinc-400">{content.kpiImplantSub}</span>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/85 p-3.5">
              <span className="block text-[11px] text-zinc-400">{content.kpiWarrantyLabel}</span>
              <span className="mt-0.5 block text-base font-bold text-emerald-300">
                {content.kpiWarrantyValue}
              </span>
              <span className="text-[11px] text-zinc-400">{content.kpiWarrantySub}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400">
            <span className="inline-flex items-center gap-1.5">
              <UserCheck className="h-3.5 w-3.5 text-rose-400" aria-hidden="true" />
              <span>
                {tPortal('clientLabel')}: <strong className="text-zinc-200">{demo.clientName}</strong>
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono">
              <MapPin className="h-3.5 w-3.5 text-rose-400" aria-hidden="true" />
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
        aria-label={content.hkpHeading}
        className="rounded-3xl border border-zinc-800 bg-[#121216]/95 p-6 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="flex items-center gap-2 text-base font-bold text-zinc-50 font-display">
            <FileSpreadsheet className="h-4 w-4 text-rose-400" aria-hidden="true" />
            <span>{content.hkpHeading}</span>
          </h2>
          <span className="rounded-full border border-rose-500/30 bg-rose-500/10 px-2.5 py-1 text-[11px] font-mono text-rose-300">
            {content.hkpBadge}
          </span>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/75 divide-y divide-zinc-800/80">
          {content.hkpRows.map((row) => (
            <div
              key={row.label}
              className={`flex items-center justify-between gap-4 px-4 py-3 text-xs sm:text-sm ${
                row.isTotal ? 'bg-rose-500/10 font-bold text-rose-100' : 'text-zinc-200'
              }`}
            >
              <div>
                <p>{row.label}</p>
                <span className="text-[11px] text-zinc-400">{row.note}</span>
              </div>
              <span className="shrink-0 font-mono font-bold">{row.amount}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-label={content.timelineHeading}
        className="rounded-3xl border border-zinc-800 bg-[#121216]/95 p-6 space-y-5"
      >
        <h2 className="flex items-center gap-2 text-base font-bold text-zinc-50 font-display">
          <CalendarClock className="h-4 w-4 text-rose-400" aria-hidden="true" />
          <span>{content.timelineHeading}</span>
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {content.phases.map((phase) => (
            <div key={phase.stage} className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-3.5">
              <span className="font-mono text-[11px] font-bold text-rose-300">{phase.stage}</span>
              <p className="mt-1 text-sm font-semibold text-zinc-100">{phase.title}</p>
              <p className="mt-1 text-xs text-zinc-400">{phase.detail}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-800/80 pt-4 space-y-3">
          <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            <HeartPulse className="h-3.5 w-3.5 text-rose-400" aria-hidden="true" />
            <span>{content.careHeading}</span>
          </h3>
          <ul className="space-y-2">
            {content.careRules.map((rule) => (
              <li key={rule} className="flex items-start gap-2.5 text-sm text-zinc-200">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" aria-hidden="true" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-label={miniOffer.miniOfferTitle}
        className="rounded-3xl border border-rose-400/35 bg-linear-to-r from-rose-500/10 via-[#121216] to-[#121216] p-5"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-rose-300">
              <CreditCard className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{content.miniOfferBadge}</span>
            </span>
            <h2 className="mt-0.5 text-base font-bold text-zinc-50">{miniOffer.miniOfferTitle}</h2>
            <p className="mt-1 text-xs text-zinc-300">{miniOffer.miniOfferDetails}</p>
          </div>
          <button
            type="button"
            onClick={() => setTriggerChoice('mini')}
            aria-label={content.miniOfferButton}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-rose-400 px-4 py-2.5 text-xs font-bold text-zinc-950 transition hover:bg-rose-300"
          >
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{content.miniOfferButton}</span>
          </button>
        </div>
      </section>

      <IndexedDocsCard demo={demo} accentIconClass="text-rose-400" />

      <DealConversionBar
        demo={demo}
        externalTriggerChoice={triggerChoice}
        onResetExternalTrigger={() => setTriggerChoice(null)}
      />
    </div>
  );
};

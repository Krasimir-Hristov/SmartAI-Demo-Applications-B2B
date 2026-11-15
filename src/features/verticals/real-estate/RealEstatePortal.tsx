'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Bot,
  Building2,
  CheckCircle2,
  KeyRound,
  Landmark,
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
import { REAL_ESTATE_PORTAL_DATA, type GallerySlideMeta } from './realEstatePortalData';

interface RealEstatePortalProps {
  demo: DemoVerticalConfig;
  isChatCollapsed: boolean;
  onExpandChat: () => void;
}

export const RealEstatePortal: React.FC<RealEstatePortalProps> = ({
  demo,
  isChatCollapsed,
  onExpandChat,
}) => {
  const locale = useLocale() as SupportedLocale;
  const tPortal = useTranslations('portal');
  const demoCopy = useDemoCopy(demo.slug);
  const content = REAL_ESTATE_PORTAL_DATA[locale];
  const miniOffer = MINI_OFFER_SUMMARIES[demo.slug][locale];

  const [activeSlideId, setActiveSlideId] = useState<GallerySlideMeta['id']>('terrace');
  const [triggerChoice, setTriggerChoice] = useState<DealPackageChoice | null>(null);

  const fallbackSlide: GallerySlideMeta = {
    id: 'terrace',
    imageSrc: '/images/real-estate/penthouse-terrace-munich.jpg',
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
        className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-[#121216]/95 p-6 shadow-2xl"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-500/15 via-yellow-500/5 to-transparent"
        />

        <div className="relative z-10 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/35 bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-200">
              <span className="font-mono">#{demo.numberLabel}</span>
              <span>•</span>
              <span>{demoCopy.industry}</span>
            </span>

            <span className="rounded-full border border-zinc-800 bg-zinc-950/90 px-3 py-1 text-[11px] font-mono text-amber-300">
              {content.stepBadge}
            </span>
          </div>

          <div>
            <p className="mb-1 text-xs font-semibold text-amber-300">{miniOffer.shortSummary}</p>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-50 font-display">
              {demoCopy.title}
            </h1>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{demoCopy.subtitle}</p>
          </div>

          <div className="space-y-3">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-amber-500/25 bg-zinc-950">
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

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
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
                        ? 'border-amber-400/60 bg-amber-400/15 text-amber-200'
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
            <div className="rounded-2xl border border-amber-500/35 bg-amber-500/10 p-3.5">
              <span className="block text-[11px] text-amber-200/80">{content.specPriceLabel}</span>
              <span className="mt-0.5 block text-lg font-bold text-amber-100">
                {demo.headlineValue}
              </span>
              <span className="text-[11px] text-amber-200/80">{content.specPriceSub}</span>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/85 p-3.5">
              <span className="block text-[11px] text-zinc-400">{content.specAreaLabel}</span>
              <span className="mt-0.5 block text-base font-bold text-zinc-100">
                {content.specAreaValue}
              </span>
              <span className="text-[11px] text-zinc-400">{content.specAreaSub}</span>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/85 p-3.5">
              <span className="block text-[11px] text-zinc-400">{content.specEnergyLabel}</span>
              <span className="mt-0.5 block text-base font-bold text-emerald-300">
                {content.specEnergyValue}
              </span>
              <span className="text-[11px] text-zinc-400">{content.specEnergySub}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400">
            <span className="inline-flex items-center gap-1.5">
              <UserCheck className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
              <span>
                {tPortal('clientLabel')}: <strong className="text-zinc-200">{demo.clientName}</strong>
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono">
              <MapPin className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
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
        aria-label={content.costsHeading}
        className="rounded-3xl border border-zinc-800 bg-[#121216]/95 p-6 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="flex items-center gap-2 text-base font-bold text-zinc-50 font-display">
            <Landmark className="h-4 w-4 text-amber-400" aria-hidden="true" />
            <span>{content.costsHeading}</span>
          </h2>
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[11px] font-medium text-amber-300">
            {content.costsBadge}
          </span>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/75 divide-y divide-zinc-800/80">
          {content.costRows.map((row) => (
            <div
              key={row.label}
              className={`flex items-center justify-between gap-4 px-4 py-3 text-xs sm:text-sm ${
                row.isTotal ? 'bg-amber-500/10 font-bold text-amber-100' : 'text-zinc-200'
              }`}
            >
              <div>
                <p>{row.label}</p>
                <span className="text-[11px] text-zinc-400">{row.rateOrNote}</span>
              </div>
              <span className="shrink-0 font-mono font-bold">{row.amount}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-950/90 px-4 py-2.5 text-xs">
          <span className="text-zinc-400">{content.hausgeldLabel}</span>
          <span className="font-mono font-bold text-emerald-300">{content.hausgeldValue}</span>
        </div>
      </section>

      <section
        aria-label={content.techHeading}
        className="rounded-3xl border border-zinc-800 bg-[#121216]/95 p-6 space-y-4"
      >
        <h2 className="flex items-center gap-2 text-base font-bold text-zinc-50 font-display">
          <Building2 className="h-4 w-4 text-amber-400" aria-hidden="true" />
          <span>{content.techHeading}</span>
        </h2>

        <ul className="space-y-2.5">
          {content.techSpecs.map((spec) => (
            <li key={spec} className="flex items-start gap-2.5 text-sm text-zinc-200">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-label={miniOffer.miniOfferTitle}
        className="rounded-3xl border border-amber-400/35 bg-linear-to-r from-amber-500/10 via-[#121216] to-[#121216] p-5"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-300">
              <KeyRound className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{content.miniOfferBadge}</span>
            </span>
            <h2 className="mt-0.5 text-base font-bold text-zinc-50">{miniOffer.miniOfferTitle}</h2>
            <p className="mt-1 text-xs text-zinc-300">{miniOffer.miniOfferDetails}</p>
          </div>
          <button
            type="button"
            onClick={() => setTriggerChoice('mini')}
            aria-label={content.miniOfferButton}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-amber-400 px-4 py-2.5 text-xs font-bold text-zinc-950 transition hover:bg-amber-300"
          >
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{content.miniOfferButton}</span>
          </button>
        </div>
      </section>

      <IndexedDocsCard demo={demo} accentIconClass="text-amber-400" />

      <DealConversionBar
        demo={demo}
        externalTriggerChoice={triggerChoice}
        onResetExternalTrigger={() => setTriggerChoice(null)}
      />
    </div>
  );
};

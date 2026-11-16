'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Bot,
  Building2,
  CheckCircle2,
  Landmark,
  Sparkles,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useDemoCopy, type DemoVerticalConfig } from '@/features/catalog';
import type { SupportedLocale } from '@/features/i18n';
import { DealConversionBar, IndexedDocsCard } from '@/features/verticals/shared';
import { REAL_ESTATE_PORTAL_DATA, type GallerySlideMeta } from './realEstatePortalData';

interface RealEstatePortalProps {
  demo: DemoVerticalConfig;
  isChatCollapsed: boolean;
  onExpandChat: () => void;
}

const EQUITY_OPTIONS = [20, 35, 100] as const;

export const RealEstatePortal: React.FC<RealEstatePortalProps> = ({
  demo,
  isChatCollapsed,
  onExpandChat,
}) => {
  const locale = useLocale() as SupportedLocale;
  const tPortal = useTranslations('portal');
  const demoCopy = useDemoCopy(demo.slug);
  const content = REAL_ESTATE_PORTAL_DATA[locale];

  const [activeSlideId, setActiveSlideId] = useState<GallerySlideMeta['id']>('terrace');
  const [equityPct, setEquityPct] = useState<(typeof EQUITY_OPTIONS)[number]>(35);

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

  const purchasePrice = 2450000;
  const equityAmount = Math.round((purchasePrice * equityPct) / 100);
  const loanAmount = purchasePrice - equityAmount;
  const monthlyRate = loanAmount === 0 ? 0 : Math.round((loanAmount * 0.0465) / 12);

  return (
    <div className={isChatCollapsed ? 'lg:col-span-12 space-y-7' : 'lg:col-span-7 space-y-7'}>
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        aria-label={demoCopy.title}
        className="overflow-hidden rounded-3xl border border-[#E2D9C8] bg-white shadow-xl"
      >
        <div className="bg-linear-to-r from-[#1C1917] via-[#29231E] to-[#1C1917] px-6 py-5 sm:px-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-amber-300">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                <span>PRIVATE EXPOSÉ • MÜNCHEN-BOGENHAUSEN • {demo.offerReference}</span>
              </span>
              <h1 className="mt-1 text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
                {demoCopy.title}
              </h1>
            </div>

            <div className="rounded-2xl border border-amber-300/40 bg-amber-400/15 px-4 py-2 text-right">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-200">
                {content.specPriceLabel}
              </span>
              <span className="font-mono text-2xl font-extrabold text-amber-100">
                {demo.headlineValue}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[#E2D9C8] bg-stone-900 shadow-md">
              <Image
                src={activeSlide.imageSrc}
                alt={activeSlide.label}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/45 to-transparent p-5">
                <p className="text-base font-bold text-white font-display">{activeSlide.label}</p>
                <p className="text-xs text-amber-100/90">{activeSlide.caption}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              {content.gallerySlides.map((slide) => {
                const isSelected = slide.id === activeSlide.id;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveSlideId(slide.id)}
                    aria-label={slide.label}
                    aria-pressed={isSelected}
                    className={`group flex items-center gap-2.5 rounded-2xl border p-2 text-left transition ${
                      isSelected
                        ? 'border-amber-600 bg-[#FBF6EC] text-stone-900 shadow-xs'
                        : 'border-stone-200 bg-stone-50/80 text-stone-700 hover:border-stone-300 hover:bg-white'
                    }`}
                  >
                    <div className="relative h-12 w-18 shrink-0 overflow-hidden rounded-xl border border-stone-200 bg-stone-200">
                      <Image
                        src={slide.imageSrc}
                        alt={slide.label}
                        fill
                        sizes="72px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="line-clamp-2 text-xs font-bold leading-snug">
                      {slide.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl border border-[#E5DEC9] bg-[#FAF7F2] p-3.5">
              <span className="block font-mono text-lg sm:text-xl font-extrabold text-stone-900">
                215 m²
              </span>
              <span className="text-[11px] font-semibold text-stone-500">4,5 Zimmer + Dachterrasse</span>
            </div>
            <div className="rounded-2xl border border-[#E5DEC9] bg-[#FAF7F2] p-3.5">
              <span className="block font-mono text-lg sm:text-xl font-extrabold text-amber-800">
                11.395 €/m²
              </span>
              <span className="text-[11px] font-semibold text-stone-500">Bogenhausen Bestlage</span>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/75 p-3.5">
              <span className="block font-mono text-lg sm:text-xl font-extrabold text-emerald-900">
                Klasse A+
              </span>
              <span className="text-[11px] font-semibold text-emerald-700">KfW-40 Wärmepumpe</span>
            </div>
          </div>
        </div>
      </motion.section>

      {isChatCollapsed && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onExpandChat}
            aria-label={tPortal('expandChat')}
            className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-4 py-2.5 text-xs font-bold text-amber-100 shadow-md transition hover:bg-stone-800"
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
        aria-label={content.costsHeading}
        className="rounded-3xl border border-[#E2D9C8] bg-white p-6 sm:p-7 shadow-lg space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-4">
          <h2 className="flex items-center gap-2.5 text-lg font-extrabold text-stone-900 font-display">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
              <Landmark className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>{content.costsHeading}</span>
          </h2>
          <span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-900">
            {content.costsBadge}
          </span>
        </div>

        <div className="rounded-2xl border border-[#E5DEC9] bg-[#FAF7F2] p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
              Eigenkapital-Quote & Private-Banking-Finanzierung (3,15 % Sollzins):
            </span>
            <div className="flex gap-1.5">
              {EQUITY_OPTIONS.map((pct) => (
                <button
                  key={pct}
                  type="button"
                  onClick={() => setEquityPct(pct)}
                  aria-label={`${pct} Prozent Eigenkapital`}
                  aria-pressed={equityPct === pct}
                  className={`rounded-lg border px-3 py-1 text-xs font-extrabold transition ${
                    equityPct === pct
                      ? 'border-stone-900 bg-stone-900 text-amber-200'
                      : 'border-stone-300 bg-white text-stone-700 hover:border-stone-500'
                  }`}
                >
                  {pct === 100 ? '100 % Cash-Kauf' : `${pct} % EK`}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-1">
            <div className="rounded-xl border border-stone-200 bg-white p-3">
              <span className="block text-[11px] text-stone-500">Eigenkapital-Einsatz ({equityPct} %)</span>
              <span className="font-mono text-base font-extrabold text-stone-900">
                {equityAmount.toLocaleString('de-DE')} €
              </span>
            </div>
            <div className="rounded-xl border border-amber-300 bg-[#FBF6EC] p-3">
              <span className="block text-[11px] text-amber-900">
                {loanAmount === 0 ? 'Finanzierungsbedarf' : 'Monatliche Annuität (Zins + Tilgung)'}
              </span>
              <span className="font-mono text-base font-extrabold text-stone-900">
                {loanAmount === 0 ? '0 € (Eigenmittel)' : `${monthlyRate.toLocaleString('de-DE')} € / Monat`}
              </span>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#E5DEC9] bg-[#FAF7F2] divide-y divide-[#E5DEC9]">
          {content.costRows.map((row) => (
            <div
              key={row.label}
              className={`flex items-center justify-between gap-4 px-5 py-3.5 text-xs sm:text-sm ${
                row.isTotal
                  ? 'bg-stone-900 font-extrabold text-amber-100'
                  : 'bg-white text-stone-800'
              }`}
            >
              <div>
                <p className="font-semibold">{row.label}</p>
                <span className={`text-[11px] ${row.isTotal ? 'text-amber-200/90' : 'text-stone-500'}`}>
                  {row.rateOrNote}
                </span>
              </div>
              <span className="shrink-0 font-mono text-sm font-bold">{row.amount}</span>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        aria-label={content.techHeading}
        className="rounded-3xl border border-[#E2D9C8] bg-white p-6 sm:p-7 shadow-lg space-y-4"
      >
        <h2 className="flex items-center gap-2.5 text-lg font-extrabold text-stone-900 font-display">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
            <Building2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>{content.techHeading}</span>
        </h2>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {content.techSpecs.map((spec) => (
            <li
              key={spec}
              className="flex items-start gap-2.5 rounded-2xl border border-[#E5DEC9] bg-[#FAF7F2] p-3.5 text-xs sm:text-sm font-medium text-stone-800"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </motion.section>

      <IndexedDocsCard demo={demo} />
      <DealConversionBar demo={demo} />
    </div>
  );
};

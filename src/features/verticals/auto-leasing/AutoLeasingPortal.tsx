'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  BatteryCharging,
  Bot,
  CarFront,
  CheckCircle2,
  Gauge,
  SlidersHorizontal,
  Zap,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useDemoCopy, type DemoVerticalConfig } from '@/features/catalog';
import type { SupportedLocale } from '@/features/i18n';
import { DealConversionBar, IndexedDocsCard } from '@/features/verticals/shared';
import { AUTO_LEASING_PORTAL_DATA } from './autoLeasingPortalData';
import { AutoVehicleGallery } from './AutoVehicleGallery';

interface AutoLeasingPortalProps {
  demo: DemoVerticalConfig;
  isChatCollapsed: boolean;
  onExpandChat: () => void;
}

const TERM_OPTIONS = [24, 36, 48] as const;
const KM_OPTIONS = [10000, 15000, 25000] as const;

export const AutoLeasingPortal: React.FC<AutoLeasingPortalProps> = ({
  demo,
  isChatCollapsed,
  onExpandChat,
}) => {
  const locale = useLocale() as SupportedLocale;
  const tPortal = useTranslations('portal');
  const demoCopy = useDemoCopy(demo.slug);
  const content = AUTO_LEASING_PORTAL_DATA[locale];

  const [selectedMonths, setSelectedMonths] = useState<(typeof TERM_OPTIONS)[number]>(36);
  const [selectedKm, setSelectedKm] = useState<(typeof KM_OPTIONS)[number]>(15000);

  const baseRate = 890;
  const termDelta = selectedMonths === 24 ? 75 : selectedMonths === 48 ? -65 : 0;
  const kmDelta = selectedKm === 10000 ? -45 : selectedKm === 25000 ? 85 : 0;
  const calculatedRate = baseRate + termDelta + kmDelta;

  return (
    <div className={isChatCollapsed ? 'lg:col-span-12 space-y-7' : 'lg:col-span-7 space-y-7'}>
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        aria-label={demoCopy.title}
        className="relative overflow-hidden rounded-3xl border border-slate-800 bg-linear-to-br from-[#070B12] via-[#0F1E38] to-[#070B12] p-6 sm:p-8 text-white shadow-2xl"
      >
        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-sky-400">
                <Gauge className="h-3.5 w-3.5" aria-hidden="true" />
                <span>PORSCHE APPROVED • VIN WP0ZZZY1ZPSA48219</span>
              </span>
              <h1 className="mt-1 text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
                {demoCopy.title}
              </h1>
            </div>

            <div className="rounded-2xl border border-sky-400/40 bg-sky-500/15 px-4 py-2 text-right">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-sky-200">
                {content.kpiRateLabel}
              </span>
              <span className="font-mono text-2xl font-extrabold text-white">
                {calculatedRate} € <span className="text-xs font-normal text-sky-200">/ Mon.</span>
              </span>
            </div>
          </div>

          <AutoVehicleGallery
            slides={content.gallerySlides}
            fallbackTitle={demoCopy.title}
            fallbackCity={demo.city}
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 text-center">
              <span className="block font-mono text-xl font-extrabold text-white">571 PS</span>
              <span className="text-[11px] text-slate-300">420 kW Overboost</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 text-center">
              <span className="block font-mono text-xl font-extrabold text-sky-300">3,7 s</span>
              <span className="text-[11px] text-slate-300">0–100 km/h Launch</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 text-center">
              <span className="block font-mono text-xl font-extrabold text-white">800 V</span>
              <span className="text-[11px] text-slate-300">270 kW Fast-Charge</span>
            </div>
            <div className="rounded-2xl border border-emerald-400/35 bg-emerald-500/15 p-3.5 text-center">
              <span className="block font-mono text-xl font-extrabold text-emerald-300">0,25 %</span>
              <span className="text-[11px] text-emerald-100">Dienstwagen-Steuer</span>
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
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-sky-500"
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
        aria-label={content.leaseHeading}
        className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-lg space-y-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <h2 className="flex items-center gap-2.5 text-lg font-extrabold text-slate-900 font-display">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-white">
              <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>{content.leaseHeading}</span>
          </h2>
          <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 font-mono text-xs font-bold text-sky-900">
            {content.leaseBadge}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 rounded-2xl border border-sky-100 bg-slate-50 p-4 sm:grid-cols-2">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
              Laufzeit (Monate)
            </span>
            <div className="grid grid-cols-3 gap-2">
              {TERM_OPTIONS.map((months) => (
                <button
                  key={months}
                  type="button"
                  onClick={() => setSelectedMonths(months)}
                  aria-label={`${months} Monate`}
                  aria-pressed={selectedMonths === months}
                  className={`rounded-xl border py-2 text-xs font-extrabold transition ${
                    selectedMonths === months
                      ? 'border-sky-600 bg-sky-600 text-white shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-sky-300'
                  }`}
                >
                  {months} Mon.
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
              Fahrleistung / Jahr
            </span>
            <div className="grid grid-cols-3 gap-2">
              {KM_OPTIONS.map((km) => (
                <button
                  key={km}
                  type="button"
                  onClick={() => setSelectedKm(km)}
                  aria-label={`${km} km`}
                  aria-pressed={selectedKm === km}
                  className={`rounded-xl border py-2 text-xs font-extrabold transition ${
                    selectedKm === km
                      ? 'border-sky-600 bg-sky-600 text-white shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-sky-300'
                  }`}
                >
                  {(km / 1000).toFixed(0)}.000 km
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-linear-to-r from-slate-900 via-sky-950 to-slate-900 p-5 text-white sm:flex-row sm:items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-300">
              <Zap className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Individuell konfigurierte B2B-Leasingrate ({selectedMonths} Mon. • {(selectedKm / 1000).toFixed(0)}k km)</span>
            </span>
            <p className="mt-1 text-xs text-slate-300">{content.taxAdvantageValue}</p>
          </div>
          <motion.div
            key={calculatedRate}
            initial={{ scale: 0.92, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-left sm:text-right shrink-0"
          >
            <span className="font-mono text-3xl font-extrabold text-sky-300">
              {calculatedRate},00 €
            </span>
            <span className="block text-[11px] text-slate-300">netto / Monat • 0 € Anzahlung möglich</span>
          </motion.div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 divide-y divide-slate-200">
          {content.leaseRows.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between gap-4 bg-white px-5 py-3 text-xs sm:text-sm text-slate-800"
            >
              <div>
                <p className="font-bold text-slate-900">{row.label}</p>
                <span className="text-[11px] text-slate-500">{row.note}</span>
              </div>
              <span className="shrink-0 font-mono text-sm font-extrabold text-slate-900">
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        aria-label={content.dekraHeading}
        className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-lg space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="flex items-center gap-2.5 text-lg font-extrabold text-slate-900 font-display">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <BatteryCharging className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>{content.dekraHeading}</span>
          </h2>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 text-xs font-extrabold text-emerald-900">
            <CarFront className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
            <span>DEKRA SoH: 98,4 %</span>
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-12 items-center">
          <div className="relative aspect-video sm:col-span-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950">
            <Image
              src="/images/auto/taycan-dekra-battery-check.jpg"
              alt={content.dekraHeading}
              fill
              sizes="(max-width: 1024px) 100vw, 30vw"
              className="object-cover"
            />
          </div>
          <ul className="sm:col-span-6 space-y-2.5">
            {content.dekraSpecs.map((spec) => (
              <li
                key={spec}
                className="flex items-start gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50 p-3 text-xs font-semibold text-slate-800"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      <IndexedDocsCard demo={demo} />
      <DealConversionBar demo={demo} />
    </div>
  );
};

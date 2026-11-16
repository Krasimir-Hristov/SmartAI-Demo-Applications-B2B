'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Bot,
  CalendarClock,
  CheckCircle2,
  CreditCard,
  FileSpreadsheet,
  HeartPulse,
  Stethoscope,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useDemoCopy, type DemoVerticalConfig } from '@/features/catalog';
import type { SupportedLocale } from '@/features/i18n';
import { DealConversionBar, IndexedDocsCard } from '@/features/verticals/shared';
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

  const [activeSlideId, setActiveSlideId] = useState<MedicalSlideMeta['id']>('implantPlan');
  const [paymentPlan, setPaymentPlan] = useState<'single' | 'installments'>('installments');

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
    <div className={isChatCollapsed ? 'lg:col-span-12 space-y-7' : 'lg:col-span-7 space-y-7'}>
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        aria-label={demoCopy.title}
        className="overflow-hidden rounded-3xl border border-teal-200/90 bg-white shadow-xl"
      >
        <div className="bg-linear-to-r from-[#0B3B3C] via-[#0F5257] to-[#0B3B3C] px-6 py-5 sm:px-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-teal-200">
                <Stethoscope className="h-3.5 w-3.5 text-teal-300" aria-hidden="true" />
                <span>ELEKTRONISCHER HEIL- & KOSTENPLAN (eHKP) • {demo.offerReference}</span>
              </span>
              <h1 className="mt-1 text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
                {demoCopy.title}
              </h1>
            </div>

            <div className="rounded-2xl border border-teal-300/40 bg-white/10 px-4 py-2 text-right">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-teal-200">
                Eigenanteil (nach 60 % Zuschuss)
              </span>
              <span className="font-mono text-2xl font-extrabold text-white">
                {paymentPlan === 'installments' ? '320 € / Mon.' : '3.840 €'}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-teal-200 bg-slate-950 shadow-md">
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
                <p className="text-xs text-teal-100">{activeSlide.caption}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {content.gallerySlides.map((slide) => {
                const isSelected = slide.id === activeSlide.id;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveSlideId(slide.id)}
                    aria-label={slide.label}
                    aria-pressed={isSelected}
                    className={`group flex items-center gap-3 rounded-2xl border p-2 text-left transition ${
                      isSelected
                        ? 'border-teal-600 bg-teal-50/90 text-slate-900 shadow-xs'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-teal-300 hover:bg-white'
                    }`}
                  >
                    <div className="relative h-12 w-20 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-900">
                      <Image
                        src={slide.imageSrc}
                        alt={slide.label}
                        fill
                        sizes="80px"
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

          <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-teal-950">
              <span>Krankenkasse & Zusatzversicherung übernehmen 60 % (-5.760 €)</span>
              <span className="font-mono text-teal-800">Gesamthonorar: 9.600 €</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-teal-200/70 flex">
              <div className="h-full bg-teal-600" style={{ width: '60%' }} title="Erstattung 60%" />
              <div className="h-full bg-amber-400" style={{ width: '40%' }} title="Eigenanteil 40%" />
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={() => setPaymentPlan('installments')}
                aria-label="0% Ratenzahlung 320 Euro pro Monat"
                aria-pressed={paymentPlan === 'installments'}
                className={`flex items-center justify-center gap-1.5 rounded-xl border py-2.5 px-3 text-xs font-extrabold transition ${
                  paymentPlan === 'installments'
                    ? 'border-teal-700 bg-teal-700 text-white shadow-sm'
                    : 'border-teal-200 bg-white text-slate-700 hover:border-teal-400'
                }`}
              >
                <CreditCard className="h-3.5 w-3.5" aria-hidden="true" />
                <span>0 % Raten: 12 × 320 €</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentPlan('single')}
                aria-label="Einmalzahlung 3.840 Euro"
                aria-pressed={paymentPlan === 'single'}
                className={`flex items-center justify-center gap-1.5 rounded-xl border py-2.5 px-3 text-xs font-extrabold transition ${
                  paymentPlan === 'single'
                    ? 'border-teal-700 bg-teal-700 text-white shadow-sm'
                    : 'border-teal-200 bg-white text-slate-700 hover:border-teal-400'
                }`}
              >
                <span>Einmalzahlung: 3.840 €</span>
              </button>
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
            className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-teal-500"
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
        aria-label={content.hkpHeading}
        className="rounded-3xl border border-teal-200/90 bg-white p-6 sm:p-7 shadow-lg space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <h2 className="flex items-center gap-2.5 text-lg font-extrabold text-slate-900 font-display">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
              <FileSpreadsheet className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>{content.hkpHeading}</span>
          </h2>
          <span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 font-mono text-xs font-bold text-teal-900">
            {content.hkpBadge}
          </span>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 divide-y divide-slate-200/80">
          {content.hkpRows.map((row) => (
            <div
              key={row.label}
              className={`flex items-center justify-between gap-4 px-5 py-3.5 text-xs sm:text-sm ${
                row.isTotal ? 'bg-teal-900 font-extrabold text-white' : 'bg-white text-slate-800'
              }`}
            >
              <div>
                <p className="font-semibold">{row.label}</p>
                <span className={`text-[11px] ${row.isTotal ? 'text-teal-100' : 'text-slate-500'}`}>
                  {row.note}
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
        aria-label={content.timelineHeading}
        className="rounded-3xl border border-teal-200/90 bg-white p-6 sm:p-7 shadow-lg space-y-6"
      >
        <h2 className="flex items-center gap-2.5 text-lg font-extrabold text-slate-900 font-display">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
            <CalendarClock className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>{content.timelineHeading}</span>
        </h2>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
          {content.phases.map((phase, idx) => (
            <div key={phase.stage} className="rounded-2xl border border-teal-200/80 bg-teal-50/50 p-4">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="font-mono text-xs font-bold text-teal-800">{phase.stage}</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-[10px] font-bold text-white">
                  {idx + 1}
                </span>
              </div>
              <p className="text-sm font-bold text-slate-900">{phase.title}</p>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">{phase.detail}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-100 pt-5 space-y-3">
          <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
            <HeartPulse className="h-4 w-4 text-teal-600" aria-hidden="true" />
            <span>{content.careHeading}</span>
          </h3>
          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {content.careRules.map((rule) => (
              <li
                key={rule}
                className="flex items-start gap-2.5 rounded-2xl border border-slate-200/80 bg-slate-50 p-3 text-xs font-medium text-slate-800"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
                <span>{rule}</span>
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

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { useLocale } from 'next-intl';
import { MINI_OFFER_SUMMARIES, type DemoVerticalConfig } from '@/features/catalog';
import type { SupportedLocale } from '@/features/i18n';
import {
  DealAcceptanceModal,
  type DealModalMode,
  type DealPackageChoice,
} from './DealAcceptanceModal';
import { DEAL_UI_COPY } from './dealConversionData';
import { SLUG_CTA_MAP } from './dealSlugCtaMap';
import { PORTAL_VISUAL_THEMES } from './portalThemes';

interface DealConversionBarProps {
  demo: DemoVerticalConfig;
  externalTriggerChoice?: DealPackageChoice | null;
  onResetExternalTrigger?: () => void;
}

export const DealConversionBar: React.FC<DealConversionBarProps> = ({
  demo,
  externalTriggerChoice = null,
  onResetExternalTrigger,
}) => {
  const locale = useLocale() as SupportedLocale;
  const ui = DEAL_UI_COPY[locale];
  const slugCta = SLUG_CTA_MAP[demo.slug][locale];
  const miniOffer = MINI_OFFER_SUMMARIES[demo.slug][locale];
  const theme = PORTAL_VISUAL_THEMES[demo.slug];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<DealModalMode>('accept');
  const [modalChoice, setModalChoice] = useState<DealPackageChoice>('main');
  const [confirmedSummary, setConfirmedSummary] = useState<string | null>(null);

  const isEffectiveModalOpen = modalOpen || externalTriggerChoice !== null;
  const effectiveChoice = externalTriggerChoice ?? modalChoice;
  const effectiveMode: DealModalMode = externalTriggerChoice ? 'accept' : modalMode;

  const openUnifiedModal = () => {
    setModalMode('accept');
    setModalChoice('main');
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    onResetExternalTrigger?.();
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        aria-label={ui.sectionHeading}
        className={`relative overflow-hidden rounded-3xl border-2 ${theme.accentBorderClass} bg-white p-6 sm:p-8 shadow-2xl`}
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 top-0 h-2 bg-linear-to-r ${theme.chatHeaderGradientClass}`}
        />

        {confirmedSummary ? (
          <div className="space-y-3 rounded-2xl border border-emerald-200 bg-emerald-50/90 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white px-3.5 py-1 text-xs font-bold text-emerald-800 shadow-xs">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                <span>{ui.confirmedBannerTitle}</span>
              </span>
              <span className="font-mono text-xs font-semibold text-emerald-800">
                CONF-{demo.offerReference}
              </span>
            </div>
            <p className="text-sm font-bold text-slate-900">{confirmedSummary}</p>
            <p className="text-xs text-slate-600">{ui.confirmedBannerSub}</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider ${theme.accentBadgeClass}`}
                >
                  <Sparkles className="h-3 w-3" aria-hidden="true" />
                  <span>{miniOffer.shortSummary}</span>
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
                  {ui.sectionHeading}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">{ui.sectionSubheading}</p>
              </div>

              <div
                className={`shrink-0 rounded-2xl border px-5 py-3 text-left sm:text-right ${theme.accentBorderClass} ${theme.accentSoftBgClass}`}
              >
                <span className="block font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  {demo.offerReference}
                </span>
                <span className={`text-lg sm:text-xl font-extrabold ${theme.accentTextClass}`}>
                  {demo.headlineValue}
                </span>
              </div>
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.015, y: -2 }}
              whileTap={{ scale: 0.985 }}
              onClick={openUnifiedModal}
              aria-label={slugCta.primaryLabel}
              className={`group relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-2xl px-7 py-5 text-left shadow-xl transition ${theme.primaryCtaClass}`}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-xs">
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="block text-base sm:text-lg font-extrabold tracking-tight">
                    {slugCta.primaryLabel}
                  </span>
                  <span className="block truncate text-xs opacity-90">
                    {slugCta.secondaryLabel} • {miniOffer.miniOfferTitle} ({miniOffer.miniOfferPrice})
                  </span>
                </div>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </div>
            </motion.button>
          </div>
        )}
      </motion.section>

      <DealAcceptanceModal
        key={`${demo.slug}-${effectiveMode}-${effectiveChoice}`}
        demo={demo}
        isOpen={isEffectiveModalOpen}
        mode={effectiveMode}
        initialChoice={effectiveChoice}
        onClose={handleCloseModal}
        onConfirmed={(summary) => setConfirmedSummary(summary)}
      />
    </>
  );
};

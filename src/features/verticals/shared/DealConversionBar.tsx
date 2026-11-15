'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CalendarCheck2, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { useLocale } from 'next-intl';
import { MINI_OFFER_SUMMARIES, useDemoCopy, type DemoVerticalConfig } from '@/features/catalog';
import type { SupportedLocale } from '@/features/i18n';
import {
  DealAcceptanceModal,
  type DealModalMode,
  type DealPackageChoice,
} from './DealAcceptanceModal';
import { DEAL_UI_COPY } from './dealConversionData';
import { SLUG_CTA_MAP } from './dealSlugCtaMap';

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
  const demoCopy = useDemoCopy(demo.slug);
  const ui = DEAL_UI_COPY[locale];
  const slugCta = SLUG_CTA_MAP[demo.slug][locale];
  const miniOffer = MINI_OFFER_SUMMARIES[demo.slug][locale];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<DealModalMode>('accept');
  const [modalChoice, setModalChoice] = useState<DealPackageChoice>('main');
  const [confirmedSummary, setConfirmedSummary] = useState<string | null>(null);

  const isEffectiveModalOpen = modalOpen || externalTriggerChoice !== null;
  const effectiveChoice = externalTriggerChoice ?? modalChoice;
  const effectiveMode: DealModalMode = externalTriggerChoice ? 'accept' : modalMode;

  const openModal = (mode: DealModalMode, choice: DealPackageChoice) => {
    setModalMode(mode);
    setModalChoice(choice);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    onResetExternalTrigger?.();
  };

  return (
    <>
      <section
        aria-label={ui.sectionHeading}
        className="relative overflow-hidden rounded-3xl border border-emerald-500/35 bg-linear-to-br from-emerald-500/15 via-[#121216] to-[#121216] p-6 shadow-2xl"
      >
        {confirmedSummary ? (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/20 px-3.5 py-1 text-xs font-bold text-emerald-200">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                <span>{ui.confirmedBannerTitle}</span>
              </span>
              <span className="font-mono text-xs text-zinc-400">CONF-{demo.offerReference}</span>
            </div>
            <p className="text-sm font-semibold text-zinc-100">{confirmedSummary}</p>
            <p className="text-xs text-zinc-400">{ui.confirmedBannerSub}</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="mb-1 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{miniOffer.shortSummary}</span>
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-zinc-50 font-display">
                  {ui.sectionHeading}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">{ui.sectionSubheading}</p>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                {demo.previewImageSrc && (
                  <div className="relative h-14 w-24 shrink-0 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
                    <Image
                      src={demo.previewImageSrc}
                      alt={demoCopy.title}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="shrink-0 rounded-2xl border border-zinc-800 bg-zinc-950/90 px-3.5 py-2 text-right">
                  <span className="block text-[10px] uppercase tracking-wider text-zinc-500">
                    {demo.offerReference}
                  </span>
                  <span className="text-sm font-bold text-emerald-300">{demo.headlineValue}</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800/90 bg-zinc-950/75 px-4 py-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold text-zinc-200">{miniOffer.miniOfferTitle}</p>
                <p className="text-[11px] text-zinc-400">{miniOffer.miniOfferDetails}</p>
              </div>
              <button
                type="button"
                onClick={() => openModal('accept', 'mini')}
                aria-label={`${miniOffer.miniOfferTitle} (${miniOffer.miniOfferPrice})`}
                className="mt-2 sm:mt-0 shrink-0 rounded-xl border border-amber-400/40 bg-amber-400/15 px-3 py-1.5 text-xs font-bold text-amber-200 transition hover:bg-amber-400/25"
              >
                {miniOffer.miniOfferPrice}
              </button>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openModal('accept', 'main')}
                aria-label={slugCta.primaryLabel}
                className={`inline-flex flex-1 items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-bold shadow-lg transition ${demo.accent.primaryButtonClasses}`}
              >
                <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{slugCta.primaryLabel}</span>
              </button>

              <button
                type="button"
                onClick={() => openModal('meeting', 'main')}
                aria-label={slugCta.secondaryLabel}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-900/95 px-5 py-3.5 text-sm font-semibold text-zinc-100 transition hover:border-emerald-500/50 hover:text-emerald-200"
              >
                <CalendarCheck2 className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                <span>{slugCta.secondaryLabel}</span>
              </button>
            </div>
          </div>
        )}
      </section>

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

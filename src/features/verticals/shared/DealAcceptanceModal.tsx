'use client';

import React, { useState } from 'react';
import { Calendar, CheckCircle2, FileCheck2, Sparkles, X } from 'lucide-react';
import { useLocale } from 'next-intl';
import { MINI_OFFER_SUMMARIES, type DemoVerticalConfig } from '@/features/catalog';
import type { SupportedLocale } from '@/features/i18n';
import { DEAL_UI_COPY } from './dealConversionData';
import { SLUG_CTA_MAP } from './dealSlugCtaMap';

export type DealModalMode = 'accept' | 'meeting';
export type DealPackageChoice = 'main' | 'mini';

interface DealAcceptanceModalProps {
  demo: DemoVerticalConfig;
  isOpen: boolean;
  mode: DealModalMode;
  initialChoice?: DealPackageChoice;
  onClose: () => void;
  onConfirmed: (selectedSummary: string) => void;
}

export const DealAcceptanceModal: React.FC<DealAcceptanceModalProps> = ({
  demo,
  isOpen,
  mode,
  initialChoice = 'main',
  onClose,
  onConfirmed,
}) => {
  const locale = useLocale() as SupportedLocale;
  const ui = DEAL_UI_COPY[locale];
  const slugCta = SLUG_CTA_MAP[demo.slug][locale];
  const miniOffer = MINI_OFFER_SUMMARIES[demo.slug][locale];

  const [selectedChoice, setSelectedChoice] = useState<DealPackageChoice>(initialChoice);
  const [selectedSlot, setSelectedSlot] = useState<string>(ui.slots[0] ?? '');
  const [agreed, setAgreed] = useState(true);
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) {
    return null;
  }

  const chosenPackageLabel =
    mode === 'meeting'
      ? `${slugCta.secondaryLabel} (${selectedSlot})`
      : selectedChoice === 'main'
        ? `${ui.mainOfferBadge}: ${demo.headlineValue}`
        : `${ui.miniOfferBadge}: ${miniOffer.miniOfferPrice}`;

  const handleConfirm = () => {
    if (!agreed) {
      return;
    }
    setIsDone(true);
    onConfirmed(chosenPackageLabel);
  };

  const handleClose = () => {
    setIsDone(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={mode === 'accept' ? ui.modalAcceptTitle : ui.modalMeetingTitle}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-800 bg-[#121216] p-6 shadow-2xl">
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 bg-linear-to-br ${demo.accent.glowClasses}`}
        />

        <div className="relative z-10">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <span
                className={`mb-2 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${demo.accent.badgeClasses}`}
              >
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                <span className="font-mono">{demo.offerReference}</span>
              </span>
              <h2 className="text-lg font-bold text-zinc-50 font-display">
                {isDone
                  ? ui.receiptTitle
                  : mode === 'accept'
                    ? ui.modalAcceptTitle
                    : ui.modalMeetingTitle}
              </h2>
              <p className="text-xs text-zinc-400">{demo.companyName} • {demo.clientName}</p>
            </div>

            <button
              type="button"
              onClick={handleClose}
              aria-label={ui.closeButton}
              className="rounded-xl border border-zinc-800 bg-zinc-900/90 p-2 text-zinc-400 transition hover:text-zinc-100"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {isDone ? (
            <div className="space-y-4">
              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-emerald-100">
                <div className="flex items-center gap-2.5 font-bold text-emerald-300 mb-1">
                  <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>{ui.receiptTitle}</span>
                </div>
                <p className="text-xs text-emerald-200/90 leading-relaxed">{ui.receiptSubtitle}</p>
              </div>

              <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-xs">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-zinc-500">{ui.receiptRefLabel}</span>
                  <span className="font-mono font-semibold text-zinc-100">
                    CONF-{demo.offerReference}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-zinc-500">{ui.receiptPackageLabel}</span>
                  <span className="font-semibold text-emerald-300 text-right">
                    {chosenPackageLabel}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-zinc-500">{ui.receiptStatusLabel}</span>
                  <span className="font-medium text-zinc-200 text-right">
                    {slugCta.crmDestination}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleClose}
                aria-label={ui.closeButton}
                className="w-full rounded-xl bg-emerald-500 py-2.5 text-sm font-bold text-zinc-950 transition hover:bg-emerald-400"
              >
                {ui.closeButton}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {mode === 'accept' ? (
                <div className="space-y-2.5">
                  <p className="text-xs font-semibold text-zinc-300">{ui.selectTierLabel}</p>

                  <button
                    type="button"
                    onClick={() => setSelectedChoice('main')}
                    aria-label={`${ui.mainOfferBadge}: ${demo.headlineValue}`}
                    aria-pressed={selectedChoice === 'main'}
                    className={`w-full rounded-2xl border p-3.5 text-left transition ${
                      selectedChoice === 'main'
                        ? 'border-emerald-500/60 bg-emerald-500/10'
                        : 'border-zinc-800 bg-zinc-950/75 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-zinc-300">
                        {ui.mainOfferBadge}
                      </span>
                      <span className="text-sm font-bold text-emerald-300">
                        {demo.headlineValue}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-zinc-400">{miniOffer.shortSummary}</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedChoice('mini')}
                    aria-label={`${ui.miniOfferBadge}: ${miniOffer.miniOfferPrice}`}
                    aria-pressed={selectedChoice === 'mini'}
                    className={`w-full rounded-2xl border p-3.5 text-left transition ${
                      selectedChoice === 'mini'
                        ? 'border-emerald-500/60 bg-emerald-500/10'
                        : 'border-zinc-800 bg-zinc-950/75 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-zinc-300">
                        {ui.miniOfferBadge}
                      </span>
                      <span className="text-sm font-bold text-amber-300">
                        {miniOffer.miniOfferPrice}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-zinc-400">{miniOffer.miniOfferDetails}</p>
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300">
                    <Calendar className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                    <span>{ui.selectSlotLabel}</span>
                  </p>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {ui.slots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        aria-label={slot}
                        aria-pressed={selectedSlot === slot}
                        className={`rounded-xl border px-3 py-2 text-xs font-medium transition ${
                          selectedSlot === slot
                            ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-200'
                            : 'border-zinc-800 bg-zinc-950/80 text-zinc-300 hover:border-zinc-700'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <label className="flex cursor-pointer items-start gap-2.5 rounded-xl border border-zinc-800/90 bg-zinc-950/70 p-3 text-xs text-zinc-300">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(event) => setAgreed(event.target.checked)}
                  aria-label={ui.consentLabel}
                  className="mt-0.5 h-4 w-4 rounded border-zinc-700 accent-emerald-500"
                />
                <span>{ui.consentLabel}</span>
              </label>

              <div className="flex flex-col gap-2 pt-1 sm:flex-row">
                <button
                  type="button"
                  disabled={!agreed}
                  onClick={handleConfirm}
                  aria-label={ui.confirmNowButton}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-bold text-zinc-950 transition hover:bg-emerald-400 disabled:opacity-45"
                >
                  <FileCheck2 className="h-4 w-4" aria-hidden="true" />
                  <span>{ui.confirmNowButton}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

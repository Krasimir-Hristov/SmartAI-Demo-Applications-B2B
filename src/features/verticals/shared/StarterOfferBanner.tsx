'use client';

import React from 'react';
import { ShieldCheck, Zap } from 'lucide-react';
import type { DemoVerticalSlug } from '@/features/catalog';
import { PORTAL_VISUAL_THEMES } from './portalThemes';

interface StarterOfferBannerProps {
  slug: DemoVerticalSlug;
  badgeText: string;
  title: string;
  details: string;
  buttonLabel: string;
  onTriggerMiniOffer: () => void;
}

export const StarterOfferBanner: React.FC<StarterOfferBannerProps> = ({
  slug,
  badgeText,
  title,
  details,
  buttonLabel,
  onTriggerMiniOffer,
}) => {
  const theme = PORTAL_VISUAL_THEMES[slug];

  return (
    <section
      aria-label={title}
      className={`rounded-3xl border-2 ${theme.accentBorderClass} bg-white p-6 shadow-md`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider ${theme.accentBadgeClass}`}
          >
            <Zap className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{badgeText}</span>
          </span>
          <h2 className="mt-2 text-lg font-extrabold text-slate-900 font-display">{title}</h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">{details}</p>
        </div>
        <button
          type="button"
          onClick={onTriggerMiniOffer}
          aria-label={buttonLabel}
          className={`inline-flex shrink-0 items-center gap-2 rounded-2xl px-5 py-3 text-xs font-bold transition ${theme.primaryCtaClass}`}
        >
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          <span>{buttonLabel}</span>
        </button>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, FileText, Globe, Lock, MapPin, QrCode, Unlock } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { MINI_OFFER_SUMMARIES, useDemoCopy, type DemoVerticalConfig } from '@/features/catalog';
import type { SupportedLocale } from '@/features/i18n';

interface DemoCardProps {
  demo: DemoVerticalConfig;
  onOpenQr: (demo: DemoVerticalConfig) => void;
}

export const DemoCard: React.FC<DemoCardProps> = ({ demo, onOpenQr }) => {
  const locale = useLocale() as SupportedLocale;
  const tCard = useTranslations('card');
  const demoCopy = useDemoCopy(demo.slug);
  const miniOffer = MINI_OFFER_SUMMARIES[demo.slug][locale];

  const renderAccessBadge = () => {
    if (demo.accessMode === 'pin_protected') {
      return (
        <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/35 bg-amber-500/15 px-2.5 py-1 text-[11px] font-semibold text-amber-300">
          <Lock className="h-3 w-3" aria-hidden="true" />
          <span>{tCard('accessPinProtected')}</span>
        </span>
      );
    }

    if (demo.accessMode === 'open_link_qr') {
      return (
        <span className="inline-flex items-center gap-1 rounded-full border border-teal-500/35 bg-teal-500/15 px-2.5 py-1 text-[11px] font-semibold text-teal-300">
          <QrCode className="h-3 w-3" aria-hidden="true" />
          <span>{tCard('accessOpenQr')}</span>
        </span>
      );
    }

    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
        <Unlock className="h-3 w-3" aria-hidden="true" />
        <span>{tCard('accessOpenLink')}</span>
      </span>
    );
  };

  return (
    <article
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800/90 bg-[#121216]/95 p-6 transition-all duration-300 ${demo.accent.borderHoverClasses} hover:-translate-y-0.5 hover:shadow-2xl`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-linear-to-br ${demo.accent.glowClasses} opacity-70 transition-opacity group-hover:opacity-100`}
      />

      <div className="relative z-10">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${demo.accent.badgeClasses}`}
          >
            <span className="font-mono">#{demo.numberLabel}</span>
            <span>•</span>
            <span>{demoCopy.industry}</span>
          </span>

          {renderAccessBadge()}
        </div>

        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400">
          <span className="font-medium text-zinc-300">{demo.companyName}</span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3 w-3 text-zinc-500" aria-hidden="true" />
            <span>{demo.city}</span>
          </span>
        </div>

        <p className="mb-1 text-[11px] font-semibold text-emerald-300">
          {miniOffer.shortSummary}
        </p>

        <h3 className="text-lg font-bold tracking-tight text-zinc-50 mb-2 font-display">
          {demoCopy.title}
        </h3>

        <p className="text-xs sm:text-sm leading-relaxed text-zinc-400 mb-4">
          {demoCopy.subtitle}
        </p>

        {demo.previewImageSrc && (
          <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-950">
            <Image
              src={demo.previewImageSrc}
              alt={demoCopy.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-end bg-linear-to-t from-black/80 via-black/30 to-transparent px-3 py-2">
              <span className="rounded-lg border border-zinc-700/80 bg-zinc-950/90 px-2.5 py-1 text-[11px] font-bold text-zinc-100 backdrop-blur-xs">
                {demo.headlineValue}
              </span>
            </div>
          </div>
        )}

        <div className="mb-4 space-y-1.5 rounded-xl border border-zinc-800/80 bg-zinc-950/75 px-3.5 py-2.5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-mono text-zinc-500">{demo.offerReference}</span>
            <span className="text-xs sm:text-sm font-bold text-zinc-100">{demo.headlineValue}</span>
          </div>
          <p className="truncate text-[11px] text-amber-300/90">
            {miniOffer.miniOfferTitle} • <span className="font-semibold">{miniOffer.miniOfferPrice}</span>
          </p>
        </div>

        <div className="mb-5">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
            {tCard('documentsLabel')}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {demo.documents.map((doc) => (
              <span
                key={doc.id}
                className="inline-flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-950/80 px-2 py-1 text-[11px] text-zinc-300"
              >
                <FileText className="h-3 w-3 text-zinc-500" aria-hidden="true" />
                <span className="truncate max-w-[140px]">
                  {demoCopy.documents[doc.id] ?? doc.fileName}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center gap-2.5 pt-2 border-t border-zinc-800/70">
        <Link
          href={`/demos/${demo.slug}`}
          aria-label={`${tCard('openPortal')}: ${demoCopy.title}`}
          className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition ${demo.accent.primaryButtonClasses}`}
        >
          <span>{tCard('openPortal')}</span>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>

        <button
          type="button"
          onClick={() => onOpenQr(demo)}
          aria-label={`${tCard('qrAndLink')}: ${demo.companyName}`}
          className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-950/90 px-3.5 py-2.5 text-xs font-semibold text-zinc-300 transition hover:border-zinc-700 hover:text-zinc-100"
        >
          <Globe className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
          <span>{tCard('qrAndLink')}</span>
        </button>
      </div>
    </article>
  );
};

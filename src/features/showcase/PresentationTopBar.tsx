'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, LayoutGrid, Network, QrCode, Settings2, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/features/i18n';

export type PresentationMode = 'client' | 'admin' | 'enterprise';

interface PresentationTopBarProps {
  mode: PresentationMode;
  onModeChange: (mode: PresentationMode) => void;
  backHref?: string;
  contextLabel?: string;
  onOpenQr?: () => void;
  isInnerPortal?: boolean;
}

export const PresentationTopBar: React.FC<PresentationTopBarProps> = ({
  mode,
  onModeChange,
  backHref,
  contextLabel,
  onOpenQr,
  isInnerPortal = false,
}) => {
  const tNav = useTranslations('nav');
  const tBrand = useTranslations('brand');

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-[#09090b]/90 backdrop-blur-xl">
      <nav
        aria-label={tNav('primaryNavAria')}
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-3 min-w-0">
          {backHref ? (
            <Link
              href={backHref}
              aria-label={tNav('backToHub')}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700/80 bg-zinc-900 px-3.5 py-2 text-xs sm:text-sm font-semibold text-zinc-100 transition hover:border-emerald-500/50 hover:bg-zinc-800 hover:text-emerald-200"
            >
              <ArrowLeft className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              <span>{tNav('backToHub')}</span>
            </Link>
          ) : (
            <Link
              href="/"
              aria-label={tBrand('name')}
              className="flex items-center gap-2.5 group"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/30 bg-linear-to-br from-emerald-500/20 to-zinc-900 text-emerald-300 shadow-sm">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-bold tracking-tight text-zinc-50 font-display">
                  {tBrand('name')}
                </span>
                <span className="text-[11px] text-zinc-400">{tBrand('subtitle')}</span>
              </span>
            </Link>
          )}

          {contextLabel && (
            <span className="hidden md:inline-flex truncate max-w-[260px] rounded-lg border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-xs font-medium text-zinc-300">
              {contextLabel}
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div
            role="group"
            aria-label="Presentation Mode Switcher"
            className="inline-flex items-center rounded-xl border border-zinc-800 bg-zinc-950/90 p-1"
          >
            <button
              type="button"
              onClick={() => onModeChange('client')}
              aria-label={isInnerPortal ? tNav('clientView') : tNav('catalogTab')}
              aria-pressed={mode === 'client'}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                mode === 'client'
                  ? 'bg-emerald-500 text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{isInnerPortal ? tNav('clientView') : tNav('catalogTab')}</span>
            </button>

            <button
              type="button"
              onClick={() => onModeChange('admin')}
              aria-label={tNav('adminView')}
              aria-pressed={mode === 'admin'}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                mode === 'admin'
                  ? 'bg-amber-400 text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              <Settings2 className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{tNav('adminView')}</span>
            </button>

            <button
              type="button"
              onClick={() => onModeChange('enterprise')}
              aria-label={tNav('enterpriseView')}
              aria-pressed={mode === 'enterprise'}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                mode === 'enterprise'
                  ? 'bg-linear-to-r from-sky-400 to-emerald-400 text-zinc-950 shadow-sm'
                  : 'text-emerald-300 hover:text-zinc-100'
              }`}
            >
              <Network className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{tNav('enterpriseView')}</span>
            </button>
          </div>

          {onOpenQr && (
            <button
              type="button"
              onClick={onOpenQr}
              aria-label={tNav('qrLinkButton')}
              className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900/90 px-3 py-2 text-xs font-semibold text-zinc-200 transition hover:border-emerald-500/40 hover:text-emerald-200"
            >
              <QrCode className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
              <span className="hidden sm:inline">{tNav('qrLinkButton')}</span>
            </button>
          )}

          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
};

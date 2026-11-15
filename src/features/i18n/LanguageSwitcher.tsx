'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useI18nSwitcher } from './I18nClientProvider';
import { LOCALE_OPTIONS, type SupportedLocale } from './types';

interface LanguageSwitcherProps {
  compact?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ compact = false }) => {
  const { locale: activeLocale, setLocale } = useI18nSwitcher();
  const t = useTranslations('nav');

  const handleSelectLocale = (nextLocale: SupportedLocale) => {
    setLocale(nextLocale);
  };

  return (
    <div
      role="group"
      aria-label={t('languageLabel')}
      className={`inline-flex items-center rounded-xl border border-zinc-800 bg-zinc-950/90 shadow-inner ${
        compact ? 'gap-0.5 p-0.5' : 'gap-1 p-1'
      }`}
    >
      {LOCALE_OPTIONS.map((option) => {
        const isActive = option.code === activeLocale;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => handleSelectLocale(option.code)}
            aria-label={`${t('languageLabel')}: ${option.nativeName}`}
            aria-pressed={isActive}
            className={`inline-flex items-center rounded-lg font-semibold transition-all duration-200 ${
              compact ? 'gap-1 px-1.5 py-1 text-[10px]' : 'gap-1.5 px-2.5 py-1.5 text-xs'
            } ${
              isActive
                ? 'bg-emerald-500/20 text-emerald-200 ring-1 ring-emerald-500/40 shadow-sm'
                : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100'
            }`}
          >
            <span
              aria-hidden="true"
              className={`fi fi-${option.flagCode} rounded-[2px] leading-none ${
                compact ? 'text-[11px]' : 'text-[13px]'
              }`}
            />
            <span>{option.shortLabel}</span>
          </button>
        );
      })}
    </div>
  );
};

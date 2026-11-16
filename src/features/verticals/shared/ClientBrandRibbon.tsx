'use client';

import React from 'react';
import { ShieldCheck, UserCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { DemoVerticalConfig } from '@/features/catalog';
import { CompanyBrandLogo } from './CompanyBrandLogo';
import { PORTAL_VISUAL_THEMES } from './portalThemes';

interface ClientBrandRibbonProps {
  demo: DemoVerticalConfig;
}

export const ClientBrandRibbon: React.FC<ClientBrandRibbonProps> = ({ demo }) => {
  const tPortal = useTranslations('portal');
  const theme = PORTAL_VISUAL_THEMES[demo.slug];

  return (
    <div className={`border-b ${theme.ribbonBorderClass} ${theme.ribbonBgClass} shadow-2xs`}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3.5 sm:px-6 lg:px-8">
        <CompanyBrandLogo slug={demo.slug} />

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700">
            <UserCheck className={`h-3.5 w-3.5 ${theme.accentIconClass}`} aria-hidden="true" />
            <span className="text-slate-500">{tPortal('clientLabel')}:</span>
            <strong className="font-bold text-slate-900">{demo.clientName}</strong>
          </div>

          <div
            className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold ${theme.verifiedBadgeClass}`}
          >
            <ShieldCheck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="font-mono">{demo.offerReference}</span>
            <span className="hidden sm:inline">• eIDAS / DSGVO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

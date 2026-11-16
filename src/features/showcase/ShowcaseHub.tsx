'use client';

import React, { useState } from 'react';
import { CalendarCheck2, CheckCircle2, FileCheck2, Link2, ShieldCheck, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { AdminDashboardPreview } from '@/features/admin-preview';
import { ALL_DEMOS, type DemoVerticalConfig } from '@/features/catalog';
import { EnterpriseArchitectureView } from '@/features/enterprise-architecture';
import { DemoCard } from './DemoCard';
import { PresentationTopBar, type PresentationMode } from './PresentationTopBar';
import { QrLinkModal } from './QrLinkModal';

export const ShowcaseHub: React.FC = () => {
  const tHero = useTranslations('hero');
  const tBrand = useTranslations('brand');
  const tAgentic = useTranslations('agenticStrip');
  const tFooter = useTranslations('footer');
  const [mode, setMode] = useState<PresentationMode>('client');
  const [qrDemo, setQrDemo] = useState<DemoVerticalConfig | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-zinc-100">
      <PresentationTopBar
        mode={mode}
        onModeChange={setMode}
        onOpenQr={() => {
          const defaultDemo = ALL_DEMOS[1] ?? ALL_DEMOS[0];
          if (defaultDemo) {
            setQrDemo(defaultDemo);
          }
        }}
      />

      <main className="flex-1">
        {mode === 'admin' ? (
          <AdminDashboardPreview onOpenQr={(demo) => setQrDemo(demo)} />
        ) : mode === 'enterprise' ? (
          <EnterpriseArchitectureView />
        ) : (
          <>
            <section
              aria-label={tHero('eyebrow')}
              className="relative overflow-hidden border-b border-zinc-800/70"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-linear-to-b from-emerald-500/10 via-transparent to-transparent"
              />
              <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-300">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{tHero('eyebrow')}</span>
                </div>

                <h1 className="max-w-4xl text-3xl sm:text-5xl font-bold tracking-tight text-zinc-50 font-display leading-[1.12] mb-5">
                  {tHero('title')}{' '}
                  <span className="bg-linear-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
                    {tHero('titleHighlight')}
                  </span>
                </h1>

                <p className="max-w-3xl text-sm sm:text-lg text-zinc-400 leading-relaxed mb-7">
                  {tHero('description')}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  <span className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#121216] px-3.5 py-2 text-xs font-medium text-zinc-200">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                    <span>{tHero('pillDach')}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#121216] px-3.5 py-2 text-xs font-medium text-zinc-200">
                    <Link2 className="h-4 w-4 text-sky-400" aria-hidden="true" />
                    <span>{tHero('pillPersonalLink')}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#121216] px-3.5 py-2 text-xs font-medium text-zinc-200">
                    <CheckCircle2 className="h-4 w-4 text-amber-400" aria-hidden="true" />
                    <span>{tHero('pillIsolatedRag')}</span>
                  </span>
                </div>
              </div>
            </section>

            <section
              aria-label={tHero('sectionHeading')}
              className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
            >
              <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-50 font-display">
                    {tHero('sectionHeading')}
                  </h2>
                  <p className="mt-1 text-sm text-zinc-400 max-w-2xl">
                    {tHero('sectionSubheading')}
                  </p>
                </div>
                <span className="inline-flex w-fit items-center rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs font-mono text-zinc-400">
                  {tBrand('editionBadge')}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {ALL_DEMOS.map((demo) => (
                  <DemoCard key={demo.slug} demo={demo} onOpenQr={(item) => setQrDemo(item)} />
                ))}
              </div>
            </section>

            <section
              aria-label={tAgentic('badge')}
              className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8"
            >
              <div className="rounded-3xl border border-zinc-800/80 bg-linear-to-r from-[#121216] via-[#13131a] to-[#121216] p-6 sm:p-8">
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold text-amber-300 mb-3">
                    {tAgentic('badge')}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-zinc-50 font-display">
                    {tAgentic('title')}
                  </h2>
                  <p className="mt-1 text-sm text-zinc-400 max-w-3xl">
                    {tAgentic('subtitle')}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <article className="rounded-2xl border border-zinc-800/90 bg-zinc-950/70 p-4">
                    <CalendarCheck2 className="h-5 w-5 text-emerald-400 mb-2.5" aria-hidden="true" />
                    <h3 className="text-sm font-semibold text-zinc-100 mb-1">
                      {tAgentic('actionCalendarTitle')}
                    </h3>
                    <p className="text-xs leading-relaxed text-zinc-400">
                      {tAgentic('actionCalendarDesc')}
                    </p>
                  </article>

                  <article className="rounded-2xl border border-zinc-800/90 bg-zinc-950/70 p-4">
                    <FileCheck2 className="h-5 w-5 text-sky-400 mb-2.5" aria-hidden="true" />
                    <h3 className="text-sm font-semibold text-zinc-100 mb-1">
                      {tAgentic('actionKycTitle')}
                    </h3>
                    <p className="text-xs leading-relaxed text-zinc-400">
                      {tAgentic('actionKycDesc')}
                    </p>
                  </article>

                  <article className="rounded-2xl border border-zinc-800/90 bg-zinc-950/70 p-4">
                    <CheckCircle2 className="h-5 w-5 text-amber-400 mb-2.5" aria-hidden="true" />
                    <h3 className="text-sm font-semibold text-zinc-100 mb-1">
                      {tAgentic('actionConfirmTitle')}
                    </h3>
                    <p className="text-xs leading-relaxed text-zinc-400">
                      {tAgentic('actionConfirmDesc')}
                    </p>
                  </article>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="border-t border-zinc-800/80 bg-zinc-950/60 py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>{tFooter('compliance')}</p>
          <p>{tFooter('zeroDbNote')}</p>
        </div>
      </footer>

      <QrLinkModal demo={qrDemo} onClose={() => setQrDemo(null)} />
    </div>
  );
};

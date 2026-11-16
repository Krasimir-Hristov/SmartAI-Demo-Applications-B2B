'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  Copy,
  KeyRound,
  Link2,
  Lock,
  QrCode,
  ShieldCheck,
  Sparkles,
  Unlock,
} from 'lucide-react';
import { useMessages, useTranslations } from 'next-intl';
import {
  ALL_DEMOS,
  useDemoCopy,
  type DemoAccessMode,
  type DemoVerticalConfig,
  type DemoVerticalSlug,
} from '@/features/catalog';
import type { AllMessages } from '@/features/i18n';
import { AdminDocumentsCard, type AdminDisplayDoc } from './AdminDocumentsCard';
import { AdminSystemPromptCard } from './AdminSystemPromptCard';

interface AdminDashboardPreviewProps {
  initialSlug?: DemoVerticalSlug;
  onOpenQr?: (demo: DemoVerticalConfig) => void;
}

export const AdminDashboardPreview: React.FC<AdminDashboardPreviewProps> = ({
  initialSlug = 'real-estate',
  onOpenQr,
}) => {
  const tAdmin = useTranslations('admin');
  const allMessages = useMessages() as AllMessages;
  const [selectedSlug, setSelectedSlug] = useState<DemoVerticalSlug>(initialSlug);
  const [simulatedDocCounts, setSimulatedDocCounts] = useState<Record<string, number>>({});
  const [simulatedAccess, setSimulatedAccess] = useState<Record<string, DemoAccessMode>>({});
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const selectedDemo = ALL_DEMOS.find((item) => item.slug === selectedSlug) ?? ALL_DEMOS[0];
  const activeCopy = useDemoCopy(selectedDemo ? selectedDemo.slug : 'real-estate');

  if (!selectedDemo) {
    return null;
  }

  const extraCount = simulatedDocCounts[selectedDemo.slug] ?? 0;
  const extraDocs: AdminDisplayDoc[] = Array.from({ length: extraCount }, (_, index) => {
    const seq = index + 1;
    return {
      id: `sim-doc-${selectedDemo.slug}-${seq}`,
      fileName: `${tAdmin('newDocPrefix')}_${seq}.pdf`,
      sizeLabel: '1.1 MB',
      indexedChunks: 12,
      displayLabel: `${tAdmin('uploadedPrefix')} #${seq}`,
    };
  });

  const activeDocs: readonly AdminDisplayDoc[] = [
    ...selectedDemo.documents.map((doc) => ({
      id: doc.id,
      fileName: doc.fileName,
      sizeLabel: doc.sizeLabel,
      indexedChunks: doc.indexedChunks,
      displayLabel: activeCopy.documents[doc.id] ?? doc.fileName,
    })),
    ...extraDocs,
  ];

  const activeAccessMode: DemoAccessMode =
    simulatedAccess[selectedDemo.slug] ?? selectedDemo.accessMode;

  const personalUrl = `https://portal.smartai-demo.de/demos/${selectedDemo.slug}?ref=${selectedDemo.offerReference}`;

  const handleAddSimulatedDoc = () => {
    setSimulatedDocCounts((prev) => ({
      ...prev,
      [selectedDemo.slug]: (prev[selectedDemo.slug] ?? 0) + 1,
    }));
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(personalUrl);
      setCopiedSlug(selectedDemo.slug);
      window.setTimeout(() => setCopiedSlug(null), 2000);
    } catch {
      setCopiedSlug(null);
    }
  };

  const statusItems = [
    tAdmin('ragStatusItems.item1'),
    tAdmin('ragStatusItems.item2'),
    tAdmin('ragStatusItems.item3'),
    tAdmin('ragStatusItems.item4'),
  ];

  return (
    <section
      aria-label={tAdmin('badge')}
      className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="mb-8 rounded-3xl border border-zinc-800/80 bg-linear-to-br from-[#121216] via-[#0e0e13] to-[#09090b] p-6 sm:p-8 shadow-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300 mb-3">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{tAdmin('badge')}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-50 mb-2">
          {tAdmin('title')}
        </h1>
        <p className="max-w-3xl text-sm sm:text-base text-zinc-400 leading-relaxed mb-5">
          {tAdmin('subtitle')}
        </p>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-3.5">
          <label
            htmlFor="admin-portal-selector"
            className="text-xs font-semibold uppercase tracking-wider text-zinc-400"
          >
            {tAdmin('selectPortalLabel')}
          </label>
          <select
            id="admin-portal-selector"
            aria-label={tAdmin('selectPortalLabel')}
            value={selectedDemo.slug}
            onChange={(event) => setSelectedSlug(event.target.value as DemoVerticalSlug)}
            className="rounded-xl border border-zinc-700/80 bg-zinc-900 px-3.5 py-2 text-sm font-medium text-zinc-100 outline-none focus:border-emerald-500/60"
          >
            {ALL_DEMOS.map((demo) => (
              <option key={demo.slug} value={demo.slug}>
                #{demo.numberLabel} — {allMessages.catalog[demo.slug].industry} ({demo.companyName})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <AdminDocumentsCard documents={activeDocs} onAddDocument={handleAddSimulatedDoc} />

        <article className="rounded-2xl border border-zinc-800 bg-[#121216]/90 p-5 flex flex-col justify-between">
          <div>
            <h2 className="text-base font-semibold text-zinc-100 mb-4">
              {tAdmin('securityCardTitle')}
            </h2>

            <div className="space-y-2.5 mb-5">
              {(
                [
                  { mode: 'open_link', label: tAdmin('modeOpen'), icon: Unlock },
                  { mode: 'open_link_qr', label: tAdmin('modeOpenQr'), icon: QrCode },
                  { mode: 'pin_protected', label: tAdmin('modePin'), icon: Lock },
                ] as const
              ).map((opt) => {
                const Icon = opt.icon;
                const isSelected = activeAccessMode === opt.mode;
                return (
                  <button
                    key={opt.mode}
                    type="button"
                    onClick={() =>
                      setSimulatedAccess((prev) => ({
                        ...prev,
                        [selectedDemo.slug]: opt.mode,
                      }))
                    }
                    aria-label={opt.label}
                    aria-pressed={isSelected}
                    className={`flex w-full items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left text-xs font-medium transition ${
                      isSelected
                        ? 'border-emerald-500/50 bg-emerald-500/15 text-emerald-200'
                        : 'border-zinc-800 bg-zinc-950/70 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>

            {activeAccessMode === 'pin_protected' && (
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs">
                <div className="flex items-center gap-1.5 font-semibold text-amber-300 mb-2">
                  <KeyRound className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{tAdmin('credentialsPreviewTitle')}</span>
                </div>
                <div className="space-y-1 font-mono text-[11px] text-zinc-200">
                  <p>User: {selectedDemo.credentials?.username ?? 'mandant.demo'}</p>
                  <p>Pass: {selectedDemo.credentials?.demoPass ?? 'demo'}</p>
                  <p>PIN: {selectedDemo.credentials?.pin ?? '4829'}</p>
                </div>
              </div>
            )}
          </div>

          <p className="mt-4 text-[11px] text-zinc-500">{tAdmin('simulationNotice')}</p>
        </article>

        <article className="rounded-2xl border border-zinc-800 bg-[#121216]/90 p-5 flex flex-col justify-between">
          <div>
            <h2 className="text-base font-semibold text-zinc-100 mb-3">
              {tAdmin('linkCardTitle')}
            </h2>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950/90 p-3 mb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-300 break-all">
                <Link2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{personalUrl}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-5">
              <button
                type="button"
                onClick={() => {
                  void handleCopyUrl();
                }}
                aria-label={tAdmin('copyUrl')}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs font-semibold text-zinc-100 transition hover:border-zinc-600"
              >
                {copiedSlug === selectedDemo.slug ? (
                  <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                ) : (
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                <span>
                  {copiedSlug === selectedDemo.slug ? tAdmin('copiedUrl') : tAdmin('copyUrl')}
                </span>
              </button>

              {onOpenQr && (
                <button
                  type="button"
                  onClick={() => onOpenQr(selectedDemo)}
                  aria-label={tAdmin('openQrModal')}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs font-semibold text-zinc-100 transition hover:border-zinc-600"
                >
                  <QrCode className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{tAdmin('openQrModal')}</span>
                </button>
              )}
            </div>

            <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-3.5 mb-5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-200 mb-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                <span>{tAdmin('ragStatusTitle')}</span>
              </div>
              <ul className="space-y-1.5">
                {statusItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[11px] text-zinc-400">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href={`/demos/${selectedDemo.slug}`}
            aria-label={`${tAdmin('openClientPortal')}: ${selectedDemo.companyName}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
          >
            <span>{tAdmin('openClientPortal')}</span>
          </Link>
        </article>
      </div>

      <AdminSystemPromptCard
        demo={selectedDemo}
        demoCopy={activeCopy}
        onSelectSlug={setSelectedSlug}
      />
    </section>
  );
};

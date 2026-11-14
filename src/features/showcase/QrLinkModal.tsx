'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';
import { ArrowRight, Check, Copy, Link2, QrCode, X } from 'lucide-react';
import { useMessages, useTranslations } from 'next-intl';
import type { DemoVerticalConfig } from '@/features/catalog';
import type { AllMessages } from '@/features/i18n';

interface QrLinkModalProps {
  demo: DemoVerticalConfig | null;
  onClose: () => void;
}

export const QrLinkModal: React.FC<QrLinkModalProps> = ({ demo, onClose }) => {
  const tQr = useTranslations('qrModal');
  const messages = useMessages() as AllMessages;
  const [copied, setCopied] = useState(false);

  if (!demo) {
    return null;
  }

  const demoTitle = messages.catalog[demo.slug].title;

  const origin =
    typeof window !== 'undefined' ? window.location.origin : 'https://portal.smartai-demo.de';
  const demoUrl = `${origin}/demos/${demo.slug}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(demoUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={tQr('title')}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-md rounded-3xl border border-zinc-800 bg-[#121216] p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label={tQr('close')}
          className="absolute right-4 top-4 rounded-xl border border-zinc-800 bg-zinc-900 p-2 text-zinc-400 transition hover:text-zinc-100"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
          <QrCode className="h-3.5 w-3.5" aria-hidden="true" />
          <span>
            #{demo.numberLabel} • {demo.companyName}
          </span>
        </div>

        <h2 className="text-xl font-bold text-zinc-50 mb-1.5">{tQr('title')}</h2>
        <p className="text-xs leading-relaxed text-zinc-400 mb-5">{tQr('subtitle')}</p>

        <div className="mb-4">
          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            {tQr('personalUrlLabel')}
          </p>
          <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 p-2.5">
            <Link2 className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
            <span className="flex-1 truncate font-mono text-xs text-zinc-200">{demoUrl}</span>
            <button
              type="button"
              onClick={() => {
                void handleCopy();
              }}
              aria-label={tQr('copyLink')}
              className="inline-flex items-center gap-1 rounded-lg bg-zinc-800 px-2.5 py-1.5 text-xs font-semibold text-zinc-100 transition hover:bg-zinc-700"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
              ) : (
                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              <span>{copied ? tQr('copied') : tQr('copyLink')}</span>
            </button>
          </div>
        </div>

        <div className="mb-5 flex flex-col items-center rounded-2xl border border-zinc-800/90 bg-zinc-950/70 p-4">
          <div className="rounded-2xl bg-white p-3.5 shadow-lg mb-3">
            <QRCodeSVG value={demoUrl} size={148} level="M" />
          </div>
          <p className="text-center text-[11px] text-zinc-400">{tQr('qrSecondaryNote')}</p>
          <p className="mt-1 text-center text-xs font-medium text-zinc-300">{demoTitle}</p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href={`/demos/${demo.slug}`}
            onClick={onClose}
            aria-label={`${tQr('openDemoNow')}: ${demo.companyName}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
          >
            <span>{tQr('openDemoNow')}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label={tQr('close')}
            className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:text-zinc-100"
          >
            {tQr('close')}
          </button>
        </div>
      </div>
    </div>
  );
};

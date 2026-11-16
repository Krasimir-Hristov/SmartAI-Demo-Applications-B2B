'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BadgeEuro,
  Bot,
  CalendarClock,
  Landmark,
  Percent,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useDemoCopy, type DemoVerticalConfig } from '@/features/catalog';
import { DealConversionBar, IndexedDocsCard } from '@/features/verticals/shared';

interface FinanceAccountingPortalProps {
  demo: DemoVerticalConfig;
  isChatCollapsed: boolean;
  onExpandChat: () => void;
}

const PREPAYMENT_OPTIONS = [0, 7500, 15000] as const;

export const FinanceAccountingPortal: React.FC<FinanceAccountingPortalProps> = ({
  demo,
  isChatCollapsed,
  onExpandChat,
}) => {
  const tPortal = useTranslations('portal');
  const demoCopy = useDemoCopy(demo.slug);
  const [extraPayment, setExtraPayment] = useState<(typeof PREPAYMENT_OPTIONS)[number]>(15000);

  const initialDebt = 310000;
  const remainingDebt = initialDebt - extraPayment;
  const interestSaved = Math.round(extraPayment * 0.142);
  const paidPercent = Math.round(((450000 - remainingDebt) / 450000) * 100);

  return (
    <div className={isChatCollapsed ? 'lg:col-span-12 space-y-7' : 'lg:col-span-7 space-y-7'}>
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        aria-label={demoCopy.title}
        className="overflow-hidden rounded-3xl border border-emerald-900/30 bg-linear-to-br from-[#042F24] via-[#064E3B] to-[#022018] p-6 sm:p-8 text-white shadow-2xl"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">
              <Landmark className="h-3.5 w-3.5" aria-hidden="true" />
              <span>DATEV MANDANTEN-TRESOR • {demo.offerReference}</span>
            </span>
            <h1 className="mt-1 text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
              {demoCopy.title}
            </h1>
          </div>

          <div className="rounded-2xl border border-emerald-300/35 bg-white/10 px-4 py-2.5 text-right backdrop-blur-xs">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-200">
              Q4 Steuer-Rückstellung
            </span>
            <span className="font-mono text-2xl font-extrabold text-white">42.860 €</span>
          </div>
        </div>

        <p className="mt-4 text-sm sm:text-base text-emerald-100/90 leading-relaxed">
          {demoCopy.subtitle}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
          <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-200">
              Umsatz (Q1–Q3)
            </span>
            <span className="mt-1 block font-mono text-xl font-extrabold text-white">
              1,94 Mio. €
            </span>
            <span className="text-[11px] text-emerald-300">+14,2 % YoY</span>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-200">
              EBITDA-Marge
            </span>
            <span className="mt-1 block font-mono text-xl font-extrabold text-emerald-300">
              21,4 %
            </span>
            <span className="text-[11px] text-emerald-100">415.160 € operativ</span>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-200">
              KfW-Restschuld
            </span>
            <span className="mt-1 block font-mono text-xl font-extrabold text-white">
              {(remainingDebt / 1000).toFixed(1)}k €
            </span>
            <span className="text-[11px] text-amber-300">2,85 % Sollzins fest</span>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-500/20 p-4">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-200">
              Policen-Schutz
            </span>
            <span className="mt-1 block font-mono text-xl font-extrabold text-white">
              5,0 Mio. €
            </span>
            <span className="text-[11px] text-emerald-200">Cyber & Betrieb aktiv</span>
          </div>
        </div>
      </motion.section>

      {isChatCollapsed && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onExpandChat}
            aria-label={tPortal('expandChat')}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-emerald-600"
          >
            <Bot className="h-4 w-4" aria-hidden="true" />
            <span>{tPortal('expandChat')}</span>
          </button>
        </div>
      )}

      <motion.section
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        aria-label="KfW-Unternehmerkredit & Sondertilgungs-Rechner"
        className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-lg space-y-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <h2 className="flex items-center gap-2.5 text-lg font-extrabold text-slate-900 font-display">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-700 text-white">
              <Percent className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>KfW-Unternehmerkredit • Interaktiver Tilgungs- & Zinsrechner</span>
          </h2>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-mono text-xs font-bold text-emerald-900">
            Kredit-Nr. KfW-2024-8841
          </span>
        </div>

        <div>
          <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
            Kostenfreie Sondertilgung bis 30.12.2026 simulieren:
          </span>
          <div className="grid grid-cols-3 gap-2.5">
            {PREPAYMENT_OPTIONS.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => setExtraPayment(amount)}
                aria-label={`${amount} Euro Sondertilgung`}
                aria-pressed={extraPayment === amount}
                className={`rounded-2xl border py-3 px-3 text-xs sm:text-sm font-extrabold transition ${
                  extraPayment === amount
                    ? 'border-emerald-700 bg-emerald-700 text-white shadow-md'
                    : 'border-slate-200 bg-slate-50 text-slate-800 hover:border-emerald-400 hover:bg-white'
                }`}
              >
                {amount === 0 ? '0 € (Standard)' : `${amount.toLocaleString('de-DE')} € Tilgung`}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                Neue Restschuld zum 01.01.2027
              </span>
              <motion.p
                key={remainingDebt}
                initial={{ scale: 0.94, opacity: 0.6 }}
                animate={{ scale: 1, opacity: 1 }}
                className="font-mono text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5"
              >
                {remainingDebt.toLocaleString('de-DE')},00 €
              </motion.p>
            </div>

            <div className="rounded-xl border border-emerald-300 bg-white px-4 py-2.5 text-right">
              <span className="block text-[11px] font-semibold text-slate-500">
                Direkte Zinsersparnis (Restlaufzeit)
              </span>
              <span className="font-mono text-lg font-extrabold text-emerald-700">
                + {interestSaved.toLocaleString('de-DE')} € gespart
              </span>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold text-slate-700">
              <span>Bereits getilgt ({paidPercent} % von 450.000 € Ursprungskredit)</span>
              <span className="font-mono text-emerald-800">Monatsrate: 3.450 € (Zins + Tilgung)</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-linear-to-r from-emerald-600 to-teal-500 transition-all duration-500"
                style={{ width: `${paidPercent}%` }}
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        aria-label="Finanzamt-Steuerkalender & Policen-Matrix"
        className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-lg space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <h2 className="flex items-center gap-2.5 text-lg font-extrabold text-slate-900 font-display">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
              <CalendarClock className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>Q4 Steuerkalender (Finanzamt Hamburg) & Gewerbe-Policen</span>
          </h2>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900">
            <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Liquidität gedeckt</span>
          </span>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 divide-y divide-slate-200">
          {[
            {
              title: 'Umsatzsteuer-Voranmeldung (November 2026)',
              sub: 'Frist: 10.12.2026 • ELSTER-Zertifikat vorbereitet (Dauerfristverlängerung aktiv)',
              amount: '18.420,00 €',
              badge: 'Fällig 10.12.',
              badgeClass: 'bg-amber-100 text-amber-900 border-amber-300',
            },
            {
              title: 'Körperschaftsteuer & Gewerbesteuer Q4-Vorauszahlung',
              sub: 'Frist: 15.12.2026 • SEPA-Lastschriftmandat Finanzamt Hamburg-Mitte',
              amount: '24.440,00 €',
              badge: 'Reserviert',
              badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300',
            },
            {
              title: 'Allianz Cyber- & Betriebshaftpflicht (Police #ALZ-99412)',
              sub: 'Deckungssumme: 5,0 Mio. € pauschal • SB: 2.500 € bei Ransomware/Betriebsausfall',
              amount: '4.180,00 € / Jahr',
              badge: 'Aktiv & Geprüft',
              badgeClass: 'bg-sky-100 text-sky-900 border-sky-300',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between gap-3 bg-white px-5 py-4 sm:flex-row sm:items-center"
            >
              <div className="space-y-0.5">
                <div className="flex flex-wrap items-center gap-2">
                  <BadgeEuro className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                  <p className="text-sm font-bold text-slate-900">{item.title}</p>
                  <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${item.badgeClass}`}>
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-500">{item.sub}</p>
              </div>
              <span className="shrink-0 font-mono text-base font-extrabold text-slate-900">
                {item.amount}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {demo.dossierSections.map((section) => {
            const secCopy = demoCopy.sections[section.id];
            if (!secCopy) return null;
            return (
              <div key={section.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 mb-1">
                  <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{secCopy.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{secCopy.summary}</p>
              </div>
            );
          })}
        </div>
      </motion.section>

      <IndexedDocsCard demo={demo} />
      <DealConversionBar demo={demo} />
    </div>
  );
};

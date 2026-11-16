'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Bot,
  CheckCircle2,
  Clock,
  FileSignature,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useDemoCopy, type DemoVerticalConfig } from '@/features/catalog';
import { DealConversionBar, IndexedDocsCard } from '@/features/verticals/shared';

interface LegalContractsPortalProps {
  demo: DemoVerticalConfig;
  isChatCollapsed: boolean;
  onExpandChat: () => void;
}

const CLAUSE_TABS = [
  {
    id: 'para8',
    badge: '§ 8 Abs. 2',
    title: 'Haftungsobergrenze (Liability Cap)',
    status: 'Redline geschützt',
    oldText:
      '„Der Auftragnehmer haftet unbeschränkt für sämtliche mittelbaren Schäden und entgangenen Gewinn.“',
    newText:
      '„Die Haftung bei leichter Fahrlässigkeit ist auf 100 % des Netto-Jahresauftragswerts (max. 185.000 €) begrenzt; mittelbare Folgeschäden sind ausgeschlossen (§ 309 BGB-konform).“',
    lawyerNote: 'Kanzlei-Bewertung: Haftungsrisiko um 82 % reduziert • Freigabe empfohlen.',
  },
  {
    id: 'para11',
    badge: '§ 11 Abs. 4',
    title: 'Kündigungsfristen & Vertragsstrafe',
    status: 'Geprüft & Sicher',
    oldText:
      '„Ordentliche Kündigung mit 6 Monaten Frist zum Jahresende; Vertragsstrafe bis 25 % bei Verzug.“',
    newText:
      '„Beidseitige Kündigungsfrist von 3 Monaten zum Quartalsende. Vertragsstrafe ist auf 0,2 % pro Werktag, maximal jedoch 5 % der Auftragssumme gedeckelt.“',
    lawyerNote: 'Kanzlei-Bewertung: BGH-Rechtsprechung zu AGB-Vertragsstrafen vollständig gewahrt.',
  },
  {
    id: 'para14',
    badge: '§ 14 & Vollmacht',
    title: 'Gerichtsstand Frankfurt & Vertretungsvollmacht',
    status: 'Unterschrift bereit',
    oldText: '„Ausschließlicher Gerichtsstand ist der Sitz des Auftraggebers.“',
    newText:
      '„Ausschließlicher Gerichtsstand für alle Streitigkeiten ist Frankfurt am Main (Kammer für Handelssachen). Deutsches Recht unter Ausschluss des UN-Kaufrechts (CISG).“',
    lawyerNote: 'Frist zur Einreichung der unterzeichneten Vollmacht: 24.11.2026 (18:00 Uhr).',
  },
] as const;

export const LegalContractsPortal: React.FC<LegalContractsPortalProps> = ({
  demo,
  isChatCollapsed,
  onExpandChat,
}) => {
  const tPortal = useTranslations('portal');
  const demoCopy = useDemoCopy(demo.slug);
  const [activeClauseId, setActiveClauseId] = useState<(typeof CLAUSE_TABS)[number]['id']>('para8');

  const activeClause =
    CLAUSE_TABS.find((clause) => clause.id === activeClauseId) ?? CLAUSE_TABS[0];

  return (
    <div className={isChatCollapsed ? 'lg:col-span-12 space-y-7' : 'lg:col-span-7 space-y-7'}>
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        aria-label={demoCopy.title}
        className="overflow-hidden rounded-3xl border border-slate-800 bg-linear-to-br from-[#0B1120] via-[#131F3A] to-[#0B1120] p-6 sm:p-8 text-white shadow-2xl"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-300">
              <Scale className="h-3.5 w-3.5" aria-hidden="true" />
              <span>MANDANTENAKTE NACH § 203 StGB • {demo.offerReference}</span>
            </span>
            <h1 className="mt-1 text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
              {demoCopy.title}
            </h1>
          </div>

          <div className="rounded-2xl border border-amber-300/40 bg-amber-400/15 px-4 py-2.5 text-right">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-200">
              Gegenstandswert
            </span>
            <span className="font-mono text-2xl font-extrabold text-white">185.000 €</span>
          </div>
        </div>

        <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          {demoCopy.subtitle}
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
          <div className="rounded-2xl border border-emerald-400/35 bg-emerald-500/15 p-4">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-200">
              Juristischer Risiko-Score
            </span>
            <span className="mt-1 block text-lg font-extrabold text-emerald-300">
              Niedrig (Geprüft)
            </span>
            <span className="text-[11px] text-emerald-100">3 kritische Klauseln entschärft</span>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-300">
              Haftungsdeckel (§ 8)
            </span>
            <span className="mt-1 block font-mono text-lg font-extrabold text-white">
              Max. 185.000 €
            </span>
            <span className="text-[11px] text-amber-200">Folgeschäden ausgeschlossen</span>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-300">
              Kanzlei-Frist
            </span>
            <span className="mt-1 block font-mono text-lg font-extrabold text-amber-300">
              24.11.2026
            </span>
            <span className="text-[11px] text-slate-300">Vollmacht & Redline-Freigabe</span>
          </div>
        </div>
      </motion.section>

      {isChatCollapsed && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onExpandChat}
            aria-label={tPortal('expandChat')}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-slate-800"
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
        aria-label="Interaktiver Vertrags-Redline-Prüfer"
        className="rounded-3xl border border-slate-300 bg-white p-6 sm:p-8 shadow-xl space-y-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <h2 className="flex items-center gap-2.5 text-lg font-extrabold text-slate-900 font-display">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-amber-300">
              <FileSignature className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>Interaktive Vertrags-Synopse (Redline-Vergleich)</span>
          </h2>
          <span className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-900">
            BGB / HGB Konformitätsprüfung
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {CLAUSE_TABS.map((clause) => {
            const isSelected = clause.id === activeClause.id;
            return (
              <button
                key={clause.id}
                type="button"
                onClick={() => setActiveClauseId(clause.id)}
                aria-label={clause.title}
                aria-pressed={isSelected}
                className={`rounded-2xl border p-3.5 text-left transition ${
                  isSelected
                    ? 'border-slate-900 bg-slate-900 text-white shadow-md'
                    : 'border-slate-200 bg-slate-50 text-slate-800 hover:border-slate-400 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className={`font-mono text-xs font-extrabold ${isSelected ? 'text-amber-300' : 'text-indigo-800'}`}>
                    {clause.badge}
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${isSelected ? 'bg-white/15 text-emerald-300' : 'bg-emerald-100 text-emerald-900'}`}>
                    {clause.status}
                  </span>
                </div>
                <p className="text-xs font-bold leading-snug">{clause.title}</p>
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeClause.id}
          initial={{ opacity: 0.5, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 rounded-2xl border-2 border-slate-200 bg-[#FCFBF7] p-5 sm:p-6"
        >
          <div className="rounded-xl border border-rose-200 bg-rose-50/80 p-4">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-800 mb-1">
              <AlertTriangle className="h-4 w-4 text-rose-600" aria-hidden="true" />
              <span>Ursprünglicher Entwurf der Gegenseite (Abgelehnt)</span>
            </div>
            <p className="font-serif text-sm text-rose-950 line-through opacity-80">
              {activeClause.oldText}
            </p>
          </div>

          <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50/75 p-4">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
              <span>Verhandelte Kanzlei-Endfassung ({activeClause.badge})</span>
            </div>
            <p className="font-serif text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
              {activeClause.newText}
            </p>
          </div>

          <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-800">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-indigo-700" aria-hidden="true" />
              <span>{activeClause.lawyerNote}</span>
            </span>
            <span className="hidden sm:inline font-mono text-[11px] text-slate-500">
              RA Dr. H. von Berg
            </span>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        aria-label={tPortal('dossierHeading')}
        className="rounded-3xl border border-slate-300 bg-white p-6 sm:p-7 shadow-lg space-y-4"
      >
        <h2 className="flex items-center gap-2 text-base font-extrabold text-slate-900 font-display">
          <Clock className="h-5 w-5 text-indigo-800" aria-hidden="true" />
          <span>Mandatsübersicht & Fristenprotokoll</span>
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {demo.dossierSections.map((section) => {
            const secCopy = demoCopy.sections[section.id];
            if (!secCopy) return null;
            return (
              <div key={section.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                <span className="inline-block rounded-md bg-slate-900 px-2.5 py-0.5 font-mono text-[11px] font-bold text-amber-300">
                  {section.badge}
                </span>
                <h3 className="text-sm font-extrabold text-slate-900">{secCopy.title}</h3>
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

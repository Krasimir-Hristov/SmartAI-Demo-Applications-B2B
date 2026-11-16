'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  CheckCircle2,
  Compass,
  Hammer,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useDemoCopy, type DemoVerticalConfig } from '@/features/catalog';
import { DealConversionBar, IndexedDocsCard } from '@/features/verticals/shared';

interface ConstructionInteriorPortalProps {
  demo: DemoVerticalConfig;
  isChatCollapsed: boolean;
  onExpandChat: () => void;
}

const MATERIAL_SWATCHES = [
  {
    id: 'oak',
    name: 'Schlossdiele Räuchereiche (Geölt)',
    zone: 'Wohnbereich & Galerie • 115 m²',
    swatchBg: 'bg-linear-to-br from-[#8B5A2B] via-[#6E4720] to-[#4A2E14]',
    spec: '16 mm Massivholz-Nutzschicht, Fußbodenheizung-optimiert, Trittschalldämmung -19 dB.',
  },
  {
    id: 'stone',
    name: 'Bayerischer Jura-Marmor & Mikrozement',
    zone: 'Master-Bad & Spa-Dusche • 32 m²',
    swatchBg: 'bg-linear-to-br from-[#D6CFC2] via-[#B8AFA0] to-[#8C8273]',
    spec: 'Großformat 120×240 cm fugenlos versiegelt, inkl. Dornbracht Unterputz-Armaturen in Schwarz matt.',
  },
  {
    id: 'knx',
    name: 'Gira KNX Smart-Home & Akustik-Lichtvoute',
    zone: 'Gesamte Penthouse-Etage',
    swatchBg: 'bg-linear-to-br from-[#27272A] via-[#3F3F46] to-[#18181B]',
    spec: 'DALI-2 Lichtszenen (2700K Warmweiß), motorisierte Beschattung & Raumklima-Automatik.',
  },
] as const;

export const ConstructionInteriorPortal: React.FC<ConstructionInteriorPortalProps> = ({
  demo,
  isChatCollapsed,
  onExpandChat,
}) => {
  const tPortal = useTranslations('portal');
  const demoCopy = useDemoCopy(demo.slug);
  const [selectedMaterialId, setSelectedMaterialId] =
    useState<(typeof MATERIAL_SWATCHES)[number]['id']>('oak');

  const activeMaterial =
    MATERIAL_SWATCHES.find((item) => item.id === selectedMaterialId) ?? MATERIAL_SWATCHES[0];

  return (
    <div className={isChatCollapsed ? 'lg:col-span-12 space-y-7' : 'lg:col-span-7 space-y-7'}>
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        aria-label={demoCopy.title}
        className="overflow-hidden rounded-3xl border border-stone-800 bg-linear-to-br from-[#231C18] via-[#3B2A20] to-[#1C1613] p-6 sm:p-8 text-white shadow-2xl"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-300">
              <Compass className="h-3.5 w-3.5" aria-hidden="true" />
              <span>ARCHITEKTUR & KOSTENVORANSCHLAG • {demo.offerReference}</span>
            </span>
            <h1 className="mt-1 text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
              {demoCopy.title}
            </h1>
          </div>

          <div className="rounded-2xl border border-amber-300/40 bg-amber-500/15 px-4 py-2.5 text-right">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-200">
              Festpreis-Garantie
            </span>
            <span className="font-mono text-2xl font-extrabold text-white">68.400 €</span>
          </div>
        </div>

        <p className="mt-4 text-sm sm:text-base text-stone-200/90 leading-relaxed">
          {demoCopy.subtitle}
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-200">
              Bauzeit-Garantie
            </span>
            <span className="mt-1 block font-mono text-lg font-extrabold text-white">
              8 Wochen
            </span>
            <span className="text-[11px] text-stone-300">Fixtermin Schlüsselübergabe</span>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-200">
              Gewährleistung
            </span>
            <span className="mt-1 block font-mono text-lg font-extrabold text-emerald-300">
              5 Jahre VOB/B
            </span>
            <span className="text-[11px] text-stone-300">Inkl. Bauleiter-Abnahme</span>
          </div>

          <div className="rounded-2xl border border-amber-300/35 bg-amber-500/15 p-4">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-200">
              Zahlungsplan
            </span>
            <span className="mt-1 block font-mono text-lg font-extrabold text-white">
              3 Bauabschnitte
            </span>
            <span className="text-[11px] text-amber-100">Nach Baufortschritt (MaBV)</span>
          </div>
        </div>
      </motion.section>

      {isChatCollapsed && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onExpandChat}
            aria-label={tPortal('expandChat')}
            className="inline-flex items-center gap-2 rounded-xl bg-amber-800 px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-amber-700"
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
        aria-label="Material-Bemusterung & 3D-Innenarchitektur"
        className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-7 shadow-lg space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-4">
          <h2 className="flex items-center gap-2.5 text-lg font-extrabold text-stone-900 font-display">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
              <Layers className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>Interaktive Material-Bemusterung (3D-Ausstattungslinie)</span>
          </h2>
          <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-bold text-orange-900">
            Musterbox vor Ort verfügbar
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {MATERIAL_SWATCHES.map((swatch) => {
            const isSelected = swatch.id === activeMaterial.id;
            return (
              <button
                key={swatch.id}
                type="button"
                onClick={() => setSelectedMaterialId(swatch.id)}
                aria-label={swatch.name}
                aria-pressed={isSelected}
                className={`flex items-center gap-3 rounded-2xl border p-3 text-left transition ${
                  isSelected
                    ? 'border-amber-700 bg-amber-50/80 shadow-sm'
                    : 'border-stone-200 bg-stone-50 hover:border-stone-300 hover:bg-white'
                }`}
              >
                <div className={`h-11 w-11 shrink-0 rounded-xl border border-black/15 shadow-inner ${swatch.swatchBg}`} />
                <div className="min-w-0">
                  <p className="truncate text-xs font-extrabold text-stone-900">{swatch.name}</p>
                  <p className="truncate text-[11px] text-stone-500">{swatch.zone}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="rounded-2xl border border-amber-200 bg-[#FAF6F0] p-4 flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
          <div>
            <p className="text-sm font-extrabold text-stone-900">{activeMaterial.name}</p>
            <p className="mt-0.5 text-xs text-stone-700 leading-relaxed">{activeMaterial.spec}</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        aria-label="Kostenvoranschlag nach Gewerken"
        className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-7 shadow-lg space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-4">
          <h2 className="flex items-center gap-2.5 text-lg font-extrabold text-stone-900 font-display">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-900 text-amber-300">
              <Hammer className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>Leistungsverzeichnis (LV) & Gewerke-Kalkulation</span>
          </h2>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            <span>DIN 276 Kostensicherheit</span>
          </span>
        </div>

        <div className="space-y-3.5">
          {[
            {
              pos: 'Gewerk 01 • Woche 1–3',
              title: 'Trockenbau, Akustikdecken & Q4-Malerarbeiten',
              amount: '18.900,00 €',
              pct: 28,
            },
            {
              pos: 'Gewerk 02 • Woche 3–5',
              title: 'Schlossdiele Räuchereiche & Jura-Marmor Bad-Ausbau',
              amount: '21.500,00 €',
              pct: 31,
            },
            {
              pos: 'Gewerk 03 • Woche 5–8',
              title: 'Gira KNX Smart-Home, Lichtvouten & Schreiner-Maßeinbauten',
              amount: '28.000,00 €',
              pct: 41,
            },
          ].map((row) => (
            <div key={row.pos} className="rounded-2xl border border-stone-200 bg-stone-50/75 p-4 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <span className="font-mono text-[11px] font-bold text-amber-800">{row.pos}</span>
                  <h3 className="text-sm font-extrabold text-stone-900">{row.title}</h3>
                </div>
                <span className="shrink-0 font-mono text-base font-extrabold text-stone-900">
                  {row.amount}
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
                <div
                  className="h-full rounded-full bg-linear-to-r from-amber-700 to-orange-600"
                  style={{ width: `${row.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <IndexedDocsCard demo={demo} />
      <DealConversionBar demo={demo} />
    </div>
  );
};

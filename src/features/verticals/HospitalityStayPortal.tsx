'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  Check,
  Clock,
  Coffee,
  Copy,
  KeyRound,
  MountainSnow,
  Sparkles,
  Wifi,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useDemoCopy, type DemoVerticalConfig } from '@/features/catalog';
import { DealConversionBar, IndexedDocsCard } from '@/features/verticals/shared';

interface HospitalityStayPortalProps {
  demo: DemoVerticalConfig;
  isChatCollapsed: boolean;
  onExpandChat: () => void;
}

export const HospitalityStayPortal: React.FC<HospitalityStayPortalProps> = ({
  demo,
  isChatCollapsed,
  onExpandChat,
}) => {
  const tPortal = useTranslations('portal');
  const demoCopy = useDemoCopy(demo.slug);
  const [wifiCopied, setWifiCopied] = useState(false);

  const handleCopyWifi = async () => {
    try {
      await navigator.clipboard.writeText('Zugspitze2026!');
      setWifiCopied(true);
      setTimeout(() => setWifiCopied(false), 2500);
    } catch {
      setWifiCopied(true);
      setTimeout(() => setWifiCopied(false), 2500);
    }
  };

  return (
    <div className={isChatCollapsed ? 'lg:col-span-12 space-y-7' : 'lg:col-span-7 space-y-7'}>
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        aria-label={demoCopy.title}
        className="overflow-hidden rounded-3xl border border-emerald-900/35 bg-linear-to-br from-[#052E25] via-[#064E3B] to-[#04221B] p-6 sm:p-8 text-white shadow-2xl"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-300">
              <MountainSnow className="h-3.5 w-3.5" aria-hidden="true" />
              <span>SMARTSCAN STAY • SUITE #402 ZUGSPITZE • {demo.offerReference}</span>
            </span>
            <h1 className="mt-1 text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
              {demoCopy.title}
            </h1>
          </div>

          <div className="rounded-2xl border border-amber-300/40 bg-white/10 px-4 py-2 text-right">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-200">
              VIP Late Check-out
            </span>
            <span className="font-mono text-xl font-extrabold text-white">45 € Upgrade</span>
          </div>
        </div>

        <p className="mt-4 text-sm sm:text-base text-emerald-100/90 leading-relaxed">
          {demoCopy.subtitle}
        </p>

        <div className="mt-6 rounded-2xl border border-emerald-300/35 bg-white/10 p-4 sm:p-5 backdrop-blur-xs flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/20 text-emerald-300">
              <Wifi className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-200">
                High-Speed Glasfaser WLAN (300 Mbit/s)
              </span>
              <p className="font-mono text-sm sm:text-base font-extrabold text-white">
                Netz: AlpenGrand_VIP_5G • Code: <span className="text-amber-300">Zugspitze2026!</span>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              void handleCopyWifi();
            }}
            aria-label="WLAN Passwort kopieren"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 text-xs font-extrabold text-slate-950 shadow-md transition hover:bg-amber-300"
          >
            {wifiCopied ? (
              <>
                <Check className="h-4 w-4" aria-hidden="true" />
                <span>Passwort kopiert!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" aria-hidden="true" />
                <span>1-Klick WLAN Kopieren</span>
              </>
            )}
          </button>
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
        aria-label="Digitaler Suite-Concierge & Zeiten"
        className="rounded-3xl border border-emerald-200/90 bg-white p-6 sm:p-7 shadow-lg space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <h2 className="flex items-center gap-2.5 text-lg font-extrabold text-slate-900 font-display">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>Digitales Suite-Kompendium & VIP-Services</span>
          </h2>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-900">
            Rezeption 24/7 per KI & Kurzwahl #9
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
              <Coffee className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                Alpen-Frühstück & Fine Dining
              </span>
              <h3 className="text-sm font-extrabold text-slate-900">07:30 – 11:00 Uhr (Panorama-Saal)</h3>
              <p className="mt-1 text-xs text-slate-600">
                Room-Service ohne Aufpreis • Regionale Bio-Bergkäserei & Barista-Kaffee.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
              <Clock className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                Infinity-Spa & Zirben-Sauna
              </span>
              <h3 className="text-sm font-extrabold text-slate-900">08:00 – 22:00 Uhr (Dachgeschoss)</h3>
              <p className="mt-1 text-xs text-slate-600">
                34°C Außenpool mit Zugspitz-Blick • Bademäntel & Spa-Tasche im Ankleidezimmer.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-800">
              <KeyRound className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800">
                Tiefgarage & E-Charging
              </span>
              <h3 className="text-sm font-extrabold text-slate-900">Stellplatz #14 (Ebene -1)</h3>
              <p className="mt-1 text-xs text-slate-600">
                22 kW Wallbox direkt am Platz • Freischaltung über Ihre Suite-Zimmerkarte.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-300 bg-amber-50/75 p-4 flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900">
                Exklusives Gast-Angebot
              </span>
              <h3 className="text-sm font-extrabold text-slate-900">Late Check-out 16:00 Uhr + Day-Spa</h3>
              <p className="mt-1 text-xs text-slate-700">
                Behalten Sie Ihre Suite am Abreisetag bis 16:00 Uhr inkl. 2× Alpen-Prosecco für nur 45 €.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <IndexedDocsCard demo={demo} />
      <DealConversionBar demo={demo} />
    </div>
  );
};

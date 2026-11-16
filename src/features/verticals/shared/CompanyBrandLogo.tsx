'use client';

import React from 'react';
import type { DemoVerticalSlug } from '@/features/catalog';

interface CompanyBrandLogoProps {
  slug: DemoVerticalSlug;
}

export const CompanyBrandLogo: React.FC<CompanyBrandLogoProps> = ({ slug }) => {
  switch (slug) {
    case 'marketing-agency':
      return (
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-violet-600 via-indigo-600 to-fuchsia-600 text-white shadow-md shadow-violet-600/25">
            <svg viewBox="0 0 32 32" className="h-6 w-6 fill-none stroke-current" strokeWidth="2.2">
              <path d="M6 8L16 25L26 8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11 8L16 17L21 8" strokeLinecap="round" strokeLinejoin="round" opacity="0.65" />
            </svg>
          </div>
          <div className="leading-none">
            <span className="block text-[10px] font-bold tracking-[0.25em] uppercase text-violet-600">
              VANGUARD • BERLIN
            </span>
            <span className="font-display text-base font-extrabold tracking-tight text-slate-900">
              PERFORMANCE LABS
            </span>
          </div>
        </div>
      );

    case 'real-estate':
      return (
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-400/60 bg-stone-900 text-amber-300 shadow-md">
            <svg viewBox="0 0 32 32" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.8">
              <path d="M5 25H27M8 25V13L16 6L24 13V25" />
              <path d="M13 25V17H19V25" />
            </svg>
          </div>
          <div className="leading-none">
            <span className="block text-[10px] font-bold tracking-[0.28em] uppercase text-amber-800">
              MÜNCHEN • BOGENHAUSEN
            </span>
            <span className="font-display text-base font-extrabold tracking-tight text-stone-900">
              BAVARIA PRESTIGE REALTY
            </span>
          </div>
        </div>
      );

    case 'auto-leasing':
      return (
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-400/40 bg-slate-950 text-sky-400 shadow-md">
            <svg viewBox="0 0 32 32" className="h-6 w-6 fill-none stroke-current" strokeWidth="2">
              <path d="M16 4L26 8V16C26 22 21.5 26.5 16 28C10.5 26.5 6 22 6 16V8L16 4Z" />
              <path d="M11 16H21M16 11V21" strokeLinecap="round" />
            </svg>
          </div>
          <div className="leading-none">
            <span className="block text-[10px] font-bold tracking-[0.25em] uppercase text-sky-600">
              PORSCHE FLEET PARTNER • STUTTGART
            </span>
            <span className="font-display text-base font-extrabold tracking-tight text-slate-900">
              ZENTRUM E-LEASING GmbH
            </span>
          </div>
        </div>
      );

    case 'medical-clinic':
      return (
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-teal-600 to-cyan-700 text-white shadow-md shadow-teal-600/20">
            <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current">
              <path d="M13 6H19V13H26V19H19V26H13V19H6V13H13V6Z" />
            </svg>
          </div>
          <div className="leading-none">
            <span className="block text-[10px] font-bold tracking-[0.22em] uppercase text-teal-700">
              STRAUMANN® CENTER • MÜNCHEN
            </span>
            <span className="font-display text-base font-extrabold tracking-tight text-slate-900">
              PRIVATKLINIK DR. WEBER
            </span>
          </div>
        </div>
      );

    case 'construction-interior':
      return (
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-700 to-stone-900 text-amber-200 shadow-md">
            <svg viewBox="0 0 32 32" className="h-6 w-6 fill-none stroke-current" strokeWidth="2">
              <rect x="6" y="6" width="20" height="20" rx="2" />
              <path d="M6 16H26M16 6V26" />
            </svg>
          </div>
          <div className="leading-none">
            <span className="block text-[10px] font-bold tracking-[0.25em] uppercase text-amber-800">
              ARCHITEKTUR & INNENAUSBAU
            </span>
            <span className="font-display text-base font-extrabold tracking-tight text-stone-900">
              STUDIO NORDLICHT HAMBURG
            </span>
          </div>
        </div>
      );

    case 'hospitality-stay':
      return (
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-800 to-teal-900 text-amber-200 shadow-md">
            <svg viewBox="0 0 32 32" className="h-6 w-6 fill-none stroke-current" strokeWidth="2">
              <path d="M4 24L13 10L19 19L23 14L28 24H4Z" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="leading-none">
            <span className="block text-[10px] font-bold tracking-[0.25em] uppercase text-emerald-700">
              ★★★★★ ALPINE LUXURY CONCIERGE
            </span>
            <span className="font-display text-base font-extrabold tracking-tight text-slate-900">
              ALPENGRAND RESORT & SPA
            </span>
          </div>
        </div>
      );

    case 'legal-contracts':
      return (
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-400/50 bg-[#0F172A] text-amber-300 shadow-md">
            <svg viewBox="0 0 32 32" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.9">
              <path d="M16 6V26M9 26H23M7 11H25" strokeLinecap="round" />
              <path d="M7 11L4 18H10L7 11ZM25 11L22 18H28L25 11Z" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="leading-none">
            <span className="block text-[10px] font-bold tracking-[0.24em] uppercase text-indigo-900">
              WIRTSCHAFTSKANZLEI • FRANKFURT
            </span>
            <span className="font-display text-base font-extrabold tracking-tight text-slate-900">
              VON BERG & PARTNER LLP
            </span>
          </div>
        </div>
      );

    case 'finance-accounting':
      return (
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/40 bg-[#064E3B] text-emerald-200 shadow-md">
            <svg viewBox="0 0 32 32" className="h-6 w-6 fill-none stroke-current" strokeWidth="2">
              <path d="M6 24H26M8 20V12M13 20V12M19 20V12M24 20V12M5 12L16 6L27 12H5Z" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="leading-none">
            <span className="block text-[10px] font-bold tracking-[0.24em] uppercase text-emerald-800">
              DATEV PLATINUM • PRIVATE WEALTH
            </span>
            <span className="font-display text-base font-extrabold tracking-tight text-slate-900">
              HANSEATIC TREUHAND AG
            </span>
          </div>
        </div>
      );
  }
};

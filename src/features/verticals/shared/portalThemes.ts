import type { DemoVerticalSlug } from '@/features/catalog';

export interface PortalVisualTheme {
  pageBgClass: string;
  ribbonBgClass: string;
  ribbonBorderClass: string;
  brandEmblemClass: string;
  brandTitleClass: string;
  brandMetaClass: string;
  verifiedBadgeClass: string;
  accentBadgeClass: string;
  accentTextClass: string;
  accentIconClass: string;
  accentBorderClass: string;
  accentSoftBgClass: string;
  primaryCtaClass: string;
  chatHeaderGradientClass: string;
  chatUserBubbleClass: string;
  benchmarkLabel: string;
}

export const PORTAL_VISUAL_THEMES: Record<DemoVerticalSlug, PortalVisualTheme> = {
  'marketing-agency': {
    pageBgClass: 'bg-[#F4F5FA] text-slate-900',
    ribbonBgClass: 'bg-white/95 backdrop-blur-md',
    ribbonBorderClass: 'border-indigo-200/80',
    brandEmblemClass: 'bg-linear-to-br from-violet-600 to-indigo-700 text-white shadow-sm',
    brandTitleClass: 'text-slate-900',
    brandMetaClass: 'text-slate-500',
    verifiedBadgeClass: 'border-violet-200 bg-violet-50 text-violet-800',
    accentBadgeClass: 'border-violet-200 bg-violet-100/80 text-violet-900',
    accentTextClass: 'text-violet-700',
    accentIconClass: 'text-violet-600',
    accentBorderClass: 'border-violet-200',
    accentSoftBgClass: 'bg-violet-50/80',
    primaryCtaClass:
      'bg-linear-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-500 hover:to-indigo-500 shadow-md shadow-violet-600/20',
    chatHeaderGradientClass: 'from-[#1E1B4B] via-[#311042] to-[#1E1B4B]',
    chatUserBubbleClass: 'bg-violet-600 text-white border-violet-600',
    benchmarkLabel: 'Executive Pitch Deck • Qwilr / Trumpet Style',
  },
  'real-estate': {
    pageBgClass: 'bg-[#FAF7F2] text-stone-900',
    ribbonBgClass: 'bg-[#FFFDF9]/95 backdrop-blur-md',
    ribbonBorderClass: 'border-[#E6DFD3]',
    brandEmblemClass: 'bg-linear-to-br from-stone-900 to-stone-800 text-amber-300 shadow-sm',
    brandTitleClass: 'text-stone-900',
    brandMetaClass: 'text-stone-500',
    verifiedBadgeClass: 'border-amber-300/80 bg-amber-50 text-amber-900',
    accentBadgeClass: 'border-amber-300/80 bg-amber-50 text-amber-900',
    accentTextClass: 'text-amber-800',
    accentIconClass: 'text-amber-700',
    accentBorderClass: 'border-[#E5DEC9]',
    accentSoftBgClass: 'bg-[#F7F1E5]',
    primaryCtaClass:
      'bg-linear-to-r from-stone-900 via-stone-800 to-amber-950 text-amber-100 hover:from-stone-800 hover:to-stone-900 shadow-md shadow-stone-900/20',
    chatHeaderGradientClass: 'from-[#1C1917] via-[#29231E] to-[#1C1917]',
    chatUserBubbleClass: 'bg-stone-900 text-amber-50 border-stone-800',
    benchmarkLabel: 'Private Exposé • Engel & Völkers / Sotheby’s Style',
  },
  'auto-leasing': {
    pageBgClass: 'bg-[#F2F5F8] text-slate-900',
    ribbonBgClass: 'bg-white/95 backdrop-blur-md',
    ribbonBorderClass: 'border-slate-200',
    brandEmblemClass: 'bg-linear-to-br from-slate-900 to-sky-950 text-sky-300 shadow-sm',
    brandTitleClass: 'text-slate-900',
    brandMetaClass: 'text-slate-500',
    verifiedBadgeClass: 'border-sky-200 bg-sky-50 text-sky-900',
    accentBadgeClass: 'border-sky-200 bg-sky-50 text-sky-900',
    accentTextClass: 'text-sky-700',
    accentIconClass: 'text-sky-600',
    accentBorderClass: 'border-sky-200',
    accentSoftBgClass: 'bg-sky-50/75',
    primaryCtaClass:
      'bg-linear-to-r from-sky-600 to-blue-700 text-white hover:from-sky-500 hover:to-blue-600 shadow-md shadow-sky-600/20',
    chatHeaderGradientClass: 'from-[#0B111E] via-[#10203B] to-[#0B111E]',
    chatUserBubbleClass: 'bg-sky-600 text-white border-sky-600',
    benchmarkLabel: 'Digital Showroom • Porsche Finder / Gowago Style',
  },
  'medical-clinic': {
    pageBgClass: 'bg-[#F2FAF9] text-slate-900',
    ribbonBgClass: 'bg-white/95 backdrop-blur-md',
    ribbonBorderClass: 'border-teal-200/80',
    brandEmblemClass: 'bg-linear-to-br from-teal-600 to-cyan-700 text-white shadow-sm',
    brandTitleClass: 'text-slate-900',
    brandMetaClass: 'text-slate-500',
    verifiedBadgeClass: 'border-teal-200 bg-teal-50 text-teal-900',
    accentBadgeClass: 'border-teal-200 bg-teal-50 text-teal-900',
    accentTextClass: 'text-teal-700',
    accentIconClass: 'text-teal-600',
    accentBorderClass: 'border-teal-200',
    accentSoftBgClass: 'bg-teal-50/80',
    primaryCtaClass:
      'bg-linear-to-r from-teal-600 to-emerald-600 text-white hover:from-teal-500 hover:to-emerald-500 shadow-md shadow-teal-600/20',
    chatHeaderGradientClass: 'from-[#0F3D3E] via-[#115E59] to-[#0F3D3E]',
    chatUserBubbleClass: 'bg-teal-600 text-white border-teal-600',
    benchmarkLabel: 'Patient Portal • Nelly Solutions / Swiss Clinic Style',
  },
  'construction-interior': {
    pageBgClass: 'bg-[#F7F4EE] text-stone-900',
    ribbonBgClass: 'bg-[#FFFDF9]/95 backdrop-blur-md',
    ribbonBorderClass: 'border-stone-200',
    brandEmblemClass: 'bg-linear-to-br from-amber-700 to-orange-800 text-white shadow-sm',
    brandTitleClass: 'text-stone-900',
    brandMetaClass: 'text-stone-500',
    verifiedBadgeClass: 'border-orange-200 bg-orange-50 text-orange-900',
    accentBadgeClass: 'border-orange-200 bg-orange-50 text-orange-900',
    accentTextClass: 'text-orange-800',
    accentIconClass: 'text-orange-600',
    accentBorderClass: 'border-orange-200',
    accentSoftBgClass: 'bg-orange-50/75',
    primaryCtaClass:
      'bg-linear-to-r from-amber-700 to-orange-700 text-white hover:from-amber-600 hover:to-orange-600 shadow-md shadow-orange-700/20',
    chatHeaderGradientClass: 'from-[#27201C] via-[#3E2C23] to-[#27201C]',
    chatUserBubbleClass: 'bg-amber-800 text-white border-amber-800',
    benchmarkLabel: 'Architectural Studio • Plancraft / Houzz Pro Style',
  },
  'hospitality-stay': {
    pageBgClass: 'bg-[#F4F8F5] text-slate-900',
    ribbonBgClass: 'bg-white/95 backdrop-blur-md',
    ribbonBorderClass: 'border-emerald-200/80',
    brandEmblemClass: 'bg-linear-to-br from-emerald-700 to-teal-800 text-white shadow-sm',
    brandTitleClass: 'text-slate-900',
    brandMetaClass: 'text-slate-500',
    verifiedBadgeClass: 'border-emerald-200 bg-emerald-50 text-emerald-900',
    accentBadgeClass: 'border-emerald-200 bg-emerald-50 text-emerald-900',
    accentTextClass: 'text-emerald-800',
    accentIconClass: 'text-emerald-600',
    accentBorderClass: 'border-emerald-200',
    accentSoftBgClass: 'bg-emerald-50/75',
    primaryCtaClass:
      'bg-linear-to-r from-emerald-600 to-teal-700 text-white hover:from-emerald-500 hover:to-teal-600 shadow-md shadow-emerald-600/20',
    chatHeaderGradientClass: 'from-[#06392F] via-[#064E3B] to-[#06392F]',
    chatUserBubbleClass: 'bg-emerald-700 text-white border-emerald-700',
    benchmarkLabel: 'Digital Guest Directory • Straiv / SuitePad Style',
  },
  'legal-contracts': {
    pageBgClass: 'bg-[#F3F5F8] text-slate-900',
    ribbonBgClass: 'bg-white/95 backdrop-blur-md',
    ribbonBorderClass: 'border-slate-300',
    brandEmblemClass: 'bg-linear-to-br from-slate-900 to-indigo-950 text-amber-200 shadow-sm',
    brandTitleClass: 'text-slate-900',
    brandMetaClass: 'text-slate-600',
    verifiedBadgeClass: 'border-slate-300 bg-slate-100 text-slate-900',
    accentBadgeClass: 'border-indigo-200 bg-indigo-50 text-indigo-950',
    accentTextClass: 'text-indigo-900',
    accentIconClass: 'text-indigo-700',
    accentBorderClass: 'border-slate-300',
    accentSoftBgClass: 'bg-slate-100/90',
    primaryCtaClass:
      'bg-linear-to-r from-slate-900 to-indigo-950 text-white hover:from-slate-800 hover:to-indigo-900 shadow-md shadow-slate-900/20',
    chatHeaderGradientClass: 'from-[#0F172A] via-[#1E293B] to-[#0F172A]',
    chatUserBubbleClass: 'bg-slate-900 text-white border-slate-900',
    benchmarkLabel: 'Mandantenakte • BRYTER / Legal Portal Style (§ 203 StGB)',
  },
  'finance-accounting': {
    pageBgClass: 'bg-[#F1F5F9] text-slate-900',
    ribbonBgClass: 'bg-white/95 backdrop-blur-md',
    ribbonBorderClass: 'border-emerald-200/80',
    brandEmblemClass: 'bg-linear-to-br from-emerald-800 to-slate-900 text-emerald-200 shadow-sm',
    brandTitleClass: 'text-slate-900',
    brandMetaClass: 'text-slate-500',
    verifiedBadgeClass: 'border-emerald-200 bg-emerald-50 text-emerald-900',
    accentBadgeClass: 'border-emerald-200 bg-emerald-50 text-emerald-900',
    accentTextClass: 'text-emerald-800',
    accentIconClass: 'text-emerald-700',
    accentBorderClass: 'border-emerald-200',
    accentSoftBgClass: 'bg-emerald-50/75',
    primaryCtaClass:
      'bg-linear-to-r from-emerald-700 to-teal-800 text-white hover:from-emerald-600 hover:to-teal-700 shadow-md shadow-emerald-700/20',
    chatHeaderGradientClass: 'from-[#064E3B] via-[#0F2922] to-[#064E3B]',
    chatUserBubbleClass: 'bg-emerald-800 text-white border-emerald-800',
    benchmarkLabel: 'Mandantenportal • DATEV / TaxDome Executive Style',
  },
};

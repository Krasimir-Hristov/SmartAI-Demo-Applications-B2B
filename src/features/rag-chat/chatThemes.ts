import type { DemoVerticalSlug } from '@/features/catalog';

export interface ChatHeaderTheme {
  headerClass: string;
  userBubbleClass: string;
  sendBtnClass: string;
  badgeTextClass: string;
}

export const CHAT_HEADER_THEMES: Record<DemoVerticalSlug, ChatHeaderTheme> = {
  'marketing-agency': {
    headerClass: 'from-[#1E1B4B] via-[#311042] to-[#1E1B4B]',
    userBubbleClass: 'bg-violet-600 text-white border-violet-600',
    sendBtnClass: 'bg-violet-600 text-white hover:bg-violet-500',
    badgeTextClass: 'text-violet-700',
  },
  'real-estate': {
    headerClass: 'from-[#1C1917] via-[#2C241D] to-[#1C1917]',
    userBubbleClass: 'bg-stone-900 text-amber-50 border-stone-800',
    sendBtnClass: 'bg-stone-900 text-amber-100 hover:bg-stone-800',
    badgeTextClass: 'text-amber-800',
  },
  'auto-leasing': {
    headerClass: 'from-[#0B111E] via-[#102341] to-[#0B111E]',
    userBubbleClass: 'bg-sky-600 text-white border-sky-600',
    sendBtnClass: 'bg-sky-600 text-white hover:bg-sky-500',
    badgeTextClass: 'text-sky-700',
  },
  'medical-clinic': {
    headerClass: 'from-[#0D3B3E] via-[#0F5257] to-[#0D3B3E]',
    userBubbleClass: 'bg-teal-600 text-white border-teal-600',
    sendBtnClass: 'bg-teal-600 text-white hover:bg-teal-500',
    badgeTextClass: 'text-teal-700',
  },
  'construction-interior': {
    headerClass: 'from-[#27201C] via-[#433024] to-[#27201C]',
    userBubbleClass: 'bg-amber-800 text-white border-amber-800',
    sendBtnClass: 'bg-amber-700 text-white hover:bg-amber-600',
    badgeTextClass: 'text-amber-800',
  },
  'hospitality-stay': {
    headerClass: 'from-[#06392F] via-[#065F46] to-[#06392F]',
    userBubbleClass: 'bg-emerald-700 text-white border-emerald-700',
    sendBtnClass: 'bg-emerald-600 text-white hover:bg-emerald-500',
    badgeTextClass: 'text-emerald-700',
  },
  'legal-contracts': {
    headerClass: 'from-[#0F172A] via-[#1E293B] to-[#0F172A]',
    userBubbleClass: 'bg-slate-900 text-white border-slate-900',
    sendBtnClass: 'bg-slate-900 text-white hover:bg-slate-800',
    badgeTextClass: 'text-indigo-800',
  },
  'finance-accounting': {
    headerClass: 'from-[#064E3B] via-[#0F2F26] to-[#064E3B]',
    userBubbleClass: 'bg-emerald-800 text-white border-emerald-800',
    sendBtnClass: 'bg-emerald-700 text-white hover:bg-emerald-600',
    badgeTextClass: 'text-emerald-800',
  },
};

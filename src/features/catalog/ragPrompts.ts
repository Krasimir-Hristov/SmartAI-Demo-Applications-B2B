import type { SupportedLocale } from '@/features/i18n';
import { buildChatbotSystemPrompt } from '@/features/system-prompts';
import { DEMOS_GROUP_A } from './demosGroupA';
import { DEMOS_GROUP_B } from './demosGroupB';
import { MINI_OFFER_SUMMARIES } from './miniOffersData';
import type { DemoVerticalConfig, DemoVerticalCopy } from './types';

export const ALL_DEMOS: readonly DemoVerticalConfig[] = [
  ...DEMOS_GROUP_A,
  ...DEMOS_GROUP_B,
];

export const getDemoBySlug = (slug: string): DemoVerticalConfig | undefined => {
  return ALL_DEMOS.find((item) => item.slug === slug);
};

export const buildRagSystemPrompt = (
  demo: DemoVerticalConfig,
  copy: DemoVerticalCopy,
  locale: SupportedLocale
): string => {
  return buildChatbotSystemPrompt(demo, copy, locale);
};

export const buildFallbackRagReply = (
  demo: DemoVerticalConfig,
  copy: DemoVerticalCopy,
  locale: SupportedLocale,
  userQuestion: string
): string => {
  const q = userQuestion.toLowerCase();
  const miniOffer = MINI_OFFER_SUMMARIES[demo.slug][locale];

  const miniKeywords = ['mini', 'small', 'test', 'sprint', 'starter', 'малка', 'тест', 'резерв', 'reserv', 'küçük', 'interior', 'обзав'];
  if (miniKeywords.some((kw) => q.includes(kw))) {
    return `${miniOffer.miniOfferTitle} (${miniOffer.miniOfferPrice})\n\n${miniOffer.miniOfferDetails}`;
  }

  const matchedMeta =
    demo.dossierSections.find((sec) => {
      const secCopy = copy.sections[sec.id];
      if (!secCopy) {
        return false;
      }
      const haystack = `${secCopy.title} ${secCopy.summary} ${secCopy.keyPoints.join(' ')}`.toLowerCase();
      return q.split(/\s+/).some((word) => word.length > 3 && haystack.includes(word));
    }) ?? demo.dossierSections[0];

  const introByLocale: Record<SupportedLocale, string> = {
    de: `Basierend auf Ihrer Akte (${demo.offerReference}) — ${demo.headlineValue}:`,
    bg: `Според Вашето досие (${demo.offerReference}) — ${demo.headlineValue}:`,
    en: `Based on your dossier (${demo.offerReference}) — ${demo.headlineValue}:`,
    tr: `Dosyanıza göre (${demo.offerReference}) — ${demo.headlineValue}:`,
  };

  if (!matchedMeta) {
    return `${introByLocale[locale]}\n\n${miniOffer.miniOfferTitle}: ${miniOffer.miniOfferPrice}`;
  }

  const matchedCopy = copy.sections[matchedMeta.id];
  if (!matchedCopy) {
    return introByLocale[locale];
  }

  const bullets = matchedCopy.keyPoints.map((pt) => `• ${pt}`).join('\n');
  return `${introByLocale[locale]}\n\n**${matchedCopy.title}** (${matchedMeta.badge})\n${matchedCopy.summary}\n\n${bullets}\n\n💡 ${miniOffer.miniOfferTitle}: ${miniOffer.miniOfferPrice} — ${miniOffer.miniOfferDetails}`;
};

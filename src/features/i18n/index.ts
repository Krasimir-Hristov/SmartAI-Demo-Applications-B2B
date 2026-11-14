/**
 * 4-language localization module (BG, DE, EN, TR).
 * Will be fully implemented in Step 1.
 */
export const SUPPORTED_LOCALES = ['bg', 'de', 'en', 'tr'] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

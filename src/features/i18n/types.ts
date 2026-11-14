export const SUPPORTED_LOCALES = ['de', 'bg', 'en', 'tr'] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: SupportedLocale = 'de';
export const LOCALE_COOKIE_NAME = 'NEXT_LOCALE';

export const isSupportedLocale = (value: string | null | undefined): value is SupportedLocale => {
  return typeof value === 'string' && (SUPPORTED_LOCALES as readonly string[]).includes(value);
};

export interface LocaleOption {
  code: SupportedLocale;
  shortLabel: string;
  nativeName: string;
  flagCode: 'de' | 'bg' | 'gb' | 'tr';
}

export const LOCALE_OPTIONS: readonly LocaleOption[] = [
  { code: 'de', shortLabel: 'DE', nativeName: 'Deutsch', flagCode: 'de' },
  { code: 'bg', shortLabel: 'BG', nativeName: 'Български', flagCode: 'bg' },
  { code: 'en', shortLabel: 'EN', nativeName: 'English', flagCode: 'gb' },
  { code: 'tr', shortLabel: 'TR', nativeName: 'Türkçe', flagCode: 'tr' },
];

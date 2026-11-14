import 'server-only';
import type { AllMessages, CatalogMessagesBundle, UiMessagesBundle } from './global';
import type { SupportedLocale } from './types';

const UI_LOADERS: Record<SupportedLocale, () => Promise<UiMessagesBundle>> = {
  de: () => import('../../../messages/de.json').then((mod) => mod.default),
  bg: () => import('../../../messages/bg.json').then((mod) => mod.default),
  en: () => import('../../../messages/en.json').then((mod) => mod.default),
  tr: () => import('../../../messages/tr.json').then((mod) => mod.default),
};

const CATALOG_LOADERS: Record<SupportedLocale, () => Promise<CatalogMessagesBundle>> = {
  de: () => import('../../../messages/demos/de.json').then((mod) => mod.default),
  bg: () => import('../../../messages/demos/bg.json').then((mod) => mod.default),
  en: () => import('../../../messages/demos/en.json').then((mod) => mod.default),
  tr: () => import('../../../messages/demos/tr.json').then((mod) => mod.default),
};

export const loadCatalogBundle = async (
  locale: SupportedLocale
): Promise<CatalogMessagesBundle> => {
  return CATALOG_LOADERS[locale]();
};

export const loadAllMessages = async (locale: SupportedLocale): Promise<AllMessages> => {
  const [uiMessages, catalogMessages] = await Promise.all([
    UI_LOADERS[locale](),
    CATALOG_LOADERS[locale](),
  ]);

  return {
    ...uiMessages,
    catalog: catalogMessages,
  };
};

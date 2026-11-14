import type uiMessages from '../../../messages/de.json';
import type catalogMessages from '../../../messages/demos/de.json';
import type { SupportedLocale } from './types';

export type UiMessagesBundle = typeof uiMessages;
export type CatalogMessagesBundle = typeof catalogMessages;

export type AllMessages = UiMessagesBundle & {
  catalog: CatalogMessagesBundle;
};

declare module 'next-intl' {
  interface AppConfig {
    Locale: SupportedLocale;
    Messages: AllMessages;
  }
}

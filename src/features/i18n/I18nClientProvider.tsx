'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { ALL_MESSAGE_BUNDLES } from './bundles';
import type { AllMessages } from './global';
import { isSupportedLocale, LOCALE_COOKIE_NAME, type SupportedLocale } from './types';

interface I18nContextValue {
  locale: SupportedLocale;
  setLocale: (nextLocale: SupportedLocale) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export const useI18nSwitcher = (): I18nContextValue => {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18nSwitcher must be used within I18nClientProvider.');
  }
  return ctx;
};

interface I18nClientProviderProps {
  initialLocale: SupportedLocale;
  initialMessages: AllMessages;
  children: React.ReactNode;
}

export const I18nClientProvider: React.FC<I18nClientProviderProps> = ({
  initialLocale,
  initialMessages,
  children,
}) => {
  const [currentLocale, setCurrentLocale] = useState<SupportedLocale>(initialLocale);
  const [currentMessages, setCurrentMessages] = useState<AllMessages>(initialMessages);

  useEffect(() => {
    document.documentElement.lang = currentLocale;
  }, [currentLocale]);

  const handleSetLocale = (nextLocale: SupportedLocale) => {
    if (!isSupportedLocale(nextLocale) || nextLocale === currentLocale) {
      return;
    }

    try {
      document.cookie = `${LOCALE_COOKIE_NAME}=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {
      // Ignore if document is unavailable
    }

    setCurrentLocale(nextLocale);
    setCurrentMessages(ALL_MESSAGE_BUNDLES[nextLocale]);
  };

  return (
    <I18nContext.Provider value={{ locale: currentLocale, setLocale: handleSetLocale }}>
      <NextIntlClientProvider
        locale={currentLocale}
        messages={currentMessages}
        timeZone="Europe/Berlin"
      >
        {children}
      </NextIntlClientProvider>
    </I18nContext.Provider>
  );
};

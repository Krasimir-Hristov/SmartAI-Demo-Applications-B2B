import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';
import { loadAllMessages } from './serverLoaders';
import { DEFAULT_LOCALE, isSupportedLocale, LOCALE_COOKIE_NAME } from './types';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(LOCALE_COOKIE_NAME)?.value;
  const locale = isSupportedLocale(cookieValue) ? cookieValue : DEFAULT_LOCALE;
  const messages = await loadAllMessages(locale);

  return {
    locale,
    messages,
    timeZone: 'Europe/Berlin',
  };
});

import type { Metadata } from 'next';
import { Space_Grotesk, Manrope, JetBrains_Mono } from 'next/font/google';
import { cookies } from 'next/headers';
import 'flag-icons/css/flag-icons.min.css';
import './globals.css';
import {
  DEFAULT_LOCALE,
  I18nClientProvider,
  isSupportedLocale,
  LOCALE_COOKIE_NAME,
  type SupportedLocale,
} from '@/features/i18n';
import { loadAllMessages } from '@/features/i18n/serverLoaders';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'cyrillic'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'SmartAI Demo Applications — Custom RAG Client Portals',
  description:
    'Personalisierte Kundenportale mit isoliertem RAG KI-Berater für DACH-Unternehmen über 8 Branchen (DE / BG / EN / TR).',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = async ({ children }) => {
  const cookieStore = await cookies();
  const rawCookie = cookieStore.get(LOCALE_COOKIE_NAME)?.value;
  const locale: SupportedLocale = isSupportedLocale(rawCookie) ? rawCookie : DEFAULT_LOCALE;
  const messages = await loadAllMessages(locale);

  return (
    <html
      lang={locale}
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#09090b] text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
        <I18nClientProvider initialLocale={locale} initialMessages={messages}>
          {children}
        </I18nClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;

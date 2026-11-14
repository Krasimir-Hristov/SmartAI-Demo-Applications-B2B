import type { Metadata } from 'next';
import { Space_Grotesk, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';

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
    'Interactive B2B presentation showcase of custom RAG AI client portals for DACH businesses across 8 verticals.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html
      lang="bg"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#09090b] text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

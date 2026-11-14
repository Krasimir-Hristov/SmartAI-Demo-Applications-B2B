import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocale } from 'next-intl/server';
import React from 'react';
import { getDemoBySlug } from '@/features/catalog';
import { DEFAULT_LOCALE, isSupportedLocale } from '@/features/i18n';
import { loadCatalogBundle } from '@/features/i18n/serverLoaders';
import { DemoPortalShell } from '@/features/verticals';

interface DemoPageProps {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: DemoPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);

  if (!demo) {
    return {
      title: 'Portal nicht gefunden — SmartAI Demo Applications',
      description: 'Das angeforderte Kundenportal wurde nicht gefunden.',
    };
  }

  const rawLocale = await getLocale();
  const locale = isSupportedLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const catalogBundle = await loadCatalogBundle(locale);
  const demoCopy = catalogBundle[demo.slug];

  return {
    title: `${demoCopy.title} | ${demo.companyName} — SmartAI Demo`,
    description: `${demoCopy.industry} (${demo.city}) — ${demoCopy.subtitle}`,
  };
};

const DemoPortalPage: React.FC<DemoPageProps> = async ({ params }) => {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);

  if (!demo) {
    notFound();
  }

  return <DemoPortalShell demo={demo} />;
};

export default DemoPortalPage;

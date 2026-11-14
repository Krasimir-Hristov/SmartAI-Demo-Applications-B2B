'use client';

import { useMessages } from 'next-intl';
import type { AllMessages } from '@/features/i18n';
import type { DemoVerticalCopy, DemoVerticalSlug } from './types';

export const useDemoCopy = (slug: DemoVerticalSlug): DemoVerticalCopy => {
  const messages = useMessages() as AllMessages;
  return messages.catalog[slug];
};

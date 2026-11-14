import type { Metadata } from 'next';
import React from 'react';
import { ShowcaseHub } from '@/features/showcase';

export const metadata: Metadata = {
  title: 'SmartAI Demo Applications — Übersicht & 8 Branchenportale',
  description:
    'Interaktive Präsentation von 8 spezialisierten DACH-Kundenportalen mit dokumentbasiertem RAG-Assistenten und Admin-Dashboard-Vorschau.',
};

const HomePage: React.FC = () => {
  return <ShowcaseHub />;
};

export default HomePage;

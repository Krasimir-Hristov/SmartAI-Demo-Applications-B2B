export const DEMO_VERTICAL_SLUGS = [
  'marketing-agency',
  'real-estate',
  'auto-leasing',
  'medical-clinic',
  'construction-interior',
  'hospitality-stay',
  'legal-contracts',
  'finance-accounting',
] as const;

export type DemoVerticalSlug = (typeof DEMO_VERTICAL_SLUGS)[number];

export type DemoAccessMode = 'open_link' | 'open_link_qr' | 'pin_protected';

export interface DemoCredentials {
  username: string;
  demoPass: string;
  pin: string;
}

export interface DemoDocumentMeta {
  id: string;
  fileName: string;
  fileType: 'PDF' | 'XLSX' | 'CAD' | 'DOCX';
  sizeLabel: string;
  indexedChunks: number;
}

export interface DemoSectionMeta {
  id: string;
  badge: string;
  highlightMetric?: string;
}

export interface DemoAccentPalette {
  badgeClasses: string;
  borderHoverClasses: string;
  glowClasses: string;
  chipClasses: string;
  primaryButtonClasses: string;
}

export interface DemoVerticalConfig {
  slug: DemoVerticalSlug;
  numberLabel: string;
  accessMode: DemoAccessMode;
  credentials?: DemoCredentials;
  companyName: string;
  city: string;
  clientName: string;
  offerReference: string;
  headlineValue: string;
  previewImageSrc?: string;
  accent: DemoAccentPalette;
  documents: readonly DemoDocumentMeta[];
  dossierSections: readonly DemoSectionMeta[];
}

export interface DemoSectionCopy {
  title: string;
  summary: string;
  keyPoints: readonly string[];
}

export interface DemoVerticalCopy {
  industry: string;
  title: string;
  subtitle: string;
  aiPersonaName: string;
  aiWelcomeMessage: string;
  quickQuestions: readonly string[];
  documents: Record<string, string>;
  sections: Record<string, DemoSectionCopy>;
  agenticCapabilityHint: string;
}

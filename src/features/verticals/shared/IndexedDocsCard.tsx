'use client';

import React from 'react';
import { CheckCircle2, FileText, FolderLock } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useDemoCopy, type DemoVerticalConfig } from '@/features/catalog';
import { PORTAL_VISUAL_THEMES } from './portalThemes';

interface IndexedDocsCardProps {
  demo: DemoVerticalConfig;
  accentIconClass?: string;
}

export const IndexedDocsCard: React.FC<IndexedDocsCardProps> = ({ demo }) => {
  const tPortal = useTranslations('portal');
  const demoCopy = useDemoCopy(demo.slug);
  const theme = PORTAL_VISUAL_THEMES[demo.slug];

  return (
    <section
      aria-label={tPortal('documentsHeading')}
      className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <FolderLock className={`h-4 w-4 ${theme.accentIconClass}`} aria-hidden="true" />
          <h2 className="text-base font-bold text-slate-900 font-display">
            {tPortal('documentsHeading')}
          </h2>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${theme.accentBadgeClass}`}
        >
          <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
          <span>RAG Verified • {demo.documents.length} Docs</span>
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {demo.documents.map((doc) => (
          <div
            key={doc.id}
            className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-slate-50/80 p-3.5 transition hover:border-slate-300 hover:bg-white hover:shadow-sm"
          >
            <div className="mb-2.5 flex items-center justify-between gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-xl border ${theme.accentBorderClass} ${theme.accentSoftBgClass}`}
              >
                <FileText className={`h-4 w-4 ${theme.accentIconClass}`} aria-hidden="true" />
              </div>
              <span className="rounded-md border border-slate-200 bg-white px-2 py-0.5 font-mono text-[10px] font-semibold text-slate-600">
                {doc.fileType} • {doc.sizeLabel}
              </span>
            </div>
            <div>
              <p className="truncate text-xs font-bold text-slate-900">
                {demoCopy.documents[doc.id] ?? doc.fileName}
              </p>
              <p className="mt-0.5 truncate font-mono text-[11px] text-slate-500">{doc.fileName}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

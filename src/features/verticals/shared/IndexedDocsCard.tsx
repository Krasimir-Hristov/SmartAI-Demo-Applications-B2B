'use client';

import React from 'react';
import { FileText } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useDemoCopy, type DemoVerticalConfig } from '@/features/catalog';

interface IndexedDocsCardProps {
  demo: DemoVerticalConfig;
  accentIconClass?: string;
}

export const IndexedDocsCard: React.FC<IndexedDocsCardProps> = ({
  demo,
  accentIconClass = 'text-emerald-400',
}) => {
  const tPortal = useTranslations('portal');
  const demoCopy = useDemoCopy(demo.slug);

  return (
    <section
      aria-label={tPortal('documentsHeading')}
      className="rounded-2xl border border-zinc-800 bg-[#121216]/90 p-5"
    >
      <h2 className="mb-3 text-sm font-bold text-zinc-100">{tPortal('documentsHeading')}</h2>
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
        {demo.documents.map((doc) => (
          <div
            key={doc.id}
            className="rounded-xl border border-zinc-800/90 bg-zinc-950/75 p-3"
          >
            <div className="mb-1.5 flex items-center justify-between gap-2">
              <FileText className={`h-4 w-4 ${accentIconClass}`} aria-hidden="true" />
              <span className="rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-[10px] text-zinc-400">
                {doc.fileType} • {doc.sizeLabel}
              </span>
            </div>
            <p className="truncate text-xs font-semibold text-zinc-100">
              {demoCopy.documents[doc.id] ?? doc.fileName}
            </p>
            <p className="truncate font-mono text-[11px] text-zinc-500">{doc.fileName}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

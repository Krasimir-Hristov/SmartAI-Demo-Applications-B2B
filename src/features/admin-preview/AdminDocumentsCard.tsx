'use client';

import React from 'react';
import { FileText, Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';

export interface AdminDisplayDoc {
  id: string;
  fileName: string;
  sizeLabel: string;
  indexedChunks: number;
  displayLabel: string;
}

interface AdminDocumentsCardProps {
  documents: readonly AdminDisplayDoc[];
  onAddDocument: () => void;
}

export const AdminDocumentsCard: React.FC<AdminDocumentsCardProps> = ({
  documents,
  onAddDocument,
}) => {
  const tAdmin = useTranslations('admin');
  const tCard = useTranslations('card');

  return (
    <article className="rounded-2xl border border-zinc-800 bg-[#121216]/90 p-5 flex flex-col justify-between">
      <div>
        <h2 className="text-base font-semibold text-zinc-100 mb-1">
          {tAdmin('docsCardTitle')}
        </h2>
        <p className="text-xs text-zinc-400 mb-4">{tAdmin('docsCardHint')}</p>

        <ul className="space-y-2.5 mb-5">
          {documents.map((doc) => (
            <li
              key={doc.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-zinc-800/90 bg-zinc-950/70 px-3 py-2.5"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <FileText className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-zinc-100">{doc.fileName}</p>
                  <p className="truncate text-[11px] text-zinc-500">
                    {doc.displayLabel} • {doc.sizeLabel}
                  </p>
                </div>
              </div>
              <span className="shrink-0 rounded-md border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] font-mono text-zinc-400">
                {doc.indexedChunks} {tCard('chunksSuffix')}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={onAddDocument}
        aria-label={tAdmin('addDocButton')}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
      >
        <Plus className="h-4 w-4" aria-hidden="true" />
        <span>{tAdmin('addDocButton')}</span>
      </button>
    </article>
  );
};

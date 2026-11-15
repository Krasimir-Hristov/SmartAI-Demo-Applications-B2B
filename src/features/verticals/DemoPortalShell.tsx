'use client';

import React, { useEffect, useState } from 'react';
import { Bot } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { AdminDashboardPreview } from '@/features/admin-preview';
import type { DemoVerticalConfig } from '@/features/catalog';
import { RagChatWidget } from '@/features/rag-chat';
import {
  PresentationTopBar,
  QrLinkModal,
  type PresentationMode,
} from '@/features/showcase';
import { DemoDossierView } from './DemoDossierView';
import { AutoLeasingPortal } from './auto-leasing';
import { MarketingAgencyPortal } from './marketing';
import { MedicalClinicPortal } from './medical-clinic';
import { ProtectedPinGate } from './ProtectedPinGate';
import { RealEstatePortal } from './real-estate';

interface DemoPortalShellProps {
  demo: DemoVerticalConfig;
}

export const DemoPortalShell: React.FC<DemoPortalShellProps> = ({ demo }) => {
  const tPortal = useTranslations('portal');
  const [mode, setMode] = useState<PresentationMode>('client');
  const [isUnlocked, setIsUnlocked] = useState(demo.accessMode !== 'pin_protected');
  const [isChatCollapsed, setIsChatCollapsed] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [demo.slug]);

  const renderClientPortal = () => {
    if (demo.slug === 'marketing-agency') {
      return (
        <MarketingAgencyPortal
          demo={demo}
          isChatCollapsed={isChatCollapsed}
          onExpandChat={() => setIsChatCollapsed(false)}
        />
      );
    }

    if (demo.slug === 'real-estate') {
      return (
        <RealEstatePortal
          demo={demo}
          isChatCollapsed={isChatCollapsed}
          onExpandChat={() => setIsChatCollapsed(false)}
        />
      );
    }

    if (demo.slug === 'auto-leasing') {
      return (
        <AutoLeasingPortal
          demo={demo}
          isChatCollapsed={isChatCollapsed}
          onExpandChat={() => setIsChatCollapsed(false)}
        />
      );
    }

    if (demo.slug === 'medical-clinic') {
      return (
        <MedicalClinicPortal
          demo={demo}
          isChatCollapsed={isChatCollapsed}
          onExpandChat={() => setIsChatCollapsed(false)}
        />
      );
    }

    return (
      <DemoDossierView
        demo={demo}
        isChatCollapsed={isChatCollapsed}
        onExpandChat={() => setIsChatCollapsed(false)}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-zinc-100">
      <PresentationTopBar
        mode={mode}
        onModeChange={setMode}
        backHref="/"
        isInnerPortal
        contextLabel={`#${demo.numberLabel} • ${demo.companyName}`}
        onOpenQr={() => setShowQrModal(true)}
      />

      <main className="flex-1">
        {mode === 'admin' ? (
          <AdminDashboardPreview
            initialSlug={demo.slug}
            onOpenQr={() => setShowQrModal(true)}
          />
        ) : demo.accessMode === 'pin_protected' && !isUnlocked && demo.credentials ? (
          <ProtectedPinGate
            demo={demo}
            credentials={demo.credentials}
            onUnlock={() => setIsUnlocked(true)}
          />
        ) : (
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-start">
              {renderClientPortal()}

              {!isChatCollapsed && (
                <aside className="lg:col-span-5 lg:sticky lg:top-20">
                  <RagChatWidget demo={demo} onCollapse={() => setIsChatCollapsed(true)} />
                </aside>
              )}
            </div>

            {isChatCollapsed && (
              <button
                type="button"
                onClick={() => setIsChatCollapsed(false)}
                aria-label={tPortal('chatLauncher')}
                className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/40 bg-emerald-500 px-5 py-3.5 text-sm font-bold text-zinc-950 shadow-2xl transition hover:bg-emerald-400"
              >
                <Bot className="h-5 w-5" aria-hidden="true" />
                <span>{tPortal('chatLauncher')}</span>
              </button>
            )}
          </div>
        )}
      </main>

      <QrLinkModal demo={showQrModal ? demo : null} onClose={() => setShowQrModal(false)} />
    </div>
  );
};

'use client';

import React, { useState } from 'react';
import { Check, Plus, UserCheck, Wrench } from 'lucide-react';
import { useI18nSwitcher } from '@/features/i18n';
import {
  DatabaseDrawing,
  DepartmentDrawing,
  JevRouterDrawing,
  RagVaultDrawing,
  SupervisorDrawing,
} from './ArchitectureIllustrations';
import { getEnterpriseCopy } from './enterpriseData';
import type { DepartmentId, DepartmentTreeNode } from './types';

const DEPT_ACCENT_STYLES: Record<
  DepartmentTreeNode['accent'],
  { card: string; activeCard: string; tag: string; dot: string }
> = {
  emerald: {
    card: 'border-emerald-500/35 bg-zinc-950/90 hover:border-emerald-400',
    activeCard: 'border-2 border-emerald-400 bg-emerald-950/30 shadow-lg shadow-emerald-950/50',
    tag: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    dot: 'bg-emerald-400',
  },
  amber: {
    card: 'border-amber-500/35 bg-zinc-950/90 hover:border-amber-400',
    activeCard: 'border-2 border-amber-400 bg-amber-950/30 shadow-lg shadow-amber-950/50',
    tag: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    dot: 'bg-amber-400',
  },
  sky: {
    card: 'border-sky-500/35 bg-zinc-950/90 hover:border-sky-400',
    activeCard: 'border-2 border-sky-400 bg-sky-950/30 shadow-lg shadow-sky-950/50',
    tag: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
    dot: 'bg-sky-400',
  },
  violet: {
    card: 'border-violet-500/35 bg-zinc-950/90 hover:border-violet-400',
    activeCard: 'border-2 border-violet-400 bg-violet-950/30 shadow-lg shadow-violet-950/50',
    tag: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    dot: 'bg-violet-400',
  },
  rose: {
    card: 'border-rose-500/35 bg-zinc-950/90 hover:border-rose-400',
    activeCard: 'border-2 border-rose-400 bg-rose-950/30 shadow-lg shadow-rose-950/50',
    tag: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    dot: 'bg-rose-400',
  },
};

export const EnterpriseArchitectureView: React.FC = () => {
  const { locale } = useI18nSwitcher();
  const copy = getEnterpriseCopy(locale);

  const [focusedDept, setFocusedDept] = useState<DepartmentId | null>('finance');
  const [isUpgradeAdded, setIsUpgradeAdded] = useState(false);

  return (
    <div className="bg-[#09090b] text-zinc-100 py-6 sm:py-8 px-3 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Compact Title Bar */}
        <header className="text-center mb-6">
          <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-zinc-50 font-display">
            {copy.title}
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-emerald-300 font-semibold">
            {copy.subtitle}
          </p>
          <p className="mt-0.5 text-[11px] text-zinc-500">{copy.clickHint}</p>
        </header>

        {/* VISUAL TREE DIAGRAM CANVAS */}
        <div className="rounded-3xl border border-zinc-800/90 bg-[#0d0e12] p-4 sm:p-7 shadow-2xl">
          {/* LEVEL 1: ALL EMPLOYEES */}
          <div className="flex flex-col items-center">
            <span className="mb-2.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-sky-300">
              {copy.level1Tag}
            </span>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {copy.users.map((u) => (
                <div
                  key={u.id}
                  className="inline-flex items-center gap-2 rounded-2xl border border-sky-500/35 bg-zinc-950 px-3.5 py-2 shadow-sm"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-sky-500/20 text-sky-300">
                    <UserCheck className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-100">
                    {u.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Vertical Line 1 -> 2 */}
            <div className="flex flex-col items-center my-1" aria-hidden="true">
              <div className="h-5 w-0.5 bg-linear-to-b from-sky-400 to-emerald-400" />
              <div className="h-2 w-2 rotate-45 border-b-2 border-r-2 border-emerald-400 -mt-1" />
            </div>
          </div>

          {/* LEVEL 2: SUPERVISOR + JEV + DB & RAG */}
          <div className="flex flex-col items-center">
            <span className="mb-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-emerald-300">
              {copy.level2Tag}
            </span>

            <div className="grid grid-cols-1 gap-3 lg:grid-cols-11 items-center w-full max-w-5xl">
              {/* Left: Database */}
              <div className="lg:col-span-3 flex items-center gap-3 rounded-2xl border border-sky-500/45 bg-zinc-950 p-3.5 shadow-md">
                <DatabaseDrawing />
                <div>
                  <p className="text-sm font-extrabold text-zinc-50">{copy.dbNode.title}</p>
                  <p className="text-[11px] font-medium text-sky-300">{copy.dbNode.sub}</p>
                </div>
              </div>

              {/* Left Horizontal Connector */}
              <div className="hidden lg:flex lg:col-span-1 items-center justify-center" aria-hidden="true">
                <div className="w-full flex items-center">
                  <div className="h-2 w-2 rotate-45 border-b-2 border-l-2 border-sky-400 -mr-1" />
                  <div className="h-0.5 flex-1 bg-linear-to-r from-sky-400 to-emerald-400" />
                  <div className="h-2 w-2 rotate-45 border-t-2 border-r-2 border-emerald-400 -ml-1" />
                </div>
              </div>

              {/* Center Stack: Supervisor + Jev */}
              <div className="lg:col-span-3 flex flex-col items-center">
                {/* Supervisor Node */}
                <div className="w-full flex items-center gap-3 rounded-2xl border-2 border-emerald-400 bg-emerald-950/25 p-3.5 shadow-lg shadow-emerald-950/50">
                  <SupervisorDrawing />
                  <div>
                    <span className="block text-[9px] font-extrabold uppercase tracking-wider text-emerald-300">
                      {copy.supervisorNode.tag}
                    </span>
                    <p className="text-base font-extrabold text-white">
                      {copy.supervisorNode.title}
                    </p>
                    <p className="text-[11px] text-zinc-300">{copy.supervisorNode.sub}</p>
                  </div>
                </div>

                {/* Short Connector Supervisor <-> Jev */}
                <div className="h-4 w-0.5 bg-amber-400" aria-hidden="true" />

                {/* Jev Node */}
                <div className="w-full flex items-center gap-3 rounded-2xl border-2 border-amber-400 bg-amber-950/25 p-3.5 shadow-lg shadow-amber-950/50">
                  <JevRouterDrawing />
                  <div>
                    <span className="block text-[9px] font-extrabold uppercase tracking-wider text-amber-300">
                      {copy.jevNode.tag}
                    </span>
                    <p className="text-base font-extrabold text-white">
                      {copy.jevNode.title}
                    </p>
                    <p className="text-[11px] text-amber-200">{copy.jevNode.sub}</p>
                  </div>
                </div>
              </div>

              {/* Right Horizontal Connector */}
              <div className="hidden lg:flex lg:col-span-1 items-center justify-center" aria-hidden="true">
                <div className="w-full flex items-center">
                  <div className="h-2 w-2 rotate-45 border-b-2 border-l-2 border-emerald-400 -mr-1" />
                  <div className="h-0.5 flex-1 bg-linear-to-r from-emerald-400 to-violet-400" />
                  <div className="h-2 w-2 rotate-45 border-t-2 border-r-2 border-violet-400 -ml-1" />
                </div>
              </div>

              {/* Right: RAG Chatbot */}
              <div className="lg:col-span-3 flex items-center gap-3 rounded-2xl border border-violet-500/45 bg-zinc-950 p-3.5 shadow-md">
                <RagVaultDrawing />
                <div>
                  <p className="text-sm font-extrabold text-zinc-50">{copy.ragNode.title}</p>
                  <p className="text-[11px] font-medium text-violet-300">{copy.ragNode.sub}</p>
                </div>
              </div>
            </div>

            {/* Tree Stem Down from Jev to Horizontal Distribution Line */}
            <div className="flex flex-col items-center w-full" aria-hidden="true">
              <div className="h-5 w-0.5 bg-amber-400" />
              <div className="hidden lg:block w-[82%] h-0.5 bg-linear-to-r from-emerald-400 via-amber-400 to-rose-400" />
            </div>
          </div>

          {/* LEVEL 3 (DEPARTMENTS AS TOOLS) + LEVEL 4 (SUB-TOOLS TREE UNDER EACH) */}
          <div className="mt-2">
            <div className="text-center mb-3">
              <span className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-amber-300">
                {copy.level3Tag}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 items-start">
              {copy.departments.map((dept) => {
                const style = DEPT_ACCENT_STYLES[dept.accent];
                const isSelected = focusedDept === dept.id;
                const isLockedUpgrade = Boolean(dept.isUpgradeable && !isUpgradeAdded);

                return (
                  <div key={dept.id} className="flex flex-col items-center">
                    {/* Vertical Branch Drop from Top Bar */}
                    <div
                      className={`hidden lg:block h-4 w-0.5 -mt-3 mb-1 ${
                        isSelected ? 'bg-emerald-400 w-1' : 'bg-zinc-700'
                      }`}
                      aria-hidden="true"
                    />

                    {/* Department Tool Node (Level 3) */}
                    <div
                      onClick={() =>
                        setFocusedDept(focusedDept === dept.id ? null : dept.id)
                      }
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setFocusedDept(focusedDept === dept.id ? null : dept.id);
                        }
                      }}
                      aria-label={dept.name}
                      className={`w-full cursor-pointer rounded-2xl p-3.5 transition ${
                        isLockedUpgrade
                          ? 'border-2 border-dashed border-rose-500/50 bg-zinc-950/50 opacity-85 hover:opacity-100'
                          : isSelected
                            ? style.activeCard
                            : `border ${style.card}`
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <span
                          className={`rounded-md border px-2 py-0.5 text-[9px] font-extrabold uppercase ${style.tag}`}
                        >
                          {dept.toolTag}
                        </span>

                        {dept.isUpgradeable && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsUpgradeAdded((prev) => !prev);
                              setFocusedDept(dept.id);
                            }}
                            aria-label={
                              isUpgradeAdded
                                ? copy.upgradeActiveLabel
                                : copy.upgradeLockedLabel
                            }
                            className={`inline-flex items-center gap-1 rounded-lg px-2 py-0.5 text-[10px] font-extrabold transition ${
                              isUpgradeAdded
                                ? 'bg-emerald-500 text-zinc-950'
                                : 'bg-amber-400 text-zinc-950 hover:bg-amber-300'
                            }`}
                          >
                            {isUpgradeAdded ? (
                              <>
                                <Check className="h-3 w-3" aria-hidden="true" />
                                <span>{copy.upgradeActiveLabel}</span>
                              </>
                            ) : (
                              <>
                                <Plus className="h-3 w-3" aria-hidden="true" />
                                <span>{copy.upgradeLockedLabel}</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      <div className="flex items-center gap-2.5">
                        <DepartmentDrawing id={dept.id} />
                        <p className="text-sm font-extrabold text-zinc-50 leading-tight">
                          {dept.name}
                        </p>
                      </div>
                    </div>

                    {/* LEVEL 4: SUB-TOOLS TREE BRANCHES DIRECTLY UNDER DEPARTMENT */}
                    <div
                      className={`w-full pl-4 pt-1.5 space-y-1.5 transition-opacity ${
                        isLockedUpgrade ? 'opacity-45' : 'opacity-100'
                      }`}
                    >
                      {dept.subTools.map((sub) => (
                        <div key={sub.id} className="relative flex items-center">
                          {/* Tree L-Connector (`├──`) */}
                          <div
                            className={`mr-2 h-5 w-3 border-l-2 border-b-2 rounded-bl-md -mt-2 ${
                              isSelected ? 'border-emerald-400' : 'border-zinc-700'
                            }`}
                            aria-hidden="true"
                          />
                          <div
                            className={`flex-1 flex items-center gap-2 rounded-xl border px-2.5 py-2 ${
                              isSelected
                                ? 'border-emerald-500/50 bg-emerald-950/20 text-zinc-50'
                                : 'border-zinc-800/90 bg-zinc-950/85 text-zinc-300'
                            }`}
                          >
                            <Wrench
                              className={`h-3.5 w-3.5 shrink-0 ${
                                isSelected ? 'text-emerald-400' : 'text-amber-400'
                              }`}
                              aria-hidden="true"
                            />
                            <span className="text-xs font-bold leading-none">
                              {sub.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-4">
              <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-violet-300">
                {copy.level4Tag}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

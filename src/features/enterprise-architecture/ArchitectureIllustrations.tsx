'use client';

import React from 'react';
import type { DepartmentId } from './types';

export const SupervisorDrawing: React.FC = () => (
  <svg viewBox="0 0 64 64" className="h-12 w-12 shrink-0" aria-hidden="true">
    <defs>
      <linearGradient id="supGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
    <rect x="10" y="18" width="44" height="36" rx="12" fill="url(#supGrad)" />
    <path
      d="M20 14 L26 6 L32 13 L38 6 L44 14 Z"
      fill="#fbbf24"
      stroke="#fef3c7"
      strokeWidth="1.5"
    />
    <circle cx="24" cy="34" r="4.5" fill="#09090b" />
    <circle cx="40" cy="34" r="4.5" fill="#09090b" />
    <circle cx="25" cy="33" r="1.5" fill="#a7f3d0" />
    <circle cx="41" cy="33" r="1.5" fill="#a7f3d0" />
    <rect x="23" y="44" width="18" height="3.5" rx="1.75" fill="#09090b" />
  </svg>
);

export const JevRouterDrawing: React.FC = () => (
  <svg viewBox="0 0 64 64" className="h-12 w-12 shrink-0" aria-hidden="true">
    <defs>
      <linearGradient id="jevGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>
    <polygon
      points="32,6 54,19 54,45 32,58 10,45 10,19"
      fill="url(#jevGrad)"
      stroke="#fde68a"
      strokeWidth="2"
    />
    <path
      d="M35 16 L21 34 H32 L29 48 L43 30 H32 Z"
      fill="#09090b"
    />
  </svg>
);

export const DatabaseDrawing: React.FC = () => (
  <svg viewBox="0 0 64 64" className="h-11 w-11 shrink-0" aria-hidden="true">
    <ellipse cx="32" cy="14" rx="20" ry="7" fill="#38bdf8" />
    <path d="M12 14 V28 C12 32 52 32 52 28 V14" fill="#0284c7" />
    <ellipse cx="32" cy="28" rx="20" ry="7" fill="#7dd3fc" />
    <path d="M12 28 V42 C12 46 52 46 52 42 V28" fill="#0369a1" />
    <ellipse cx="32" cy="42" rx="20" ry="7" fill="#38bdf8" />
    <circle cx="44" cy="23" r="2" fill="#e0f2fe" />
    <circle cx="44" cy="37" r="2" fill="#e0f2fe" />
  </svg>
);

export const RagVaultDrawing: React.FC = () => (
  <svg viewBox="0 0 64 64" className="h-11 w-11 shrink-0" aria-hidden="true">
    <rect x="14" y="10" width="28" height="38" rx="4" fill="#a78bfa" />
    <rect x="20" y="16" width="28" height="38" rx="4" fill="#7c3aed" stroke="#ddd6fe" strokeWidth="1.5" />
    <line x1="26" y1="26" x2="42" y2="26" stroke="#ede9fe" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="26" y1="33" x2="42" y2="33" stroke="#ede9fe" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="26" y1="40" x2="36" y2="40" stroke="#ede9fe" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="44" cy="44" r="8" fill="#34d399" stroke="#09090b" strokeWidth="2" />
  </svg>
);

export const DepartmentDrawing: React.FC<{ id: DepartmentId }> = ({ id }) => {
  switch (id) {
    case 'sales':
      return (
        <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0" aria-hidden="true">
          <rect x="6" y="14" width="36" height="26" rx="6" fill="#10b981" />
          <path d="M18 14 V10 C18 8 30 8 30 10 V14" stroke="#a7f3d0" strokeWidth="3" fill="none" />
          <path d="M14 31 L21 24 L27 28 L35 19" stroke="#09090b" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      );
    case 'finance':
      return (
        <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0" aria-hidden="true">
          <circle cx="24" cy="24" r="18" fill="#f59e0b" stroke="#fde68a" strokeWidth="2" />
          <text x="24" y="31" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#09090b">
            €
          </text>
        </svg>
      );
    case 'warehouse':
      return (
        <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0" aria-hidden="true">
          <polygon points="24,6 42,15 24,24 6,15" fill="#7dd3fc" />
          <polygon points="6,15 24,24 24,42 6,33" fill="#0284c7" />
          <polygon points="42,15 24,24 24,42 42,33" fill="#0369a1" />
        </svg>
      );
    case 'legal':
      return (
        <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0" aria-hidden="true">
          <rect x="10" y="6" width="28" height="36" rx="4" fill="#8b5cf6" stroke="#ddd6fe" strokeWidth="1.5" />
          <line x1="16" y1="16" x2="32" y2="16" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="16" y1="23" x2="32" y2="23" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="30" cy="33" r="4.5" fill="#fbbf24" />
        </svg>
      );
    case 'hr':
      return (
        <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0" aria-hidden="true">
          <circle cx="24" cy="16" r="7" fill="#f43f5e" />
          <path d="M11 38 C11 29 37 29 37 38" fill="#fb7185" />
          <circle cx="37" cy="14" r="6" fill="#34d399" />
          <path d="M37 11 V17 M34 14 H40" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
};

'use client';

import React, { useState } from 'react';
import { KeyRound, Lock, ShieldCheck, Unlock, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useDemoCopy, type DemoCredentials, type DemoVerticalConfig } from '@/features/catalog';

interface ProtectedPinGateProps {
  demo: DemoVerticalConfig;
  credentials: DemoCredentials;
  onUnlock: () => void;
}

export const ProtectedPinGate: React.FC<ProtectedPinGateProps> = ({
  demo,
  credentials,
  onUnlock,
}) => {
  const tGate = useTranslations('pinGate');
  const demoCopy = useDemoCopy(demo.slug);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleManualSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      username.trim() === credentials.username &&
      password === credentials.password &&
      pin.trim() === credentials.pin
    ) {
      setError(null);
      onUnlock();
      return;
    }
    setError(tGate('invalidError'));
  };

  const handleAutoFillUnlock = () => {
    setUsername(credentials.username);
    setPassword(credentials.password);
    setPin(credentials.pin);
    setError(null);
    onUnlock();
  };

  return (
    <section
      aria-label={tGate('title')}
      className="mx-auto flex max-w-xl flex-col items-center px-4 py-10 sm:px-6 lg:py-14"
    >
      <div className="w-full rounded-3xl border border-zinc-800 bg-[#121216]/95 p-6 sm:p-8 shadow-2xl">
        <div className="mb-4 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/35 bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-300">
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{tGate('badge')}</span>
          </span>
          <span className="font-mono text-xs text-zinc-500">{demo.offerReference}</span>
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-zinc-50 font-display mb-1">
          {tGate('title')}
        </h1>
        <p className="text-xs font-medium text-emerald-300 mb-3">
          #{demo.numberLabel} • {demo.companyName} ({demo.city})
        </p>
        <p className="text-sm text-zinc-400 leading-relaxed mb-6">{tGate('description')}</p>

        <div className="mb-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-200">
              <KeyRound className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              <span>{tGate('demoCredentialsTitle')}</span>
            </span>
          </div>
          <div className="grid grid-cols-1 gap-1.5 font-mono text-xs text-zinc-200 sm:grid-cols-3 mb-3.5">
            <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/70 px-2.5 py-1.5">
              <span className="block text-[10px] text-zinc-500">User</span>
              <span className="truncate block">{credentials.username}</span>
            </div>
            <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/70 px-2.5 py-1.5">
              <span className="block text-[10px] text-zinc-500">Pass</span>
              <span className="truncate block">{credentials.password}</span>
            </div>
            <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/70 px-2.5 py-1.5">
              <span className="block text-[10px] text-zinc-500">PIN</span>
              <span>{credentials.pin}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAutoFillUnlock}
            aria-label={tGate('autoFillButton')}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-bold text-zinc-950 transition hover:bg-emerald-400"
          >
            <Zap className="h-4 w-4" aria-hidden="true" />
            <span>{tGate('autoFillButton')}</span>
          </button>
        </div>

        <form onSubmit={handleManualSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="gate-username"
              className="mb-1.5 block text-xs font-semibold text-zinc-300"
            >
              {tGate('usernameLabel')}
            </label>
            <input
              id="gate-username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder={credentials.username}
              aria-label={tGate('usernameLabel')}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 outline-none focus:border-emerald-500/50"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="gate-password"
                className="mb-1.5 block text-xs font-semibold text-zinc-300"
              >
                {tGate('passwordLabel')}
              </label>
              <input
                id="gate-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••••••"
                aria-label={tGate('passwordLabel')}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 outline-none focus:border-emerald-500/50"
              />
            </div>

            <div>
              <label
                htmlFor="gate-pin"
                className="mb-1.5 block text-xs font-semibold text-zinc-300"
              >
                {tGate('pinLabel')}
              </label>
              <input
                id="gate-pin"
                type="text"
                inputMode="numeric"
                maxLength={4}
                value={pin}
                onChange={(event) => setPin(event.target.value.replace(/\D/g, '').slice(0, 4))}
                placeholder="••••"
                aria-label={tGate('pinLabel')}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-center font-mono text-sm tracking-[0.4em] text-zinc-100 placeholder-zinc-600 outline-none focus:border-emerald-500/50"
              />
            </div>
          </div>

          {error && (
            <p
              role="alert"
              className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-3.5 py-2 text-xs text-rose-200"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            aria-label={tGate('unlockButton')}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-zinc-600 hover:bg-zinc-800"
          >
            <Unlock className="h-4 w-4 text-emerald-400" aria-hidden="true" />
            <span>{tGate('unlockButton')}</span>
          </button>
        </form>

        <div className="mt-5 flex items-center gap-2 border-t border-zinc-800/80 pt-4 text-[11px] text-zinc-500">
          <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
          <span>
            {demoCopy.industry} • {tGate('backReminder')}
          </span>
        </div>
      </div>
    </section>
  );
};

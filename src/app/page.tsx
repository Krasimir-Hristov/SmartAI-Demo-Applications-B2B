import React from 'react';

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#09090b] via-[#0c0c10] to-[#09090b] flex items-center justify-center p-6">
      <section
        aria-label="SmartAI Demo Applications Foundation"
        className="max-w-2xl w-full rounded-2xl border border-zinc-800/80 bg-[#121216]/90 p-8 shadow-2xl"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-300 mb-6">
          <span>STEP 0 COMPLETE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50 mb-4">
          SmartAI Demo Applications
        </h1>
        <p className="text-zinc-400 text-base leading-relaxed mb-6">
          Custom RAG Client Portals — Next.js 16 foundation, security proxy, AGENTS.md and
          ROADMAP.md are initialized and ready for Step 1.
        </p>
      </section>
    </main>
  );
};

export default HomePage;

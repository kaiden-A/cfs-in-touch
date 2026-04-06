"use client";
import { motion } from "framer-motion";

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* What is a Branch? */}
      <div className="md:col-span-8 bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 shadow-sm">
        <h3 className="text-2xl font-headline font-bold mb-6 flex items-center gap-3 text-on-surface">
          <span className="material-symbols-outlined text-primary">schema</span>
          What is a Branch?
        </h3>
        <p className="text-on-surface-variant leading-relaxed mb-6 text-lg">
          Think of a branch as a lightweight, moveable pointer to a specific commit. In Git, the default branch is usually <code className="bg-surface-container-highest px-2 py-0.5 rounded font-mono text-primary">main</code>. When you branch, you create a new timeline to experiment without breaking production.
        </p>
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20 font-mono text-sm leading-relaxed text-secondary-dim">
          <div className="text-outline/50 mb-2">// Create and switch in one command</div>
          <div className="flex items-center gap-2">
            <span className="text-primary">$</span>
            <span className="code-glow">git checkout -b feature-auth</span>
          </div>
        </div>
      </div>

      {/* Visual Diagram Card */}
      <div className="md:col-span-4 bg-surface-container-highest p-8 rounded-2xl border border-primary/20 flex flex-col justify-between relative overflow-hidden">
        <div className="relative z-10">
          <h4 className="text-sm font-mono text-primary mb-8 uppercase tracking-widest">Branch Topology</h4>
          <div className="relative pl-8 py-2">
            {/* Vertical Line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-outline-variant/30"></div>
            
            {/* Commits */}
            <div className="mb-10 relative">
              <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-surface-container-highest border-2 border-outline-variant z-10"></div>
              <p className="text-[10px] text-on-surface-variant font-mono">commit d3e2f1</p>
              <p className="text-sm font-bold">Initial Setup</p>
            </div>

            <div className="mb-10 relative">
              <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-primary border-2 border-primary-container z-10 shadow-[0_0_15px_rgba(94,180,255,0.4)]"></div>
              <div className="absolute -left-5 top-3 w-10 h-0.5 bg-primary z-0"></div>
              <div className="ml-8">
                <p className="text-[10px] text-primary font-mono italic">HEAD -&gt; feat/ui</p>
                <p className="text-sm font-bold">New Layout</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-surface-container-highest border-2 border-outline-variant z-10"></div>
              <p className="text-[10px] text-on-surface-variant font-mono">commit a1b2c3</p>
              <p className="text-sm font-bold">Main Baseline</p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
}
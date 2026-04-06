export const BranchVisualizer = () => (
  <div className="md:col-span-4 bg-surface-container-highest p-8 rounded-lg border border-primary/20 flex flex-col justify-between">
    <div>
      <h4 className="text-sm font-mono text-primary mb-6 uppercase tracking-widest">Branch Topology</h4>
      <div className="relative pl-8 py-4">
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-outline-variant"></div>
        
        <div className="mb-8 relative">
          <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-surface-container-highest border-2 border-outline-variant z-10"></div>
          <p className="text-xs text-on-surface-variant font-mono">commit d3e2f1</p>
          <p className="text-sm font-bold">Initial Setup</p>
        </div>

        <div className="mb-8 relative">
          <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-primary border-2 border-primary-container z-10 shadow-[0_0_10px_rgba(94,180,255,0.4)]"></div>
          <div className="absolute -left-5 top-3 w-12 h-0.5 bg-primary z-0"></div>
          <div className="ml-8">
            <p className="text-xs text-primary font-mono">branch: feat/ui</p>
            <p className="text-sm font-bold">New Layout</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-surface-container-highest border-2 border-outline-variant z-10"></div>
          <p className="text-xs text-on-surface-variant font-mono">commit a1b2c3</p>
          <p className="text-sm font-bold">Main Baseline</p>
        </div>
      </div>
    </div>
    <p className="text-xs text-on-surface-variant mt-6 italic">Parallel development ensures the main line remains stable.</p>
  </div>
);
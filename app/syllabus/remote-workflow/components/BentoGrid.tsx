export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Main Commands */}
      <div className="md:col-span-8 bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <span className="material-symbols-outlined text-primary">terminal</span>
          <h3 className="font-headline text-2xl font-bold">The Remote Toolset</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="group">
              <h4 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Clone & Origin</h4>
              <div className="bg-surface-container-lowest p-4 rounded-xl border-l-2 border-primary group-hover:border-secondary transition-colors">
                <code className="text-secondary text-sm font-mono">git clone [url]</code>
              </div>
            </div>
            <div className="group">
              <h4 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Syncing Down</h4>
              <div className="bg-surface-container-lowest p-4 rounded-xl border-l-2 border-primary group-hover:border-secondary transition-colors">
                <code className="text-secondary text-sm font-mono">git pull origin main</code>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="group">
              <h4 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Shipping Code</h4>
              <div className="bg-surface-container-lowest p-4 rounded-xl border-l-2 border-primary group-hover:border-secondary transition-colors">
                <code className="text-secondary text-sm font-mono">git push origin [branch]</code>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Context Card */}
      <div className="md:col-span-4 bg-surface-container-high rounded-2xl p-8 flex flex-col justify-between border border-primary/10 relative overflow-hidden">
        <div className="relative z-10">
          <span className="material-symbols-outlined text-secondary mb-4 scale-125 block" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_sync</span>
          <h3 className="font-headline text-xl font-bold mb-4">Why Remote?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Think of a remote repository as the "Single Source of Truth." While you build in your local sandbox, the remote acts as the shared archive for the entire team.
          </p>
        </div>
        <div className="pt-6 border-t border-outline-variant/10 flex items-center justify-between relative z-10">
           <div className="flex flex-col">
             <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Connection Status</span>
             <span className="text-[10px] font-mono opacity-50">GITHUB_ENDPOINT: ACTIVE</span>
           </div>
           <div className="h-3 w-3 rounded-full bg-secondary animate-pulse shadow-[0_0_12px_rgba(90,248,251,0.5)]"></div>
        </div>
      </div>
    </div>
  );
}
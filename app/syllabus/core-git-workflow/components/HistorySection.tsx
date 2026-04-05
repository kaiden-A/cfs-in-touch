export default function HistorySection() {
  return (
    <section className="flex flex-col md:flex-row gap-12 items-start mb-24">
      <div className="flex-1 space-y-8">
        <div className="p-1 bg-surface-container-high inline-block rounded-lg">
          <div className="bg-surface px-4 py-3 rounded-md border border-outline-variant/10">
            <h3 className="font-space font-bold text-xl mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">history</span>
              Auditing History
            </h3>
            <p className="text-on-surface-variant text-sm mb-4">
              Use <code className="text-primary">git log</code> to view the timeline. Each commit has a unique SHA-1 hash (ID).
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-4 pl-2 border-l-2 border-primary/30">
                <span className="text-[10px] font-mono text-primary">a4f21d0</span>
                <span className="text-xs text-on-surface">feat: add landing page</span>
              </div>
              <div className="flex items-center gap-4 pl-2 border-l-2 border-outline-variant/30">
                <span className="text-[10px] font-mono text-outline">98cc21a</span>
                <span className="text-xs text-on-surface">initial commit</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-space font-bold text-xl mb-4">Undoing Mistakes</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="bg-primary-container/20 text-primary p-1 rounded material-symbols-outlined">
                settings_backup_restore
              </span>
              <div>
                <p className="font-bold text-sm">git restore &lt;file&gt;</p>
                <p className="text-xs text-on-surface-variant">Discard local changes in the working directory.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-error-container/20 text-error p-1 rounded material-symbols-outlined">
                restart_alt
              </span>
              <div>
                <p className="font-bold text-sm">git reset --hard &lt;commit&gt;</p>
                <p className="text-xs text-on-surface-variant text-error-dim">DANGER: Wipes all changes back to that commit ID.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 w-full">
        <div className="relative group">
          {/* Glassmorphism Card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-surface-container-high/80 backdrop-blur-xl p-8 rounded-xl border border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">visibility_off</span>
              </div>
              <h3 className="font-space font-bold text-xl">The .gitignore Pro-tip</h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
              Don't commit junk. Use a <code className="text-secondary">.gitignore</code> file to exclude node_modules, .env secrets, or OS metadata from your repository history forever.
            </p>
            <div className="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/30">
              <p className="text-[10px] text-outline font-mono mb-2"># example .gitignore</p>
              <div className="font-mono text-xs text-on-secondary-container">
                node_modules/<br />
                .DS_Store<br />
                .env<br />
                dist/
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
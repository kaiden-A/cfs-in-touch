export default function BentoGrid() {
  const states = [
    {
      id: "01",
      title: "Working Directory",
      icon: "drafts",
      desc: "Your local workspace. Changes here are 'Untracked' or 'Modified' but not yet recorded in history.",
      code: "$ touch index.html",
      accent: "border-outline-variant/10",
    },
    {
      id: "02",
      title: "Staging Area",
      icon: "inventory_2",
      desc: "The 'Index'. A preview of your next commit. You choose exactly which changes to include.",
      code: "$ git add index.html",
      accent: "border-t-2 border-primary",
      isFeatured: true,
    },
    {
      id: "03",
      title: "Local Repo",
      icon: "database",
      desc: "The permanent record. Snapshots stored securely in the .git directory.",
      code: '$ git commit -m "feat: init"',
      accent: "border-outline-variant/10",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <div className="md:col-span-3 mb-4">
        <h2 className="text-xl font-space font-semibold text-primary">The Architectural Lifecycle</h2>
        <p className="text-sm text-on-surface-variant">Understanding where your files live.</p>
      </div>

      {states.map((state) => (
        <div
          key={state.id}
          className={`p-8 rounded-lg relative overflow-hidden group transition-all ${
            state.isFeatured ? "bg-surface-container" : "bg-surface-container-low"
          } border ${state.accent}`}
        >
          <div className={`absolute top-0 right-0 p-4 transition-opacity ${
            state.isFeatured ? "opacity-20 text-primary" : "opacity-10 group-hover:opacity-20"
          }`}>
            <span className="material-symbols-outlined text-6xl">{state.icon}</span>
          </div>
          <div className="mb-6">
            <span className={`text-[10px] font-mono uppercase tracking-widest ${
              state.isFeatured ? "text-primary" : "text-outline"
            }`}>
              State {state.id}
            </span>
            <h3 className="text-xl font-bold mt-1">{state.title}</h3>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            {state.desc}
          </p>
          <div className={`bg-surface-container-lowest font-mono text-[11px] p-3 rounded border ${
            state.isFeatured ? "border-primary/20 text-primary-dim" : "border-outline-variant/20 text-on-surface-variant"
          }`}>
            {state.code}
          </div>
        </div>
      ))}
    </section>
  );
}
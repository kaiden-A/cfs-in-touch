"use client";

export default function CommandReference() {
  const commands = [
    { cmd: "git branch", desc: "List, create, or delete branches.", icon: "list" },
    { cmd: "git switch -c <name>", desc: "Create and switch to a new branch.", icon: "swap_horiz" },
    { cmd: "git merge <branch>", desc: "Join history from a branch into current.", icon: "merge" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {commands.map((item) => (
        <div 
          key={item.cmd} 
          className="bg-surface-container p-6 rounded-xl border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container-high transition-all group cursor-default"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
              {item.icon}
            </span>
            <span className="text-[10px] font-mono text-outline/50 uppercase">Git CMD</span>
          </div>
          <h5 className="font-mono font-bold text-secondary-dim mb-2 text-sm">{item.cmd}</h5>
          <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
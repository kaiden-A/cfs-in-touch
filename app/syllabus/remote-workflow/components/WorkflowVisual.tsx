export default function WorkflowVisual() {
  const steps = [
    { 
      id: "01", 
      title: "Feature Branch", 
      icon: "account_tree", 
      desc: "Never work on main. Isolate fixes.",
      cmd: "git checkout -b feat/ui",
      borderColor: "border-primary/40" 
    },
    { 
      id: "02", 
      title: "Pull Request", 
      icon: "rate_review", 
      desc: "Upload changes for team review.",
      cmd: "git push origin feat/ui",
      borderColor: "border-tertiary/40" 
    },
    { 
      id: "03", 
      title: "Approve & Merge", 
      icon: "verified", 
      desc: "Code is sealed into the codebase.",
      status: "Merged",
      borderColor: "border-secondary/40" 
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {steps.map((step) => (
        <div key={step.id} className={`relative p-8 bg-surface-container rounded-2xl border-t-2 ${step.borderColor} hover:translate-y-[-4px] transition-all duration-300`}>
          <div className="absolute -top-3 left-6 bg-surface px-3 py-0.5 rounded-full text-[10px] font-mono text-on-surface font-black border border-outline-variant/20 uppercase tracking-tighter">
            Step {step.id}
          </div>
          <h4 className="font-bold text-lg mb-3 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">{step.icon}</span>
            {step.title}
          </h4>
          <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
            {step.desc}
          </p>
          {step.cmd ? (
            <code className="block bg-surface-container-lowest p-3 rounded-lg text-[11px] font-mono text-secondary-dim border border-outline-variant/10 shadow-inner">
              {step.cmd}
            </code>
          ) : (
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full uppercase tracking-tighter border border-secondary/20">
                Approved
              </span>
              <span className="px-3 py-1 bg-on-surface-variant/10 text-on-surface-variant text-[10px] font-bold rounded-full uppercase tracking-tighter border border-outline-variant/20">
                {step.status}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
"use client";

export default function ConflictSection() {
  const steps = [
    { id: 1, title: 'Locate Markers', desc: 'Git injects <<<<<<< and >>>>>>> into your files.' },
    { id: 2, title: 'Choose History', desc: 'Delete the version you don\'t want (or keep both).' },
    { id: 3, title: 'Finalize', desc: 'Stage the file and run "git commit" to seal the merge.' },
  ];

  return (
    <div className="glass-panel p-8 md:p-12 rounded-2xl border border-error/20 my-10">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1">
          <h3 className="text-3xl font-headline font-bold text-error mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined scale-125">warning</span>
            Handling Conflicts
          </h3>
          <p className="text-on-surface-variant mb-8 text-lg leading-relaxed">
            Conflicts happen when two branches change the same line of code. Git stops the merge and waits for you to play judge.
          </p>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.id} className="flex gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 border border-outline-variant group-hover:border-error/50 transition-colors font-bold text-error">
                  {step.id}
                </div>
                <div>
                  <p className="font-bold text-on-surface text-lg">{step.title}</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conflict Editor Mockup */}
        <div className="w-full lg:w-96 shrink-0 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 font-mono text-xs shadow-2xl relative">
          <div className="flex gap-1.5 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-error/40"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-primary/40"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-secondary/40"></div>
          </div>
          <div className="text-error-dim mb-1 opacity-80">{'<<<<<<<'} HEAD (Current Change)</div>
          <div className="bg-error/10 px-3 py-2 border-l-2 border-error mb-2 text-on-surface italic">
            h1 {'{'} color: #5eb4ff; {'}'}
          </div>
          <div className="text-outline/40 my-2 px-3">=======</div>
          <div className="bg-primary/10 px-3 py-2 border-l-2 border-primary mt-2 text-on-surface italic">
            h1 {'{'} color: #5af8fb; {'}'}
          </div>
          <div className="text-primary mt-1 opacity-80">{'>>>>>>>'} feature/styles (Incoming)</div>
        </div>
      </div>
    </div>
  );
}
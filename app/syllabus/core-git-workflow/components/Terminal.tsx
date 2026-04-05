export default function Terminal() {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-space font-bold">Terminal Reference</h2>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-error-dim/40"></div>
          <div className="w-3 h-3 rounded-full bg-secondary-dim/40"></div>
          <div className="w-3 h-3 rounded-full bg-primary-dim/40"></div>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30 shadow-2xl">
        <div className="bg-surface-container-high px-4 py-2 border-b border-outline-variant/20 flex gap-4">
          <span className="text-[10px] font-mono text-primary font-bold">main.sh</span>
          <span className="text-[10px] font-mono text-on-surface-variant">git-config.yaml</span>
        </div>
        <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
          <TerminalLine num="01" comment="Initialize a new repository" />
          <TerminalLine num="02" cmd="git init" />
          <br />
          <TerminalLine num="03" comment="Check what is happening" />
          <TerminalLine num="04" cmd="git status" />
          <div className="flex gap-4 mt-2 pl-8 text-on-surface-variant opacity-60 italic">
            <span>Untracked files: (use "git add" to include in what will be committed)</span>
          </div>
          <br />
          <TerminalLine num="05" comment="Add specific file or all files" />
          <TerminalLine num="06" cmd="git add ." endComment="# Stages everything" />
        </div>
      </div>
    </section>
  );
}

function TerminalLine({ num, comment, cmd, endComment }: { num: string, comment?: string, cmd?: string, endComment?: string }) {
  return (
    <div className="flex gap-4 mb-1">
      <span className="text-outline">{num}</span>
      {comment && <span className="text-secondary"># {comment}</span>}
      {cmd && (
        <span className="text-on-surface">
          <span className="text-primary-fixed">{cmd.split(' ')[0]}</span> {cmd.split(' ').slice(1).join(' ')}
          {endComment && <span className="text-outline ml-2">{endComment}</span>}
        </span>
      )}
    </div>
  );
}
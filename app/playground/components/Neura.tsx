"use client";

interface NeuraProps {
  logs: string[];
}

export default function NeuraMonitor({ logs }: NeuraProps) {
  return (
    <div className="h-full bg-terminal-black border border-orange-500/20 rounded-xl flex flex-col overflow-hidden">
      <div className="p-3 border-b border-orange-500/20 bg-orange-500/5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-orange-500 text-sm">monitoring</span>
          <span className="text-xs font-bold text-orange-500 uppercase tracking-tighter">Neura_Monitor</span>
        </div>
      </div>
      <div className="flex-1 p-3 font-mono text-[9px] space-y-1.5 overflow-y-auto custom-scrollbar">
        {logs.map((log, i) => (
          <div key={i} className="text-slate-400 flex gap-2">
            <span className="text-orange-500/40 shrink-0">{log.substring(0, 10)}</span>
            <span className="animate-in fade-in slide-in-from-left-1">{log.substring(10)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
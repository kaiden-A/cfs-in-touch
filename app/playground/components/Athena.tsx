"use client";

interface AthenaProps {
  messages: { role: string; text: string }[];
  input: string;
  setInput: (val: string) => void;
  onSend: () => void;
}

export default function AthenaChat({ messages, input, setInput, onSend }: AthenaProps) {
  return (
    <div className="h-full bg-terminal-black border border-primary/20 rounded-xl flex flex-col overflow-hidden glow-border transition-all">
      <div className="p-3 border-b border-primary/20 bg-primary/5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
          <span className="text-xs font-bold text-primary uppercase tracking-tighter">Athena_Module</span>
        </div>
      </div>
      <div className="flex-1 p-3 overflow-y-auto custom-scrollbar space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`${m.role === 'ai' ? 'bg-primary/5 border-l-2 border-primary p-2 text-slate-200' : 'text-right text-slate-500 italic'} text-[11px]`}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-primary/10 bg-black/20 flex gap-2">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSend()}
          placeholder="Consult Athena..."
          className="flex-1 bg-white/5 border border-primary/20 rounded-lg px-3 py-2 text-[11px] outline-none text-slate-200 focus:border-primary/50 transition-all"
        />
        <button 
          onClick={onSend}
          className="bg-primary/20 hover:bg-primary/40 text-primary border border-primary/30 rounded-lg px-3 flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-sm">send</span>
        </button>
      </div>
    </div>
  );
}
"use client";
import { useState, useRef, useEffect } from 'react';
import { useGit } from '@/hooks/use-git';
import { PlaygroundHeader } from './components/Header';
import NeuraMonitor from './components/Neura';
import AthenaChat from './components/Athena';

export default function PlaygroundPage() {
  const { branch, staged, commits, files, execute } = useGit();
  const [mounted, setMounted] = useState(false);
  
  // Resizable Panel Logic for Right Sidebar
  const [sidebarSplit, setSidebarSplit] = useState(40); 
  const isResizing = useRef(false);

  const [terminalLogs, setTerminalLogs] = useState<{msg: string, type: string}[]>([]);
  const [neuraLogs, setNeuraLogs] = useState<string[]>([]);
  const [athenaMessages, setAthenaMessages] = useState<{role: 'ai' | 'user', text: string}[]>([]);
  
  const [input, setInput] = useState('');
  const [athenaInput, setAthenaInput] = useState('');
  const termEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    setTerminalLogs([
      { msg: "Welcome to Motion-U Git Lab v2.4", type: "info" }, 
      { msg: "Type 'help' to start.", type: "slate-500" }
    ]);
    setNeuraLogs(["Neura v2.0 initialized. Monitoring local node..."]);
    setAthenaMessages([{ role: 'ai', text: "Ready to assist. Type 'help' in the terminal for a briefing." }]);
  }, []);

  // Vertical Resize Handlers
  const startResizing = () => { isResizing.current = true; };
  const stopResizing = () => { isResizing.current = false; };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current) return;
      const newSplit = (e.clientY / window.innerHeight) * 100;
      if (newSplit > 20 && newSplit < 80) setSidebarSplit(newSplit);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, []);

  useEffect(() => {
    if (mounted) {
      termEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalLogs, mounted]);

  const handleTerminal = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      const result = execute(input);
      setTerminalLogs(prev => [
        ...prev, 
        { msg: `user@motion-u $ ${input}`, type: 'user' }, 
        { msg: result.res, type: result.type }
      ]);
      
      if (result.action) {
        const time = new Date().toLocaleTimeString();
        setNeuraLogs(p => [...p, `[${time}] TRACE_${result.action}: Execution successful.`]);
      }
      setInput('');
    }
  };

  const handleAthenaSend = () => {
    if (!athenaInput.trim()) return;
    setAthenaMessages(p => [...p, { role: 'user', text: athenaInput }]);
    // Add AI Logic here
    setAthenaInput('');
  };

  if (!mounted) return <div className="h-screen bg-background-dark" />;

  return (
    <div className="flex flex-col h-screen select-none overflow-hidden">
      <PlaygroundHeader />
      
      <main className="flex-1 flex overflow-hidden p-4 gap-4 bg-background-dark">
        
        {/* LEFT: Git Graph & Filesystem */}
        <aside className="w-72 hidden lg:flex flex-col gap-4">
          <div className="bg-terminal-black border border-primary/20 rounded-xl flex-[0.6] flex flex-col overflow-hidden glow-border">
            <div className="p-3 border-b border-primary/10 bg-primary/5 flex justify-between items-center">
              <span className="text-[10px] font-bold text-primary uppercase">Git Graph</span>
              <span className="text-[9px] font-mono text-slate-500">{branch}</span>
            </div>
            <div className="flex-1 p-4 overflow-y-auto custom-scrollbar space-y-4">
              {commits.length === 0 && <p className="text-[10px] text-slate-600 italic">History is empty...</p>}
              {commits.map(c => (
                <div key={c.hash} className="border-l border-primary/30 pl-4 relative animate-fade-up">
                  <div className="absolute -left-[4.5px] top-0 size-2 rounded-full bg-primary" />
                  <p className="text-[10px] font-mono text-primary leading-none">{c.hash}</p>
                  <p className="text-xs text-slate-200 mt-1">{c.msg}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-terminal-black border border-primary/10 rounded-xl flex-[0.4] flex flex-col overflow-hidden">
            <div className="p-3 border-b border-primary/10 bg-white/5 flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Filesystem</span>
              <span className="text-[9px] text-slate-600">{staged.length}/{files.length} staged</span>
            </div>
            <div className="p-4 space-y-2">
              {files.map(f => (
                <div key={f} className={`flex items-center gap-2 text-xs font-mono ${staged.includes(f) ? 'text-primary' : 'text-slate-500'}`}>
                   <span className="material-symbols-outlined text-[14px]">{staged.includes(f) ? 'drafts' : 'description'}</span>
                   {f}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* CENTER: Main Terminal */}
        <section className="flex-1 flex flex-col bg-terminal-black border border-primary/20 rounded-xl shadow-2xl overflow-hidden">
          <div className="flex-1 p-6 font-mono text-sm overflow-y-auto custom-scrollbar space-y-2">
            {terminalLogs.map((l, i) => (
              <div key={i} className={l.type === 'user' ? 'text-primary font-bold' : 'text-slate-400'}>
                {l.msg}
              </div>
            ))}
            <div ref={termEndRef} />
          </div>
          <div className="p-4 bg-black/40 border-t border-primary/10 flex items-center gap-2">
            <span className="text-primary font-bold">$</span>
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyDown={handleTerminal} 
              className="w-full bg-transparent border-none text-primary font-mono outline-none p-0 focus:ring-0"
              placeholder="git add ."
              autoFocus 
            />
          </div>
        </section>

        {/* RIGHT: Dual Resizable Agents */}
        <aside className="w-80 hidden xl:flex flex-col h-full">
          <div style={{ height: `${sidebarSplit}%` }} className="min-h-30">
            <NeuraMonitor logs={neuraLogs} />
          </div>
          
          <div 
            onMouseDown={startResizing}
            className="h-4 w-full cursor-row-resize flex items-center justify-center group"
          >
            <div className="w-12 h-0.5 bg-slate-800 group-hover:bg-primary transition-colors" />
          </div>

          <div style={{ height: `${100 - sidebarSplit}%` }} className="min-h-37.5">
            <AthenaChat 
              messages={athenaMessages} 
              input={athenaInput} 
              setInput={setAthenaInput} 
              onSend={handleAthenaSend} 
            />
          </div>
        </aside>

      </main>
    </div>
  );
}
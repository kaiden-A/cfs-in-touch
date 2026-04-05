export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e] flex justify-between items-center px-6 h-16 font-space tracking-tight">
      <div className="flex items-center gap-8">
        <span className="text-xl font-bold tracking-tighter text-[#00A3FF]">GitArchitect</span>
        <div className="hidden md:flex gap-6">
          <a className="text-[#ffffff] border-b-2 border-[#00A3FF] pb-1" href="#">Modules</a>
          <a className="text-[#adaaaa] hover:text-[#ffffff] transition-colors" href="#">Glossary</a>
          <a className="text-[#adaaaa] hover:text-[#ffffff] transition-colors" href="#">Sandbox</a>
          <a className="text-[#adaaaa] hover:text-[#ffffff] transition-colors" href="#">Help</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input 
          className="hidden sm:block bg-surface-container border-none text-sm rounded-lg px-4 py-1.5 w-64 focus:ring-1 focus:ring-primary placeholder:text-on-surface-variant" 
          placeholder="Search workflow..." 
          type="text"
        />
        <button className="material-symbols-outlined text-[#adaaaa] hover:text-[#ffffff] transition-all active:scale-95 duration-150">account_circle</button>
      </div>
    </nav>
  );
}
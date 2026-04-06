"use client";

import { motion, Variants } from "framer-motion";
import { Sidebar } from "./components/Sidebar";
import BentoGrid from "./components/BentoGrid";
import WorkflowVisual from "./components/WorkflowVisual";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function RemoteWorkflowPage() {
  return (
    <div className="bg-surface font-body text-on-surface antialiased flex h-screen overflow-hidden">
      
      <Sidebar />

      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto custom-scrollbar pt-12 pb-20 px-8 lg:px-16 relative">
          
          {/* Content Wrapper */}
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            
            {/* Header Section */}
            <motion.header variants={itemVariants} className="mb-12 relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full mb-6 text-xs font-medium tracking-wide border border-primary/20">
                <span className="material-symbols-outlined text-xs">cloud_sync</span> MODULE 04 // REMOTE FLOW
              </div>
              <h1 className="text-4xl md:text-7xl font-headline font-bold tracking-tighter mb-4 leading-tight">
                Remote Repositories & <br/>
                <span className="text-primary italic">Workflows</span>
              </h1>
              <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
                Transition from a lone coder to a team architect. Learn to synchronize local environments with cloud infrastructure and master the industry-standard Pull Request lifecycle.
              </p>
            </motion.header>

            {/* Core Toolset Grid */}
            <motion.div variants={itemVariants} className="mb-20">
              <BentoGrid />
            </motion.div>

            {/* Workflow Explainer Section */}
            <motion.section variants={itemVariants} className="mb-20">
               <div className="text-center mb-12">
                  <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">The Standard Workflow</h2>
                  <p className="text-on-surface-variant max-w-2xl mx-auto">
                    This is how professional engineering teams ship code. Master this loop to be industry-ready.
                  </p>
               </div>
               <WorkflowVisual />
            </motion.section>

            {/* Navigation Footer */}
            <motion.footer 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-between pt-12 border-t border-outline-variant/10 gap-6"
            >
              {/* Backward Option */}
              <Link href='/syllabus/branching-strategies'>
                <button className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-all group">
                  <div className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center group-hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Go Back</p>
                    <p className="text-sm font-medium">Branching Strategies</p>
                  </div>
                </button>
              </Link>

              {/* Module Activity Option (Primary Action) */}
              <Link href='/activities/remote-sync-lab'>
                <button className="group flex items-center gap-6 bg-linear-to-r from-secondary to-secondary-dim text-on-secondary-fixed px-8 py-4 rounded-xl font-bold shadow-lg shadow-secondary/10 hover:shadow-secondary/25 active:scale-95 transition-all">
                  <div className="text-left border-r border-on-secondary-fixed/20 pr-6">
                    <p className="text-[10px] uppercase tracking-widest opacity-80">Sync Mission</p>
                    <p className="text-sm font-headline">Start Remote Activity</p>
                  </div>
                  <span className="material-symbols-outlined group-hover:rotate-12 transition-transform bg-on-secondary-fixed/10 p-2 rounded-lg">cloud_upload</span>
                </button>
              </Link>
            </motion.footer>

            {/* Micro-Footer */}
            <div className="mt-20 py-8 text-zinc-500 text-[10px] font-mono uppercase tracking-widest text-center md:text-left flex justify-between items-center border-t border-outline-variant/5">
               <span>© 2026 MOTION_U // remote_arch_v2</span>
               <span className="hidden md:block opacity-50 text-right">SYSTEM_LAST_SYNC: 04.06.2026_16:00</span>
            </div>

          </motion.div>
        </div>
      </main>

      {/* Persistent Decorative Glows */}
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
    </div>
  );
}
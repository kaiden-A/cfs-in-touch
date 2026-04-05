"use client";

import { motion, Variants } from "framer-motion";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BentoGrid from "./components/BentoGrid";
import Terminal from "./components/Terminal";
import HistorySection from "./components/HistorySection";
import Link from "next/link";

// Animation Variants matching your second style
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

export default function CoreWorkflowPage() {
  return (
    <div className="bg-surface font-body text-on-surface antialiased flex h-screen overflow-hidden">
      
      {/* Sidebar - Fixed on left */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
    

        {/* Independent Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pt-12 pb-20 px-8 lg:px-16">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            
            {/* Header Section */}
            <motion.header variants={itemVariants} className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/30 text-secondary rounded-full mb-6 text-xs font-medium tracking-wide">
                <span className="material-symbols-outlined text-xs">school</span> CORE WORKFLOW
              </div>
              <h1 className="text-4xl md:text-6xl font-space font-bold tracking-tighter mb-4">
                Mastering the <span className="text-primary italic">Atomic Commit</span>
              </h1>
              <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
                Git isn't just a backup tool; it's a time machine for your code. Learn how to track changes, manage states, and safely revert errors in your local repository.
              </p>
            </motion.header>

            {/* Content Modules wrapped in motion for consistency */}
            <motion.div variants={itemVariants}>
              <BentoGrid />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Terminal />
            </motion.div>

            <motion.div variants={itemVariants}>
              <HistorySection />
            </motion.div>

            {/* Footer / Navigation */}
            <motion.footer 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-between pt-12 border-t border-outline-variant/10 gap-6"
            >
            <Link href={'/syllabus/git-fundamentals'}>
              <button className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                <span className="text-sm font-medium">Previous: Environment Setup</span>
              </button>
            </Link>
              <button className="group flex items-center gap-4 bg-linear-to-r from-primary to-primary-container text-on-primary-fixed px-8 py-4 rounded-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95 transition-all">
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest opacity-80">Next Lesson</p>
                  <p className="text-sm font-space">Module 3: Branching Strategies</p>
                </div>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </motion.footer>

            {/* Micro-Footer matching your new style */}
            <div className="mt-20 py-8 text-zinc-500 text-[10px] font-mono uppercase tracking-widest text-center md:text-left">
               © 2026 CFS_IN_TOUCH // git_core_workflow_v2
            </div>

          </motion.div>
        </div>
      </main>

      {/* Background Decoration (Moved outside main to stay fixed) */}
      <div className="fixed top-[-10%] right-[-10%] w-125 h-125 bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-[-5%] left-[-5%] w-100 h-100 bg-secondary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
    </div>
  );
}
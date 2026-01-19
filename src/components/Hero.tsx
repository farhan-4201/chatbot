import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, MousePointer2, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="container-tight text-center relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/10 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-xl">
          <Sparkles size={14} className="animate-pulse" />
          The Future of Customer Engagement
        </span>
        
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter">
          Master Your Leads <br />
          <span className="hero-gradient px-2 italic">With Neural Intelligence</span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Deploy sentient AI agents that capture, qualify, and convert leads into customers while you sleep. Real-time automation for modern growth teams.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <button className="btn-primary group">
            Launch Live Demo
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-secondary group">
            View Case Studies
            <Zap size={18} className="text-slate-500 group-hover:text-primary transition-colors" />
          </button>
        </div>
      </motion.div>

      {/* Hero Visual Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative group cursor-none"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative glass-card rounded-[2rem] p-4 md:p-8 aspect-video md:aspect-[21/9] overflow-hidden">
          <div className="w-full h-full glass-card bg-black/60 rounded-xl border-white/5 p-8 text-left flex gap-10">
            {/* Sidebar Mockup */}
            <div className="hidden md:block w-48 space-y-6 opacity-40">
              <div className="h-4 w-full bg-white/10 rounded"></div>
              <div className="h-4 w-3/4 bg-white/10 rounded"></div>
              <div className="h-4 w-5/6 bg-white/10 rounded"></div>
              <div className="pt-10 space-y-4">
                <div className="h-2 w-1/2 bg-primary/20 rounded"></div>
                <div className="h-2 w-2/3 bg-primary/20 rounded"></div>
              </div>
            </div>

            {/* Main Mockup Content */}
            <div className="flex-1 space-y-6">
               <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary">
                       <Zap size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Neural Engine v4.0</div>
                      <div className="text-[10px] text-primary font-mono">STATUS: OPTIMIZED</div>
                    </div>
                 </div>
                 <div className="flex gap-2">
                    <div className="w-24 h-8 bg-white/5 rounded-lg border border-white/10"></div>
                    <div className="w-8 h-8 bg-white/5 rounded-lg border border-white/10"></div>
                 </div>
               </div>

               <div className="space-y-4 max-w-lg">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-sm animate-pulse">
                    <div className="h-3 w-1/3 bg-white/10 rounded mb-2"></div>
                    <div className="h-3 w-full bg-white/5 rounded"></div>
                  </div>
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded-2xl text-sm">
                    <div className="text-xs font-bold text-primary mb-1 uppercase tracking-widest">AI Agent Analysis</div>
                    <p className="text-slate-300">Target lead detected. Intent: High. Category: Enterprise. Automated sequence triggered.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Floating Indicators */}
          <div className="absolute top-10 right-10 flex flex-col gap-4">
             <div className="glass-card px-4 py-2 border-secondary/30 rounded-xl flex items-center gap-2 animate-bounce [animation-duration:2s]">
                <div className="w-2 h-2 rounded-full bg-secondary animate-ping"></div>
                <span className="text-[10px] font-black text-secondary uppercase italic tracking-widest">+1 High Value Lead</span>
             </div>
             <div className="glass-card px-4 py-2 border-accent/30 rounded-xl flex items-center gap-2 animate-bounce [animation-duration:3s]">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-[10px] font-black text-accent uppercase tracking-widest">Sentient Draft Ready</span>
             </div>
          </div>
        </div>
        
        {/* Custom Cursor Tracker Mockup */}
        <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 text-primary opacity-40 animate-float">
           <MousePointer2 size={40} className="drop-shadow-[0_0_10px_rgba(0,242,255,0.5)]" />
           <div className="ml-8 -mt-2 glass-card px-3 py-1 rounded-lg text-[10px] font-bold border-primary/40">Real-time Tracker</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

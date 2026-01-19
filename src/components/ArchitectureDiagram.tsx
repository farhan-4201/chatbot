import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageSquare, Server, Database, BrainCircuit, ArrowRight } from 'lucide-react';

const steps = [
  { icon: <Globe />, label: "Edge Web Layer", desc: "Custom widget injestion", color: "text-slate-500", border: "border-slate-500/20" },
  { icon: <MessageSquare />, label: "Interface Core", desc: "WebSocket transmission", color: "text-primary", border: "border-primary/20" },
  { icon: <BrainCircuit />, label: "Neural Nexus", desc: "GPT-4o + Vector RAG", color: "text-secondary", border: "border-secondary/20" },
  { icon: <Server />, label: "Orchestrator", desc: "Node.js compute Cluster", color: "text-accent", border: "border-accent/20" },
  { icon: <Database />, label: "Persistence", desc: "MongoDB Atlas", color: "text-blue-500", border: "border-blue-500/20" },
];

const ArchitectureDiagram = () => {
  return (
    <div className="container-tight mb-24">
      <div className="text-center mb-20">
        <div className="flex justify-center mb-4">
           <div className="px-4 py-1 rounded-full glass-card border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              System Topography
           </div>
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-6 italic tracking-tighter">Decentralized <span className="text-primary italic">Intelligence</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-medium">Powering global businesses with sub-100ms response times and bulletproof reliability.</p>
      </div>

      <div className="relative p-10 md:p-20 glass-card bg-black-card/60 rounded-[4rem] border-white/5 overflow-hidden">
        {/* Animated Flux lines */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent -translate-y-1/2 hidden md:block"></div>
        
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="z-10 flex flex-col items-center flex-1 max-w-[140px]"
              >
                <div className={`w-24 h-24 rounded-3xl glass-card border border-white/5 bg-black flex items-center justify-center mb-6 relative group transition-all duration-500 hover:scale-110 hover:border-primary/40`}>
                  {/* Neon Glow beneath */}
                  <div className={`absolute inset-4 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity bg-current ${step.color.replace('text', 'bg')}`}></div>
                  
                  {React.cloneElement(step.icon as React.ReactElement<any>, { size: 36, className: `relative z-10 transition-transform duration-500 group-hover:rotate-12 ${step.color}` })}
                  
                  {/* Decorative corner */}
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-primary transition-colors"></div>
                </div>
                
                <h4 className="text-[11px] font-black uppercase tracking-widest text-white mb-2 text-center">
                  {step.label}
                </h4>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter text-center leading-tight">
                  {step.desc}
                </p>
              </motion.div>
              
              {i < steps.length - 1 && (
                <div className="md:hidden">
                   <ArrowRight size={24} className="text-slate-700 rotate-90" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Global Hub Indicator */}
        <motion.div 
           animate={{ 
             left: ['-10%', '110%'],
             opacity: [0, 1, 1, 0]
           }}
           transition={{ 
             duration: 4, 
             repeat: Infinity, 
             ease: "linear" 
           }}
           className="absolute top-1/2 -translate-y-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent hidden md:block"
        />
      </div>
    </div>
  );
};

export default ArchitectureDiagram;

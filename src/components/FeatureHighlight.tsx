import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Zap, Activity, Fingerprint } from 'lucide-react';

const features = [
  {
    icon: <Fingerprint className="text-secondary" />,
    title: "Neuro-Intent Profiling",
    desc: "Advanced sentiment analysis that predicts high-value conversion triggers before they even ask for pricing.",
    color: "secondary"
  },
  {
    icon: <Activity className="text-primary" />,
    title: "Dynamic Core Scaling",
    desc: "Our AI clusters scale instantly with your traffic, handling 1 or 1,000,000 conversations with zero lag.",
    color: "primary"
  },
  {
    icon: <Shield className="text-accent" />,
    title: "Zero-Trust Privacy",
    desc: "Enterprise-grade encryption with local data residency options. Your customer data never leaves your control.",
    color: "accent"
  }
];

const FeatureHighlight = () => {
  return (
    <div className="container-tight mb-32">
       <div className="grid md:grid-cols-3 gap-8">
         {features.map((f, i) => (
           <motion.div
             key={i}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: i * 0.1 }}
             className="glass-card p-10 rounded-[2.5rem] group relative overflow-hidden transition-all duration-700 hover:-translate-y-2"
           >
             {/* Gradient Shine Effect */}
             <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             
             <div className={`w-16 h-16 rounded-2xl glass-card bg-black border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-${f.color}/40 transition-all duration-500`}>
               {React.cloneElement(f.icon as React.ReactElement<any>, { size: 32 })}
             </div>
             
             <h3 className="text-2xl font-black mb-4 leading-tight group-hover:text-primary transition-colors">{f.title}</h3>
             <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
               {f.desc}
             </p>

             <div className="flex items-center gap-3 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] pt-6 border-t border-white/5">
                <div className={`w-1.5 h-1.5 rounded-full bg-${f.color}`}></div>
                Operational Capability
             </div>
           </motion.div>
         ))}
       </div>

       {/* Massive Neural Hub Banner */}
       <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-12 md:p-16 rounded-[4rem] border-white/5 relative overflow-hidden group shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
       >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
             <div className="lg:w-3/5">
                <div className="flex items-center gap-3 text-primary mb-6">
                   <Cpu className="animate-spin-slow" size={24} />
                   <span className="text-xs font-black uppercase tracking-[0.3em]">Hardware Accelerated Intelligence</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                  Proprietary <br />
                  <span className="text-primary italic">Neural Mesh</span> Integration
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed max-w-xl font-medium">
                  We don't just use APIs. We've built an orchestration layer that combines the world's best LLMs with your specific domain expertise, creating a unique "Sentient Knowledge Base" for your brand.
                </p>
                
                <div className="mt-10 flex gap-4">
                   <button className="px-6 py-3 bg-white text-black font-black rounded-xl hover:scale-105 transition-all text-sm">
                      Technical Docs
                   </button>
                   <button className="px-6 py-3 glass-card border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all text-sm">
                      Security Whitepaper
                   </button>
                </div>
             </div>

             <div className="lg:w-2/5 flex justify-center">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                   {/* Animated Rings */}
                   <div className="absolute inset-0 border-t-2 border-primary/20 rounded-full animate-[spin_15s_linear_infinite]"></div>
                   <div className="absolute inset-8 border-r-2 border-secondary/20 rounded-full animate-[spin_10s_linear_infinite_reverse]"></div>
                   <div className="absolute inset-16 border-b-2 border-accent/20 rounded-full animate-[spin_8s_linear_infinite]"></div>
                   
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 lg:w-32 lg:h-32 glass-card bg-black flex items-center justify-center rounded-3xl shadow-[0_0_50px_rgba(0,242,255,0.2)]">
                         <Zap size={48} className="text-primary animate-pulse" />
                      </div>
                   </div>
                   
                   {/* Orbital dots */}
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full blur-[2px]"></div>
                   <div className="absolute bottom-10 right-0 w-2 h-2 bg-secondary rounded-full blur-[2px]"></div>
                   <div className="absolute bottom-10 left-0 w-2 h-2 bg-accent rounded-full blur-[2px]"></div>
                </div>
             </div>
          </div>
       </motion.div>
    </div>
  );
};

export default FeatureHighlight;

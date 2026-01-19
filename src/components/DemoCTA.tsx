import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

const DemoCTA = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('demo@nextgen-ai.com | Admin@2026');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container-tight mb-32">
       <motion.div 
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="glass-card rounded-[4.5rem] p-12 md:p-24 text-center relative overflow-hidden border-white/5 bg-black"
       >
          {/* Intense background glows */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-[150px] animate-pulse-slow [animation-delay:3s]"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
             <div className="flex justify-center mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.3em]">
                   <ShieldCheck size={14} /> Full Access Provisioned
                </div>
             </div>
             
             <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter italic">Ready to Bridge <br /> <span className="text-primary italic">The Support Gap?</span></h2>
             <p className="text-xl text-slate-400 mb-16 leading-relaxed font-medium">
               Join 500+ hyper-growth companies using NextGen AI to dominate their market. Instant deployment. Zero cold start.
             </p>

             <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="glass-card p-10 rounded-[3rem] border-white/5 bg-black/40 text-left relative group hover:border-white/10 transition-all">
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                     <Zap size={14} className="text-primary" /> Credentials Cluster
                   </p>
                   <div className="space-y-4 mb-8">
                      <div className="flex justify-between items-center pb-3 border-b border-white/5">
                        <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Email</span>
                        <span className="text-white font-mono text-sm tracking-tight font-bold">demo@nextgen-ai.com</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Token ID</span>
                        <span className="text-white font-mono text-sm tracking-tight font-bold">Admin@2026</span>
                      </div>
                   </div>
                   <button 
                     onClick={copyToClipboard}
                     className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl glass-card bg-white/5 border-white/10 hover:bg-white/10 transition-all text-xs font-black uppercase tracking-widest text-slate-300"
                   >
                     {copied ? <Check size={18} className="text-accent" /> : <Copy size={18} />}
                     {copied ? "Decrypted & Copied" : "Copy Credentials"}
                   </button>
                </div>

                <div className="space-y-6">
                   <button className="w-full py-6 rounded-[2rem] bg-gradient-to-r from-primary to-secondary text-black font-black text-xl hover:scale-105 transition-all shadow-[0_20px_50px_rgba(0,242,255,0.2)] flex items-center justify-center gap-4 group">
                      Initialize Live Demo
                      <ExternalLink size={24} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                   </button>
                   <p className="text-xs text-slate-600 font-bold uppercase tracking-widest">
                     Self-Service Deployment Available • No CC Required
                   </p>
                </div>
             </div>
          </div>
       </motion.div>
    </div>
  );
};

export default DemoCTA;

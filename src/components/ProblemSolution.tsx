import { motion } from 'framer-motion';
import { Bot, Zap, ShieldAlert, Sparkles, AlertCircle, TrendingDown, Users } from 'lucide-react';

const problems = [
  {
    icon: <AlertCircle size={24} className="text-hot" />,
    title: "Silent Conversion Leak",
    desc: "71% of visitors leave within 2 minutes of no response. Your static forms are a graveyard for potential revenue."
  },
  {
    icon: <TrendingDown size={24} className="text-hot" />,
    title: "Lag-Heavy Support",
    desc: "Human delay is the silent killer of enterprise deals. 5 minutes of wait time decreases conversion odds by 10x."
  },
  {
    icon: <Users size={24} className="text-hot" />,
    title: "Opaque Lead Data",
    desc: "Incomplete context, scattered email threads, and manual CRM entry. You're flying blind in your sales process."
  }
];

const solutions = [
  {
    icon: <Bot size={24} className="text-accent" />,
    title: "Sentient Engagement",
    desc: "Autonomous AI agents that initiate dialogue in <1s, qualifying intent and capturing data before they can bounce."
  },
  {
    icon: <Zap size={24} className="text-primary" />,
    title: "Zero-Latency Resolution",
    desc: "GPT-4o powered knowledge retrieval provides accurate, human-like answers instantly, closing deals in real-time."
  },
  {
    icon: <Sparkles size={24} className="text-primary" />,
    title: "Neural Lead Intelligence",
    desc: "Every interaction is automatically scored, summarized, and synced to your stack with precise sentiment tagging."
  }
];

const ProblemSolution = () => {
  return (
    <div className="container-tight mb-32 relative">
      {/* Decorative vertical line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-full bg-white/5 hidden lg:block"></div>

      <div className="text-center mb-24">
         <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter italic">
           Legacy <span className="text-slate-600">vs</span> <span className="text-primary">NextGen</span>
         </h2>
         <p className="text-slate-400 max-w-xl mx-auto font-medium">Stop losing revenue to outdated processes. The age of manual support is over.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-stretch">
        {/* The Abyss (Problems) */}
        <div className="space-y-8">
           <h3 className="text-xs font-black text-hot bg-hot/10 px-4 py-2 rounded-lg border border-hot/20 inline-flex items-center gap-2 uppercase tracking-[0.3em] mb-4">
             <ShieldAlert size={14} /> The Problem
           </h3>
           <div className="space-y-6">
              {problems.map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 rounded-3xl border-hot/10 hover:border-hot/30 transition-all group relative overflow-hidden"
                >
                   <div className="absolute top-0 left-0 w-1 h-full bg-hot opacity-20 transition-all group-hover:opacity-100"></div>
                   <div className="flex gap-6">
                      <div className="mt-1 group-hover:scale-110 transition-transform">{p.icon}</div>
                      <div>
                        <h4 className="text-xl font-bold mb-3 text-white">{p.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-black uppercase tracking-tight opacity-60">Critical Vulnerability</p>
                        <p className="text-sm text-slate-400 leading-relaxed mt-2">{p.desc}</p>
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>

        {/* The Ascent (Solutions) */}
        <div className="space-y-8">
           <h3 className="text-xs font-black text-primary bg-primary/10 px-4 py-2 rounded-lg border border-primary/20 inline-flex items-center gap-2 uppercase tracking-[0.3em] mb-4">
             <Bot size={14} /> The Neural Solution
           </h3>
           <div className="space-y-6">
              {solutions.map((s, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 rounded-3xl border-primary/10 hover:border-primary/40 transition-all group relative overflow-hidden bg-white/[0.01]"
                >
                   <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-20 transition-all group-hover:opacity-100"></div>
                   <div className="flex gap-6">
                      <div className="mt-1 group-hover:scale-110 transition-transform">{s.icon}</div>
                      <div>
                        <h4 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{s.title}</h4>
                        <p className="text-sm text-primary leading-relaxed font-black uppercase tracking-widest opacity-80 italic">Optimized Logic</p>
                        <p className="text-sm text-slate-300 leading-relaxed mt-2">{s.desc}</p>
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolution;

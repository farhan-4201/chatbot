import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, ShieldAlert, Lock, Unlock, Sparkles, Cpu, Activity, Globe } from 'lucide-react';
import api from '../lib/api';
import { cn } from '../lib/utils';

const LiveDemo = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const [messages, setMessages] = useState([
    { role: 'bot', text: "SYSTEM: NEURAL CORE ONLINE. Live AI mode active. You are now communicating directly with the Gemini 2.5 Flash engine. No fallbacks. No limits." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [metadata, setMetadata] = useState({
    tokensPerSecond: 0,
    latency: 0,
    model: 'Gemini 2.5 Flash'
  });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const res = await api.auth.login(email, password);
      setToken(res.token);
      setIsAuthenticated(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async (text: string) => {
    if (!text.trim() || isTyping) return;
    
    const userMsg = { role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await api.chat.sendLive(text, token);
      setMessages(prev => [...prev, { role: 'bot', text: response.response }]);
      if (response.metadata) setMetadata(response.metadata);
    } catch (err: any) {
      setMessages(prev => [...prev, { role: 'bot', text: `ERROR: ${err.message}` }]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[600px] glass-card rounded-[3rem] border-white/5 overflow-hidden relative flex items-center justify-center p-8">
        <div className="absolute inset-0 bg-red-500/5 backdrop-blur-3xl animate-pulse"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-md w-full text-center space-y-8"
        >
          <div className="w-20 h-20 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto border border-red-500/30">
            <Lock className="text-red-500" size={40} />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-3xl font-black text-white tracking-tight uppercase italic">Restricted Access</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              This terminal connects directly to the production neural nexus. 
              Enterprise credentials are required for live inference.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Enterprise Email</label>
              <input 
                type="email"
                placeholder="demo@nextgen-ai.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/60 border border-white/10 rounded-xl py-4 px-5 text-white placeholder:text-slate-700 focus:outline-none focus:border-red-500/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Access Password</label>
              <input 
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/60 border border-white/10 rounded-xl py-4 px-5 text-white placeholder:text-slate-700 focus:outline-none focus:border-red-500/50 transition-all"
              />
            </div>
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 text-red-500 text-xs font-bold animate-shake">
                <ShieldAlert size={14} />
                {error}
              </div>
            )}
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-white text-black font-black uppercase tracking-tighter rounded-xl hover:bg-red-500 hover:text-white transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? "Validating Credentials..." : (
                <>
                  Initialize Live Link
                  <Unlock size={18} />
                </>
              )}
            </button>
          </form>

          <div className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em] space-y-1">
            <p>demo@nextgen-ai.com</p>
            <p>Admin@2026</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-[3rem] border-primary/20 overflow-hidden h-[800px] flex flex-col relative">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
      
      {/* Header */}
      <div className="relative z-10 p-6 border-b border-white/5 bg-black/40 backdrop-blur-md flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <Activity size={24} className="relative z-10" />
          </div>
          <div>
            <h3 className="text-xl font-black italic tracking-tighter text-white">LIVE_NEURAL_LINK <span className="text-[10px] text-primary not-italic ml-2 font-mono">ENCRYPTED</span></h3>
            <div className="flex items-center gap-3 mt-1">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                <span className="text-[9px] font-black uppercase text-slate-500">Live Inference</span>
              </div>
              <div className="w-px h-2 bg-white/10"></div>
              <span className="text-[9px] font-black uppercase text-slate-500">{metadata.model}</span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="text-right">
            <p className="text-[9px] font-black uppercase text-slate-500 mb-0.5 tracking-widest">Latency</p>
            <p className="text-xs font-mono text-primary">{metadata.latency}ms</p>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-black uppercase text-slate-500 mb-0.5 tracking-widest">Throughput</p>
            <p className="text-xs font-mono text-primary">{metadata.tokensPerSecond} t/s</p>
          </div>
        </div>
      </div>

      {/* Main Stream */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar relative z-10 bg-grid-small bg-repeat">
         <AnimatePresence>
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={cn(
                  "flex gap-4 max-w-[80%]",
                  m.role === 'user' ? "ml-auto flex-row-reverse" : ""
                )}
              >
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border",
                  m.role === 'bot' ? "bg-black border-primary/30 text-primary shadow-[0_0_15px_rgba(0,242,255,0.2)]" : "bg-primary border-transparent text-black"
                )}>
                  {m.role === 'bot' ? <Cpu size={20} /> : <User size={20} />}
                </div>
                <div className={cn(
                  "p-5 rounded-[1.5rem] text-sm leading-relaxed",
                  m.role === 'bot' 
                    ? "glass-card bg-white/[0.04] text-slate-200 border-white/5 rounded-tl-none font-medium" 
                    : "bg-primary text-black font-extrabold rounded-tr-none shadow-xl"
                )}>
                  {m.text}
                </div>
              </motion.div>
            ))}
         </AnimatePresence>
         
         {isTyping && (
           <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-black border border-primary/30 text-primary flex items-center justify-center">
                 <Cpu size={20} />
              </div>
              <div className="glass-card bg-white/[0.04] p-5 rounded-[1.5rem] rounded-tl-none border border-white/5 flex items-center gap-3">
                 <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full"
                 />
                 <span className="text-[10px] font-black uppercase text-primary tracking-widest">Processing Live Inference...</span>
              </div>
           </div>
         )}
      </div>

      {/* Footer Input */}
      <div className="p-8 border-t border-white/5 bg-black/40 backdrop-blur-md relative z-10">
         <div className="relative">
            <input 
              type="text"
              value={input}
              disabled={isTyping}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
              placeholder="Inject command into neural core..."
              className="w-full bg-black/60 border border-primary/20 rounded-2xl py-5 px-6 pr-16 focus:outline-none focus:border-primary/50 text-white font-medium transition-all"
            />
            <button 
              onClick={() => handleSend(input)}
              disabled={isTyping}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-primary text-black hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-[0_0_20px_rgba(0,242,255,0.3)]"
            >
              <Send size={20} />
            </button>
         </div>
         <div className="mt-4 flex flex-wrap gap-4 justify-center">
            {[
              { icon: Sparkles, label: "Deep Analysis" },
              { icon: Globe, label: "Global Context" },
              { icon: Cpu, label: "Real-time" }
            ].map((tag, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <tag.icon size={10} className="text-primary" />
                <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">{tag.label}</span>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default LiveDemo;

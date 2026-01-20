import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Command, ShieldCheck, Zap } from 'lucide-react';
import { cn } from '../lib/utils';
import api from '../lib/api';

const INITIAL_MESSAGES = [
  { role: 'bot', text: "Welcome to NextGen AI. I'm currently analyzing your visitor profile for real-time lead qualification. How can I assist you?" },
];

const SUGGESTIONS = [
  "How accurate is the lead scoring?",
  "What models do you use?",
  "Show me Enterprise pricing.",
];

const ChatDemo = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeIntent, setActiveIntent] = useState<string | null>(null);
  const [metadata, setMetadata] = useState({
    tokensPerSecond: 145.2,
    latency: 24,
    model: 'GPT-4o (Fine-tuned)'
  });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isTyping) return;
    
    setMessages(prev => [...prev, { role: 'user', text }]);
    setInput('');
    setIsTyping(true);
    setActiveIntent("Analyzing...");

    try {
      const response = await api.chat.send(text);
      
      setMessages(prev => [...prev, { role: 'bot', text: response.response }]);
      setActiveIntent(response.intent);
      if (response.metadata) {
        setMetadata(response.metadata);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: 'Sorry, I encountered an error processing your request. Please try again.' 
      }]);
      setActiveIntent('Error');
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="container-tight relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Live AI <span className="text-primary italic">Sentience</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Test our core engine below. See how it detects intent and qualifies leads in real-time.</p>
      </div>

      <div className="glass-card rounded-[2.5rem] overflow-hidden border-white/5 shadow-2xl flex flex-col lg:flex-row h-[700px]">
        {/* Advanced Intelligence Sidebar */}
        <div className="hidden lg:flex w-80 border-r border-white/5 bg-black/40 p-8 flex-col gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
              <span className="font-display font-extrabold tracking-widest text-xs uppercase">Core Engine Live</span>
            </div>
            
            <div className="space-y-4">
              <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em]">Context Brain</p>
              <div className="p-4 glass-card bg-white/[0.02] rounded-2xl border-white/5 space-y-3">
                 <div className="flex justify-between items-center text-[10px]">
                    <span className="text-slate-400">Tokens/s:</span>
                    <span className="text-primary font-mono">{metadata.tokensPerSecond}</span>
                 </div>
                 <div className="flex justify-between items-center text-[10px]">
                    <span className="text-slate-400">Latency:</span>
                    <span className="text-accent font-mono">{metadata.latency}ms</span>
                 </div>
                 <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ width: ['20%', '80%', '40%'] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="h-full bg-primary"
                    />
                 </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em]">Intent Detection</p>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIntent || 'idle'}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="p-3 bg-primary/10 border border-primary/20 rounded-xl text-[10px] text-primary font-bold flex items-center gap-2"
                >
                  <Command size={12} />
                  {activeIntent || "Awaiting Input..."}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-auto p-4 glass-card bg-white/[0.02] rounded-2xl border-white/5 italic text-[10px] text-slate-500 leading-relaxed">
             "Our AI doesn't just reply, it acts as a strategic branch of your sales organization."
          </div>
        </div>

        {/* Dynamic Chat Canvas */}
        <div className="flex-1 flex flex-col bg-black/20">
          {/* Status Header */}
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-black">
                   <Bot size={24} />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-black border-2 border-slate-900 flex items-center justify-center">
                   <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold">Neural Assistant <span className="text-[10px] font-mono text-slate-500 ml-2">{metadata.model}</span></h4>
                <div className="flex items-center gap-1.5 mt-1">
                  <ShieldCheck size={12} className="text-accent" />
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Verified Agent • {metadata.latency}ms Lag</span>
                </div>
              </div>
            </div>
            <Zap size={20} className="text-slate-700" />
          </div>

          {/* Message Stream */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
            <AnimatePresence>
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={cn(
                    "flex gap-4 max-w-[85%]",
                    m.role === 'user' ? "ml-auto flex-row-reverse" : ""
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg",
                    m.role === 'bot' 
                      ? "bg-black border border-white/10 text-primary" 
                      : "bg-primary text-black"
                  )}>
                    {m.role === 'bot' ? <Bot size={20} /> : <User size={20} />}
                  </div>
                  <div className={cn(
                    "p-5 rounded-[1.5rem] text-sm leading-relaxed shadow-xl",
                    m.role === 'bot' 
                      ? "glass-card bg-white/[0.03] text-slate-200 rounded-tl-none border-white/10" 
                      : "bg-primary text-black font-extrabold rounded-tr-none"
                  )}>
                    {m.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isTyping && (
              <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                 <div className="w-10 h-10 rounded-xl bg-black border border-white/10 text-primary flex items-center justify-center">
                   <Bot size={20} />
                 </div>
                 <div className="glass-card bg-white/[0.03] p-5 rounded-[1.5rem] rounded-tl-none border border-white/10">
                    <div className="flex gap-1.5 items-center">
                      <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 bg-primary rounded-full"></motion.span>
                      <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 bg-primary rounded-full"></motion.span>
                      <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 bg-primary rounded-full"></motion.span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase ml-2 tracking-widest">Neural Processing</span>
                    </div>
                 </div>
              </div>
            )}
          </div>

          {/* Action Hub */}
          <div className="p-8 border-t border-white/5 space-y-6">
            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((s, i) => (
                <button
                  key={i}
                  disabled={isTyping}
                  onClick={() => handleSend(s)}
                  className="text-[10px] px-4 py-2 rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-slate-400 hover:text-primary font-bold active:scale-95 disabled:opacity-50"
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="relative group">
               <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition duration-500"></div>
                <input
                  type="text"
                  value={input}
                  disabled={isTyping}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
                  placeholder="Ask neural engine specialized questions..."
                  className="relative w-full bg-black-card/60 border border-white/10 rounded-2xl py-5 px-6 pr-16 focus:outline-none focus:border-primary/50 transition-all text-white font-medium placeholder:text-slate-600"
                />
                <button 
                  onClick={() => handleSend(input)}
                  disabled={isTyping}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-primary text-black hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-lg disabled:opacity-50"
                >
                  <Send size={20} />
                </button>
            </div>
            <div className="text-[10px] text-center text-slate-600 font-bold uppercase tracking-[0.2em]">
               Press <span className="text-white">Enter</span> to commit input to neural core
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDemo;

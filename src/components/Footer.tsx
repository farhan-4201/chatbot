import { Github, Twitter, Linkedin, Mail, ArrowUpRight, Globe, Shield, Radio } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-24 border-t border-white/5 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="container-tight relative z-10">
        <div className="grid md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-black font-black text-lg group-hover:rotate-6 transition-transform">
                AI
              </div>
              <span className="font-display font-light text-2xl tracking-tighter text-white">NextGen <span className="font-black">Intelligence</span></span>
            </div>
            <p className="text-slate-500 max-w-sm mb-10 leading-relaxed font-medium">
              Architecting the bridge between autonomous AI agents and enterprise-scale customer success. Built for teams that demand sub-millisecond precision.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl glass-card border-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all active:scale-95">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black mb-8 text-xs uppercase tracking-[0.3em] text-slate-600 italic">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Neural Engine', 'Analytics', 'Architecture', 'The Grid'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm font-bold text-slate-500 hover:text-primary transition-all flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-slate-800 transition-all group-hover:w-3 group-hover:bg-primary"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 text-xs uppercase tracking-[0.3em] text-slate-600 italic">Connectivity</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-3 text-slate-500">
                <Globe size={18} className="text-slate-700" />
                <span className="text-sm font-bold">Global Presence</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <Shield size={18} className="text-slate-700" />
                <span className="text-sm font-bold">ISO-27001 Certified</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <Radio size={18} className="text-accent animate-pulse" />
                <span className="text-sm font-bold">24/7 Ops Center</span>
              </li>
              <li className="pt-4">
                 <button className="w-full py-4 rounded-xl glass-card border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-black transition-all">
                    System Status: Healthy
                 </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-slate-700 italic">
           <p>© 2026 NEXTGEN INTELLIGENCE CO. ALL SYSTEMS OPTIMIZED.</p>
           <div className="flex gap-8 mt-6 md:mt-0">
             <a href="#" className="hover:text-slate-400 flex items-center gap-1 group">Privacy Interface <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a>
             <a href="#" className="hover:text-slate-400 flex items-center gap-1 group">Security Protocol <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

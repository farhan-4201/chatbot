import React from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import ChatDemo from './components/ChatDemo';
import DashboardMockup from './components/DashboardMockup';
import FeatureHighlight from './components/FeatureHighlight';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import TechStack from './components/TechStack';
import DemoCTA from './components/DemoCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[0%] right-[-10%] w-[60%] h-[60%] bg-secondary/10 rounded-full blur-[150px] animate-pulse-slow [animation-delay:2s]"></div>
        <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-[100px] animate-pulse-slow [animation-delay:4s]"></div>
      </div>

      {/* Floating Navbar */}
      <nav className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4">
        <div className="max-w-6xl w-full glass-card border-white/10 rounded-2xl py-3 px-6 md:px-10 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-black font-black text-lg">
               AI
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">NextGen AI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {['Solution', 'Chat Demo', 'Dashboard', 'Stacks'].map((item, i) => (
              <a 
                key={i} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-sm font-medium text-slate-400 hover:text-primary transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
             <button className="hidden sm:block text-sm font-bold text-slate-300 hover:text-white transition-colors">
               Login
             </button>
             <button className="px-5 py-2.5 rounded-xl bg-primary text-black font-extrabold text-sm hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all active:scale-95">
               Get Started
             </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <section id="home" className="pt-40">
          <Hero />
        </section>
        
        <section id="solution">
          <ProblemSolution />
        </section>
        
        <section id="chat-demo">
          <ChatDemo />
        </section>
        
        <section id="dashboard">
          <DashboardMockup />
        </section>

        <FeatureHighlight />
        
        <section id="stacks">
          <ArchitectureDiagram />
          <TechStack />
        </section>

        <DemoCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;

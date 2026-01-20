import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import LiveDemo from './components/LiveDemo';
import Footer from './components/Footer';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4">
      <div className="max-w-6xl w-full glass-card border-white/10 rounded-2xl py-3 px-6 md:px-10 flex items-center justify-between shadow-2xl">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-black font-black text-lg">
             AI
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">NextGen AI</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {isHome ? (
            ['Solution', 'Chat Demo', 'Dashboard', 'Stacks'].map((item, i) => (
              <a 
                key={i} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-sm font-medium text-slate-400 hover:text-primary transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))
          ) : (
            <Link to="/" className="text-sm font-medium text-slate-400 hover:text-primary transition-all">Back to Home</Link>
          )}
          <Link 
            to="/live-demo" 
            className={`text-sm font-medium transition-all relative group ${location.pathname === '/live-demo' ? 'text-primary' : 'text-slate-400 hover:text-primary'}`}
          >
            Live Demo
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${location.pathname === '/live-demo' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
           <button className="hidden sm:block text-sm font-bold text-slate-300 hover:text-white transition-colors">
             Login
           </button>
           <Link to="/live-demo" className="px-5 py-2.5 rounded-xl bg-primary text-black font-extrabold text-sm hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all active:scale-95 text-center">
             Initialize Live Demo
           </Link>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        {/* Dynamic Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-grid opacity-20"></div>
          
          <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-[0%] right-[-10%] w-[60%] h-[60%] bg-secondary/10 rounded-full blur-[150px] animate-pulse-slow [animation-delay:2s]"></div>
          <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-[100px] animate-pulse-slow [animation-delay:4s]"></div>
        </div>

        <Navbar />

        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/live-demo" element={
              <div className="pt-40 container pb-20">
                <div className="text-center mb-16 space-y-4">
                  <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter text-white">Experimental <span className="text-primary">Live Nexus</span></h2>
                  <p className="text-slate-400 max-w-2xl mx-auto font-medium">Bypass the simulations. Access our live production models directly. Requires a valid authorization license.</p>
                </div>
                <LiveDemo />
              </div>
            } />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

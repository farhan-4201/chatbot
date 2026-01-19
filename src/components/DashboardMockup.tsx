import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import { LayoutDashboard, Sparkles, Bell, Search, Settings } from 'lucide-react';
import api from '../lib/api';

const DashboardMockup = () => {
  const [analyticsData, setAnalyticsData] = useState<any[]>([]);
  const [distributionData, setDistributionData] = useState<any[]>([]);
  const [stats, setStats] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [analyticsRes, distributionRes, statsRes] = await Promise.all([
          api.dashboard.getAnalytics(),
          api.dashboard.getDistribution(),
          api.dashboard.getStats()
        ]);

        setAnalyticsData(analyticsRes.analyticsData || []);
        setDistributionData(distributionRes.distributionData || []);
        setStats(statsRes.stats || []);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        // Fallback to default data
        setAnalyticsData([
          { name: 'Mon', leads: 400, conv: 240 },
          { name: 'Tue', leads: 300, conv: 139 },
          { name: 'Wed', leads: 600, conv: 380 },
          { name: 'Thu', leads: 800, conv: 490 },
          { name: 'Fri', leads: 500, conv: 390 },
          { name: 'Sat', leads: 400, conv: 200 },
          { name: 'Sun', leads: 300, conv: 150 },
        ]);
        setDistributionData([
          { name: 'Hot', value: 45, color: '#ff00e5' },
          { name: 'Warm', value: 30, color: '#ff8a00' },
          { name: 'Cold', value: 25, color: '#0066ff' },
        ]);
        setStats([
          { label: "AI Response Quality", value: "98.4%", color: "text-primary" },
          { label: "Lead Capture Rate", value: "+215%", color: "text-accent" },
          { label: "Avg. Latency", value: "0.12s", color: "text-secondary" },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container-tight relative">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/3 pt-10">
          <div className="flex items-center gap-3 text-secondary mb-6 group">
            <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
              <LayoutDashboard size={20} />
            </div>
            <span className="font-display font-black tracking-[0.2em] text-xs uppercase">Operational Center</span>
          </div>
          <h2 className="text-5xl font-black mb-8 leading-tight">Elite <span className="text-secondary italic">Lead</span> Management</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
            Your bridge between AI interactions and human strategy. Real-time metrics that actually move the needle.
          </p>
          
          <div className="space-y-4">
             {stats.map((stat, i) => (
                <div key={i} className="glass-card p-5 rounded-2xl border-white/5 flex items-center justify-between">
                   <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
                   <span className={`text-xl font-display font-black ${stat.color}`}>{stat.value}</span>
                </div>
             ))}
          </div>
        </div>

        <div className="lg:w-2/3 w-full">
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="glass-card rounded-[3rem] p-1 border-white/5 overflow-hidden shadow-[0_0_100px_rgba(255,0,229,0.05)]"
          >
             <div className="bg-black/40 p-8 md:p-10">
                {/* Mock Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                   <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-hot"></div>
                      <div className="w-3 h-3 rounded-full bg-warm"></div>
                      <div className="w-3 h-3 rounded-full bg-accent"></div>
                      <div className="h-10 w-[1px] bg-white/10 mx-2"></div>
                      <h3 className="text-xl font-bold">Performance Matrix</h3>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="glass-card px-4 py-2 rounded-xl text-xs font-bold text-slate-400 border-white/10 flex items-center gap-2">
                        <Search size={14} /> Search Records...
                      </div>
                      <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400">
                         <Bell size={18} />
                      </div>
                      <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400">
                         <Settings size={18} />
                      </div>
                   </div>
                </div>

                {/* Main Graph */}
                <div className="h-[350px] w-full mb-12">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={analyticsData}>
                      <defs>
                        <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#00f2ff" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#00f2ff" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorConv" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ff00e5" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#ff00e5" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
                      <XAxis dataKey="name" stroke="#334155" fontSize={11} tickLine={false} axisLine={false} />
                      <YAxis stroke="#334155" fontSize={11} tickLine={false} axisLine={false} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                        itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                      />
                      <Area type="monotone" dataKey="leads" stroke="#00f2ff" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
                      <Area type="monotone" dataKey="conv" stroke="#ff00e5" strokeWidth={3} fillOpacity={1} fill="url(#colorConv)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {/* Distribution UI */}
                   <div className="glass-card p-6 rounded-3xl bg-white/[0.02] border-white/5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-[40px] rounded-full"></div>
                      <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-6">Traffic Composition</h4>
                      <div className="flex items-center gap-4">
                        <div className="h-[120px] w-[120px]">
                           <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                 <Pie
                                    data={distributionData}
                                    innerRadius={40}
                                    outerRadius={55}
                                    paddingAngle={8}
                                    dataKey="value"
                                    stroke="none"
                                 >
                                    {distributionData.map((entry, index) => (
                                       <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                 </Pie>
                              </PieChart>
                           </ResponsiveContainer>
                        </div>
                        <div className="flex-1 space-y-3">
                           {distributionData.map((d, i) => (
                             <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                   <div className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }}></div>
                                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{d.name} Prospect</span>
                                </div>
                                <span className="text-xs font-black text-white">{d.value}%</span>
                             </div>
                           ))}
                        </div>
                      </div>
                   </div>

                   {/* AI Insight UI */}
                   <div className="glass-card p-6 rounded-3xl bg-white/[0.02] border-white/5 space-y-4">
                      <div className="flex items-center gap-2 text-primary">
                         <Sparkles size={16} />
                         <h4 className="text-xs font-black uppercase tracking-[0.2em]">Live Insight Buffer</h4>
                      </div>
                      <div className="space-y-4">
                         <div className="p-3 bg-white/5 rounded-xl border-l-4 border-secondary transition-all hover:bg-white/[0.08]">
                           <div className="text-[9px] font-black text-secondary uppercase mb-1">High Conversion Probability</div>
                           <p className="text-[11px] text-slate-300 italic">User queried enterprise scalability. Draft response optimized for objection handling.</p>
                         </div>
                         <div className="p-3 bg-white/5 rounded-xl border-l-4 border-accent transition-all hover:bg-white/[0.08]">
                           <div className="text-[9px] font-black text-accent uppercase mb-1">Anomaly Detected</div>
                           <p className="text-[11px] text-slate-400">Repeated pricing queries from competitor IP range. Tagging as 'Market Intel'.</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;

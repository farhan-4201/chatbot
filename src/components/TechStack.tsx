import { motion } from 'framer-motion';

const tech = [
  { name: "React.js", category: "App Layer", color: "from-cyan-400 to-blue-600" },
  { name: "Tailwind", category: "Style Logic", color: "from-sky-400 to-cyan-500" },
  { name: "Node.js", category: "Compute", color: "from-emerald-400 to-green-600" },
  { name: "TypeScript", category: "Engine", color: "from-blue-500 to-indigo-600" },
  { name: "MongoDB", category: "Data Lake", color: "from-green-500 to-emerald-700" },
  { name: "GPT-4o", category: "Reasoning", color: "from-purple-500 to-pink-600" },
  { name: "JWT Core", category: "Auth Grid", color: "from-orange-400 to-red-600" },
  { name: "Recharts", category: "Viz Engine", color: "from-rose-500 to-pink-600" },
];

const TechStack = () => {
  return (
    <div className="container-tight mt-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tech.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: 'spring', stiffness: 300 }}
              className="glass-card p-8 rounded-3xl border-white/5 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden"
            >
              {/* Inner Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] transition-opacity`}></div>
              
              <div className={`w-14 h-14 rounded-2xl mb-6 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-[1px]`}>
                 <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center font-black text-xs text-white group-hover:bg-transparent group-hover:text-black transition-all">
                    {item.name[0]}
                 </div>
              </div>

              <h4 className="font-display font-black text-white group-hover:text-primary transition-colors text-lg mb-1">{item.name}</h4>
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-black">{item.category}</p>
              
              {/* Decorative line */}
              <div className="mt-6 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
    </div>
  );
};

export default TechStack;

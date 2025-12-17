import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Recycle, FlaskConical, Zap, Factory } from 'lucide-react';

const steps = [
  { id: 1, title: 'Used Batteries', icon: Battery, desc: 'Collection & Discharge' },
  { id: 2, title: 'Intelligent Recycling', icon: Recycle, desc: 'Mechanical Separation' },
  { id: 3, title: 'Black Mass', icon: Factory, desc: 'High-Purity Extraction' },
  { id: 4, title: 'Refined Materials', icon: FlaskConical, desc: 'Lithium, Cobalt, Nickel' },
  { id: 5, title: 'New Batteries', icon: Zap, desc: 'Circular Manufacturing' },
];

export const ProcessVisualizer: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden perspective-container">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(52, 211, 153, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(52, 211, 153, 0.1) 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>
      </div>

      {/* Central Axis Line */}
      <div className="absolute w-[80%] h-1 bg-gradient-to-r from-transparent via-eco-500 to-transparent opacity-30 top-1/2 transform -translate-y-1/2" />

      <div className="relative z-10 flex w-full max-w-6xl justify-between items-center px-4 md:px-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 50, rotateX: 45 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="flex flex-col items-center group relative preserve-3d"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Connecting Line (Animated) */}
            {index < steps.length - 1 && (
               <motion.div 
                 className="absolute left-[50%] top-[40%] h-[2px] bg-eco-500 origin-left z-0"
                 style={{ width: '200%' }} // Span to next
                 initial={{ scaleX: 0 }}
                 whileInView={{ scaleX: 1 }}
                 transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
               />
            )}

            {/* Hexagon Node */}
            <motion.div 
                className="w-20 h-20 md:w-24 md:h-24 relative flex items-center justify-center mb-4 z-10 cursor-pointer"
                whileHover={{ 
                  scale: 1.2, 
                  rotateZ: 10,
                  rotateX: 15,
                  translateZ: 20
                }}
                transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-slate-900 border-2 border-eco-500/30 transform rotate-45 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:border-eco-400 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] group-hover:bg-slate-800 transition-all duration-300 backdrop-blur-md"></div>
              <step.icon className="w-8 h-8 md:w-10 md:h-10 text-eco-400 relative z-10 drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]" strokeWidth={1.5} />
            </motion.div>

            {/* Text Content */}
            <motion.div 
              className="text-center z-10 bg-slate-950/80 p-2 rounded-lg backdrop-blur-sm border border-slate-800 shadow-xl"
              whileHover={{ translateZ: 10, y: -5 }}
            >
              <h3 className="text-eco-400 font-mono text-xs md:text-sm font-bold tracking-wider uppercase mb-1">{step.title}</h3>
              <p className="text-slate-400 text-[10px] md:text-xs max-w-[100px]">{step.desc}</p>
            </motion.div>
            
            {/* Step Number */}
            <div className="absolute -top-6 text-slate-700 font-mono text-4xl font-bold opacity-20 select-none pointer-events-none">
              0{step.id}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
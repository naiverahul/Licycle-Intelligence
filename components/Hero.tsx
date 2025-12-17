import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Abstract Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800/20 via-slate-950 to-slate-950"></div>
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-5 bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(16,185,129,0.5)_360deg)]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-eco-900/20 border border-eco-500/20 px-3 py-1 rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-eco-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-eco-500"></span>
            </span>
            <span className="text-eco-400 text-xs font-mono tracking-wider uppercase">Validation Stage // Pilot Active</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight"
          >
            Closing the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-400 to-teal-600">
              Battery Loop
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed"
          >
            Transforming battery waste into critical grade materials through intelligent, data-driven recycling. Sustainable. Efficient. Scalable.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link to="/contact" className="group relative px-8 py-4 bg-eco-600 hover:bg-eco-500 text-white font-semibold rounded-sm transition-all overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                <span className="relative flex items-center">
                    Partner With Us <ArrowRight className="ml-2 w-5 h-5" />
                </span>
            </Link>
            <Link to="/technology" className="px-8 py-4 border border-slate-700 hover:border-eco-500 text-slate-300 hover:text-white font-semibold rounded-sm transition-colors flex items-center justify-center">
                Pilot Collaboration
            </Link>
          </motion.div>
        </div>

        {/* Hero Visual - Abstract Rotating Battery Core */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:flex items-center justify-center relative perspective-container"
        >
           <div className="relative w-80 h-80 md:w-96 md:h-96" style={{ transformStyle: 'preserve-3d' }}>
              {/* Outer Rings */}
              <div className="absolute inset-0 border border-slate-700 rounded-full animate-spin-slow opacity-40 border-dashed"></div>
              <div className="absolute inset-8 border border-eco-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Central Core */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateZ(20px)' }}>
                  <div className="w-48 h-64 bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-600 flex flex-col items-center justify-center shadow-2xl shadow-eco-500/10 relative overflow-hidden group hover:border-eco-500/50 transition-colors">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-eco-500 to-transparent animate-pulse"></div>
                      <Activity className="w-16 h-16 text-eco-400 mb-4" />
                      <div className="text-2xl font-bold text-white">98.5%</div>
                      <div className="text-xs text-slate-400 font-mono uppercase tracking-widest mt-1">Recovery Rate</div>
                      
                      {/* Scanning Line */}
                      <div className="absolute top-0 w-full h-2 bg-eco-400/30 blur-sm animate-[scan_3s_ease-in-out_infinite]"></div>
                  </div>
              </div>

              {/* Orbiting Particles */}
              <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 animate-spin-slow" style={{ transformStyle: 'preserve-3d' }}>
                 <div className="absolute top-0 left-1/2 w-4 h-4 bg-teal-500 rounded-full shadow-[0_0_15px_#14b8a6] transform -translate-y-2"></div>
                 <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981] transform translate-y-2"></div>
              </div>
           </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
    </section>
  );
};
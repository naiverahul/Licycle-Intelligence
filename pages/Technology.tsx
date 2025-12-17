import React from 'react';
import { ProcessVisualizer } from '../components/ProcessVisualizer';
import { Cpu, BarChart3, ShieldCheck } from 'lucide-react';

export const Technology: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Circular Methodology</h1>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                From end-of-life collection to battery-grade material production, our intelligent recycling process ensures maximum recovery with minimal impact.
              </p>
           </div>
           <ProcessVisualizer />
        </div>
      </section>

      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <div className="mb-12">
             <span className="text-eco-500 font-mono text-sm uppercase tracking-widest">Core Technology</span>
             <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Intelligent Material Recovery</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: "Sensor-Driven Monitoring",
                desc: "Real-time analysis of material composition during shredding and separation to maximize yield purity."
              },
              {
                icon: BarChart3,
                title: "Data-Guided Optimization",
                desc: "Proprietary algorithms adjust processing parameters dynamically based on feedstock variability."
              },
              {
                icon: ShieldCheck,
                title: "Safety First Architecture",
                desc: "Automated thermal management and inert atmosphere processing to neutralize fire risks."
              }
            ].map((tech, i) => (
              <div key={i} className="group p-8 bg-slate-950 rounded-xl border border-slate-800 hover:border-eco-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-eco-900/20 transition-colors">
                  <tech.icon className="text-eco-400 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
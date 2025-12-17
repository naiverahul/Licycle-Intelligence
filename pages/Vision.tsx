import React from 'react';
import { Microscope } from 'lucide-react';

export const Vision: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <Microscope className="w-16 h-16 text-eco-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Engineering A Sustainable Future</h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed">
            "We are building a future where the battery economy is fully circular. Our mission is to decouple battery production from mining, ensuring critical materials are preserved for future generations."
          </p>
          
          <div className="inline-block px-8 py-4 border border-slate-700 rounded-full bg-slate-900/50 backdrop-blur-sm mb-12">
            <span className="text-slate-400 font-mono text-sm">LiCycle Intelligence is currently in the </span>
            <span className="text-eco-400 font-bold font-mono text-sm ml-2">PILOT VALIDATION PHASE</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto text-left">
             <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <h3 className="text-white font-bold mb-2">Our Mission</h3>
                <p className="text-slate-400 text-sm">To eliminate battery waste and provide a sustainable, domestic source of critical battery materials.</p>
             </div>
             <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <h3 className="text-white font-bold mb-2">Validation Status</h3>
                <p className="text-slate-400 text-sm">Ongoing experiments, data collection, and partner trials are currently underway at our facility.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};
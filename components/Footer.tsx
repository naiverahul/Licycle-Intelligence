import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <p className="text-slate-400 mb-8 max-w-md">
              Interested in pilot collaboration, investment, or sustainability partnerships? Reach out to our engineering team.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-eco-500" />
                <a href="mailto:saksham23467@iiitd.ac.in" className="hover:text-white transition-colors">saksham23467@iiitd.ac.in</a>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-eco-500" />
                <a href="mailto:rahul23418@iiitd.ac.in" className="hover:text-white transition-colors">rahul23418@iiitd.ac.in</a>
              </div>
              <div className="flex items-center space-x-3 text-slate-300 mt-6">
                <MapPin className="w-5 h-5 text-eco-500" />
                <span>IIIT Delhi, Okhla Industrial Estate, Phase III, New Delhi</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
             <h4 className="text-white font-bold mb-4">Project Status</h4>
             <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-xs uppercase text-slate-500 font-semibold mb-1">
                        <span>Technology Readiness</span>
                        <span>Level 6</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                        <div className="bg-eco-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-xs uppercase text-slate-500 font-semibold mb-1">
                        <span>Pilot Data Collection</span>
                        <span>Ongoing</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                        <div className="bg-teal-500 h-2 rounded-full animate-pulse" style={{ width: '80%' }}></div>
                    </div>
                </div>
             </div>
             <div className="mt-8 pt-8 border-t border-slate-800 text-xs text-slate-500 text-center">
                &copy; {new Date().getFullYear()} LiCycle Intelligence. All Rights Reserved.
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
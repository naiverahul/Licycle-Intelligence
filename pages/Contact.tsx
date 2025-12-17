import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-slate-950">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto bg-slate-900/50 p-12 rounded-2xl border border-slate-800 backdrop-blur-sm">
           <h1 className="text-4xl font-bold text-white mb-6 text-center">Partner With Us</h1>
           <p className="text-slate-400 text-center mb-12 text-lg">
             We are looking for strategic partners in the EV and battery manufacturing sectors. 
           </p>

           <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                  <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-2">Academic & Research</h3>
                  <div>
                    <p className="text-slate-500 text-sm mb-1">Research Lead</p>
                    <div className="flex items-center space-x-3 text-slate-300">
                        <Mail className="w-5 h-5 text-eco-500" />
                        <a href="mailto:saksham23467@iiitd.ac.in" className="hover:text-white transition-colors">saksham23467@iiitd.ac.in</a>
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm mb-1">Technical Lead</p>
                    <div className="flex items-center space-x-3 text-slate-300">
                        <Mail className="w-5 h-5 text-eco-500" />
                        <a href="mailto:rahul23418@iiitd.ac.in" className="hover:text-white transition-colors">rahul23418@iiitd.ac.in</a>
                    </div>
                  </div>
              </div>

              <div className="space-y-8">
                 <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-2">Location</h3>
                 <div className="flex items-start space-x-3 text-slate-300">
                    <MapPin className="w-6 h-6 text-eco-500 mt-1" />
                    <span>
                      <strong>IIIT Delhi</strong><br/>
                      Okhla Industrial Estate,<br/>
                      Phase III, New Delhi<br/>
                      India
                    </span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
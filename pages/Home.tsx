import React from 'react';
import { Hero } from '../components/Hero';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      {/* The Problem Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Critical Material Gap</h2>
              <div className="space-y-6 text-slate-400">
                <p className="text-lg">
                  The rapid growth of EV production is creating a dual crisis: a massive surge in battery waste and a critical shortage of raw materials like lithium, cobalt, and nickel.
                </p>
                <ul className="space-y-4 mt-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">⚠</span>
                    <span><strong>Supply Chain Risk:</strong> Traditional mining cannot keep pace with demand.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">⚠</span>
                    <span><strong>Environmental Hazard:</strong> Improper disposal leaks toxins into ecosystems.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">⚠</span>
                    <span><strong>Resource Loss:</strong> Valuable metals are lost in inefficient recycling.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950 p-6 rounded-lg border border-slate-800 hover:border-eco-500/30 transition-colors">
                <h4 className="text-4xl font-bold text-white mb-2">500%</h4>
                <p className="text-sm text-slate-500">Projected increase in battery waste by 2030</p>
              </div>
              <div className="bg-slate-950 p-6 rounded-lg border border-slate-800 hover:border-eco-500/30 transition-colors">
                <h4 className="text-4xl font-bold text-white mb-2">70%</h4>
                <p className="text-sm text-slate-500">Of global cobalt is mined in high-risk regions</p>
              </div>
              <div className="col-span-2 bg-gradient-to-r from-slate-900 to-slate-950 p-6 rounded-lg border border-slate-800">
                <h4 className="text-xl font-bold text-white mb-2">Strategic Necessity</h4>
                <p className="text-sm text-slate-500">Recycling is not just waste management; it is the only viable path to a sustainable domestic supply chain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
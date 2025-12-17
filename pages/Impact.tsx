import React from 'react';
import { ComparisonChart } from '../components/ComparisonChart';
import { Globe, ArrowUpRight } from 'lucide-react';

export const Impact: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Sustainable by Design</h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We don't just recycle batteries; we are redefining the environmental footprint of energy storage.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Recycling vs. Mining</h2>
              <p className="text-slate-400 text-lg mb-8">
                The environmental cost of extracting virgin materials is unsustainable. Our closed-loop process offers a dramatic reduction in carbon footprint and resource consumption.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-slate-900 rounded-lg border-l-4 border-eco-500">
                  <Globe className="text-eco-400 w-8 h-8 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">Lower Lifecycle Emissions</h4>
                    <p className="text-sm text-slate-400">Up to 85% reduction in CO2 compared to refining from ore.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-slate-900 rounded-lg border-l-4 border-teal-500">
                  <ArrowUpRight className="text-teal-400 w-8 h-8 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">Resource Efficiency</h4>
                    <p className="text-sm text-slate-400">Conserving water and eliminating millions of tons of landfill waste.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <ComparisonChart />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
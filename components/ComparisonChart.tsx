import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  {
    name: 'CO2 Emissions (kg/kWh)',
    Mining: 100,
    Recycling: 15, // Approx 85% reduction
  },
  {
    name: 'Water Usage (L/kWh)',
    Mining: 80,
    Recycling: 10,
  },
  {
    name: 'Energy (MJ/kWh)',
    Mining: 120,
    Recycling: 40,
  },
];

export const ComparisonChart: React.FC = () => {
  return (
    <div className="w-full h-[400px] bg-slate-900/50 p-6 rounded-xl border border-slate-800">
      <h3 className="text-xl font-mono text-slate-200 mb-6 border-l-4 border-eco-500 pl-4">Environmental Impact Analysis</h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#94a3b8', fontSize: 12 }} 
            axisLine={{ stroke: '#334155' }}
            tickLine={false}
          />
          <YAxis 
            tick={{ fill: '#94a3b8' }} 
            axisLine={false}
            tickLine={false}
            label={{ value: 'Relative Impact Scale', angle: -90, position: 'insideLeft', fill: '#475569' }}
          />
          <Tooltip 
            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#e2e8f0' }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Bar dataKey="Mining" fill="#ef4444" radius={[4, 4, 0, 0]} name="Traditional Mining" />
          <Bar dataKey="Recycling" fill="#10b981" radius={[4, 4, 0, 0]} name="LiCycle Intelligence Process" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

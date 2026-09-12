import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, BarChart, Bar, Legend } from 'recharts';
import { revenueData, defectTrendData, categoryPerformance } from '../data/mockData';
import { Sparkles } from 'lucide-react';

export function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Revenue: Actual vs Forecast</h3>
          <p className="text-xs text-slate-500 mt-0.5">AI-adjusted forecast based on current trends</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
          <Sparkles size={12} />
          +8.7% vs plan
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={revenueData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}K`} />
          <Tooltip
            contentStyle={{ fontSize: 12, borderRadius: 12, border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
            formatter={(value) => [`$${(Number(value) / 1000).toFixed(1)}K`, '']}
          />
          <Area type="monotone" dataKey="actual" stroke="#7c3aed" strokeWidth={2} fill="url(#colorActual)" name="Actual" />
          <Area type="monotone" dataKey="forecast" stroke="#94a3b8" strokeWidth={1.5} fill="none" strokeDasharray="5 5" name="Forecast" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function DefectTrendChart() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">QC Defect Trends by Factory</h3>
          <p className="text-xs text-slate-500 mt-0.5">AI pattern detection over 6 weeks</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-red-600 bg-red-50 px-2 py-1 rounded-lg">
          <Sparkles size={12} />
          Factory A trending ↑
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={defectTrendData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
          <Tooltip contentStyle={{ fontSize: 12, borderRadius: 12, border: '1px solid #e2e8f0' }} />
          <Line type="monotone" dataKey="factoryA" stroke="#ef4444" strokeWidth={2} dot={false} name="Factory A" />
          <Line type="monotone" dataKey="factoryB" stroke="#22c55e" strokeWidth={2} dot={false} name="Factory B" />
          <Line type="monotone" dataKey="factoryC" stroke="#3b82f6" strokeWidth={2} dot={false} name="Factory C" />
          <Line type="monotone" dataKey="factoryD" stroke="#f59e0b" strokeWidth={2} dot={false} name="Factory D" />
          <Line type="monotone" dataKey="factoryE" stroke="#8b5cf6" strokeWidth={2} dot={false} name="Factory E" />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CategoryChart() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Category Performance</h3>
          <p className="text-xs text-slate-500 mt-0.5">Sell-through % and margin analysis</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={categoryPerformance} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ fontSize: 12, borderRadius: 12, border: '1px solid #e2e8f0' }} />
          <Bar dataKey="sellThrough" fill="#7c3aed" radius={[4, 4, 0, 0]} name="Sell-Through %" />
          <Bar dataKey="margin" fill="#c4b5fd" radius={[4, 4, 0, 0]} name="Margin %" />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11 }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

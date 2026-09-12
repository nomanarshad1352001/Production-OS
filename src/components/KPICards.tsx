import { TrendingUp, TrendingDown, Minus, Sparkles } from 'lucide-react';
import type { KPI } from '../types';
import { useState } from 'react';

interface KPICardsProps {
  kpis: KPI[];
}

export default function KPICards({ kpis }: KPICardsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {kpis.map((kpi, i) => (
        <div
          key={kpi.label}
          className="relative bg-white rounded-2xl border border-slate-200 p-4 hover:shadow-lg hover:shadow-slate-100 hover:border-violet-200 transition-all cursor-pointer group"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">{kpi.label}</span>
            {kpi.aiNote && (
              <Sparkles size={12} className="text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </div>
          <div className="text-2xl font-bold text-slate-900 mb-1">{kpi.value}</div>
          <div className={`flex items-center gap-1 text-xs font-medium ${
            kpi.trend === 'up' ? 'text-emerald-600' : kpi.trend === 'down' ? 'text-red-500' : 'text-slate-400'
          }`}>
            {kpi.trend === 'up' ? <TrendingUp size={14} /> : kpi.trend === 'down' ? <TrendingDown size={14} /> : <Minus size={14} />}
            {kpi.change > 0 ? '+' : ''}{kpi.change}%
          </div>

          {/* AI Tooltip */}
          {hoveredIndex === i && kpi.aiNote && (
            <div className="absolute left-0 right-0 -bottom-2 translate-y-full z-30 px-2">
              <div className="bg-slate-900 text-white text-xs rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-1.5 mb-1">
                  <Sparkles size={10} className="text-violet-400" />
                  <span className="font-semibold text-violet-300">AI Insight</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{kpi.aiNote}</p>
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 rotate-45" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

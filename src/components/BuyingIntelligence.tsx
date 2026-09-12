import { ShoppingBag, Sparkles, AlertTriangle, CheckCircle, Package } from 'lucide-react';
import type { BuyingRecommendation } from '../types';

interface Props {
  recommendations: BuyingRecommendation[];
}

const riskConfig = {
  'safe': { label: 'Safe', icon: <CheckCircle size={14} />, cls: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  'caution': { label: 'Caution', icon: <AlertTriangle size={14} />, cls: 'text-amber-600 bg-amber-50 border-amber-200' },
  'over-bought': { label: 'Over-Bought', icon: <AlertTriangle size={14} />, cls: 'text-red-600 bg-red-50 border-red-200' },
};

export default function BuyingIntelligence({ recommendations }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag size={18} className="text-orange-500" />
          <h2 className="text-base font-semibold text-slate-900">Buying & Inventory Intelligence</h2>
        </div>
        <span className="text-xs text-slate-400">AI-powered reorder recommendations</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50/80">
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Category</th>
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Stock</th>
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Forecast</th>
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Coverage</th>
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Risk</th>
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Reorder</th>
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">AI Recommendation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {recommendations.map(rec => {
              const risk = riskConfig[rec.riskLevel];
              const coverage = Math.round((rec.currentStock / rec.forecastDemand) * 100);
              return (
                <tr key={rec.category} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <Package size={14} className="text-slate-400" />
                      <span className="text-sm font-medium text-slate-900">{rec.category}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-sm text-slate-600">{rec.currentStock.toLocaleString()}</td>
                  <td className="px-5 py-3 text-sm text-slate-600">{rec.forecastDemand.toLocaleString()}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            coverage > 120 ? 'bg-red-500' : coverage > 80 ? 'bg-emerald-500' : 'bg-amber-500'
                          }`}
                          style={{ width: `${Math.min(coverage, 100)}%` }}
                        />
                      </div>
                      <span className={`text-xs font-medium ${
                        coverage > 120 ? 'text-red-600' : coverage > 80 ? 'text-emerald-600' : 'text-amber-600'
                      }`}>{coverage}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-lg border ${risk.cls}`}>
                      {risk.icon}
                      {risk.label}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`text-sm font-semibold ${rec.reorderQty > 0 ? 'text-violet-600' : 'text-slate-400'}`}>
                      {rec.reorderQty > 0 ? rec.reorderQty.toLocaleString() : '—'}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-start gap-1.5 max-w-[280px]">
                      <Sparkles size={11} className="text-violet-500 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-violet-700 leading-relaxed">{rec.aiRecommendation}</p>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

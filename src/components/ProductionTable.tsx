import { Sparkles, AlertTriangle, CheckCircle, Clock, XCircle } from 'lucide-react';
import type { ProductionOrder } from '../types';

interface Props {
  orders: ProductionOrder[];
}

const statusConfig = {
  'on-track': { label: 'On Track', icon: <CheckCircle size={14} />, cls: 'text-emerald-600 bg-emerald-50' },
  'at-risk': { label: 'At Risk', icon: <AlertTriangle size={14} />, cls: 'text-amber-600 bg-amber-50' },
  'delayed': { label: 'Delayed', icon: <XCircle size={14} />, cls: 'text-red-600 bg-red-50' },
  'complete': { label: 'Complete', icon: <CheckCircle size={14} />, cls: 'text-blue-600 bg-blue-50' },
};

export default function ProductionTable({ orders }: Props) {
  const sorted = [...orders].sort((a, b) => b.aiRisk - a.aiRisk);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-semibold text-slate-900">Production Orders</h2>
          <span className="text-xs text-slate-400">{orders.length} active</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-violet-600">
          <Sparkles size={12} />
          Sorted by AI Risk Score
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50/80">
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Order</th>
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Style</th>
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Factory</th>
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Status</th>
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Progress</th>
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">AI Risk</th>
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">AI Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {sorted.map(order => {
              const status = statusConfig[order.status];
              return (
                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-5 py-3 text-sm font-mono font-medium text-slate-700">{order.id}</td>
                  <td className="px-5 py-3 text-sm font-medium text-slate-900">{order.style}</td>
                  <td className="px-5 py-3 text-sm text-slate-600">{order.factory}</td>
                  <td className="px-5 py-3">
                    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-lg ${status.cls}`}>
                      {status.icon}
                      {status.label}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            order.progress === 100 ? 'bg-blue-500' : order.aiRisk > 60 ? 'bg-red-500' : order.aiRisk > 30 ? 'bg-amber-500' : 'bg-emerald-500'
                          }`}
                          style={{ width: `${order.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-500">{order.progress}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <div className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg ${
                      order.aiRisk > 60 ? 'text-red-700 bg-red-50' : order.aiRisk > 30 ? 'text-amber-700 bg-amber-50' : 'text-emerald-700 bg-emerald-50'
                    }`}>
                      {order.aiRisk > 60 ? <AlertTriangle size={12} /> : order.aiRisk > 30 ? <Clock size={12} /> : <CheckCircle size={12} />}
                      {order.aiRisk}
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <p className="text-xs text-slate-500 max-w-[200px] truncate" title={order.aiNotes}>
                      {order.aiNotes}
                    </p>
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

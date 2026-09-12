import { Warehouse, Sparkles, AlertTriangle, Package, Users, Clock, Zap } from 'lucide-react';

const warehouseData = {
  warehouses: [
    {
      name: 'Warehouse A — Primary',
      location: 'Los Angeles, CA',
      utilization: 78,
      pickAccuracy: 98.8,
      ordersToday: 847,
      avgPickTime: '4.2 min',
      staffOnFloor: 24,
      aiScore: 92,
      anomalies: [],
      aiInsight: 'Operating at optimal efficiency. Consider pre-staging for incoming shipment SH-4822 (ETA Mar 14).',
    },
    {
      name: 'Warehouse B — East Coast',
      location: 'Newark, NJ',
      utilization: 85,
      pickAccuracy: 95.9,
      ordersToday: 623,
      avgPickTime: '5.8 min',
      staffOnFloor: 18,
      aiScore: 64,
      anomalies: ['Pick error rate anomaly in Zone 3 (+242% above baseline)', 'Staff productivity below target in afternoon shift'],
      aiInsight: 'Zone 3 errors correlate with recent SKU reorganization. Recommend re-training and temporary buddy system for new layout.',
    },
    {
      name: 'Warehouse C — Distribution',
      location: 'Dallas, TX',
      utilization: 62,
      pickAccuracy: 99.1,
      ordersToday: 412,
      avgPickTime: '3.8 min',
      staffOnFloor: 14,
      aiScore: 95,
      anomalies: [],
      aiInsight: 'Highest accuracy rate this month. Has capacity for overflow from Warehouse B if needed.',
    },
  ],
  overallMetrics: {
    totalOrdersToday: 1882,
    avgFulfillmentTime: '2.4 hrs',
    overallAccuracy: 97.9,
    staffUtilization: 86,
  },
};

export default function WarehouseOps() {
  return (
    <div className="space-y-4">
      {/* Overall Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Orders Today', value: warehouseData.overallMetrics.totalOrdersToday.toLocaleString(), icon: <Package size={16} className="text-blue-500" /> },
          { label: 'Avg Fulfillment', value: warehouseData.overallMetrics.avgFulfillmentTime, icon: <Clock size={16} className="text-amber-500" /> },
          { label: 'Pick Accuracy', value: `${warehouseData.overallMetrics.overallAccuracy}%`, icon: <Zap size={16} className="text-emerald-500" /> },
          { label: 'Staff Utilization', value: `${warehouseData.overallMetrics.staffUtilization}%`, icon: <Users size={16} className="text-violet-500" /> },
        ].map(metric => (
          <div key={metric.label} className="bg-white rounded-2xl border border-slate-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              {metric.icon}
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">{metric.label}</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">{metric.value}</div>
          </div>
        ))}
      </div>

      {/* Warehouse Cards */}
      {warehouseData.warehouses.map(wh => (
        <div key={wh.name} className={`bg-white rounded-2xl border overflow-hidden ${
          wh.anomalies.length > 0 ? 'border-amber-200' : 'border-slate-200'
        }`}>
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Warehouse size={18} className={wh.anomalies.length > 0 ? 'text-amber-500' : 'text-emerald-500'} />
              <div>
                <h3 className="text-sm font-semibold text-slate-900">{wh.name}</h3>
                <span className="text-xs text-slate-400">{wh.location}</span>
              </div>
            </div>
            <div className={`text-sm font-bold px-3 py-1 rounded-lg ${
              wh.aiScore >= 90 ? 'text-emerald-700 bg-emerald-50' : wh.aiScore >= 70 ? 'text-amber-700 bg-amber-50' : 'text-red-700 bg-red-50'
            }`}>
              AI Score: {wh.aiScore}
            </div>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
              <div>
                <div className="text-xs text-slate-500 mb-1">Utilization</div>
                <div className="flex items-center gap-2">
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${wh.utilization > 85 ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${wh.utilization}%` }} />
                  </div>
                  <span className="text-xs font-medium text-slate-700">{wh.utilization}%</span>
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">Pick Accuracy</div>
                <div className={`text-sm font-bold ${wh.pickAccuracy >= 98 ? 'text-emerald-600' : wh.pickAccuracy >= 96 ? 'text-amber-600' : 'text-red-600'}`}>
                  {wh.pickAccuracy}%
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">Orders Today</div>
                <div className="text-sm font-bold text-slate-700">{wh.ordersToday}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">Avg Pick Time</div>
                <div className="text-sm font-bold text-slate-700">{wh.avgPickTime}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">Staff on Floor</div>
                <div className="text-sm font-bold text-slate-700 flex items-center gap-1">
                  <Users size={14} className="text-slate-400" />
                  {wh.staffOnFloor}
                </div>
              </div>
            </div>

            {/* Anomalies */}
            {wh.anomalies.length > 0 && (
              <div className="mb-3 space-y-1.5">
                {wh.anomalies.map((anomaly, i) => (
                  <div key={i} className="flex items-center gap-2 bg-amber-50 rounded-lg px-3 py-2 border border-amber-100">
                    <AlertTriangle size={12} className="text-amber-500 flex-shrink-0" />
                    <p className="text-xs text-amber-800">{anomaly}</p>
                  </div>
                ))}
              </div>
            )}

            {/* AI Insight */}
            <div className="flex items-start gap-1.5 bg-violet-50 rounded-lg px-3 py-2">
              <Sparkles size={11} className="text-violet-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-violet-800 leading-relaxed">{wh.aiInsight}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

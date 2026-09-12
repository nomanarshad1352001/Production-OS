import { Ship, Sparkles, MapPin, AlertTriangle, CheckCircle, Clock, Package } from 'lucide-react';
import type { ShipmentTracker } from '../types';

interface Props {
  shipments: ShipmentTracker[];
}

const statusIcons = {
  'in-transit': { icon: <Ship size={14} />, label: 'In Transit', cls: 'text-blue-600 bg-blue-50' },
  'delayed': { icon: <AlertTriangle size={14} />, label: 'Delayed', cls: 'text-red-600 bg-red-50' },
  'customs': { icon: <Clock size={14} />, label: 'In Customs', cls: 'text-amber-600 bg-amber-50' },
  'delivered': { icon: <CheckCircle size={14} />, label: 'Delivered', cls: 'text-emerald-600 bg-emerald-50' },
};

export default function ShipmentTrackerView({ shipments }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Ship size={18} className="text-blue-500" />
          <h2 className="text-base font-semibold text-slate-900">Shipment Intelligence</h2>
        </div>
        <span className="text-xs text-slate-400">{shipments.filter(s => s.status !== 'delivered').length} active shipments</span>
      </div>
      <div className="divide-y divide-slate-100">
        {shipments.map(shipment => {
          const status = statusIcons[shipment.status];
          return (
            <div key={shipment.id} className="px-5 py-4 hover:bg-slate-50/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono font-semibold text-slate-700">{shipment.id}</span>
                  <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-lg ${status.cls}`}>
                    {status.icon}
                    {status.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500">{shipment.carrier}</span>
                  <div className={`text-xs font-bold px-2 py-0.5 rounded-lg ${
                    shipment.aiRiskScore > 60 ? 'text-red-700 bg-red-50' : shipment.aiRiskScore > 30 ? 'text-amber-700 bg-amber-50' : 'text-emerald-700 bg-emerald-50'
                  }`}>
                    Risk: {shipment.aiRiskScore}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={12} className="text-slate-400" />
                <span className="text-xs text-slate-600">{shipment.origin}</span>
                <span className="text-xs text-slate-300">→</span>
                <Package size={12} className="text-slate-400" />
                <span className="text-xs text-slate-600">{shipment.destination}</span>
                <span className="text-xs text-slate-400 ml-auto">ETA: {shipment.eta}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-violet-50/50 rounded-lg px-3 py-1.5">
                <Sparkles size={11} className="text-violet-500 flex-shrink-0" />
                <p className="text-xs text-violet-700">{shipment.aiPrediction}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

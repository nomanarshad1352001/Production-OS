import { Rocket, Sparkles, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import type { StyleLaunchStatus } from '../types';

interface Props {
  launches: StyleLaunchStatus[];
}

function StatusDot({ ready }: { ready: boolean }) {
  return ready ? (
    <CheckCircle size={16} className="text-emerald-500" />
  ) : (
    <XCircle size={16} className="text-red-400" />
  );
}

export default function StyleLaunches({ launches }: Props) {
  const blocked = launches.filter(l => l.aiBlocker);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Rocket size={18} className="text-pink-500" />
          <h2 className="text-base font-semibold text-slate-900">Style Launch Readiness</h2>
          {blocked.length > 0 && (
            <span className="text-xs bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              <AlertTriangle size={10} />
              {blocked.length} blocked
            </span>
          )}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50/80">
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Style</th>
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Launch</th>
              <th className="text-center text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Photos</th>
              <th className="text-center text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Samples</th>
              <th className="text-center text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Copy</th>
              <th className="text-center text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Pricing</th>
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Readiness</th>
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">AI Blocker</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {launches.map(launch => (
              <tr key={launch.styleName} className={`hover:bg-slate-50/50 transition-colors ${launch.aiBlocker ? 'bg-red-50/20' : ''}`}>
                <td className="px-5 py-3 text-sm font-medium text-slate-900">{launch.styleName}</td>
                <td className="px-5 py-3 text-sm text-slate-600">{launch.launchDate}</td>
                <td className="px-5 py-3 text-center"><StatusDot ready={launch.photosComplete} /></td>
                <td className="px-5 py-3 text-center"><StatusDot ready={launch.samplesApproved} /></td>
                <td className="px-5 py-3 text-center"><StatusDot ready={launch.copyReady} /></td>
                <td className="px-5 py-3 text-center"><StatusDot ready={launch.pricingSet} /></td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          launch.overallReady === 100 ? 'bg-emerald-500' : launch.overallReady >= 75 ? 'bg-amber-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${launch.overallReady}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-600">{launch.overallReady}%</span>
                  </div>
                </td>
                <td className="px-5 py-3">
                  {launch.aiBlocker ? (
                    <div className="flex items-start gap-1.5">
                      <Sparkles size={11} className="text-red-400 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-red-600 font-medium">{launch.aiBlocker}</p>
                    </div>
                  ) : (
                    <span className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                      <CheckCircle size={12} /> Ready to launch
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

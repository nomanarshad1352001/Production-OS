import { ShieldCheck, Sparkles, TrendingUp, TrendingDown, Minus, AlertTriangle } from 'lucide-react';
import type { QCReport } from '../types';

interface Props {
  reports: QCReport[];
}

export default function QCDashboard({ reports }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} className="text-emerald-500" />
          <h2 className="text-base font-semibold text-slate-900">QC Intelligence</h2>
          <span className="text-xs text-slate-400">AI Pattern Detection Active</span>
        </div>
      </div>
      <div className="grid gap-4 p-5">
        {reports.map(report => (
          <div key={report.factory} className={`rounded-xl border p-4 transition-all hover:shadow-md ${
            report.score < 50 ? 'border-red-200 bg-red-50/30' : report.score < 70 ? 'border-amber-200 bg-amber-50/30' : 'border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <h3 className="text-sm font-semibold text-slate-900">{report.factory}</h3>
                <div className={`flex items-center gap-1 text-xs font-medium ${
                  report.trend === 'improving' ? 'text-emerald-600' : report.trend === 'worsening' ? 'text-red-600' : 'text-slate-500'
                }`}>
                  {report.trend === 'improving' ? <TrendingDown size={12} /> : report.trend === 'worsening' ? <TrendingUp size={12} /> : <Minus size={12} />}
                  {report.trend === 'improving' ? 'Improving' : report.trend === 'worsening' ? 'Worsening' : 'Stable'}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xs text-slate-500">Defect Rate</div>
                  <div className={`text-sm font-bold ${report.defectRate > 5 ? 'text-red-600' : report.defectRate > 3 ? 'text-amber-600' : 'text-emerald-600'}`}>
                    {report.defectRate}%
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">AI Score</div>
                  <div className={`text-sm font-bold ${report.score > 80 ? 'text-emerald-600' : report.score > 60 ? 'text-amber-600' : 'text-red-600'}`}>
                    {report.score}/100
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={12} className="text-amber-500" />
              <span className="text-xs text-slate-600">Top Issue: {report.topIssue}</span>
            </div>
            <div className="flex items-start gap-1.5 bg-violet-50 rounded-lg px-3 py-2">
              <Sparkles size={11} className="text-violet-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-violet-800 leading-relaxed">{report.aiPattern}</p>
            </div>
            {/* Score bar */}
            <div className="mt-3">
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    report.score > 80 ? 'bg-emerald-500' : report.score > 60 ? 'bg-amber-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${report.score}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

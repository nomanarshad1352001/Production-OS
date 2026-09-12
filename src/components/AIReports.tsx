import { FileBarChart, Sparkles, Download, Clock, TrendingUp, AlertTriangle, ShieldCheck, Users, ShoppingBag, Warehouse } from 'lucide-react';
import { useState } from 'react';

const reports = [
  {
    id: 'RPT-001',
    title: 'Weekly Operations Summary',
    type: 'Executive',
    generated: '2 hours ago',
    icon: <TrendingUp size={16} className="text-violet-500" />,
    summary: 'Overall operations performing at 87.2% on-time rate with notable improvements in Factory C reliability. Key concern: Factory A quality deterioration requires immediate intervention. Revenue tracking 8.7% ahead of plan with accessories and blazers driving growth.',
    keyMetrics: ['On-Time: 87.2%', 'Revenue: +8.7%', 'Defect Rate: 2.4%', 'CSAT: 4.6/5'],
    status: 'ready',
  },
  {
    id: 'RPT-002',
    title: 'Factory Risk Assessment',
    type: 'Quality',
    generated: '4 hours ago',
    icon: <ShieldCheck size={16} className="text-emerald-500" />,
    summary: 'Comprehensive AI analysis of all factory partners. Factory A flagged as high-risk due to 4 consecutive batches with sizing defects. Factory B and C performing above benchmarks. Factory D shows supplier-related quality issues requiring investigation.',
    keyMetrics: ['5 Factories Analyzed', '2 At Risk', '1 Critical', '2 Excellent'],
    status: 'ready',
  },
  {
    id: 'RPT-003',
    title: 'Customer Service Intelligence',
    type: 'Support',
    generated: '6 hours ago',
    icon: <Users size={16} className="text-blue-500" />,
    summary: 'Agent performance analysis with AI tone scoring. Top performer: Rachel Torres (96% resolution, 91 tone score). Coaching needed: Sarah Mitchell tone score declined 22% correlating with +45% ticket volume. VIP segment response times need attention.',
    keyMetrics: ['5 Agents', '91.8 Avg Tone', '88% Resolution', '3.8 min Avg Response'],
    status: 'ready',
  },
  {
    id: 'RPT-004',
    title: 'Inventory & Buying Report',
    type: 'Buying',
    generated: '8 hours ago',
    icon: <ShoppingBag size={16} className="text-orange-500" />,
    summary: 'AI-powered inventory analysis across 6 categories. Outerwear flagged as over-bought (142% of safe level). Blazers need urgent reorder due to Luna Blazer velocity. Denim orders should be paused pending fit issue resolution.',
    keyMetrics: ['6 Categories', '2 Reorders Needed', '1 Over-Bought', '$340K At Risk'],
    status: 'ready',
  },
  {
    id: 'RPT-005',
    title: 'Warehouse Productivity Report',
    type: 'Operations',
    generated: '12 hours ago',
    icon: <Warehouse size={16} className="text-teal-500" />,
    summary: 'Cross-warehouse performance analysis. Warehouse C leads in accuracy (99.1%). Warehouse B shows anomalous pick errors in Zone 3 following SKU reorganization. Overall throughput up 12% week-over-week.',
    keyMetrics: ['3 Warehouses', '1,882 Orders/Day', '97.9% Accuracy', '86% Staff Util.'],
    status: 'ready',
  },
  {
    id: 'RPT-006',
    title: 'Shipment Risk Analysis',
    type: 'Logistics',
    generated: 'Generating...',
    icon: <AlertTriangle size={16} className="text-amber-500" />,
    summary: 'Analysis in progress. Preliminary findings: 2 shipments at elevated risk. SH-4821 may miss seasonal window. SH-4824 experiencing port congestion delays.',
    keyMetrics: ['6 Shipments', '2 At Risk', '1 Critical', 'Processing...'],
    status: 'generating',
  },
];

export default function AIReports() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileBarChart size={18} className="text-violet-500" />
          <h2 className="text-base font-semibold text-slate-900">AI-Generated Reports</h2>
          <span className="text-xs text-slate-400">Auto-generated intelligence summaries</span>
        </div>
        <button className="text-xs px-3 py-1.5 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors font-medium flex items-center gap-1.5">
          <Sparkles size={12} />
          Generate Custom Report
        </button>
      </div>
      <div className="divide-y divide-slate-100">
        {reports.map(report => {
          const isExpanded = expandedId === report.id;
          return (
            <div
              key={report.id}
              className="px-5 py-4 hover:bg-slate-50/50 transition-colors cursor-pointer"
              onClick={() => setExpandedId(isExpanded ? null : report.id)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                    {report.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{report.title}</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] font-medium text-violet-600 bg-violet-50 px-1.5 py-0.5 rounded">{report.type}</span>
                      <span className="text-[10px] text-slate-400 flex items-center gap-1">
                        <Clock size={10} />
                        {report.generated}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {report.status === 'generating' ? (
                    <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-lg flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      Generating...
                    </span>
                  ) : (
                    <button
                      onClick={e => { e.stopPropagation(); }}
                      className="text-xs text-slate-500 hover:text-violet-600 p-1.5 rounded-lg hover:bg-violet-50 transition-colors"
                    >
                      <Download size={14} />
                    </button>
                  )}
                </div>
              </div>

              {isExpanded && (
                <div className="mt-3 space-y-3">
                  <div className="bg-violet-50 rounded-xl p-4 border border-violet-100">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Sparkles size={12} className="text-violet-500" />
                      <span className="text-xs font-semibold text-violet-700">AI Summary</span>
                    </div>
                    <p className="text-sm text-violet-900 leading-relaxed">{report.summary}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {report.keyMetrics.map((metric, i) => (
                      <span key={i} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium">
                        {metric}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-xs px-3 py-1.5 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors font-medium">
                      View Full Report
                    </button>
                    <button className="text-xs px-3 py-1.5 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-100 transition-colors font-medium flex items-center gap-1">
                      <Download size={12} />
                      Export PDF
                    </button>
                    <button className="text-xs px-3 py-1.5 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-100 transition-colors font-medium">
                      Regenerate
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

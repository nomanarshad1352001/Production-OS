import { AlertTriangle, AlertCircle, Info, Sparkles, ChevronRight, Clock, Check } from 'lucide-react';
import type { AIAlert, AlertSeverity } from '../types';
import { useState } from 'react';

interface AlertsFeedProps {
  alerts: AIAlert[];
}

const severityConfig: Record<AlertSeverity, { icon: React.ReactNode; color: string; bg: string; border: string }> = {
  critical: {
    icon: <AlertTriangle size={16} />,
    color: 'text-red-600',
    bg: 'bg-red-50',
    border: 'border-red-200',
  },
  warning: {
    icon: <AlertCircle size={16} />,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
  info: {
    icon: <Info size={16} />,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
};

export default function AlertsFeed({ alerts }: AlertsFeedProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | AlertSeverity>('all');
  const [resolvedIds, setResolvedIds] = useState<Set<string>>(new Set());

  const filtered = alerts.filter(a => {
    if (resolvedIds.has(a.id)) return false;
    if (filter === 'all') return true;
    return a.severity === filter;
  });

  const counts = {
    all: alerts.filter(a => !resolvedIds.has(a.id)).length,
    critical: alerts.filter(a => a.severity === 'critical' && !resolvedIds.has(a.id)).length,
    warning: alerts.filter(a => a.severity === 'warning' && !resolvedIds.has(a.id)).length,
    info: alerts.filter(a => a.severity === 'info' && !resolvedIds.has(a.id)).length,
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles size={18} className="text-violet-500" />
          <h2 className="text-base font-semibold text-slate-900">AI Operational Alerts</h2>
          <span className="text-xs bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded-full">{counts.critical} critical</span>
        </div>
        <div className="flex items-center gap-1">
          {(['all', 'critical', 'warning', 'info'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-xs px-3 py-1 rounded-lg font-medium transition-colors ${
                filter === f ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              {f === 'all' ? `All (${counts.all})` : `${f.charAt(0).toUpperCase() + f.slice(1)} (${counts[f]})`}
            </button>
          ))}
        </div>
      </div>

      {/* Alerts List */}
      <div className="divide-y divide-slate-100 max-h-[600px] overflow-y-auto">
        {filtered.map(alert => {
          const config = severityConfig[alert.severity];
          const isExpanded = expandedId === alert.id;

          return (
            <div
              key={alert.id}
              className={`px-5 py-4 hover:bg-slate-50/50 transition-colors cursor-pointer ${isExpanded ? 'bg-slate-50/80' : ''}`}
              onClick={() => setExpandedId(isExpanded ? null : alert.id)}
            >
              <div className="flex items-start gap-3">
                <div className={`mt-0.5 p-1.5 rounded-lg ${config.bg} ${config.color}`}>
                  {config.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">{alert.title}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{alert.description}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-[10px] text-slate-400 flex items-center gap-1">
                        <Clock size={10} />
                        {alert.timestamp}
                      </span>
                      <ChevronRight size={14} className={`text-slate-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </div>
                  </div>

                  {/* Expanded AI Insight */}
                  {isExpanded && (
                    <div className="mt-3 space-y-3">
                      <div className="bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-200 rounded-xl p-3">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <Sparkles size={12} className="text-violet-500" />
                          <span className="text-xs font-semibold text-violet-700">AI Analysis & Recommendation</span>
                          <span className="text-[10px] ml-auto bg-violet-100 text-violet-600 px-2 py-0.5 rounded-full font-medium">
                            {Math.round(alert.confidence * 100)}% confidence
                          </span>
                        </div>
                        <p className="text-sm text-violet-900 leading-relaxed">{alert.aiInsight}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {alert.actionRequired && (
                          <button
                            onClick={(e) => { e.stopPropagation(); }}
                            className="text-xs px-3 py-1.5 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors font-medium"
                          >
                            Take Action
                          </button>
                        )}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setResolvedIds(prev => new Set([...prev, alert.id]));
                          }}
                          className="text-xs px-3 py-1.5 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-100 transition-colors font-medium flex items-center gap-1"
                        >
                          <Check size={12} />
                          Mark Resolved
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); }}
                          className="text-xs px-3 py-1.5 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-100 transition-colors font-medium"
                        >
                          Snooze
                        </button>
                        <span className={`ml-auto text-[10px] font-medium px-2 py-0.5 rounded-full ${config.bg} ${config.color} border ${config.border}`}>
                          {alert.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

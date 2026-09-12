import { Sparkles, TrendingUp, AlertTriangle, Lightbulb, Clock } from 'lucide-react';
import { executiveSummary } from '../data/mockData';

export default function ExecutiveSummary() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950 rounded-2xl p-6 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
      
      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
              <Sparkles size={18} className="text-violet-400" />
            </div>
            <div>
              <h2 className="text-base font-semibold">AI Executive Summary</h2>
              <div className="flex items-center gap-1.5 mt-0.5">
                <Clock size={10} className="text-slate-400" />
                <span className="text-[10px] text-slate-400">Generated {executiveSummary.generatedAt}</span>
                <span className="text-[10px] text-violet-400 ml-2">Auto-refreshes hourly</span>
              </div>
            </div>
          </div>
          <button className="text-xs px-3 py-1.5 bg-violet-600/20 text-violet-300 rounded-lg hover:bg-violet-600/30 transition-colors border border-violet-500/20">
            Regenerate
          </button>
        </div>

        {/* Overview */}
        <p className="text-sm text-slate-300 leading-relaxed mb-5 bg-white/5 rounded-xl p-3">
          {executiveSummary.overall}
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Highlights */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <TrendingUp size={14} className="text-emerald-400" />
              <h3 className="text-sm font-semibold text-emerald-400">Highlights</h3>
            </div>
            <ul className="space-y-2">
              {executiveSummary.highlights.map((h, i) => (
                <li key={i} className="text-xs text-slate-400 leading-relaxed flex gap-2">
                  <span className="text-emerald-500 mt-0.5 flex-shrink-0">•</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Risks */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <AlertTriangle size={14} className="text-amber-400" />
              <h3 className="text-sm font-semibold text-amber-400">Key Risks</h3>
            </div>
            <ul className="space-y-2">
              {executiveSummary.risks.map((r, i) => (
                <li key={i} className="text-xs text-slate-400 leading-relaxed flex gap-2">
                  <span className="text-amber-500 mt-0.5 flex-shrink-0">•</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Recommendations */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <Lightbulb size={14} className="text-violet-400" />
              <h3 className="text-sm font-semibold text-violet-400">AI Recommendations</h3>
            </div>
            <ul className="space-y-2">
              {executiveSummary.recommendations.map((r, i) => (
                <li key={i} className="text-xs text-slate-400 leading-relaxed flex gap-2">
                  <span className="text-violet-500 mt-0.5 flex-shrink-0">{i + 1}.</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Headphones, Sparkles, TrendingUp, TrendingDown, Minus, MessageCircle } from 'lucide-react';
import type { AgentScore } from '../types';

interface Props {
  agents: AgentScore[];
}

export default function AgentIntelligence({ agents }: Props) {
  const sorted = [...agents].sort((a, b) => b.toneScore - a.toneScore);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Headphones size={18} className="text-indigo-500" />
          <h2 className="text-base font-semibold text-slate-900">Agent Intelligence</h2>
          <span className="text-xs text-slate-400">AI Tone & Performance Scoring</span>
        </div>
      </div>
      <div className="grid gap-4 p-5">
        {sorted.map(agent => (
          <div key={agent.name} className={`rounded-xl border p-4 transition-all hover:shadow-md ${
            agent.toneScore < 70 ? 'border-amber-200 bg-amber-50/30' : 'border-slate-200'
          }`}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  agent.toneScore >= 90 ? 'bg-emerald-100 text-emerald-700' : agent.toneScore >= 75 ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {agent.avatar}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{agent.name}</h3>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <MessageCircle size={10} />
                      {agent.ticketsHandled} tickets
                    </span>
                    <span className="text-xs text-slate-500">Avg: {agent.avgResponseTime}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-xs text-slate-500 mb-0.5">Tone Score</div>
                  <div className="flex items-center gap-1">
                    <span className={`text-lg font-bold ${
                      agent.toneScore >= 90 ? 'text-emerald-600' : agent.toneScore >= 75 ? 'text-blue-600' : 'text-amber-600'
                    }`}>{agent.toneScore}</span>
                    {agent.toneTrend === 'up' ? <TrendingUp size={14} className="text-emerald-500" /> :
                     agent.toneTrend === 'down' ? <TrendingDown size={14} className="text-red-500" /> :
                     <Minus size={14} className="text-slate-400" />}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-slate-500 mb-0.5">Resolution</div>
                  <span className="text-lg font-bold text-slate-700">{agent.resolutionRate}%</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-1.5 bg-violet-50 rounded-lg px-3 py-2">
              <Sparkles size={11} className="text-violet-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-[10px] font-semibold text-violet-600 uppercase tracking-wide">AI Coaching Tip</span>
                <p className="text-xs text-violet-800 leading-relaxed">{agent.aiCoachingTip}</p>
              </div>
            </div>
            {/* Tone bar */}
            <div className="mt-3 flex items-center gap-2">
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    agent.toneScore >= 90 ? 'bg-emerald-500' : agent.toneScore >= 75 ? 'bg-blue-500' : 'bg-amber-500'
                  }`}
                  style={{ width: `${agent.toneScore}%` }}
                />
              </div>
              <span className="text-[10px] text-slate-400">{agent.toneScore}/100</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

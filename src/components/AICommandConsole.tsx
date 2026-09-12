import { Sparkles, Send, Brain, Zap, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: string;
}

const quickActions = [
  'Which factories are at risk right now?',
  'Summarize today\'s critical alerts',
  'What should I reorder this week?',
  'Show me agent performance trends',
  'Which shipments might be late?',
  'Generate executive summary',
];

const aiResponses: Record<string, string> = {
  'Which factories are at risk right now?': '🏭 **Factory Risk Assessment:**\n\n**CRITICAL — Factory A** (Risk Score: 78)\n• 4 consecutive batches with sizing defects\n• Defect rate: 6.8% (3x above threshold)\n• Recommendation: Pause new orders, schedule audit\n\n**AT RISK — Factory D** (Risk Score: 45)\n• Fabric flaw issues traced to Supplier X\n• Defect rate: 3.4% and worsening\n• Recommendation: Investigate supplier alternatives\n\n**IMPROVING — Factory E** (Risk Score: 32)\n• Button attachment issues resolving\n• Process improvements showing results\n\nFactories B and C are performing well with scores of 94 and 81 respectively.',
  'Summarize today\'s critical alerts': '🚨 **Today\'s Critical Alerts Summary:**\n\n1. **Factory A Sizing Issues** — Recurring defects in 4 batches (8.2% rate). Immediate audit needed.\n\n2. **Shipment SH-4821 Late Risk** — May arrive 12 days past optimal window. Air freight upgrade recommended ($14.2K to protect $180K).\n\n3. **VIP Customer #1247** — 48-hour wait time (avg: 4 hrs). Churn probability 34% if unresolved.\n\n4. **Denim Returns** — 18% return rate vs 7% average. Waist measurement issue identified.\n\n**Total Active: 23 alerts (7 critical, 9 warnings, 7 info)**\n\nRecommended priority: VIP customer outreach → Factory A intervention → Shipment decision.',
  'What should I reorder this week?': '📦 **AI Reorder Recommendations:**\n\n✅ **URGENT — Luna Blazer**: Reorder 2,400 units\n• Selling 340% above forecast\n• Stockout in 8 days at current pace\n• Factory B has capacity (3-week lead time)\n• Lost sales if delayed: $89K\n\n✅ **Accessories**: Reorder 1,800 units\n• Strong category performance\n• Recommend top 5 SKUs\n\n✅ **Nova Dress**: Top-up 700 units\n• Building momentum\n• Normal reorder cycle\n\n⚠️ **HOLD — Knitwear**: Reduce next order 30%\n• Season transition approaching\n\n🛑 **PAUSE — Outerwear**: No new orders\n• 142% of safe buy level\n• $340K excess risk\n\n🛑 **PAUSE — Denim**: No new orders\n• 18% return rate needs resolution first',
  'default': '🤖 I\'ve analyzed the current operational data. Here\'s what I found:\n\n• **Operations Health:** 87.2% on-time rate, trending down 2.1%\n• **Revenue:** $4.2M MTD, 8.7% ahead of plan\n• **Key Risks:** Factory A quality, outerwear overstock, denim returns\n• **Opportunities:** Luna Blazer reorder, Factory C capacity increase\n\nWould you like me to dive deeper into any of these areas? I can generate a detailed report on any topic.',
};

export default function AICommandConsole() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      role: 'ai',
      content: '👋 Welcome to ProductionOS AI Assistant. I\'m actively monitoring all operations. Currently tracking **23 alerts** across production, shipments, quality, and more.\n\nAsk me anything about your operations, or try one of the quick actions below.',
      timestamp: 'Now',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (text?: string) => {
    const message = text || input;
    if (!message.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: message,
      timestamp: 'Now',
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = aiResponses[message] || aiResponses['default'];
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: response,
        timestamp: 'Just now',
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col" style={{ height: '500px' }}>
      {/* Header */}
      <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-violet-50 to-indigo-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-violet-500 flex items-center justify-center">
            <Brain size={16} className="text-white" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-900">AI Command Console</h2>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-emerald-600 font-medium">Live • Monitoring all systems</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs text-violet-600">
          <Zap size={12} />
          <span className="font-medium">Powered by AI</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${
              msg.role === 'user'
                ? 'bg-violet-600 text-white'
                : 'bg-slate-100 text-slate-800'
            }`}>
              {msg.role === 'ai' && (
                <div className="flex items-center gap-1 mb-1.5">
                  <Sparkles size={10} className="text-violet-500" />
                  <span className="text-[10px] font-semibold text-violet-600">AI Assistant</span>
                </div>
              )}
              <div className="text-sm leading-relaxed whitespace-pre-line">{msg.content}</div>
              <div className={`text-[10px] mt-1 ${msg.role === 'user' ? 'text-violet-200' : 'text-slate-400'}`}>
                {msg.timestamp}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-100 rounded-2xl px-4 py-3">
              <div className="flex items-center gap-1 mb-1">
                <Sparkles size={10} className="text-violet-500" />
                <span className="text-[10px] font-semibold text-violet-600">AI Assistant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-2 border-t border-slate-100">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {quickActions.map(action => (
            <button
              key={action}
              onClick={() => handleSend(action)}
              className="flex-shrink-0 text-[11px] px-3 py-1.5 bg-slate-100 hover:bg-violet-100 hover:text-violet-700 text-slate-600 rounded-lg transition-colors flex items-center gap-1"
            >
              <ChevronRight size={10} />
              {action}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Ask the AI about your operations..."
            className="flex-1 text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
          />
          <button
            onClick={() => handleSend()}
            className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center hover:bg-violet-700 transition-colors"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

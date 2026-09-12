import { Bell, Search, Sparkles, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface TopBarProps {
  sidebarCollapsed: boolean;
}

export default function TopBar({ sidebarCollapsed }: TopBarProps) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className={`fixed top-0 right-0 h-16 bg-white/80 backdrop-blur-xl border-b border-slate-200 z-40 flex items-center justify-between px-6 transition-all duration-300 ${sidebarCollapsed ? 'left-[68px]' : 'left-64'}`}>
      {/* Search */}
      <div className={`flex items-center gap-2 rounded-xl border px-3 py-2 transition-all ${searchFocused ? 'border-violet-400 bg-white shadow-sm shadow-violet-100 w-96' : 'border-slate-200 bg-slate-50 w-72'}`}>
        <Search size={16} className="text-slate-400" />
        <input
          type="text"
          placeholder="Ask AI anything... (e.g., 'Which factories are at risk?')"
          className="bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none flex-1"
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        />
        <kbd className="hidden sm:inline text-[10px] text-slate-400 bg-slate-100 rounded px-1.5 py-0.5 border border-slate-200">⌘K</kbd>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* AI Pulse */}
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-500/10 to-indigo-500/10 border border-violet-200 text-violet-700 text-xs font-medium hover:shadow-sm transition-all">
          <Sparkles size={14} className="text-violet-500" />
          AI Insights Active
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
        </button>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors">
          <Bell size={20} className="text-slate-600" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />
        </button>

        {/* User */}
        <button className="flex items-center gap-2 pl-4 border-l border-slate-200">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
            OP
          </div>
          <div className="hidden md:block text-left">
            <p className="text-sm font-medium text-slate-700">Ops Admin</p>
            <p className="text-[10px] text-slate-400">Executive View</p>
          </div>
          <ChevronDown size={14} className="text-slate-400" />
        </button>
      </div>
    </header>
  );
}

import { 
  LayoutDashboard, Factory, Ship, ShieldCheck, ShoppingBag, 
  Headphones, Rocket, Warehouse, FileBarChart, Brain, ChevronLeft, ChevronRight, LogOut
} from 'lucide-react';
import type { NavSection } from '../types';

const navItems: { id: NavSection; label: string; icon: React.ReactNode; badge?: number }[] = [
  { id: 'dashboard', label: 'Command Center', icon: <LayoutDashboard size={20} /> },
  { id: 'production', label: 'Production', icon: <Factory size={20} />, badge: 2 },
  { id: 'shipments', label: 'Shipments', icon: <Ship size={20} />, badge: 1 },
  { id: 'quality', label: 'Quality / QC', icon: <ShieldCheck size={20} />, badge: 3 },
  { id: 'buying', label: 'Buying & Inventory', icon: <ShoppingBag size={20} />, badge: 1 },
  { id: 'agents', label: 'Agent Intelligence', icon: <Headphones size={20} /> },
  { id: 'launches', label: 'Style Launches', icon: <Rocket size={20} />, badge: 4 },
  { id: 'warehouse', label: 'Warehouse Ops', icon: <Warehouse size={20} />, badge: 1 },
  { id: 'reports', label: 'AI Reports', icon: <FileBarChart size={20} /> },
];

interface SidebarProps {
  active: NavSection;
  onNavigate: (section: NavSection) => void;
  collapsed: boolean;
  onToggle: () => void;
  onSignOut?: () => void;
  userName?: string;
}

export default function Sidebar({ active, onNavigate, collapsed, onToggle, onSignOut, userName }: SidebarProps) {
  return (
    <aside className={`fixed left-0 top-0 h-screen bg-slate-950 text-white flex flex-col z-50 transition-all duration-300 ${collapsed ? 'w-[68px]' : 'w-64'}`}>
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-slate-800">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
          <Brain size={20} className="text-white" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <h1 className="text-base font-bold tracking-tight">ProductionOS</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">AI Operations</p>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <div className={`px-3 mb-3 ${collapsed ? 'hidden' : ''}`}>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Modules</span>
        </div>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all relative group
              ${active === item.id 
                ? 'bg-violet-600/20 text-violet-300 border-r-2 border-violet-500' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }
              ${collapsed ? 'justify-center' : ''}
            `}
          >
            <span className="flex-shrink-0">{item.icon}</span>
            {!collapsed && <span className="flex-1 text-left">{item.label}</span>}
            {!collapsed && item.badge && (
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                active === item.id ? 'bg-violet-500 text-white' : 'bg-slate-700 text-slate-300'
              }`}>
                {item.badge}
              </span>
            )}
            {collapsed && item.badge && (
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-violet-500" />
            )}
          </button>
        ))}
      </nav>

      {/* AI Status */}
      <div className={`border-t border-slate-800 p-4 ${collapsed ? 'px-2' : ''}`}>
        {!collapsed ? (
          <div className="bg-slate-900 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400">AI Engine Active</span>
            </div>
            <p className="text-[11px] text-slate-500">Last scan: 2 min ago</p>
            <p className="text-[11px] text-slate-500">23 active alerts • 7 critical</p>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        )}
      </div>

      {/* User & Sign Out */}
      {onSignOut && (
        <div className={`border-t border-slate-800 p-4 ${collapsed ? 'px-2' : ''}`}>
          {!collapsed ? (
            <div className="space-y-3">
              {userName && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                    {userName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{userName}</p>
                  </div>
                </div>
              )}
              <button
                onClick={onSignOut}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm text-red-400 hover:text-white hover:bg-red-500/20 rounded-lg transition-colors"
              >
                <LogOut size={16} />
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={onSignOut}
              className="w-full flex items-center justify-center p-2 text-red-400 hover:text-white hover:bg-red-500/20 rounded-lg transition-colors"
              title="Sign Out"
            >
              <LogOut size={18} />
            </button>
          )}
        </div>
      )}

      {/* Collapse toggle */}
      <button
        onClick={onToggle}
        className="border-t border-slate-800 p-3 text-slate-500 hover:text-white hover:bg-slate-800 transition-colors flex items-center justify-center"
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
    </aside>
  );
}

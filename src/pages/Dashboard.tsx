import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import KPICards from '../components/KPICards';
import AlertsFeed from '../components/AlertsFeed';
import ExecutiveSummary from '../components/ExecutiveSummary';
import { RevenueChart, DefectTrendChart, CategoryChart } from '../components/Charts';
import ProductionTable from '../components/ProductionTable';
import ShipmentTrackerView from '../components/ShipmentTracker';
import QCDashboard from '../components/QCDashboard';
import AgentIntelligence from '../components/AgentIntelligence';
import BuyingIntelligence from '../components/BuyingIntelligence';
import StyleLaunches from '../components/StyleLaunches';
import WarehouseOps from '../components/WarehouseOps';
import AIReports from '../components/AIReports';
import AICommandConsole from '../components/AICommandConsole';

import { kpis, aiAlerts, productionOrders, shipments, qcReports, agentScores, buyingRecommendations, styleLaunches } from '../data/mockData';
import type { NavSection } from '../types';
import { useAuth } from '../context/AuthContext';

interface DashboardProps {
  onSignOut: () => void;
}

export default function Dashboard({ onSignOut }: DashboardProps) {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState<NavSection>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold mb-1">Welcome back, {user?.name?.split(' ')[0] || 'Operator'}.</h1>
                  <p className="text-violet-100">Here's what's happening with your operations today.</p>
                </div>
                <div className="hidden md:flex items-center gap-4 text-sm">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                    <div className="text-violet-200 text-xs">Company</div>
                    <div className="font-semibold">{user?.company || 'Your Company'}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                    <div className="text-violet-200 text-xs">Role</div>
                    <div className="font-semibold capitalize">{user?.role?.replace('_', ' ') || 'Operator'}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <ExecutiveSummary />

            {/* KPIs */}
            <KPICards kpis={kpis} />

            {/* Charts Row */}
            <div className="grid lg:grid-cols-2 gap-6">
              <RevenueChart />
              <DefectTrendChart />
            </div>

            {/* Alerts + AI Console */}
            <div className="grid lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3">
                <AlertsFeed alerts={aiAlerts} />
              </div>
              <div className="lg:col-span-2">
                <AICommandConsole />
              </div>
            </div>

            {/* Production + Category */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ProductionTable orders={productionOrders} />
              </div>
              <div>
                <CategoryChart />
              </div>
            </div>
          </div>
        );

      case 'production':
        return (
          <div className="space-y-6">
            <SectionHeader
              title="Production Intelligence"
              description="AI-powered production monitoring with risk detection and predictive analytics"
            />
            <KPICards kpis={[
              { label: 'Active Orders', value: '8', change: 0, trend: 'flat' },
              { label: 'On Track', value: '4', change: 0, trend: 'up', aiNote: '50% on track — below 75% target' },
              { label: 'At Risk', value: '2', change: 1, trend: 'up', aiNote: 'Factory A contributing to both at-risk orders' },
              { label: 'Delayed', value: '1', change: 1, trend: 'up', aiNote: 'Factory A capacity issue — consider reallocation' },
              { label: 'Avg Risk Score', value: '36.5', change: 8, trend: 'up', aiNote: 'Rising due to Factory A cluster' },
              { label: 'Completed', value: '1', change: 0, trend: 'flat' },
            ]} />
            <ProductionTable orders={productionOrders} />
            <div className="grid lg:grid-cols-2 gap-6">
              <AlertsFeed alerts={aiAlerts.filter(a => a.category === 'production')} />
              <AICommandConsole />
            </div>
          </div>
        );

      case 'shipments':
        return (
          <div className="space-y-6">
            <SectionHeader
              title="Shipment Intelligence"
              description="AI-powered shipment tracking with predictive ETAs and risk scoring"
            />
            <KPICards kpis={[
              { label: 'In Transit', value: '3', change: 0, trend: 'flat' },
              { label: 'At Risk', value: '2', change: 1, trend: 'up', aiNote: 'SH-4821 and SH-4824 need attention' },
              { label: 'In Customs', value: '1', change: 0, trend: 'flat' },
              { label: 'Delivered', value: '1', change: 1, trend: 'up' },
              { label: 'Avg Risk Score', value: '40', change: 12, trend: 'up' },
              { label: 'On-Time Rate', value: '67%', change: -8, trend: 'down' },
            ]} />
            <ShipmentTrackerView shipments={shipments} />
            <AlertsFeed alerts={aiAlerts.filter(a => a.category === 'shipment')} />
          </div>
        );

      case 'quality':
        return (
          <div className="space-y-6">
            <SectionHeader
              title="Quality Intelligence"
              description="AI pattern detection across factories with automated defect analysis"
            />
            <KPICards kpis={[
              { label: 'Avg Defect Rate', value: '3.3%', change: 0.5, trend: 'up', aiNote: 'Factory A pulling average up significantly' },
              { label: 'Best Factory', value: 'Factory B', change: 0, trend: 'up', aiNote: '1.2% defect rate — best performer' },
              { label: 'Worst Factory', value: 'Factory A', change: 0, trend: 'down', aiNote: '6.8% defect rate — critical intervention needed' },
              { label: 'Patterns Found', value: '5', change: 2, trend: 'up' },
              { label: 'Avg QC Score', value: '71.6', change: -3, trend: 'down' },
              { label: 'Audits Due', value: '2', change: 1, trend: 'up' },
            ]} />
            <div className="grid lg:grid-cols-2 gap-6">
              <QCDashboard reports={qcReports} />
              <div className="space-y-6">
                <DefectTrendChart />
                <AlertsFeed alerts={aiAlerts.filter(a => a.category === 'quality')} />
              </div>
            </div>
          </div>
        );

      case 'buying':
        return (
          <div className="space-y-6">
            <SectionHeader
              title="Buying & Inventory Intelligence"
              description="AI-powered demand forecasting, reorder recommendations, and risk analysis"
            />
            <KPICards kpis={[
              { label: 'Categories', value: '6', change: 0, trend: 'flat' },
              { label: 'Reorders Needed', value: '3', change: 1, trend: 'up', aiNote: 'Blazers urgent, Accessories and Dresses normal' },
              { label: 'Over-Bought', value: '1', change: 0, trend: 'flat', aiNote: 'Outerwear 142% of safe level' },
              { label: 'On Hold', value: '2', change: 1, trend: 'up', aiNote: 'Denim (fit issue) and Outerwear (overstock)' },
              { label: 'At Risk Value', value: '$340K', change: 15, trend: 'up' },
              { label: 'Confidence', value: '85%', change: 2, trend: 'up' },
            ]} />
            <BuyingIntelligence recommendations={buyingRecommendations} />
            <div className="grid lg:grid-cols-2 gap-6">
              <CategoryChart />
              <AlertsFeed alerts={aiAlerts.filter(a => a.category === 'buying')} />
            </div>
          </div>
        );

      case 'agents':
        return (
          <div className="space-y-6">
            <SectionHeader
              title="Agent Intelligence"
              description="AI-powered tone analysis, performance scoring, and coaching recommendations"
            />
            <KPICards kpis={[
              { label: 'Agents Active', value: '5', change: 0, trend: 'flat' },
              { label: 'Avg Tone Score', value: '82.6', change: -2, trend: 'down', aiNote: 'Sarah M. decline pulling average down' },
              { label: 'Avg Resolution', value: '87.8%', change: 1, trend: 'up' },
              { label: 'Total Tickets', value: '933', change: 12, trend: 'up' },
              { label: 'Top Performer', value: 'Rachel T.', change: 0, trend: 'up', aiNote: '96% resolution, 91 tone — document her approach' },
              { label: 'Coaching Needed', value: '2', change: 1, trend: 'up' },
            ]} />
            <AgentIntelligence agents={agentScores} />
            <AlertsFeed alerts={aiAlerts.filter(a => a.category === 'agent')} />
          </div>
        );

      case 'launches':
        return (
          <div className="space-y-6">
            <SectionHeader
              title="Style Launch Intelligence"
              description="AI-monitored launch readiness with blocker detection and timeline management"
            />
            <KPICards kpis={[
              { label: 'Upcoming Launches', value: '6', change: 0, trend: 'flat' },
              { label: 'Ready', value: '1', change: 0, trend: 'flat' },
              { label: 'Blocked', value: '4', change: 0, trend: 'flat', aiNote: 'All 4 blocked by incomplete photos' },
              { label: 'Partial', value: '1', change: 0, trend: 'flat', aiNote: 'Pricing not finalized for MK-218' },
              { label: 'Revenue at Risk', value: '$67K', change: 0, trend: 'flat', aiNote: 'First-week revenue if blocked styles miss launch' },
              { label: 'Days to Launch', value: '5', change: -1, trend: 'down' },
            ]} />
            <StyleLaunches launches={styleLaunches} />
            <AlertsFeed alerts={aiAlerts.filter(a => a.id === 'ALT-007')} />
          </div>
        );

      case 'warehouse':
        return (
          <div className="space-y-6">
            <SectionHeader
              title="Warehouse Intelligence"
              description="AI-powered warehouse monitoring with anomaly detection and productivity scoring"
            />
            <WarehouseOps />
            <AlertsFeed alerts={aiAlerts.filter(a => a.category === 'warehouse')} />
          </div>
        );

      case 'reports':
        return (
          <div className="space-y-6">
            <SectionHeader
              title="AI Reports & Summaries"
              description="Auto-generated intelligence reports across all operational areas"
            />
            <AIReports />
            <div className="grid lg:grid-cols-2 gap-6">
              <RevenueChart />
              <CategoryChart />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar
        active={activeSection}
        onNavigate={setActiveSection}
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        onSignOut={onSignOut}
        userName={user?.name}
      />
      <TopBar sidebarCollapsed={sidebarCollapsed} />
      <main className={`pt-20 pb-8 px-6 transition-all duration-300 ${sidebarCollapsed ? 'ml-[68px]' : 'ml-64'}`}>
        {renderContent()}
      </main>
    </div>
  );
}

function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold text-slate-900">{title}</h1>
        <p className="text-sm text-slate-500 mt-0.5">{description}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-slate-400">Last updated: 2 min ago</span>
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      </div>
    </div>
  );
}

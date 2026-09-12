export type AlertSeverity = 'critical' | 'warning' | 'info';
export type AlertCategory = 'production' | 'shipment' | 'quality' | 'customer' | 'buying' | 'warehouse' | 'agent';

export interface AIAlert {
  id: string;
  title: string;
  description: string;
  severity: AlertSeverity;
  category: AlertCategory;
  timestamp: string;
  confidence: number;
  actionRequired: boolean;
  resolved: boolean;
  aiInsight: string;
}

export interface KPI {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'flat';
  aiNote?: string;
}

export interface ProductionOrder {
  id: string;
  style: string;
  factory: string;
  status: 'on-track' | 'at-risk' | 'delayed' | 'complete';
  progress: number;
  dueDate: string;
  quantity: number;
  aiRisk: number;
  aiNotes: string;
}

export interface ShipmentTracker {
  id: string;
  origin: string;
  destination: string;
  carrier: string;
  status: 'in-transit' | 'delayed' | 'customs' | 'delivered';
  eta: string;
  aiRiskScore: number;
  aiPrediction: string;
}

export interface QCReport {
  factory: string;
  defectRate: number;
  trend: 'improving' | 'worsening' | 'stable';
  topIssue: string;
  aiPattern: string;
  score: number;
}

export interface AgentScore {
  name: string;
  avatar: string;
  toneScore: number;
  toneTrend: 'up' | 'down' | 'flat';
  resolutionRate: number;
  avgResponseTime: string;
  aiCoachingTip: string;
  ticketsHandled: number;
}

export interface BuyingRecommendation {
  category: string;
  currentStock: number;
  forecastDemand: number;
  riskLevel: 'safe' | 'caution' | 'over-bought';
  aiRecommendation: string;
  reorderQty: number;
  confidence: number;
}

export interface StyleLaunchStatus {
  styleName: string;
  launchDate: string;
  photosComplete: boolean;
  samplesApproved: boolean;
  copyReady: boolean;
  pricingSet: boolean;
  overallReady: number;
  aiBlocker: string | null;
}

export type NavSection = 'dashboard' | 'production' | 'shipments' | 'quality' | 'buying' | 'agents' | 'launches' | 'warehouse' | 'reports';

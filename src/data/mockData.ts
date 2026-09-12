import type { AIAlert, KPI, ProductionOrder, ShipmentTracker, QCReport, AgentScore, BuyingRecommendation, StyleLaunchStatus } from '../types';

export const kpis: KPI[] = [
  { label: 'Active Orders', value: '2,847', change: 12.3, trend: 'up', aiNote: 'Order volume up 12% vs forecast — consider capacity check' },
  { label: 'On-Time Rate', value: '87.2%', change: -2.1, trend: 'down', aiNote: 'Declining trend — 3 factories contributing to 60% of delays' },
  { label: 'Defect Rate', value: '2.4%', change: -0.3, trend: 'up', aiNote: 'Improving from 2.7% — sizing calibration changes working' },
  { label: 'Revenue MTD', value: '$4.2M', change: 8.7, trend: 'up', aiNote: 'Ahead of plan by 8.7% — driven by accessories category' },
  { label: 'AI Alerts Active', value: '23', change: 5, trend: 'up', aiNote: '7 critical, 9 warnings — production and shipment clusters' },
  { label: 'Customer Sat.', value: '4.6/5', change: 0.1, trend: 'up', aiNote: 'VIP segment at 4.8 — general segment needs attention' },
];

export const aiAlerts: AIAlert[] = [
  {
    id: 'ALT-001',
    title: 'Factory A — Repeated Sizing Issues Detected',
    description: 'AI pattern analysis detected recurring sizing defects in 4 consecutive batches from Factory A. Defect rate on sizing: 8.2% (3x above threshold).',
    severity: 'critical',
    category: 'quality',
    timestamp: '2 min ago',
    confidence: 0.94,
    actionRequired: true,
    resolved: false,
    aiInsight: 'Recommend pausing new orders to Factory A and scheduling an audit. Historical pattern suggests calibration drift on their cutting machines.',
  },
  {
    id: 'ALT-002',
    title: 'Shipment SH-4821 — Late Season Arrival Risk',
    description: 'This shipment is projected to arrive 12 days past optimal sell-through window for SS25 collection.',
    severity: 'critical',
    category: 'shipment',
    timestamp: '15 min ago',
    confidence: 0.89,
    actionRequired: true,
    resolved: false,
    aiInsight: 'Air freight upgrade would cost $14,200 but protect ~$180K in potential markdowns. ROI analysis suggests upgrade is strongly justified.',
  },
  {
    id: 'ALT-003',
    title: 'VIP Customer #1247 — Extended Wait Time',
    description: 'VIP customer with $42K annual spend has waited 48 hours for support response. Average VIP response time is 4 hours.',
    severity: 'critical',
    category: 'customer',
    timestamp: '28 min ago',
    confidence: 0.97,
    actionRequired: true,
    resolved: false,
    aiInsight: 'This customer has shown declining engagement over 3 months. Immediate personal outreach recommended. Churn probability: 34% if unresolved.',
  },
  {
    id: 'ALT-004',
    title: 'Style "Luna Blazer" — Selling 340% Above Forecast',
    description: 'Current sell-through velocity indicates stockout in 8 days at current pace. Originally forecasted for 12-week sell-through.',
    severity: 'warning',
    category: 'buying',
    timestamp: '1 hr ago',
    confidence: 0.91,
    actionRequired: true,
    resolved: false,
    aiInsight: 'Recommend immediate reorder of 2,400 units. Factory B has capacity and 3-week lead time. Projected lost sales if delayed: $89K.',
  },
  {
    id: 'ALT-005',
    title: 'Outerwear Category — Buy Level Above Safe Threshold',
    description: 'Current outerwear inventory represents 142% of safe buy level based on historical sell-through and seasonal patterns.',
    severity: 'warning',
    category: 'buying',
    timestamp: '2 hrs ago',
    confidence: 0.86,
    actionRequired: true,
    resolved: false,
    aiInsight: 'Suggest pausing additional outerwear orders. If current weather patterns hold, excess stock risk is $340K. Consider markdown strategy planning.',
  },
  {
    id: 'ALT-006',
    title: 'Agent Sarah M. — Tone Score Dropped 22%',
    description: 'Weekly tone analysis shows significant decline in empathy and resolution quality scores for Agent Sarah M.',
    severity: 'warning',
    category: 'agent',
    timestamp: '3 hrs ago',
    confidence: 0.82,
    actionRequired: false,
    resolved: false,
    aiInsight: 'Pattern correlates with high ticket volume week (+45%). Consider workload rebalancing and a coaching session. Previous coaching improved her scores by 31%.',
  },
  {
    id: 'ALT-007',
    title: '4 Styles May Miss Launch — Photos Incomplete',
    description: 'Styles MK-201, MK-202, MK-207, MK-211 are scheduled for launch in 5 days but product photography is incomplete.',
    severity: 'warning',
    category: 'production',
    timestamp: '4 hrs ago',
    confidence: 0.95,
    actionRequired: true,
    resolved: false,
    aiInsight: 'Recommend prioritizing these 4 styles for next available photo slot. Delay would impact projected $67K first-week revenue.',
  },
  {
    id: 'ALT-008',
    title: 'Warehouse B — Anomalous Pick Error Rate',
    description: 'Pick error rate at Warehouse B increased to 4.1% from baseline 1.2% over last 48 hours.',
    severity: 'warning',
    category: 'warehouse',
    timestamp: '5 hrs ago',
    confidence: 0.88,
    actionRequired: true,
    resolved: false,
    aiInsight: 'Anomaly concentrated in Zone 3 (new product locations). Likely caused by recent SKU reorganization. Recommend re-training pick staff on new layout.',
  },
  {
    id: 'ALT-009',
    title: 'Factory C — Lead Time Improvement Detected',
    description: 'Factory C has consistently delivered 4 days early across last 6 orders. Pattern is statistically significant.',
    severity: 'info',
    category: 'production',
    timestamp: '6 hrs ago',
    confidence: 0.91,
    actionRequired: false,
    resolved: false,
    aiInsight: 'Consider increasing Factory C allocation by 15-20%. Their reliability score has moved from 72 to 91 over 6 months.',
  },
  {
    id: 'ALT-010',
    title: 'Returns Pattern — Denim Fit Issue Emerging',
    description: 'Return rate for new denim line is 18% vs category average of 7%. Primary reason: "fit issues" (63% of returns).',
    severity: 'critical',
    category: 'quality',
    timestamp: '7 hrs ago',
    confidence: 0.93,
    actionRequired: true,
    resolved: false,
    aiInsight: 'Size chart may need updating. AI analysis of return comments suggests the issue is waist measurement, not length. Recommend size guide revision.',
  },
];

export const productionOrders: ProductionOrder[] = [
  { id: 'PO-2841', style: 'Luna Blazer', factory: 'Factory A', status: 'at-risk', progress: 62, dueDate: '2025-03-15', quantity: 3200, aiRisk: 78, aiNotes: 'Sizing calibration issue may cause rework delay' },
  { id: 'PO-2842', style: 'Nova Dress', factory: 'Factory B', status: 'on-track', progress: 85, dueDate: '2025-03-10', quantity: 1800, aiRisk: 12, aiNotes: 'On schedule. Quality metrics strong.' },
  { id: 'PO-2843', style: 'Stella Coat', factory: 'Factory C', status: 'on-track', progress: 91, dueDate: '2025-03-08', quantity: 2400, aiRisk: 8, aiNotes: 'Ahead of schedule by 4 days' },
  { id: 'PO-2844', style: 'Aria Jumpsuit', factory: 'Factory A', status: 'delayed', progress: 34, dueDate: '2025-03-20', quantity: 1500, aiRisk: 92, aiNotes: 'Factory A capacity constrained. Consider reallocation.' },
  { id: 'PO-2845', style: 'Echo Skirt', factory: 'Factory D', status: 'on-track', progress: 73, dueDate: '2025-03-18', quantity: 2800, aiRisk: 22, aiNotes: 'Minor fabric delay resolved. Back on track.' },
  { id: 'PO-2846', style: 'Vega Trousers', factory: 'Factory B', status: 'on-track', progress: 55, dueDate: '2025-03-25', quantity: 3100, aiRisk: 15, aiNotes: 'All milestones met. Strong factory performance.' },
  { id: 'PO-2847', style: 'Orion Jacket', factory: 'Factory C', status: 'complete', progress: 100, dueDate: '2025-03-05', quantity: 1200, aiRisk: 0, aiNotes: 'Delivered 2 days early. Quality approved.' },
  { id: 'PO-2848', style: 'Lyra Blouse', factory: 'Factory E', status: 'at-risk', progress: 45, dueDate: '2025-03-12', quantity: 2600, aiRisk: 65, aiNotes: 'Embroidery step behind schedule. May need expediting.' },
];

export const shipments: ShipmentTracker[] = [
  { id: 'SH-4821', origin: 'Shanghai', destination: 'Los Angeles', carrier: 'Maersk', status: 'in-transit', eta: 'Mar 22', aiRiskScore: 82, aiPrediction: 'High risk of missing SS25 window. Consider air freight.' },
  { id: 'SH-4822', origin: 'Ho Chi Minh', destination: 'New York', carrier: 'CMA CGM', status: 'in-transit', eta: 'Mar 14', aiRiskScore: 18, aiPrediction: 'On schedule. Weather patterns favorable.' },
  { id: 'SH-4823', origin: 'Dhaka', destination: 'Rotterdam', carrier: 'Hapag-Lloyd', status: 'customs', eta: 'Mar 8', aiRiskScore: 45, aiPrediction: 'Customs delay possible. Documentation flagged for review.' },
  { id: 'SH-4824', origin: 'Istanbul', destination: 'Chicago', carrier: 'MSC', status: 'delayed', eta: 'Mar 28', aiRiskScore: 71, aiPrediction: 'Port congestion at origin. 5-day delay projected.' },
  { id: 'SH-4825', origin: 'Mumbai', destination: 'London', carrier: 'Evergreen', status: 'in-transit', eta: 'Mar 16', aiRiskScore: 25, aiPrediction: 'Normal transit. No risks identified.' },
  { id: 'SH-4826', origin: 'Guangzhou', destination: 'Los Angeles', carrier: 'COSCO', status: 'delivered', eta: 'Delivered', aiRiskScore: 0, aiPrediction: 'Delivered on time. 2 days ahead of estimate.' },
];

export const qcReports: QCReport[] = [
  { factory: 'Factory A', defectRate: 6.8, trend: 'worsening', topIssue: 'Sizing inconsistency', aiPattern: 'Cutting machine calibration drift detected — 4 consecutive batches affected', score: 42 },
  { factory: 'Factory B', defectRate: 1.2, trend: 'improving', topIssue: 'Minor stitching', aiPattern: 'Consistent improvement since new QC lead hired. Best performer this quarter.', score: 94 },
  { factory: 'Factory C', defectRate: 2.1, trend: 'stable', topIssue: 'Color variation', aiPattern: 'Seasonal dye lot variation — within acceptable range. Monitor next batch.', score: 81 },
  { factory: 'Factory D', defectRate: 3.4, trend: 'worsening', topIssue: 'Fabric flaws', aiPattern: 'New fabric supplier correlation detected. 78% of defects traced to Supplier X fabric.', score: 67 },
  { factory: 'Factory E', defectRate: 2.8, trend: 'improving', topIssue: 'Button attachment', aiPattern: 'Process improvement implemented 3 weeks ago showing results. Continue monitoring.', score: 74 },
];

export const agentScores: AgentScore[] = [
  { name: 'Sarah Mitchell', avatar: 'SM', toneScore: 68, toneTrend: 'down', resolutionRate: 82, avgResponseTime: '4.2 min', aiCoachingTip: 'Focus on empathy phrases in escalation scenarios. Review top performer templates.', ticketsHandled: 187 },
  { name: 'James Chen', avatar: 'JC', toneScore: 92, toneTrend: 'up', resolutionRate: 94, avgResponseTime: '3.1 min', aiCoachingTip: 'Excellent performance. Consider mentoring new agents on tone techniques.', ticketsHandled: 203 },
  { name: 'Maria Garcia', avatar: 'MG', toneScore: 85, toneTrend: 'flat', resolutionRate: 88, avgResponseTime: '3.8 min', aiCoachingTip: 'Strong consistency. Opportunity to improve first-contact resolution on return inquiries.', ticketsHandled: 176 },
  { name: 'Alex Kim', avatar: 'AK', toneScore: 77, toneTrend: 'up', resolutionRate: 79, avgResponseTime: '5.1 min', aiCoachingTip: 'Response time trending down. Good improvement in tone. Focus on faster resolution paths.', ticketsHandled: 156 },
  { name: 'Rachel Torres', avatar: 'RT', toneScore: 91, toneTrend: 'up', resolutionRate: 96, avgResponseTime: '2.8 min', aiCoachingTip: 'Top performer this month. Document her approach for team training materials.', ticketsHandled: 211 },
];

export const buyingRecommendations: BuyingRecommendation[] = [
  { category: 'Blazers', currentStock: 1240, forecastDemand: 3800, riskLevel: 'safe', aiRecommendation: 'Reorder 2,400 units. Luna Blazer selling 340% above forecast. Urgent.', reorderQty: 2400, confidence: 0.91 },
  { category: 'Outerwear', currentStock: 8900, forecastDemand: 6200, riskLevel: 'over-bought', aiRecommendation: 'Pause orders. Current inventory exceeds safe threshold by 42%. Plan markdown strategy.', reorderQty: 0, confidence: 0.86 },
  { category: 'Dresses', currentStock: 3400, forecastDemand: 4100, riskLevel: 'safe', aiRecommendation: 'Normal reorder cycle. Consider 700-unit top-up for Nova Dress momentum.', reorderQty: 700, confidence: 0.84 },
  { category: 'Denim', currentStock: 5200, forecastDemand: 4800, riskLevel: 'caution', aiRecommendation: 'Hold orders until fit issue resolved. 18% return rate needs investigation before reorder.', reorderQty: 0, confidence: 0.88 },
  { category: 'Accessories', currentStock: 2100, forecastDemand: 3900, riskLevel: 'safe', aiRecommendation: 'Strong category performance. Recommend 1,800-unit reorder across top 5 SKUs.', reorderQty: 1800, confidence: 0.82 },
  { category: 'Knitwear', currentStock: 4100, forecastDemand: 3600, riskLevel: 'caution', aiRecommendation: 'Season transition approaching. Reduce next order by 30% and monitor velocity.', reorderQty: 800, confidence: 0.79 },
];

export const styleLaunches: StyleLaunchStatus[] = [
  { styleName: 'MK-201 Cascade Top', launchDate: 'Mar 10', photosComplete: false, samplesApproved: true, copyReady: true, pricingSet: true, overallReady: 75, aiBlocker: 'Photos needed — 2 angles missing' },
  { styleName: 'MK-202 Drift Skirt', launchDate: 'Mar 10', photosComplete: false, samplesApproved: true, copyReady: false, pricingSet: true, overallReady: 50, aiBlocker: 'Photos + copy incomplete' },
  { styleName: 'MK-207 Prism Jacket', launchDate: 'Mar 10', photosComplete: false, samplesApproved: true, copyReady: true, pricingSet: true, overallReady: 75, aiBlocker: 'Photos needed — lifestyle shots pending' },
  { styleName: 'MK-211 Zenith Pants', launchDate: 'Mar 10', photosComplete: false, samplesApproved: false, copyReady: true, pricingSet: true, overallReady: 50, aiBlocker: 'Photos + sample re-approval needed' },
  { styleName: 'MK-215 Aurora Dress', launchDate: 'Mar 15', photosComplete: true, samplesApproved: true, copyReady: true, pricingSet: true, overallReady: 100, aiBlocker: null },
  { styleName: 'MK-218 Orbit Blazer', launchDate: 'Mar 15', photosComplete: true, samplesApproved: true, copyReady: true, pricingSet: false, overallReady: 75, aiBlocker: 'Pricing not finalized' },
];

export const revenueData = [
  { month: 'Sep', actual: 3200, forecast: 3000 },
  { month: 'Oct', actual: 3800, forecast: 3400 },
  { month: 'Nov', actual: 4100, forecast: 3800 },
  { month: 'Dec', actual: 5200, forecast: 4800 },
  { month: 'Jan', actual: 3600, forecast: 3500 },
  { month: 'Feb', actual: 4200, forecast: 3900 },
  { month: 'Mar', actual: 2100, forecast: 4200 },
];

export const defectTrendData = [
  { week: 'W1', factoryA: 4.2, factoryB: 1.8, factoryC: 2.4, factoryD: 2.9, factoryE: 3.5 },
  { week: 'W2', factoryA: 4.8, factoryB: 1.6, factoryC: 2.3, factoryD: 3.1, factoryE: 3.2 },
  { week: 'W3', factoryA: 5.1, factoryB: 1.4, factoryC: 2.2, factoryD: 3.3, factoryE: 3.0 },
  { week: 'W4', factoryA: 5.9, factoryB: 1.3, factoryC: 2.1, factoryD: 3.2, factoryE: 2.9 },
  { week: 'W5', factoryA: 6.2, factoryB: 1.2, factoryC: 2.3, factoryD: 3.5, factoryE: 2.8 },
  { week: 'W6', factoryA: 6.8, factoryB: 1.2, factoryC: 2.1, factoryD: 3.4, factoryE: 2.8 },
];

export const categoryPerformance = [
  { name: 'Blazers', sellThrough: 89, margin: 62, velocity: 340 },
  { name: 'Dresses', sellThrough: 72, margin: 58, velocity: 110 },
  { name: 'Outerwear', sellThrough: 45, margin: 55, velocity: 65 },
  { name: 'Denim', sellThrough: 61, margin: 52, velocity: 85 },
  { name: 'Accessories', sellThrough: 78, margin: 71, velocity: 145 },
  { name: 'Knitwear', sellThrough: 54, margin: 49, velocity: 72 },
];

export const executiveSummary = {
  generatedAt: 'Today, 8:00 AM',
  overall: 'Operations are performing above target with 87.2% on-time delivery. Key risk areas: Factory A quality issues and outerwear over-buy position. Immediate attention needed on 4 styles with incomplete launch assets.',
  highlights: [
    'Revenue MTD is $4.2M — 8.7% ahead of plan, driven by accessories and blazer categories',
    'Luna Blazer is a breakout performer at 340% of forecast — urgent reorder recommended',
    'Factory C reliability has improved significantly — consider increased allocation',
    'Customer satisfaction trending positive at 4.6/5 — VIP segment leading at 4.8',
  ],
  risks: [
    'Factory A quality deterioration — 4 consecutive batches with sizing defects (6.8% rate)',
    'Outerwear category over-bought by 42% — markdown risk of $340K if unsold',
    'Denim return rate at 18% — fit issue investigation urgently needed',
    'Shipment SH-4821 may miss SS25 selling window — $180K markdown risk',
  ],
  recommendations: [
    'Pause Factory A orders, schedule immediate quality audit',
    'Emergency reorder 2,400 units Luna Blazer via Factory B',
    'Prioritize photo completion for 4 launch-blocked styles',
    'Evaluate air freight for SH-4821 ($14.2K cost vs $180K risk)',
    'Initiate outerwear markdown planning for end-of-season',
  ],
};

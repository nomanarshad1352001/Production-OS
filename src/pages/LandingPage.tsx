import { 
  Brain, Sparkles, Factory, Ship, ShieldCheck, ShoppingBag, 
  Headphones, Rocket, Warehouse, FileBarChart, AlertTriangle, 
  CheckCircle, ArrowRight, Play,
  BarChart3, Bot, Bell, Globe, Lock, Building2, Store, Network,
  Boxes, Workflow, Database, Scale, Eye, UserCheck, Plug, RefreshCw,
  Code2, Server, Cpu, Cloud, TestTube2, KeyRound
} from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: 'signin' | 'signup') => void;
}

const features = [
  {
    icon: <AlertTriangle className="text-red-500" size={24} />,
    title: 'AI Operational Alerts',
    description: 'Real-time intelligent alerts that detect risks before they become problems. From factory quality issues to shipment delays.',
    examples: ['"Factory A has repeated sizing issues"', '"This shipment may arrive too late for the season"'],
  },
  {
    icon: <Brain className="text-violet-500" size={24} />,
    title: 'AI Executive Summaries',
    description: 'Auto-generated daily briefs that summarize your entire operation. Highlights, risks, and recommended actions.',
    examples: ['"Revenue is 8.7% ahead of plan, driven by accessories"', '"3 factories contributing to 60% of delays"'],
  },
  {
    icon: <ShieldCheck className="text-emerald-500" size={24} />,
    title: 'AI QC Pattern Detection',
    description: 'Automatically identifies quality patterns across factories. Detects calibration drifts, supplier issues, and defect trends.',
    examples: ['"Cutting machine calibration drift detected"', '"78% of defects traced to Supplier X"'],
  },
  {
    icon: <Headphones className="text-blue-500" size={24} />,
    title: 'AI Agent Scoring & Coaching',
    description: 'Tone analysis and performance scoring for customer service teams. Automated coaching recommendations.',
    examples: ['"This agent\'s tone score dropped this week"', '"Focus on empathy phrases in escalations"'],
  },
  {
    icon: <ShoppingBag className="text-orange-500" size={24} />,
    title: 'AI Buying Recommendations',
    description: 'Demand forecasting and inventory optimization. Knows when to reorder and when to pause.',
    examples: ['"This product is selling 340% faster than forecast"', '"This category buy is above safe levels"'],
  },
  {
    icon: <Ship className="text-cyan-500" size={24} />,
    title: 'AI Shipment Risk Alerts',
    description: 'Predictive shipping intelligence with weather, port congestion, and customs delay forecasting.',
    examples: ['"Shipment may miss seasonal window"', '"Air freight upgrade ROI: $14K cost vs $180K risk"'],
  },
  {
    icon: <Warehouse className="text-teal-500" size={24} />,
    title: 'AI Warehouse Intelligence',
    description: 'Anomaly detection for pick errors, productivity scoring, and capacity optimization.',
    examples: ['"Pick error rate anomaly in Zone 3"', '"Staff productivity below target in afternoon shift"'],
  },
  {
    icon: <Rocket className="text-pink-500" size={24} />,
    title: 'AI Launch Readiness',
    description: 'Monitors every style launch for blockers. Photos, samples, copy, pricing — all tracked automatically.',
    examples: ['"4 styles may miss launch — photos incomplete"', '"$67K first-week revenue at risk"'],
  },
];

const stats = [
  { value: '9', label: 'Intelligence Modules' },
  { value: '8', label: 'Data Source Categories' },
  { value: '6', label: 'Lifecycle Stages' },
  { value: '24/7', label: 'Monitoring Model' },
];

const businessOutcomes = [
  {
    team: 'Executive and operations',
    outcome: 'Move from backward-looking status reports to a prioritized daily operating brief.',
    measures: ['Time spent creating reports', 'Risk response time', 'On-time delivery', 'Escalations resolved'],
  },
  {
    team: 'Buying and merchandising',
    outcome: 'Make faster inventory decisions with demand, margin, stock, and seasonal context in one view.',
    measures: ['Full-price sell-through', 'Stockout rate', 'Aged inventory', 'Forecast accuracy'],
  },
  {
    team: 'Production and quality',
    outcome: 'Identify repeated factory and product issues earlier, with evidence for corrective action.',
    measures: ['Defect and rework rate', 'Milestone adherence', 'Repeat defects', 'Factory reliability'],
  },
  {
    team: 'Logistics and warehouse',
    outcome: 'Protect delivery windows and reduce fulfillment exceptions through predictive alerts.',
    measures: ['ETA accuracy', 'Expedite spend', 'Pick accuracy', 'Fulfillment cycle time'],
  },
  {
    team: 'Customer experience',
    outcome: 'Find service risks, protect VIP customers, and coach agents from conversation evidence.',
    measures: ['First response time', 'SLA attainment', 'Resolution rate', 'Customer satisfaction'],
  },
];

const modules = [
  {
    name: 'Command Center',
    icon: <BarChart3 size={18} />,
    desc: 'Executive overview and prioritized operating queue',
    users: 'Executives, operations leaders',
    inputs: 'KPIs, alerts, orders, sales, service and logistics events',
    outputs: 'Daily brief, ranked risks, owners, actions and business impact',
  },
  {
    name: 'Production',
    icon: <Factory size={18} />,
    desc: 'Factory monitoring and purchase-order risk scoring',
    users: 'Production, sourcing, vendor management',
    inputs: 'POs, milestones, capacity, approvals and factory history',
    outputs: 'Delay probability, factory scorecards and recovery actions',
  },
  {
    name: 'Shipments',
    icon: <Ship size={18} />,
    desc: 'Predictive logistics and seasonal delivery intelligence',
    users: 'Logistics, supply chain, merchandising',
    inputs: 'Bookings, tracking events, ETAs, launch dates and freight costs',
    outputs: 'Late-risk alerts, predicted ETA and expedite ROI options',
  },
  {
    name: 'Quality / QC',
    icon: <ShieldCheck size={18} />,
    desc: 'Defect pattern detection and root-cause support',
    users: 'Quality, technical and production teams',
    inputs: 'Inspection results, defect codes, images, comments and returns',
    outputs: 'Issue clusters, repeat patterns, factory risk and corrective actions',
  },
  {
    name: 'Buying',
    icon: <ShoppingBag size={18} />,
    desc: 'Demand, inventory and open-to-buy decision support',
    users: 'Buyers, merchandisers, planners and finance',
    inputs: 'Sales, stock, margin, forecast, lead time and seasonality',
    outputs: 'Reorders, transfers, buy limits and markdown exposure',
  },
  {
    name: 'Agents',
    icon: <Headphones size={18} />,
    desc: 'Customer-service quality and coaching intelligence',
    users: 'CX leaders, team leads and agents',
    inputs: 'Tickets, chat transcripts, SLAs, CSAT and customer value',
    outputs: 'Tone scores, VIP alerts, QA summaries and coaching prompts',
  },
  {
    name: 'Launches',
    icon: <Rocket size={18} />,
    desc: 'Style launch readiness and blocker management',
    users: 'Product, ecommerce, creative and merchandising',
    inputs: 'Launch calendar, samples, images, copy, price and approvals',
    outputs: 'Readiness score, missing assets, owners and revenue at risk',
  },
  {
    name: 'Warehouse',
    icon: <Warehouse size={18} />,
    desc: 'Fulfillment anomaly and productivity intelligence',
    users: 'Warehouse, 3PL and retail operations',
    inputs: 'Picks, packs, errors, labor, locations, stock and order volume',
    outputs: 'Anomaly alerts, capacity risks and process recommendations',
  },
  {
    name: 'Reports',
    icon: <FileBarChart size={18} />,
    desc: 'AI-generated operating summaries and scheduled reporting',
    users: 'Executives and every functional lead',
    inputs: 'Approved cross-module metrics, evidence and decision history',
    outputs: 'Scheduled briefs, exception reports and exportable summaries',
  },
];

const buyerProfiles = [
  {
    icon: <Building2 size={22} />,
    type: 'Growing fashion brands',
    fit: 'DTC or wholesale brands with multiple factories, growing SKU counts, and operations spread across spreadsheets and disconnected tools.',
    users: 'COO, VP Operations, production, sourcing, merchandising, and finance teams.',
    value: 'Scale order volume without scaling operational headcount at the same rate.',
  },
  {
    icon: <Store size={22} />,
    type: 'Omnichannel retailers',
    fit: 'Retailers balancing stores, ecommerce, marketplaces, seasonal inventory, returns, and multi-location fulfillment.',
    users: 'Supply chain, buying, allocation, ecommerce, retail operations, and customer experience leaders.',
    value: 'Create one risk and demand view across channels, warehouses, and categories.',
  },
  {
    icon: <Network size={22} />,
    type: 'Fashion groups and portfolios',
    fit: 'Multi-brand groups that need shared governance while preserving brand-level workflows, data access, and performance views.',
    users: 'Group executives, transformation teams, brand operators, and shared-service leaders.',
    value: 'Standardize operating signals and compare performance across every brand.',
  },
  {
    icon: <Factory size={22} />,
    type: 'Manufacturers and sourcing partners',
    fit: 'Apparel manufacturers, vendors, and sourcing agencies managing many brands, factories, purchase orders, inspections, and deadlines.',
    users: 'Factory management, vendor compliance, account teams, planners, and quality leaders.',
    value: 'Improve delivery reliability, factory accountability, and client reporting.',
  },
];

const lifecycleCapabilities = [
  {
    number: '01',
    stage: 'Plan and buy',
    outcome: 'Put inventory in the right category, channel, and season.',
    capabilities: ['Demand and sell-through forecasting', 'Open-to-buy risk guardrails', 'Reorder and transfer recommendations', 'Overstock and markdown exposure detection'],
  },
  {
    number: '02',
    stage: 'Develop and launch',
    outcome: 'Keep every style commercially and operationally ready.',
    capabilities: ['Critical-path monitoring', 'Sample and approval tracking', 'Photography and content readiness', 'Launch blocker and revenue-at-risk alerts'],
  },
  {
    number: '03',
    stage: 'Make and inspect',
    outcome: 'Catch production and quality problems before shipment.',
    capabilities: ['Factory and purchase-order risk scoring', 'Milestone delay prediction', 'QC defect clustering and root-cause signals', 'Factory scorecards and corrective actions'],
  },
  {
    number: '04',
    stage: 'Move and fulfill',
    outcome: 'Protect launch windows and customer delivery promises.',
    capabilities: ['Predictive shipment ETAs', 'Seasonal lateness and freight ROI analysis', 'Warehouse anomaly detection', 'Capacity, pick accuracy, and productivity intelligence'],
  },
  {
    number: '05',
    stage: 'Serve and retain',
    outcome: 'Improve service quality while protecting valuable customers.',
    capabilities: ['SLA and VIP escalation alerts', 'Tone, empathy, and resolution scoring', 'Agent coaching recommendations', 'Return-reason and product issue intelligence'],
  },
  {
    number: '06',
    stage: 'Lead and govern',
    outcome: 'Give leaders a trusted operating picture every day.',
    capabilities: ['Executive summaries and board-ready reports', 'Cross-functional risk prioritization', 'Decision logs and ownership tracking', 'Role-based dashboards and scheduled briefings'],
  },
];

const platformQualities = [
  {
    icon: <Workflow size={20} />,
    title: 'Operational, not conversational only',
    description: 'AI runs in background workers, watches business events, scores risk, and triggers workflows. Chat is one interface, not the product itself.',
  },
  {
    icon: <Scale size={20} />,
    title: 'AI plus deterministic controls',
    description: 'Hard business rules handle thresholds and permissions; AI handles language, patterns, ranking, and recommendations. Each is used where it is strongest.',
  },
  {
    icon: <Eye size={20} />,
    title: 'Explainable recommendations',
    description: 'Every important signal can include confidence, evidence, business impact, and the source records used to reach the recommendation.',
  },
  {
    icon: <UserCheck size={20} />,
    title: 'Human approval by design',
    description: 'High-impact actions such as pausing an order, expediting freight, or changing a buy remain approval-based with clear ownership.',
  },
  {
    icon: <Lock size={20} />,
    title: 'Enterprise governance',
    description: 'Role-based access, workspace isolation, audit trails, configurable retention, and controls for what data may be sent to an AI model.',
  },
  {
    icon: <RefreshCw size={20} />,
    title: 'Continuously improving',
    description: 'Accepted, edited, and rejected recommendations become feedback for prompts, rules, thresholds, and evaluation datasets.',
  },
];

const dataSources = [
  'ERP and finance',
  'PLM and product data',
  'OMS and ecommerce',
  'WMS and 3PL systems',
  'Carrier and freight feeds',
  'QC inspections and factory files',
  'CRM and helpdesk conversations',
  'Digital asset and launch calendars',
];

const currentTechStack = [
  { label: 'Application', value: 'React 19 + TypeScript 5.9', detail: 'Typed component architecture and authenticated product flows.' },
  { label: 'Build', value: 'Vite 7', detail: 'Fast development and optimized single-file production build.' },
  { label: 'Interface', value: 'Tailwind CSS 4', detail: 'Responsive design system and utility-based styling.' },
  { label: 'Visualization', value: 'Recharts + Lucide', detail: 'Operational charts, trend views, and consistent interface icons.' },
  { label: 'Prototype data', value: 'Typed mock data + localStorage', detail: 'Demonstrates workflows and session persistence without a backend.' },
];

const productionTechStack = [
  {
    icon: <Code2 size={20} />,
    layer: 'Web application',
    technology: 'React, TypeScript, Vite, Tailwind CSS',
    purpose: 'Role-based operational screens, responsive dashboards, approval workflows, and accessible interaction patterns.',
  },
  {
    icon: <Server size={20} />,
    layer: 'API and domain services',
    technology: 'Node.js, TypeScript, NestJS or Fastify, OpenAPI',
    purpose: 'Multi-tenant business logic, permissions, integrations, validation, and versioned internal and partner APIs.',
  },
  {
    icon: <Database size={20} />,
    layer: 'Operational data',
    technology: 'PostgreSQL, Prisma, S3-compatible object storage',
    purpose: 'Transactional records, normalized fashion entities, audit history, documents, exports, and inspection media.',
  },
  {
    icon: <Workflow size={20} />,
    layer: 'Events and workers',
    technology: 'Redis, BullMQ, webhooks, scheduled jobs',
    purpose: 'Asynchronous AI processing, retryable integrations, alert evaluation, report generation, and long-running workflows.',
  },
  {
    icon: <Cpu size={20} />,
    layer: 'AI intelligence',
    technology: 'OpenAI and Claude behind a provider gateway',
    purpose: 'Structured extraction, classification, scoring, summaries, recommendations, tool use, and provider fallback.',
  },
  {
    icon: <Brain size={20} />,
    layer: 'Knowledge and search',
    technology: 'PostgreSQL pgvector, embeddings, hybrid retrieval',
    purpose: 'Search approved SOPs, product history, factory evidence, prior cases, and policy context when relevant.',
  },
  {
    icon: <KeyRound size={20} />,
    layer: 'Identity and security',
    technology: 'OIDC/SAML, RBAC, KMS, secrets manager, audit logs',
    purpose: 'Enterprise sign-on, workspace isolation, least-privilege access, encryption, and traceable decisions.',
  },
  {
    icon: <Cloud size={20} />,
    layer: 'Cloud infrastructure',
    technology: 'AWS ECS/Fargate, RDS, ElastiCache, S3, CloudFront',
    purpose: 'Managed deployment, autoscaling workers, backups, private networking, global delivery, and disaster recovery.',
  },
  {
    icon: <TestTube2 size={20} />,
    layer: 'Quality and observability',
    technology: 'Vitest, Playwright, OpenTelemetry, Sentry, AI evaluations',
    purpose: 'Unit and end-to-end tests, distributed traces, error monitoring, prompt regression tests, and model quality checks.',
  },
];

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
              <Brain size={20} className="text-white" />
            </div>
            <div>
              <span className="font-bold text-slate-900">ProductionOS</span>
              <span className="text-[10px] text-violet-600 ml-2 font-medium">AI-POWERED</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#buyers" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Who It Is For</a>
            <a href="#capabilities" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Capabilities</a>
            <a href="#platform" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Platform</a>
            <a href="#tech-stack" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Tech Stack</a>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onNavigate('signin')}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors px-4 py-2"
            >
              Sign In
            </button>
            <button 
              onClick={() => onNavigate('signup')}
              className="text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 transition-colors px-4 py-2 rounded-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden relative">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-6">
              <Sparkles size={16} />
              AI-Powered Operations Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Your Fashion Operations,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                Powered by AI
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              ProductionOS is an AI-powered command center that monitors your entire fashion operation — 
              production, shipments, quality, buying, support, and more — and tells you what needs attention.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => onNavigate('signup')}
                className="w-full sm:w-auto px-8 py-4 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 transition-all shadow-lg shadow-violet-200 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                <Play size={18} />
                See How It Works
              </button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none" />
            <div className="bg-slate-900 rounded-2xl shadow-2xl shadow-slate-300 p-4 md:p-6 max-w-5xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-slate-400 text-sm">ProductionOS — Command Center</span>
              </div>
              <div className="bg-slate-800 rounded-xl p-4 md:p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {[
                    { label: 'Active Alerts', value: '23', color: 'text-red-400' },
                    { label: 'On-Time Rate', value: '87.2%', color: 'text-emerald-400' },
                    { label: 'Revenue MTD', value: '$4.2M', color: 'text-violet-400' },
                    { label: 'AI Score', value: '94', color: 'text-blue-400' },
                  ].map(stat => (
                    <div key={stat.label} className="bg-slate-700/50 rounded-lg p-3">
                      <div className="text-slate-400 text-xs mb-1">{stat.label}</div>
                      <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle size={16} className="text-red-400" />
                      <span className="text-white text-sm font-medium">Critical Alerts</span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs text-slate-300 bg-slate-600/50 rounded p-2">Factory A — Sizing Issues Detected</div>
                      <div className="text-xs text-slate-300 bg-slate-600/50 rounded p-2">Shipment SH-4821 — Late Season Risk</div>
                      <div className="text-xs text-slate-300 bg-slate-600/50 rounded p-2">VIP Customer #1247 — Waiting 48hrs</div>
                    </div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles size={16} className="text-violet-400" />
                      <span className="text-white text-sm font-medium">AI Recommendations</span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs text-slate-300 bg-slate-600/50 rounded p-2">Reorder Luna Blazer — Selling 340% above forecast</div>
                      <div className="text-xs text-slate-300 bg-slate-600/50 rounded p-2">Pause Factory A orders — Schedule audit</div>
                      <div className="text-xs text-slate-300 bg-slate-600/50 rounded p-2">Upgrade shipment to air freight — ROI positive</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Profiles */}
      <section id="buyers" className="px-6 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Ideal customers</span>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">Who buys ProductionOS?</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                ProductionOS is designed for fashion businesses where operational complexity has outgrown manual reporting, spreadsheets, and disconnected systems.
              </p>
              <div className="mt-8 border-y border-slate-200 py-6">
                <div className="flex items-start gap-3">
                  <Boxes size={22} className="mt-0.5 flex-shrink-0 text-violet-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Strong fit signals</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Multiple factories or warehouses, hundreds of active SKUs, seasonal launch pressure, global shipments, high support volume, or teams spending hours assembling status reports.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Typical economic buyers</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  COO, Chief Supply Chain Officer, VP Operations, CIO or CTO, Head of Production, Head of Buying, and transformation leaders.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-300">
              {buyerProfiles.map((buyer) => (
                <div key={buyer.type} className="grid gap-4 border-b border-slate-300 py-7 sm:grid-cols-[auto_1fr]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                    {buyer.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{buyer.type}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{buyer.fit}</p>
                    <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                      <div>
                        <dt className="font-semibold text-slate-900">Primary users</dt>
                        <dd className="mt-1 text-slate-500">{buyer.users}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-900">Business value</dt>
                        <dd className="mt-1 text-slate-500">{buyer.value}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              AI That Actually Operates Your Business
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Not just a chatbot — an intelligent layer that monitors, analyzes, and recommends actions across every aspect of your operation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(feature => (
              <div key={feature.title} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:shadow-slate-100 hover:border-violet-200 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.examples.map((example, i) => (
                    <div key={i} className="text-xs text-violet-600 bg-violet-50 rounded-lg px-3 py-2 italic">
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle Capabilities */}
      <section id="capabilities" className="bg-slate-950 px-6 py-24 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">End-to-end coverage</span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">What the platform does across the fashion lifecycle</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              ProductionOS connects commercial planning to execution, so each team works from the same priorities, risks, and recommended actions.
            </p>
          </div>
          <div className="mt-14 border-t border-slate-700">
            {lifecycleCapabilities.map((group) => (
              <div key={group.stage} className="grid gap-5 border-b border-slate-800 py-8 md:grid-cols-[80px_1fr_1fr] md:items-start">
                <span className="font-mono text-sm text-violet-400">{group.number}</span>
                <div>
                  <h3 className="text-xl font-semibold">{group.stage}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">{group.outcome}</p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {group.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle size={15} className="mt-0.5 flex-shrink-0 text-emerald-400" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How ProductionOS Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Connect your data sources and let AI do the heavy lifting. Get actionable insights within hours.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: <Globe className="text-violet-500" size={28} />,
                title: 'Connect Your Data',
                description: 'Integrate existing ERP, WMS, PLM, CRM, ecommerce, carrier, and factory data through APIs, webhooks, or scheduled files.',
              },
              {
                step: '02',
                icon: <Bot className="text-violet-500" size={28} />,
                title: 'AI Analyzes Everything',
                description: 'Our AI continuously monitors all data streams, detecting patterns, anomalies, and risks in real-time.',
              },
              {
                step: '03',
                icon: <Bell className="text-violet-500" size={28} />,
                title: 'Get Actionable Alerts',
                description: 'Receive intelligent alerts with context, confidence scores, and recommended actions. Act before problems escalate.',
              },
            ].map(item => (
              <div key={item.step} className="relative">
                <div className="text-7xl font-bold text-slate-100 absolute -top-4 -left-2">{item.step}</div>
                <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                  <div className="w-14 h-14 rounded-xl bg-violet-100 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Module directory</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              9 Integrated Intelligence Modules
            </h2>
            <p className="text-lg text-slate-600">
              Each module connects specific source data to an accountable team and a clear operational output.
            </p>
          </div>
          <div className="border-t border-slate-300">
            <div className="hidden border-b border-slate-300 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400 lg:grid lg:grid-cols-[1.05fr_0.8fr_1.1fr_1.1fr] lg:gap-8">
              <span>Module</span>
              <span>Primary users</span>
              <span>Input data</span>
              <span>Operational output</span>
            </div>
            {modules.map(module => (
              <div key={module.name} className="grid gap-5 border-b border-slate-300 py-6 lg:grid-cols-[1.05fr_0.8fr_1.1fr_1.1fr] lg:gap-8">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-700">
                    {module.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{module.name}</div>
                    <div className="mt-1 text-sm leading-relaxed text-slate-500">{module.desc}</div>
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400 lg:hidden">Primary users</p>
                  <p className="text-sm leading-relaxed text-slate-600">{module.users}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400 lg:hidden">Input data</p>
                  <p className="text-sm leading-relaxed text-slate-600">{module.inputs}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400 lg:hidden">Operational output</p>
                  <p className="text-sm font-medium leading-relaxed text-slate-800">{module.outputs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Qualities */}
      <section id="platform" className="bg-slate-50 px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Platform qualities</span>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">Built for real decisions, not AI theater</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                The intelligence layer is designed to be reliable, explainable, governed, and useful inside daily operational workflows.
              </p>
              <button
                onClick={() => onNavigate('signup')}
                className="mt-8 inline-flex items-center gap-2 font-semibold text-violet-700 transition-colors hover:text-violet-900"
              >
                Explore the working dashboard
                <ArrowRight size={17} />
              </button>
            </div>
            <div className="grid border-t border-slate-300 md:grid-cols-2">
              {platformQualities.map((quality, index) => (
                <div
                  key={quality.title}
                  className={`border-b border-slate-300 py-7 md:px-7 ${index % 2 === 0 ? 'md:border-r md:pl-0' : 'md:pr-0'}`}
                >
                  <div className="mb-4 text-violet-600">{quality.icon}</div>
                  <h3 className="font-semibold text-slate-900">{quality.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{quality.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Architecture */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Connected intelligence</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">One operational layer across the systems you already use</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              ProductionOS is intended to unify fragmented operational data without forcing teams to replace every source system.
            </p>
          </div>

          <div className="mt-14 grid border-y border-slate-300 lg:grid-cols-3">
            <div className="py-8 lg:border-r lg:border-slate-300 lg:pr-8">
              <Plug size={24} className="text-violet-600" />
              <p className="mt-5 font-mono text-xs uppercase tracking-wider text-slate-400">Input</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">Connect operational data</h3>
              <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3">
                {dataSources.map((source) => (
                  <div key={source} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-violet-500" />
                    {source}
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-slate-300 py-8 lg:border-r lg:border-t-0 lg:px-8">
              <Database size={24} className="text-violet-600" />
              <p className="mt-5 font-mono text-xs uppercase tracking-wider text-slate-400">Intelligence</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">Normalize, evaluate, and learn</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                A shared data model combines event processing, business rules, AI classification, anomaly detection, forecasting, and approved company knowledge.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Queues and workers handle long-running AI tasks asynchronously so operational screens remain responsive.
              </p>
            </div>
            <div className="border-t border-slate-300 py-8 lg:border-t-0 lg:pl-8">
              <Bell size={24} className="text-violet-600" />
              <p className="mt-5 font-mono text-xs uppercase tracking-wider text-slate-400">Action</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">Put intelligence into the workflow</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Deliver prioritized alerts, summaries, approval tasks, coaching, recommendations, scheduled reports, and dashboard intelligence to the right owner.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Outcomes and user feedback flow back into evaluation, making prompts and thresholds more accurate over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="tech-stack" className="bg-slate-950 px-6 py-24 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">Technology stack</span>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">A practical architecture for AI operations</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-400">
                The interface is a working frontend prototype. The production architecture below adds the secure API, database, workers, integrations, and AI governance required for live company data.
              </p>

              <div className="mt-8 border-y border-slate-700 py-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">Current working prototype</p>
                <div className="mt-5 space-y-5">
                  {currentTechStack.map((item) => (
                    <div key={item.label} className="grid gap-1 sm:grid-cols-[110px_1fr] sm:gap-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.label}</span>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.value}</p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-400">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-amber-200">
                <AlertTriangle size={18} className="mt-0.5 flex-shrink-0" />
                <p>
                  Prototype authentication uses browser localStorage and is for demonstration only. Production deployment requires server-side identity, secure sessions, encrypted storage, tenant isolation, and audited authorization.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-end justify-between border-b border-slate-700 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Recommended</p>
                  <h3 className="mt-2 text-xl font-semibold">Production reference architecture</h3>
                </div>
                <span className="hidden font-mono text-xs text-emerald-400 sm:block">Secure / scalable / observable</span>
              </div>

              <div className="grid md:grid-cols-2">
                {productionTechStack.map((item, index) => (
                  <div
                    key={item.layer}
                    className={`border-b border-slate-800 py-6 md:px-6 ${index % 2 === 0 ? 'md:border-r md:pl-0' : 'md:pr-0'}`}
                  >
                    <div className="text-violet-400">{item.icon}</div>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">{item.layer}</p>
                    <h4 className="mt-2 text-sm font-semibold text-white">{item.technology}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">{item.purpose}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-slate-700 pt-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">AI execution pattern</p>
            <div className="mt-6 grid gap-3 md:grid-cols-7">
              {['Ingest event', 'Validate data', 'Apply rules', 'Run AI task', 'Attach evidence', 'Human approval', 'Record outcome'].map((step, index) => (
                <div key={step} className="relative border-t border-slate-700 pt-4">
                  <span className="font-mono text-xs text-slate-600">0{index + 1}</span>
                  <p className="mt-2 text-sm font-medium text-slate-200">{step}</p>
                  {index < 6 && <ArrowRight size={14} className="absolute right-0 top-4 hidden text-violet-500 md:block" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="bg-slate-900 px-6 py-24 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">Business outcomes</span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">How each team should measure value</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              A successful implementation is measured by operational improvement, not the number of AI messages generated.
            </p>
          </div>
          <div className="mt-14 border-t border-slate-700">
            {businessOutcomes.map((item) => (
              <div key={item.team} className="grid gap-4 border-b border-slate-800 py-7 md:grid-cols-[0.7fr_1.3fr_1fr] md:items-center">
                <h3 className="font-semibold text-white">{item.team}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{item.outcome}</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Core measures</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.measures.join(' / ')}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-10 border-t border-slate-700 pt-10 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-emerald-400">Buy when</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Teams have structured operational data, recurring exceptions, clear process owners, and enough complexity that missed signals create meaningful cost or revenue risk.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-400">Wait when</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                The business has very few products, no consistent source data, no owner for operational actions, or only needs a general-purpose chatbot rather than workflow intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            Create a workspace or use the demo account to explore the complete operational command center.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate('signup')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-violet-700 font-semibold rounded-xl hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => onNavigate('signin')}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              Sign In to Dashboard
            </button>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-violet-200 text-sm">
            <span className="flex items-center gap-2"><CheckCircle size={16} /> No credit card required</span>
            <span className="flex items-center gap-2"><CheckCircle size={16} /> Demo login available</span>
            <span className="flex items-center gap-2"><Lock size={16} /> Governance-first design</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                <Brain size={20} className="text-white" />
              </div>
              <span className="font-bold text-white">ProductionOS</span>
            </div>
            <div className="flex items-center gap-8 text-slate-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
            </div>
            <div className="text-slate-500 text-sm">
              © 2026 ProductionOS. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

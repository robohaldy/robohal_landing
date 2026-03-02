import Link from "next/link";

const algorithmSteps = [
  {
    step: "01",
    title: "Listing Ingestion",
    description:
      "Continuously pulls new and updated listings from MLS feeds, Zillow, Realtor.com, and off-market sources via N8n HTTP nodes and webhooks.",
    icon: "📡",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/20",
  },
  {
    step: "02",
    title: "Rental Yield Analysis",
    description:
      "Cross-references listing price against local rental comps (Rentometer, Zillow Rent Zestimate). Calculates gross rent multiplier (GRM) and cap rate to flag cash-flow-positive opportunities.",
    icon: "💰",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/20",
  },
  {
    step: "03",
    title: "Days-on-Market (DOM) Scoring",
    description:
      "Applies a tiered DOM algorithm: 0–30 days = standard, 31–60 days = motivated seller flag, 60+ days = seller financing readiness score triggered. The longer it sits, the higher the leverage.",
    icon: "📅",
    color: "text-yellow-400",
    borderColor: "border-yellow-500/20",
  },
  {
    step: "04",
    title: "Exit Strategy Evaluation",
    description:
      "Runs each listing through four exit models simultaneously: (1) Buy & Hold rental, (2) Fix & Flip ARV analysis, (3) BRRRR refinance projection, (4) Seller Financing / Subject-To structuring.",
    icon: "🗺️",
    color: "text-blue-400",
    borderColor: "border-blue-500/20",
  },
  {
    step: "05",
    title: "Opportunity Scoring",
    description:
      "Combines all signals into a composite Opportunity Score (0–100). Listings above threshold are tagged as leads and pushed to your CRM, Slack channel, or email digest automatically.",
    icon: "🎯",
    color: "text-violet-400",
    borderColor: "border-violet-500/20",
  },
];

const exitStrategies = [
  {
    name: "Buy & Hold",
    icon: "🏘️",
    metrics: ["Cap Rate ≥ 6%", "GRM ≤ 12", "Cash-on-Cash ≥ 8%"],
    color: "from-emerald-500/10 to-teal-500/5",
    border: "border-emerald-500/20",
    tag: "text-emerald-400",
  },
  {
    name: "Fix & Flip",
    icon: "🔨",
    metrics: ["ARV spread ≥ 20%", "Rehab budget estimate", "Comparable sales velocity"],
    color: "from-orange-500/10 to-red-500/5",
    border: "border-orange-500/20",
    tag: "text-orange-400",
  },
  {
    name: "BRRRR",
    icon: "🔄",
    metrics: ["Post-rehab refi LTV", "Equity pull-out projection", "Rental stabilization timeline"],
    color: "from-blue-500/10 to-indigo-500/5",
    border: "border-blue-500/20",
    tag: "text-blue-400",
  },
  {
    name: "Seller Financing",
    icon: "🤝",
    metrics: ["DOM ≥ 60 days", "Equity position ≥ 40%", "No active mortgage (free & clear)"],
    color: "from-violet-500/10 to-purple-500/5",
    border: "border-violet-500/20",
    tag: "text-violet-400",
  },
];

export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] grid-bg">
      {/* Nav */}
      <nav className="border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center text-sm font-bold text-white">
              R
            </div>
            <span className="font-semibold text-white tracking-tight">
              robohal<span className="text-cyan-400">.com</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2"
          >
            ← All Workflows
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              LIVE WORKFLOW
            </span>
            <span className="text-xs text-slate-500">Powered by N8n</span>
          </div>

          <div className="flex items-start gap-5 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-3xl flex-shrink-0">
              🏠
            </div>
            <div>
              <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-1">
                Automated Opportunity Detection
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Real Estate Lead Engine
              </h1>
            </div>
          </div>

          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            A fully automated pipeline that scans listings 24/7, evaluates every
            deal against four exit strategies, and delivers only the
            highest-scoring opportunities to your team — complete with a
            seller-financing readiness score based on days on market.
          </p>
        </div>
      </section>

      {/* Algorithm Steps */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">How the Algorithm Works</h2>
          <p className="text-slate-400 mb-10">
            Five automated stages run in sequence for every listing ingested.
          </p>

          <div className="space-y-4">
            {algorithmSteps.map((step, i) => (
              <div
                key={step.step}
                className={`rounded-2xl card-glass p-6 border ${step.borderColor} flex gap-6 items-start`}
              >
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <div className="text-2xl">{step.icon}</div>
                  <div className={`text-xs font-mono font-bold ${step.color}`}>{step.step}</div>
                  {i < algorithmSteps.length - 1 && (
                    <div className="w-px h-6 bg-white/10" />
                  )}
                </div>
                <div>
                  <h3 className={`font-bold text-white mb-2`}>{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exit Strategies */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">Exit Strategy Models</h2>
          <p className="text-slate-400 mb-10">
            Every listing is evaluated against all four models simultaneously. The workflow flags which strategies apply and why.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {exitStrategies.map((strategy) => (
              <div
                key={strategy.name}
                className={`rounded-2xl card-glass p-6 bg-gradient-to-br ${strategy.color} border ${strategy.border}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{strategy.icon}</span>
                  <h3 className="font-bold text-white text-lg">{strategy.name}</h3>
                </div>
                <ul className="space-y-2">
                  {strategy.metrics.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className={`mt-0.5 text-xs ${strategy.tag}`}>✓</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOM Algorithm Callout */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl card-glass p-8 sm:p-10 border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-orange-500/5">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📅</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  The DOM Seller Financing Algorithm
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Days on Market is one of the strongest signals for seller motivation. The longer a
                  property sits unsold, the more likely the seller is open to creative financing
                  structures. Our algorithm applies a tiered scoring model:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      range: "0 – 30 days",
                      label: "Standard Market",
                      score: "Low",
                      color: "text-slate-400",
                      bg: "bg-slate-500/10 border-slate-500/20",
                    },
                    {
                      range: "31 – 60 days",
                      label: "Motivated Seller",
                      score: "Medium",
                      color: "text-yellow-400",
                      bg: "bg-yellow-500/10 border-yellow-500/20",
                    },
                    {
                      range: "60+ days",
                      label: "Seller Financing Ready",
                      score: "High",
                      color: "text-emerald-400",
                      bg: "bg-emerald-500/10 border-emerald-500/20",
                    },
                  ].map((tier) => (
                    <div key={tier.range} className={`rounded-xl border p-4 ${tier.bg}`}>
                      <div className={`text-xs font-mono font-bold mb-1 ${tier.color}`}>
                        {tier.range}
                      </div>
                      <div className="font-semibold text-white text-sm mb-1">{tier.label}</div>
                      <div className={`text-xs ${tier.color}`}>Score: {tier.score}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Output / Delivery */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">Workflow Output</h2>
          <p className="text-slate-400 mb-8">
            Qualified leads are delivered automatically to wherever your team works.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: "📊", label: "CRM Push", desc: "HubSpot, Salesforce, Airtable" },
              { icon: "💬", label: "Slack Alert", desc: "Instant channel notification" },
              { icon: "📧", label: "Email Digest", desc: "Daily or real-time" },
              { icon: "🔗", label: "Webhook", desc: "Any custom endpoint" },
            ].map((output) => (
              <div key={output.label} className="rounded-xl card-glass p-5 text-center">
                <div className="text-2xl mb-2">{output.icon}</div>
                <div className="font-semibold text-white text-sm mb-1">{output.label}</div>
                <div className="text-xs text-slate-500">{output.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to activate this workflow?
          </h2>
          <p className="text-slate-400 mb-8">
            Get in touch to configure the workflow for your market, connect your
            data sources, and start receiving qualified leads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@robohal.com?subject=Real Estate Lead Engine"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-semibold hover:from-emerald-400 hover:to-teal-300 transition-all"
            >
              Activate Workflow
            </a>
            <Link
              href="/"
              className="px-8 py-4 rounded-xl border border-white/10 text-white hover:border-white/20 hover:bg-white/5 transition-all"
            >
              ← Back to Workflows
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center text-xs font-bold text-white">
              R
            </div>
            <span>robohal.com — Automation Workflows</span>
          </div>
          <span>© 2025 RoboHal</span>
        </div>
      </footer>
    </div>
  );
}

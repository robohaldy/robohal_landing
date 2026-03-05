import Link from "next/link";

const pipelineSteps = [
  {
    step: "01",
    title: "Business Listing Ingestion",
    description:
      "Continuously scrapes business-for-sale platforms (BizBuySell, BusinessBroker.net, LoopNet, MicroAcquire) and monitors industry-specific marketplaces to surface acquisition targets matching your criteria.",
    icon: "🔍",
    color: "text-violet-400",
  },
  {
    step: "02",
    title: "Financial Data Extraction",
    description:
      "Pulls financial statements, tax returns, P&L statements, and cash flow data from listing details. Normalizes financials across different reporting standards to build accurate profit and valuation models.",
    icon: "📊",
    color: "text-violet-400",
  },
  {
    step: "03",
    title: "Opportunity Scoring",
    description:
      "Applies a multi-factor scoring algorithm: owner motivation indicators, time-on-market, asking vs. implied valuation, industry tailwinds, and competitive landscape to flag high-probability acquisition targets.",
    icon: "🎯",
    color: "text-amber-400",
  },
  {
    step: "04",
    title: "Financing Strategy",
    description:
      "Evaluates financing options based on your capital position: traditional bank financing, SBA loans, owner financing, earnouts, or creative structures. Calculates deal feasibility and maximum offer thresholds.",
    icon: "💵",
    color: "text-emerald-400",
  },
  {
    step: "05",
    title: "Contract Generation",
    description:
      "Generates tailored purchase agreements, LOIs, due diligence checklists, and owner financing documents based on deal structure. Integrates with legal templates for fast turnaround on accepted offers.",
    icon: "📝",
    color: "text-cyan-400",
  },
];

const financingOptions = [
  {
    type: "Traditional Bank Financing",
    description: "SBA 7(a), 504 loans, or conventional term loans for qualified buyers",
    bestFor: " businesses with strong cash flow and tangible assets",
  },
  {
    type: "Owner Financing",
    description: "Seller carries note with negotiated terms, typically 5-10 year amortization",
    bestFor: "deals where seller is motivated and retains equity stake",
  },
  {
    type: "Earnout Structure",
    description: "Deferred payments tied to post-acquisition performance metrics",
    bestFor: "businesses where value is tied to owner staying on temporarily",
  },
  {
    type: "Asset vs. Stock Purchase",
    description: "Structure optimization for tax efficiency and liability transfer",
    bestFor: "high-risk industries or where seller wants clean exit",
  },
];

const outputChannels = [
  { icon: "📧", label: "Daily Deal Digest" },
  { icon: "📋", label: "LOI & Contract Docs" },
  { icon: "🔗", label: "CRM Push" },
  { icon: "📊", label: "Financial Models" },
];

export default function BusinessAcquisitionPage() {
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
              Robo <span className="text-cyan-400">HAL</span>
            </span>
          </Link>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <Link href="/#workflows" className="hover:text-white transition-colors">
              Workflows
            </Link>
            <Link href="/#about" className="hover:text-white transition-colors">
              About
            </Link>
            <a
              href="mailto:hello@robohal.com"
              className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/30">
              LIVE WORKFLOW
            </span>
            <span className="text-xs text-slate-500">Powered by Robo HAL</span>
          </div>

          <div className="flex items-start gap-5 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-violet-500/10 flex items-center justify-center text-3xl flex-shrink-0">
              🏢
            </div>
            <div>
              <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-1">
                Automated Acquisition Intelligence
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Business Acquisition Engine
              </h1>
            </div>
          </div>

          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Continuously monitors business-for-sale listings across multiple platforms to surface
            acquisition opportunities. Analyzes financials, evaluates financing strategies,
            and generates ready-to-sign purchase agreements — so you can move fast on the
            right deals.
          </p>
        </div>
      </section>

      {/* Pipeline */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              5-Stage Acquisition Pipeline
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              From listing discovery to contract generation — each stage applies
              intelligent analysis to surface and accelerate high-probability deals.
            </p>
          </div>

          <div className="space-y-4">
            {pipelineSteps.map((s, i) => (
              <div
                key={s.step}
                className="group relative rounded-2xl card-glass p-6 sm:p-8 transition-all duration-300 hover:border-violet-500/30 hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className={`text-2xl font-bold ${s.color} opacity-60`}>
                    {s.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl">
                        {s.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Financing Strategy Options
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              The workflow evaluates multiple financing structures and recommends
              the optimal approach based on deal economics and buyer profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {financingOptions.map((opt) => (
              <div
                key={opt.type}
                className="rounded-xl bg-white/[0.03] border border-white/5 p-6 hover:border-violet-500/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{opt.type}</h3>
                <p className="text-slate-400 text-sm mb-2">{opt.description}</p>
                <p className="text-xs text-slate-500">
                  <span className="text-violet-400">Best for:</span> {opt.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Output */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl card-glass p-10 sm:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-amber-600/5 pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Output & Deliverables
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Every workflow delivers actionable outputs directly to your workflow —
                from daily deal alerts to ready-to-submit legal documents.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {outputChannels.map((ch) => (
                  <div
                    key={ch.label}
                    className="rounded-xl bg-white/[0.03] border border-white/5 p-4 hover:border-violet-500/30 transition-colors"
                  >
                    <div className="text-2xl mb-2">{ch.icon}</div>
                    <div className="text-sm font-medium text-white">{ch.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to find your next acquisition?
          </h2>
          <p className="text-slate-400 mb-4">
            This workflow runs 24/7. Get notified when the right business hits the market.
          </p>
          <p className="text-sm text-violet-400 mb-8">
            Starting at $199/month or $49/day rental available
          </p>
          <a
            href="mailto:hello@robohal.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-violet-400 text-white font-semibold hover:from-violet-400 hover:to-violet-300 transition-all glow-brand"
          >
            Request Access
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center text-xs font-bold text-white">
              R
            </div>
            <span>Robo <span className="text-cyan-400">HAL</span> — Automation Workflows</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@robohal.com" className="hover:text-white transition-colors">
              hello@robohal.com
            </a>
            <span>© 2025 RoboHal</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

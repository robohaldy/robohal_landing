import Link from "next/link";

const workflows = [
  {
    id: "real-estate",
    href: "/workflows/real-estate",
    icon: "🏠",
    badge: "LIVE",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    title: "Real Estate Lead Engine",
    subtitle: "Automated Opportunity Detection",
    description:
      "Scans listings in real time to surface high-potential deals. Evaluates rental yield, seller-financing readiness, days-on-market signals, and multiple exit strategies — so you only see the opportunities worth acting on.",
    features: [
      "Rental price vs. market-rate analysis",
      "Seller financing readiness score (DOM algorithm)",
      "Multi-exit strategy evaluation (flip, BRRRR, hold)",
      "Automated lead scoring & CRM push",
    ],
    color: "from-emerald-500/10 to-teal-500/5",
    borderHover: "hover:border-emerald-500/40",
    iconBg: "bg-emerald-500/10",
    tagColor: "text-emerald-400",
  },
  {
    id: "robot-intel",
    href: "/workflows/robot-intel",
    icon: "🤖",
    badge: "LIVE",
    badgeColor: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
    title: "Humanoid Robot Intelligence",
    subtitle: "Market & R&D Signal Tracker",
    description:
      "Continuously scrapes tech publications, research papers, company announcements, and industry forums for humanoid robotics developments. Distills signals into actionable intelligence for partnership outreach and R&D acquisition.",
    features: [
      "Multi-source web scraping (tech sites, arXiv, LinkedIn)",
      "Company & product signal classification",
      "Partnership & R&D opportunity scoring",
      "Weekly digest + real-time alerts",
    ],
    color: "from-cyan-500/10 to-blue-500/5",
    borderHover: "hover:border-cyan-500/40",
    iconBg: "bg-cyan-500/10",
    tagColor: "text-cyan-400",
  },
  {
    id: "business-acquisition",
    href: "/workflows/business-acquisition",
    icon: "🏢",
    badge: "LIVE",
    badgeColor: "bg-violet-500/20 text-violet-400 border border-violet-500/30",
    title: "Business Acquisition Engine",
    subtitle: "Automated Acquisition Intelligence",
    description:
      "Continuously monitors business-for-sale listings across multiple platforms to surface acquisition opportunities. Analyzes financials, evaluates financing strategies, and generates ready-to-sign purchase agreements.",
    features: [
      "Multi-platform listing scraping (BizBuySell, LoopNet, etc.)",
      "Financial data extraction & normalization",
      "Financing strategy evaluation (bank, owner, earnout)",
      "Automated LOI & contract generation",
    ],
    color: "from-violet-500/10 to-amber-500/5",
    borderHover: "hover:border-violet-500/40",
    iconBg: "bg-violet-500/10",
    tagColor: "text-violet-400",
  },
];

const stats = [
  { value: "3", label: "Active Workflows" },
  { value: "HAL", label: "Automation Engine" },
  { value: "24/7", label: "Always Running" },
  { value: "∞", label: "Scalable Leads" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] grid-bg">
      {/* Nav */}
      <nav className="border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center text-sm font-bold text-white">
              R
            </div>
            <span className="font-semibold text-white tracking-tight">
              Robo <span className="text-cyan-400">HAL</span>
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <Link href="#workflows" className="hover:text-white transition-colors">
              Workflows
            </Link>
            <Link href="#about" className="hover:text-white transition-colors">
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
      <section className="relative overflow-hidden pt-24 pb-20 px-6">
        {/* Glow orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            AI-Powered Automation
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Intelligent{" "}
            <span className="gradient-text">Automation</span>
            <br />
            Workflows
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Purpose-built automation tools that surface high-value opportunities
            for your business — from real estate deals to robotics intelligence.
            Always on. Always working.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#workflows"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold hover:from-cyan-400 hover:to-cyan-300 transition-all glow-brand"
            >
              Explore Workflows
            </Link>
            <a
              href="mailto:hello@robohal.com"
              className="px-8 py-4 rounded-xl border border-white/10 text-white hover:border-white/20 hover:bg-white/5 transition-all"
            >
              Request a Workflow
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-white/5 bg-white/[0.02] py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Workflows */}
      <section id="workflows" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Available Workflows
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Each workflow is a fully automated pipeline built on Robo HAL — powered by neural networking with swarm agents — running
              continuously to deliver leads, signals, and intelligence directly
              to your team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {workflows.map((wf) => (
              <Link
                key={wf.id}
                href={wf.href}
                className={`group relative rounded-2xl card-glass p-8 transition-all duration-300 ${wf.borderHover} ${wf.id === "coming-soon-1" ? "pointer-events-none opacity-60" : "hover:-translate-y-1"}`}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${wf.color} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
                />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl ${wf.iconBg} flex items-center justify-center text-2xl`}>
                      {wf.icon}
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${wf.badgeColor}`}>
                      {wf.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="mb-4">
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${wf.tagColor}`}>
                      {wf.subtitle}
                    </p>
                    <h3 className="text-xl font-bold text-white">{wf.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {wf.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {wf.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className={`mt-0.5 text-xs ${wf.tagColor}`}>▸</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {wf.id !== "coming-soon-1" && (
                    <div className={`mt-8 flex items-center gap-2 text-sm font-semibold ${wf.tagColor} group-hover:gap-3 transition-all`}>
                      View Workflow
                      <span>→</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About / Technology section */}
      <section id="about" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl card-glass p-10 sm:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-cyan-500/5 pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
                🧠 Neural Network Architecture
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Powered by Swarm Intelligence &{" "}
                <span className="gradient-text">Neural Networks</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                Robo HAL uses a sophisticated AI architecture that combines neural networks with swarm agents. 
                Multiple autonomous agents work collaboratively in a decentralized system — resilient if one fails, 
                scalable for any volume, and adaptable to dynamic environments. Each agent can make local decisions 
                that contribute to emergent, global behaviors for your workflows.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                {[
                  {
                    icon: "🧠",
                    title: "Neural Controllers",
                    desc: "Deep learning models enable individual agents to make intelligent local decisions.",
                  },
                  {
                    icon: "🐝",
                    title: "Swarm Resilience",
                    desc: "If one agent fails, others compensate — ensuring 99.9% uptime reliability.",
                  },
                  {
                    icon: "📈",
                    title: "Adaptive Scaling",
                    desc: "From 10 leads to 10,000 — swarm agents dynamically distribute workload.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl bg-white/[0.03] border border-white/5 p-5">
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <div className="font-semibold text-white mb-1">{item.title}</div>
                    <div className="text-sm text-slate-400">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section id="pricing" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple, Flexible Pricing
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Choose the option that fits your needs. All workflows run 24/7 — you decide how to use them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Daily Rental",
                price: "$49",
                period: "/ day",
                description: "Perfect for testing or one-time projects",
                features: [
                  "Access any workflow for 24 hours",
                  "Unlimited leads & outputs",
                  "Email & webhook integrations",
                  "No commitment",
                ],
                popular: false,
                cta: "Rent Now",
              },
              {
                title: "Monthly Subscription",
                price: "$199",
                period: "/ month",
                description: "Best for ongoing business needs",
                features: [
                  "Full access to all workflows",
                  "Unlimited leads & outputs",
                  "Priority processing",
                  "Slack & CRM integrations",
                  "Cancel anytime",
                ],
                popular: true,
                cta: "Start Trial",
              },
              {
                title: "Annual Plan",
                price: "$1,499",
                period: "/ year",
                description: "Save 37% with annual billing",
                features: [
                  "Everything in Monthly",
                  "Dedicated infrastructure",
                  "Custom workflow development",
                  "White-label options",
                  "Priority support",
                ],
                popular: false,
                cta: "Get Started",
              },
            ].map((plan) => (
              <div
                key={plan.title}
                className={`relative rounded-2xl card-glass p-8 ${
                  plan.popular
                    ? "border-cyan-500/40 bg-cyan-500/5"
                    : "hover:border-white/20"
                } transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-cyan-500 text-black text-xs font-semibold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{plan.title}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                  <p className="text-sm text-slate-400 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-cyan-400">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:hello@robohal.com"
                  className={`block w-full py-3 rounded-xl text-center font-semibold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-cyan-500 to-cyan-400 text-black hover:from-cyan-400 hover:to-cyan-300"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Workflows section */}
      <section id="custom" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl card-glass p-10 sm:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-violet-600/5 pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
                🛠️ Custom Development
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Need something custom?
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                Every business is different. We build custom automation workflows tailored to your 
                specific needs — whether it is a new vertical, unique data sources, or specialized 
                outputs. Tell us what you need, and we will build it.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8">
                {[
                  "New industry verticals",
                  "Custom data sources",
                  "Specialized outputs & reports",
                  "CRM & tool integrations",
                  "White-label solutions",
                  "On-premise deployments",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-300">
                    <span className="text-amber-400">▸</span>
                    {item}
                  </div>
                ))}
              </div>
              <a
                href="mailto:hello@robohal.com?subject=Custom%20Workflow%20Request"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold hover:from-amber-400 hover:to-amber-300 transition-all"
              >
                Describe Your Needs
                <span>→</span>
              </a>
            </div>
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

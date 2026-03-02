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
    id: "coming-soon-1",
    href: "#",
    icon: "⚡",
    badge: "COMING SOON",
    badgeColor: "bg-slate-500/20 text-slate-400 border border-slate-500/30",
    title: "More Workflows",
    subtitle: "Expanding Automation Suite",
    description:
      "Additional automation workflows are in development. Each will be powered by N8n and designed to surface high-value opportunities across new verticals.",
    features: [
      "Custom workflow requests accepted",
      "N8n-native integrations",
      "CRM, Slack, email & webhook outputs",
      "White-label client delivery",
    ],
    color: "from-slate-500/5 to-slate-600/5",
    borderHover: "hover:border-slate-500/30",
    iconBg: "bg-slate-500/10",
    tagColor: "text-slate-400",
  },
];

const stats = [
  { value: "2", label: "Active Workflows" },
  { value: "N8n", label: "Automation Engine" },
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
              robohal<span className="text-cyan-400">.com</span>
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
            Powered by N8n Automation
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
              Each workflow is a fully automated pipeline built in N8n — running
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

      {/* N8n section */}
      <section id="about" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl card-glass p-10 sm:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-cyan-500/5 pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
                🔧 Built on N8n
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Enterprise-grade automation,{" "}
                <span className="gradient-text">without the enterprise price</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                Every workflow on RoboHal is built using N8n — the open-source
                automation platform. This means full transparency, custom
                integrations, and the ability to connect to any tool your team
                already uses: CRMs, Slack, email, webhooks, databases, and more.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                {[
                  {
                    icon: "🔗",
                    title: "400+ Integrations",
                    desc: "Connect to any CRM, database, or communication tool out of the box.",
                  },
                  {
                    icon: "🛡️",
                    title: "Self-hosted & Secure",
                    desc: "Your data stays yours. Workflows run on dedicated infrastructure.",
                  },
                  {
                    icon: "📈",
                    title: "Scales with You",
                    desc: "From 10 leads a day to 10,000 — the same workflow handles it all.",
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

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center text-xs font-bold text-white">
              R
            </div>
            <span>robohal.com — Automation Workflows</span>
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

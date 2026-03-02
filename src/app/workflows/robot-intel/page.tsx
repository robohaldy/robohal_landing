import Link from "next/link";

const dataSources = [
  {
    category: "Tech Publications",
    icon: "📰",
    sources: ["TechCrunch", "IEEE Spectrum", "MIT Technology Review", "Wired", "The Verge"],
    color: "text-cyan-400",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/5",
  },
  {
    category: "Research & Academia",
    icon: "🔬",
    sources: ["arXiv (cs.RO)", "Google Scholar alerts", "ResearchGate", "ACM Digital Library"],
    color: "text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
  },
  {
    category: "Company Intelligence",
    icon: "🏢",
    sources: ["Boston Dynamics", "Figure AI", "Agility Robotics", "Tesla Optimus", "1X Technologies", "Apptronik"],
    color: "text-violet-400",
    border: "border-violet-500/20",
    bg: "bg-violet-500/5",
  },
  {
    category: "Social & Community",
    icon: "💬",
    sources: ["LinkedIn company pages", "Reddit r/robotics", "Twitter/X robotics accounts", "YouTube channels"],
    color: "text-pink-400",
    border: "border-pink-500/20",
    bg: "bg-pink-500/5",
  },
];

const pipelineSteps = [
  {
    step: "01",
    title: "Multi-Source Scraping",
    description:
      "N8n HTTP Request nodes and RSS feed parsers continuously pull content from 50+ sources across tech media, academic repositories, company newsrooms, and social platforms.",
    icon: "🕷️",
    color: "text-cyan-400",
  },
  {
    step: "02",
    title: "Content Classification",
    description:
      "Each article, paper, or post is classified by type: product announcement, funding round, R&D breakthrough, partnership, regulatory update, or market signal. Irrelevant content is filtered out.",
    icon: "🏷️",
    color: "text-blue-400",
  },
  {
    step: "03",
    title: "Company & Entity Extraction",
    description:
      "Named entity recognition identifies companies, researchers, products, and technologies mentioned. Builds a live knowledge graph of the humanoid robotics ecosystem.",
    icon: "🧠",
    color: "text-violet-400",
  },
  {
    step: "04",
    title: "Opportunity Scoring",
    description:
      "Each signal is scored for partnership potential, R&D acquisition opportunity, or market intelligence value. High-scoring signals trigger immediate alerts; others are batched into digests.",
    icon: "🎯",
    color: "text-emerald-400",
  },
  {
    step: "05",
    title: "Knowledge Base Update",
    description:
      "Structured intelligence is written to a searchable knowledge base — building a proprietary dataset of the humanoid robotics landscape over time. Enables trend analysis and outreach preparation.",
    icon: "📚",
    color: "text-yellow-400",
  },
];

const opportunityTypes = [
  {
    title: "R&D Robot Acquisition",
    icon: "🤖",
    description: "Identify companies offering developer/research units, beta programs, or hardware partnerships.",
    signals: ["Beta program announcements", "Developer kit releases", "Research partnership calls"],
    color: "from-cyan-500/10 to-blue-500/5",
    border: "border-cyan-500/20",
    tag: "text-cyan-400",
  },
  {
    title: "Material & Component Sourcing",
    icon: "⚙️",
    description: "Track suppliers, manufacturers, and innovators in actuators, sensors, and structural materials.",
    signals: ["New actuator/sensor launches", "Supply chain announcements", "Manufacturing partnerships"],
    color: "from-violet-500/10 to-purple-500/5",
    border: "border-violet-500/20",
    tag: "text-violet-400",
  },
  {
    title: "Strategic Partnerships",
    icon: "🤝",
    description: "Surface companies actively seeking integration partners, distribution channels, or co-development agreements.",
    signals: ["Partnership announcements", "API/SDK releases", "Conference presentations"],
    color: "from-emerald-500/10 to-teal-500/5",
    border: "border-emerald-500/20",
    tag: "text-emerald-400",
  },
  {
    title: "Market Intelligence",
    icon: "📊",
    description: "Stay ahead of funding rounds, acquisitions, and regulatory shifts that reshape the competitive landscape.",
    signals: ["Funding announcements", "M&A activity", "Regulatory filings"],
    color: "from-orange-500/10 to-red-500/5",
    border: "border-orange-500/20",
    tag: "text-orange-400",
  },
];

const trackedCompanies = [
  { name: "Boston Dynamics", focus: "Spot, Atlas", stage: "Commercial" },
  { name: "Figure AI", focus: "Figure 01/02", stage: "Series B+" },
  { name: "Agility Robotics", focus: "Digit", stage: "Commercial" },
  { name: "Tesla", focus: "Optimus Gen 2", stage: "Production" },
  { name: "1X Technologies", focus: "NEO, EVE", stage: "Series B" },
  { name: "Apptronik", focus: "Apollo", stage: "Commercial" },
  { name: "Sanctuary AI", focus: "Phoenix", stage: "Series B" },
  { name: "Unitree Robotics", focus: "H1, G1", stage: "Commercial" },
];

export default function RobotIntelPage() {
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              LIVE WORKFLOW
            </span>
            <span className="text-xs text-slate-500">Powered by N8n</span>
          </div>

          <div className="flex items-start gap-5 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-3xl flex-shrink-0">
              🤖
            </div>
            <div>
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-1">
                Market & R&D Signal Tracker
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Humanoid Robot Intelligence
              </h1>
            </div>
          </div>

          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            A continuous intelligence pipeline that scrapes 50+ sources across
            tech media, research databases, and company channels — classifying
            signals, building a knowledge graph, and surfacing actionable
            opportunities for R&D partnerships, hardware acquisition, and
            strategic outreach in the humanoid robotics space.
          </p>
        </div>
      </section>

      {/* Pipeline Steps */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">Intelligence Pipeline</h2>
          <p className="text-slate-400 mb-10">
            Five automated stages transform raw web content into structured, actionable intelligence.
          </p>

          <div className="space-y-4">
            {pipelineSteps.map((step, i) => (
              <div
                key={step.step}
                className="rounded-2xl card-glass p-6 border border-white/5 flex gap-6 items-start"
              >
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <div className="text-2xl">{step.icon}</div>
                  <div className={`text-xs font-mono font-bold ${step.color}`}>{step.step}</div>
                  {i < pipelineSteps.length - 1 && (
                    <div className="w-px h-6 bg-white/10" />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">Data Sources</h2>
          <p className="text-slate-400 mb-10">
            The workflow monitors four categories of sources, updated continuously.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {dataSources.map((source) => (
              <div
                key={source.category}
                className={`rounded-2xl card-glass p-6 border ${source.border} ${source.bg}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{source.icon}</span>
                  <h3 className={`font-bold ${source.color}`}>{source.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {source.sources.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity Types */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">Opportunity Categories</h2>
          <p className="text-slate-400 mb-10">
            Every signal is classified into one of four opportunity types, each with its own scoring model.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {opportunityTypes.map((opp) => (
              <div
                key={opp.title}
                className={`rounded-2xl card-glass p-6 bg-gradient-to-br ${opp.color} border ${opp.border}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{opp.icon}</span>
                  <h3 className="font-bold text-white">{opp.title}</h3>
                </div>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{opp.description}</p>
                <div className="space-y-1">
                  {opp.signals.map((signal) => (
                    <div key={signal} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className={`${opp.tag}`}>▸</span>
                      {signal}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracked Companies */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">Tracked Companies</h2>
          <p className="text-slate-400 mb-8">
            The workflow maintains a live watch list of key humanoid robotics players. New companies are added automatically as they emerge.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {trackedCompanies.map((company) => (
              <div
                key={company.name}
                className="rounded-xl card-glass p-4 border border-white/5"
              >
                <div className="font-semibold text-white text-sm mb-1">{company.name}</div>
                <div className="text-xs text-slate-500 mb-2">{company.focus}</div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {company.stage}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-600 mt-4">
            + Emerging companies added automatically via funding & announcement detection
          </p>
        </div>
      </section>

      {/* Output */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl card-glass p-8 sm:p-10 border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-violet-500/5">
            <h2 className="text-2xl font-bold text-white mb-4">What You Receive</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: "⚡",
                  title: "Real-time Alerts",
                  desc: "Immediate Slack/email notification when a high-priority signal is detected (funding rounds, product launches, partnership opportunities).",
                },
                {
                  icon: "📋",
                  title: "Weekly Intelligence Digest",
                  desc: "Curated summary of the week's most important developments, ranked by relevance to your outreach goals.",
                },
                {
                  icon: "🗂️",
                  title: "Searchable Knowledge Base",
                  desc: "Every signal stored and indexed — building a proprietary dataset you can query before any outreach or meeting.",
                },
                {
                  icon: "📈",
                  title: "Trend Reports",
                  desc: "Monthly analysis of emerging themes, technology shifts, and market movements in the humanoid robotics space.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="font-semibold text-white mb-1">{item.title}</div>
                    <div className="text-sm text-slate-400 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Stay ahead of the humanoid robotics wave
          </h2>
          <p className="text-slate-400 mb-8">
            Get in touch to activate this workflow and start building your
            proprietary intelligence advantage in the humanoid robotics space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@robohal.com?subject=Humanoid Robot Intelligence Workflow"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold hover:from-cyan-400 hover:to-cyan-300 transition-all glow-brand"
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

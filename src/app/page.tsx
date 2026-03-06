import Link from "next/link";

const focusAreas = [
  {
    id: "humanoid-automation",
    icon: "🤖",
    badge: "IN DEVELOPMENT",
    badgeColor: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
    title: "Humanoid Automation",
    subtitle: "Working with Companies to Automate Humanoids",
    description:
      "We work with companies bringing humanoid automation to the streets. Helping automate tasks that humanoid robots will perform in industries like construction, logistics, manufacturing, and beyond.",
    features: [
      "Task automation for humanoid robot workflows",
      "Integration with robot control systems",
      "Performance monitoring & optimization",
      "Safety protocol automation",
    ],
    color: "from-cyan-500/10 to-blue-500/5",
    borderHover: "hover:border-cyan-500/40",
    iconBg: "bg-cyan-500/10",
    tagColor: "text-cyan-400",
  },
  {
    id: "trade-automation",
    icon: "🔧",
    badge: "COMING SOON",
    badgeColor: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    title: "Trade Business Automation",
    subtitle: "Blue-Collar Trade Workflows",
    description:
      "We offer affordable automation for all businesses — from small startups to enterprises. Currently building solutions for blue-collar trades and beyond, helping businesses of all sizes streamline operations.",
    features: [
      "Job scheduling & dispatch automation",
      "Invoice & estimate generation",
      "Customer relationship management",
      "Inventory & supply chain management",
    ],
    color: "from-amber-500/10 to-orange-500/5",
    borderHover: "hover:border-amber-500/40",
    iconBg: "bg-amber-500/10",
    tagColor: "text-amber-400",
  },
  {
    id: "custom-automation",
    icon: "⚡",
    badge: "NOW AVAILABLE",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    title: "Custom Automation",
    subtitle: "Build Your Workflow",
    description:
      "Every business is different. We build custom automation workflows tailored to your specific needs — whether it is a new vertical, unique data sources, or specialized outputs. Tell us what you need, and we will build it.",
    features: [
      "Tailored to your business requirements",
      "Any data sources or integrations",
      "Custom outputs & reporting",
      "Ongoing support & optimization",
    ],
    color: "from-emerald-500/10 to-teal-500/5",
    borderHover: "hover:border-emerald-500/40",
    iconBg: "bg-emerald-500/10",
    tagColor: "text-emerald-400",
  },
];

const capabilities = [
  {
    icon: "🧠",
    title: "Neural Network Architecture",
    desc: "Our workflows leverage AI that combines neural networks with swarm agents for intelligent, adaptive automation.",
  },
  {
    icon: "🔗",
    title: "Universal Integrations",
    desc: "Connect to any tools you use — CRMs, databases, communication platforms, industry-specific software.",
  },
  {
    icon: "📈",
    title: "Scalable Solutions",
    desc: "From small businesses to enterprise — our automation grows with your needs.",
  },
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
            <Link href="#focus" className="hover:text-white transition-colors">
              What We Do
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
            Building Custom Automation Solutions
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Automation for the{" "}
            <span className="gradient-text">Future of Work</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We build custom automation workflows for businesses. Currently working with companies 
            to bring humanoid automation to the streets — and offering affordable automation for all businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#focus"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold hover:from-cyan-400 hover:to-cyan-300 transition-all glow-brand"
            >
              See What We Are Building
            </Link>
            <a
              href="mailto:hello@robohal.com"
              className="px-8 py-4 rounded-xl border border-white/10 text-white hover:border-white/20 hover:bg-white/5 transition-all"
            >
              Discuss Your Needs
            </a>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section id="focus" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What We Are Building
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              We are currently focused on our partnership with a robotics startup for humanoid automation. 
              Custom automation and trade business solutions are available now or coming soon.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {focusAreas.map((area) => (
              <div
                key={area.id}
                className={`group relative rounded-2xl card-glass p-8 transition-all duration-300 ${area.borderHover} hover:-translate-y-1`}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
                />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl ${area.iconBg} flex items-center justify-center text-2xl`}>
                      {area.icon}
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${area.badgeColor}`}>
                      {area.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="mb-4">
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${area.tagColor}`}>
                      {area.subtitle}
                    </p>
                    <h3 className="text-xl font-bold text-white">{area.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {area.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {area.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className={`mt-0.5 text-xs ${area.tagColor}`}>▸</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {area.id === "custom-automation" && (
                    <div className={`mt-8 flex items-center gap-2 text-sm font-semibold ${area.tagColor} group-hover:gap-3 transition-all`}>
                      Get Started
                      <span>→</span>
                    </div>
                  )}
                </div>
              </div>
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
                Our automation platform uses a sophisticated AI architecture that combines neural networks with swarm agents. 
                Multiple autonomous agents work collaboratively in a decentralized system — resilient if one fails, 
                scalable for any volume, and adaptable to dynamic environments.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                {capabilities.map((item) => (
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

      {/* Contact CTA */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to automate your business?
          </h2>
          <p className="text-slate-400 mb-8">
            Whether you need custom automation or want to be notified when our trade business 
            workflows launch — we would love to hear from you.
          </p>
          <a
            href="mailto:hello@robohal.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold hover:from-cyan-400 hover:to-cyan-300 transition-all glow-brand"
          >
            Get in Touch
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
            <span>Robo <span className="text-cyan-400">HAL</span> — Custom Automation</span>
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

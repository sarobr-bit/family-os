const principles = [
  {
    title: "One Trusted Advisor",
    description:
      "No more juggling five different professionals who don't talk to each other. We coordinate everything under one roof.",
  },
  {
    title: "Proactive, Not Reactive",
    description:
      "We don't wait for tax season or a crisis. Your system is monitored year-round, with adjustments made before problems arise.",
  },
  {
    title: "Clarity Over Complexity",
    description:
      "Finance doesn't have to be overwhelming. Clear dashboards, plain-language reports, and actionable next steps.",
  },
  {
    title: "Family-First Thinking",
    description:
      "Every recommendation is measured against what matters most: your family's security, goals, and values.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent-1 font-medium text-sm tracking-wider uppercase mb-3">
              Our Philosophy
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 tracking-tight">
              The concierge doctor model, applied to your finances
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-4">
              A concierge doctor knows your full health history, coordinates
              your specialists, and is available when you need them.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              We apply the same model to your family&apos;s financial health.
              You shouldn&apos;t have to be your own financial CEO —
              that&apos;s our job.
            </p>
          </div>

          <div className="space-y-4">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="flex gap-4 p-5 rounded-2xl bg-light-gray border border-border"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-accent-1 to-accent-2 flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-1">
                    {principle.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const principles = [
  {
    title: "One Trusted Advisor",
    description:
      "No more juggling five different professionals who don't talk to each other. We coordinate everything — or connect you with specialists who are part of our network.",
  },
  {
    title: "Proactive, Not Reactive",
    description:
      "We don't wait for tax season or a crisis to check in. Your system is monitored and maintained year-round, with adjustments made before problems arise.",
  },
  {
    title: "Clarity Over Complexity",
    description:
      "Finance doesn't have to be overwhelming. We translate complexity into clear dashboards, plain-language reports, and actionable next steps.",
  },
  {
    title: "Family-First Thinking",
    description:
      "Every recommendation is measured against what matters most: your family's security, goals, and values. Not products. Not commissions. Your outcomes.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              Our Philosophy
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              The Concierge Doctor Model, Applied to Your Finances
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-8">
              A concierge doctor knows your full health history, coordinates
              your specialists, and is available when you need them. We apply
              the same model to your family&apos;s financial health.
            </p>
            <p className="text-slate text-lg leading-relaxed">
              You shouldn&apos;t have to be your own financial CEO. That&apos;s
              our job — to bring every piece together so you can focus on
              living your life with confidence.
            </p>
          </div>

          <div className="space-y-6">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="p-6 rounded-xl bg-light-gray border border-gray-100"
              >
                <h3 className="font-semibold text-navy text-lg mb-2">
                  {principle.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

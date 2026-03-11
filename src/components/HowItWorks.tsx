const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a comprehensive review of your entire financial picture — income, expenses, assets, liabilities, insurance, estate documents, and goals.",
  },
  {
    number: "02",
    title: "Build Your System",
    description:
      "We design your Family OS: a structured, connected plan covering cash flow, investments, risk management, estate planning, and business structuring.",
  },
  {
    number: "03",
    title: "Ongoing Management",
    description:
      "Your financial life evolves. We meet regularly to review, adjust, and optimize. Your system adapts with you — proactively, not reactively.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent-1 font-medium text-sm tracking-wider uppercase mb-3">
            The Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 tracking-tight">
            How it works
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Getting started is simple. We handle the complexity so you
            don&apos;t have to.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-8 rounded-2xl bg-white border border-border"
            >
              <span className="text-6xl font-bold bg-gradient-to-br from-accent-1/15 to-accent-2/15 bg-clip-text text-transparent">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-dark mt-4 mb-3">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

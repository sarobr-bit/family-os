const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a comprehensive review of your entire financial picture — income, expenses, assets, liabilities, insurance, estate documents, and goals. Nothing is overlooked.",
  },
  {
    number: "02",
    title: "Build Your System",
    description:
      "We design and implement your Family Operating System: a structured, connected plan covering cash flow, investments, risk management, estate planning, and — for business owners — entity structuring.",
  },
  {
    number: "03",
    title: "Ongoing Management",
    description:
      "Your financial life evolves. We meet regularly to review, adjust, and optimize. New job? New child? Market shift? Your system adapts with you — proactively, not reactively.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            The Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            How It Works
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Getting started is simple. We handle the complexity so you
            don&apos;t have to.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line (hidden on last item and on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[calc(100%-20%)] h-px bg-gold/30" />
              )}
              <div className="text-5xl font-bold text-gold/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                {step.title}
              </h3>
              <p className="text-slate leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

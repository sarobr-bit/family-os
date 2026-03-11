export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 bg-navy overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-6">
            Concierge Financial Planning
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Your Family&apos;s
            <br />
            <span className="text-gold">Operating System</span>
            <br />
            for Wealth
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
            Like a concierge doctor for your finances. We build and manage the
            complete financial infrastructure your family needs — from monthly
            budgets to estate plans, investments to insurance, all under one
            trusted advisor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors text-base"
            >
              Schedule a Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

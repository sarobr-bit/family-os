export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-32 bg-dark overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-accent-1/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-2/15 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-accent-3/10 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
            <div className="w-2 h-2 rounded-full bg-accent-3 animate-pulse" />
            <span className="text-sm text-white/70">
              Concierge Financial Planning
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Your family&apos;s{" "}
            <span className="bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent">
              operating system
            </span>{" "}
            for wealth
          </h1>

          <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            Like a concierge doctor for your finances. We build and manage the
            complete financial infrastructure your family needs — from monthly
            budgets to estate plans.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-accent-1 to-accent-2 text-white font-medium rounded-full hover:opacity-90 transition-opacity text-base"
            >
              Schedule a Consultation
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white/15 text-white font-medium rounded-full hover:bg-white/5 transition-colors text-base"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

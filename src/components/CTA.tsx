export default function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-dark relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent-1/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-2/10 rounded-full blur-[120px]" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
          Ready to build your family&apos;s
          <br />
          <span className="bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent">
            financial operating system?
          </span>
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Schedule a complimentary discovery call. We&apos;ll review your
          situation, identify gaps, and show you what a fully integrated
          financial plan looks like.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@familyos.com"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-accent-1 to-accent-2 text-white font-medium rounded-full hover:opacity-90 transition-opacity text-base"
          >
            Schedule a Discovery Call
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
            href="mailto:hello@familyos.com"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-white/15 text-white font-medium rounded-full hover:bg-white/5 transition-colors text-base"
          >
            hello@familyos.com
          </a>
        </div>

        <p className="text-white/30 text-sm mt-8">
          No obligation. No sales pitch. Just a conversation about your
          family&apos;s financial future.
        </p>
      </div>
    </section>
  );
}

export default function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
          Get Started
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Build Your Family&apos;s Financial Operating System?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Schedule a complimentary discovery call. We&apos;ll review your
          current situation, identify gaps, and show you what a fully
          integrated financial plan looks like.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@familyos.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors text-base"
          >
            Schedule a Discovery Call
          </a>
          <a
            href="mailto:hello@familyos.com"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
          >
            hello@familyos.com
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-8">
          No obligation. No sales pitch. Just a conversation about your
          family&apos;s financial future.
        </p>
      </div>
    </section>
  );
}

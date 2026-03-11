export default function Footer() {
  return (
    <footer className="bg-navy-light border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center">
              <span className="text-gold font-bold text-sm">F</span>
            </div>
            <span className="text-white/80 font-medium">
              Family Operating System
            </span>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#services"
              className="text-sm text-white/50 hover:text-white/80 transition-colors"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-white/50 hover:text-white/80 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#philosophy"
              className="text-sm text-white/50 hover:text-white/80 transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#contact"
              className="text-sm text-white/50 hover:text-white/80 transition-colors"
            >
              Contact
            </a>
          </div>

          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Family OS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

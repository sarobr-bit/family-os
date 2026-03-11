export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-1 to-accent-2 flex items-center justify-center">
              <span className="text-white font-bold text-xs">F</span>
            </div>
            <span className="text-white/70 font-medium text-sm">
              Family Operating System
            </span>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#services"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#philosophy"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#contact"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Contact
            </a>
          </div>

          <p className="text-sm text-white/25">
            &copy; {new Date().getFullYear()} Family OS
          </p>
        </div>
      </div>
    </footer>
  );
}

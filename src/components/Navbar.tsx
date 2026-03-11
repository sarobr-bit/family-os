"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-1 to-accent-2 flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="font-semibold text-lg tracking-tight text-dark">
              Family OS
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm text-muted hover:text-dark transition-colors"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-muted hover:text-dark transition-colors"
            >
              How It Works
            </a>
            <a
              href="#philosophy"
              className="text-sm text-muted hover:text-dark transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2 bg-gradient-to-r from-accent-1 to-accent-2 text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5 text-dark"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <a
              href="#services"
              className="block text-sm text-muted hover:text-dark"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="block text-sm text-muted hover:text-dark"
              onClick={() => setMobileOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#philosophy"
              className="block text-sm text-muted hover:text-dark"
              onClick={() => setMobileOpen(false)}
            >
              Philosophy
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2 bg-gradient-to-r from-accent-1 to-accent-2 text-white text-sm font-medium rounded-full"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

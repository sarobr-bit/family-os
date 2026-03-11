"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
              <span className="text-gold font-bold text-lg">F</span>
            </div>
            <div>
              <span className="text-navy font-bold text-xl tracking-tight">
                Family OS
              </span>
              <span className="hidden sm:block text-xs text-slate -mt-1">
                Financial Operating System
              </span>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-medium text-slate hover:text-navy transition-colors"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate hover:text-navy transition-colors"
            >
              How It Works
            </a>
            <a
              href="#philosophy"
              className="text-sm font-medium text-slate hover:text-navy transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-navy text-white text-sm font-medium rounded-lg hover:bg-navy-light transition-colors"
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
              className="w-6 h-6 text-navy"
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
              className="block text-sm font-medium text-slate hover:text-navy"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="block text-sm font-medium text-slate hover:text-navy"
              onClick={() => setMobileOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#philosophy"
              className="block text-sm font-medium text-slate hover:text-navy"
              onClick={() => setMobileOpen(false)}
            >
              Philosophy
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-navy text-white text-sm font-medium rounded-lg"
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

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PhoneNumber } from "@/components/ui/PhoneNumber";
import { BUSINESS } from "@/lib/config";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeNav = () => setIsOpen(false);

  return (
    <>
      {/* ── Emergency top banner — visible desktop + mobile ── */}
      <div className="bg-accent text-white text-sm py-2 text-center font-semibold">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white animate-pulse inline-block" />
          Water or fire damage?&nbsp;
          <PhoneNumber
            location="top-banner"
            className="underline underline-offset-2 font-extrabold hover:text-white/80 transition-colors"
          />
          &nbsp;— We answer 24/7
        </span>
      </div>

      {/* ── Main header ── */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
          scrolled ? "shadow-[var(--shadow-card)]" : "border-b border-border"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Text wordmark */}
            <Link href="/" aria-label="Forces Water Damage DeBary — home" className="flex flex-col leading-tight">
              <span className="font-extrabold text-primary text-base md:text-lg tracking-tight">
                Forces Water Damage
              </span>
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                DeBary, FL · 24/7
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-ink-muted hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop call CTA */}
            <div className="hidden md:flex flex-col items-end">
              <span className="text-[10px] text-ink-light uppercase tracking-wide mb-0.5">
                Free Estimate · 24/7
              </span>
              <PhoneNumber
                location="header-desktop"
                className="cta-pulse inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-base leading-none"
              >
                <PhoneIcon />
                {BUSINESS.phone}
              </PhoneNumber>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden -mr-1 p-2 rounded-md text-ink-muted hover:text-ink hover:bg-surface-alt transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav drawer */}
        {isOpen && (
          <div id="mobile-nav" className="md:hidden border-t border-border bg-white">
            <nav className="max-w-7xl mx-auto px-4 py-3 space-y-0.5" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeNav}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-ink-muted hover:text-primary hover:bg-surface transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="px-4 pb-4">
              <PhoneNumber
                location="header-mobile-drawer"
                className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-lg text-base transition-colors"
              >
                <PhoneIcon />
                Call {BUSINESS.phone}
              </PhoneNumber>
            </div>
          </div>
        )}
      </header>

      {/* ── Mobile sticky bottom bar ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <PhoneNumber
          location="mobile-sticky-bottom"
          className="flex items-center justify-center gap-3 w-full bg-accent text-white font-extrabold text-lg py-4 shadow-[var(--shadow-elevated)]"
        >
          <PhoneIcon className="h-5 w-5" />
          CALL NOW — {BUSINESS.phone}
        </PhoneNumber>
      </div>
    </>
  );
}

function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

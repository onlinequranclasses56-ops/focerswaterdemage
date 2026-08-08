"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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

  /* Close mobile nav when route changes */
  const closeNav = () => setIsOpen(false);

  return (
    <>
      {/* ---- Top bar: IICRC cert + 24/7 availability ---- */}
      <div className="bg-primary text-white text-xs py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <span>IICRC Certified Restoration Technicians — Serving DeBary &amp; Orange City, FL</span>
          <span className="font-semibold">24/7 Emergency Response</span>
        </div>
      </div>

      {/* ---- Main header ---- */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
          scrolled ? "shadow-[var(--shadow-card)]" : ""
        }`}
        style={{ top: 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" aria-label="Force1 Restoration — home">
              <Image
                src="/logo.svg"
                alt="Force1 Restoration"
                width={180}
                height={48}
                priority
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            {/* Desktop navigation */}
            <nav
              className="hidden md:flex items-center gap-7"
              aria-label="Main navigation"
            >
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
                24/7 Emergency
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
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile navigation drawer */}
        {isOpen && (
          <div
            id="mobile-nav"
            className="md:hidden border-t border-border bg-white"
          >
            <nav
              className="max-w-7xl mx-auto px-4 py-3 space-y-0.5"
              aria-label="Mobile navigation"
            >
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

      {/* Mobile sticky bottom call bar — visible at ALL scroll positions on mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <PhoneNumber
          location="mobile-sticky-bottom"
          className="flex items-center justify-center gap-3 w-full bg-accent text-white font-bold text-lg py-4 shadow-[var(--shadow-elevated)]"
        >
          <PhoneIcon className="h-5 w-5" />
          Call Now — {BUSINESS.phone}
        </PhoneNumber>
      </div>
    </>
  );
}

function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

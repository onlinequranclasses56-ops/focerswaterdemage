import Link from "next/link";
import Image from "next/image";
import { PhoneNumber } from "@/components/ui/PhoneNumber";
import { BUSINESS } from "@/lib/config";

interface Props {
  /** Main H1 headline */
  headline: string;
  /** Supporting sub-headline */
  subheadline: string;
  /** Analytics location label for phone click tracking */
  ctaLocation?: string;
  /** Override the secondary CTA label and href */
  secondaryCta?: { label: string; href: string };
  /** Extra trust line below CTAs */
  trustNote?: string;
  /** Optional background photo — displayed behind a dark overlay */
  backgroundImage?: string;
}

export function Hero({
  headline,
  subheadline,
  ctaLocation = "hero",
  secondaryCta = { label: "Request a Free Assessment", href: "/contact" },
  trustNote = "IICRC Certified · Licensed & Insured · DeBary & Orange City, FL",
  backgroundImage,
}: Props) {
  return (
    <section
      className="relative bg-primary overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Background photo */}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      )}

      {/* Overlay — heavier gradient when image is present so text stays readable */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          backgroundImage
            ? "bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60"
            : ""
        }`}
        aria-hidden="true"
      />

      {/* Decorative wave */}
      <div
        className={`absolute inset-0 pointer-events-none select-none ${backgroundImage ? "opacity-5" : "opacity-10"}`}
        aria-hidden="true"
      >
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,192C840,192,960,160,1080,154.7C1200,149,1320,171,1380,181.3L1440,192L1440,320L0,320Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent inline-block" />
            24/7 Emergency Response Available
          </p>

          <h1
            id="hero-headline"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            {headline}
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
            {subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <PhoneNumber
              location={ctaLocation}
              className="cta-pulse inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-dark text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors min-h-[56px]"
            >
              <PhoneIcon />
              Call {BUSINESS.phone}
            </PhoneNumber>

            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold text-base px-6 py-4 rounded-xl transition-colors min-h-[56px]"
            >
              {secondaryCta.label}
            </Link>
          </div>

          {/* Trust line */}
          {trustNote && (
            <p className="text-sm text-white/60">
              {trustNote}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

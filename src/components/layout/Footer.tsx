import Link from "next/link";
import { PhoneNumber } from "@/components/ui/PhoneNumber";
import { BUSINESS, SERVICES, CITIES } from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Emergency CTA strip */}
      <div className="bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-white text-lg">
              Water, fire, or storm damage? Don&apos;t wait.
            </p>
            <p className="text-white/80 text-sm">
              IICRC-certified technicians available 24 hours a day, 7 days a week.
            </p>
          </div>
          <PhoneNumber
            location="footer-emergency-strip"
            className="inline-flex items-center gap-2 bg-white text-accent hover:bg-primary-50 font-bold px-6 py-3 rounded-lg transition-colors text-lg whitespace-nowrap"
          >
            <PhoneIcon />
            {BUSINESS.phone}
          </PhoneNumber>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company info + NAP */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-bold text-xl text-white mb-1">{BUSINESS.name}</p>
            <p className="text-white/60 text-sm mb-4">{BUSINESS.tagline}</p>

            {/* NAP — matches schema and Google Business Profile exactly */}
            <address className="not-italic text-sm text-white/80 space-y-1.5">
              <p>{BUSINESS.address.street}</p>
              <p>
                {BUSINESS.address.city}, {BUSINESS.address.state}{" "}
                {BUSINESS.address.zip}
              </p>
              <PhoneNumber
                location="footer-nap"
                className="block font-semibold text-white hover:text-accent-50 transition-colors"
              />
              <a
                href={`mailto:${BUSINESS.email}`}
                className="block text-white/60 hover:text-white transition-colors"
              >
                {BUSINESS.email}
              </a>
            </address>

            <p className="mt-4 text-xs text-white/50">
              {BUSINESS.hours}
            </p>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {CITIES.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/locations/${city.slug}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {city.name}, {city.state}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 mt-8">
              Service + City
            </h3>
            <ul className="space-y-2">
              {SERVICES.flatMap((service) =>
                CITIES.map((city) => (
                  <li key={`${service.slug}-${city.slug}`}>
                    <Link
                      href={`/services/${service.slug}/${city.slug}`}
                      className="text-xs text-white/50 hover:text-white/80 transition-colors"
                    >
                      {service.name} — {city.name}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Company + credentials */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2 mb-8">
              {[
                { label: "About Us", href: "/about" },
                { label: "Reviews", href: "/reviews" },
                { label: "FAQ", href: "/faq" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                Credentials
              </h3>
              <div className="space-y-2">
                {BUSINESS.certifications.map((cert) => (
                  <div
                    key={cert}
                    className="inline-flex items-center gap-1.5 bg-white/10 rounded px-2.5 py-1 text-xs font-medium text-white"
                  >
                    <CheckIcon />
                    {cert}
                  </div>
                ))}
                <div className="inline-flex items-center gap-1.5 bg-white/10 rounded px-2.5 py-1 text-xs font-medium text-white ml-2">
                  <CheckIcon />
                  {BUSINESS.insurance}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {year} {BUSINESS.name}. All rights reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex items-center gap-6">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/40 hover:text-white/70 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

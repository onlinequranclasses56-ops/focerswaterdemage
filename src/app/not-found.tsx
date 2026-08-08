import Link from "next/link";
import { PhoneNumber } from "@/components/ui/PhoneNumber";
import { BUSINESS, SERVICES } from "@/lib/config";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-xl text-center">
        <p className="text-7xl font-extrabold text-primary-50 mb-2" aria-hidden="true">
          404
        </p>
        <h1 className="text-2xl font-bold text-ink mb-3">Page not found</h1>
        <p className="text-ink-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          If this was a link from a previous version of our site, please call us directly.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <PhoneNumber
            location="404-cta"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call {BUSINESS.phone}
          </PhoneNumber>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg text-ink-muted hover:text-ink hover:border-ink-muted transition-colors font-medium"
          >
            Back to home
          </Link>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink-muted mb-3">Popular pages</p>
          <ul className="space-y-1.5">
            {[
              { label: "Water Damage Restoration", href: "/services/water-damage-restoration" },
              { label: "Mold Remediation", href: "/services/mold-remediation" },
              { label: "Storm Damage Restoration", href: "/services/storm-damage-restoration" },
              { label: "Fire Damage Restoration", href: "/services/fire-damage-restoration" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-primary hover:text-primary-dark transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

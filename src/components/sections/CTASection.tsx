import { PhoneNumber } from "@/components/ui/PhoneNumber";
import { BUSINESS } from "@/lib/config";

interface Props {
  headline: string;
  body?: string;
  /** Analytics location label */
  location: string;
  variant?: "primary" | "accent" | "dark";
}

export function CTASection({
  headline,
  body,
  location,
  variant = "accent",
}: Props) {
  const bgMap = {
    primary: "bg-primary",
    accent: "bg-accent",
    dark: "bg-dark",
  } as const;

  const buttonMap = {
    primary: "bg-white text-primary hover:bg-primary-50",
    accent: "bg-white text-accent hover:bg-accent-50",
    dark: "bg-accent text-white hover:bg-accent-dark",
  } as const;

  return (
    <section className={`${bgMap[variant]} py-14`} aria-label="Call to action">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          {headline}
        </h2>
        {body && <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{body}</p>}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <PhoneNumber
            location={location}
            className={`cta-pulse inline-flex items-center gap-3 ${buttonMap[variant]} font-bold text-lg px-8 py-4 rounded-xl transition-colors min-h-[56px] shadow-[var(--shadow-cta)]`}
          >
            <PhoneIcon />
            {BUSINESS.phone}
          </PhoneNumber>
          <p className="text-sm text-white/60">
            {BUSINESS.hours} · {BUSINESS.certifications.join(" · ")}
          </p>
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

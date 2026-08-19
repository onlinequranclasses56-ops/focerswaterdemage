import { PhoneNumber } from "@/components/ui/PhoneNumber";
import { BUSINESS } from "@/lib/config";

const TRUST_ITEMS = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    label: "IICRC Certified",
    sub: "Industry-standard credentials",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "24/7 Emergency",
    sub: "Day, night, weekends, holidays",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    label: "Licensed & Insured",
    sub: `${BUSINESS.insurance}`,
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Local Experts",
    sub: "DeBary & Orange City, FL",
  },
];

interface Props {
  variant?: "light" | "dark";
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

export function TrustBar({ variant = "light" }: Props) {
  const bgClass = variant === "dark" ? "bg-dark" : "bg-surface";
  const textClass = variant === "dark" ? "text-white" : "text-ink";
  const subClass = variant === "dark" ? "text-white/60" : "text-ink-muted";
  const iconClass = variant === "dark" ? "text-accent" : "text-primary";

  return (
    <section className={`${bgClass} py-8 border-b border-border`} aria-label="Trust signals">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className={`${iconClass} flex-shrink-0`}>{item.icon}</div>
              <div>
                <p className={`font-semibold text-sm ${textClass}`}>{item.label}</p>
                <p className={`text-xs ${subClass}`}>{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Phone CTA bar — converts trust into action */}
        <div className="border-t border-border pt-5 text-center">
          <p className={`text-xs font-semibold uppercase tracking-widest ${subClass} mb-2`}>
            Need emergency service right now?
          </p>
          <PhoneNumber
            location="trustbar"
            className="cta-pulse inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-extrabold text-lg px-8 py-3 rounded-xl transition-colors"
          >
            <PhoneIcon />
            {BUSINESS.phone} — Call Free
          </PhoneNumber>
        </div>
      </div>
    </section>
  );
}

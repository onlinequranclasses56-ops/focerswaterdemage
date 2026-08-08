import Link from "next/link";
import type { Service } from "@/lib/config";

interface Props {
  service: Service;
  /** When a city slug is provided, the card links to the combo page */
  citySlug?: string;
  variant?: "grid" | "list";
}

export function ServiceCard({ service, citySlug, variant = "grid" }: Props) {
  const href = citySlug
    ? `/services/${service.slug}/${citySlug}`
    : `/services/${service.slug}`;

  if (variant === "list") {
    return (
      <Link
        href={href}
        className="group flex items-start gap-4 p-5 rounded-xl border border-border hover:border-primary hover:bg-primary-50 transition-all"
      >
        <span className="text-2xl flex-shrink-0" aria-hidden="true">
          {service.icon}
        </span>
        <div>
          <h3 className="font-semibold text-ink group-hover:text-primary transition-colors text-base">
            {service.name}
          </h3>
          <p className="text-ink-muted text-sm mt-1">{service.shortDescription}</p>
        </div>
        <ChevronIcon />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group flex flex-col bg-white border border-border rounded-2xl p-6 hover:border-primary hover:shadow-[var(--shadow-raised)] transition-all"
    >
      <span className="text-3xl mb-4" aria-hidden="true">
        {service.icon}
      </span>
      <h3 className="font-bold text-ink group-hover:text-primary transition-colors text-lg mb-2">
        {service.name}
      </h3>
      <p className="text-ink-muted text-sm leading-relaxed flex-1">
        {service.shortDescription}
      </p>
      <div className="mt-5 flex items-center gap-1 text-primary text-sm font-semibold">
        Learn more
        <ChevronIcon />
      </div>
    </Link>
  );
}

function ChevronIcon() {
  return (
    <svg
      className="h-4 w-4 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

"use client";

/*
 * <PhoneNumber> — the ONE place all phone numbers render from.
 *
 * DNI (Dynamic Number Insertion) integration:
 *   Wrap the app in <PhoneProvider number="..." href="..."> to swap the
 *   number per traffic channel (CallRail, WhatConverts, etc.) without
 *   touching individual page files. The provider is already added to
 *   the root layout; pass dynamic values from a server-side lookup or
 *   a client-side DNI script there.
 *
 * Every tel: link must be rendered by this component — no hardcoded
 * phone strings in JSX anywhere else in the codebase.
 */

import {
  createContext,
  useContext,
  useCallback,
  type ReactNode,
} from "react";
import { BUSINESS } from "@/lib/config";
import { trackPhoneClick } from "@/lib/analytics";

/* ------------------------------------------------------------------ */
/* Context                                                               */
/* ------------------------------------------------------------------ */

interface PhoneContextValue {
  number: string;
  href: string;
}

const PhoneContext = createContext<PhoneContextValue>({
  number: BUSINESS.phone,
  href: BUSINESS.phoneHref,
});

export function PhoneProvider({
  children,
  number = BUSINESS.phone,
  href = BUSINESS.phoneHref,
}: {
  children: ReactNode;
  number?: string;
  href?: string;
}) {
  return (
    <PhoneContext.Provider value={{ number, href }}>
      {children}
    </PhoneContext.Provider>
  );
}

export function usePhone(): PhoneContextValue {
  return useContext(PhoneContext);
}

/* ------------------------------------------------------------------ */
/* Component                                                             */
/* ------------------------------------------------------------------ */

interface PhoneNumberProps {
  /** Identifies where on the page the link appears — used in analytics. */
  location: string;
  className?: string;
  /**
   * Override the displayed text. Defaults to the formatted phone number.
   * The href (tel: link) always comes from context regardless of children.
   */
  children?: ReactNode;
}

export function PhoneNumber({
  location,
  className,
  children,
}: PhoneNumberProps) {
  const { number, href } = usePhone();

  const handleClick = useCallback(() => {
    trackPhoneClick(location, number);
  }, [location, number]);

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      /* Minimum 44px tap target handled by the consumer via padding */
    >
      {children ?? number}
    </a>
  );
}

"use client";

import { useState, useRef, type FormEvent } from "react";
import { trackFormSubmit } from "@/lib/analytics";
import { SERVICES } from "@/lib/config";
import { PhoneNumber } from "@/components/ui/PhoneNumber";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const honeypotRef = useRef<HTMLInputElement>(null);

  function validate(data: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim()) errs.name = "Name is required.";
    const email = String(data.get("email") ?? "").trim();
    if (!email) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!String(data.get("message") ?? "").trim()) errs.message = "Message is required.";
    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    /* Honeypot check — bots fill hidden fields, humans don't */
    if (honeypotRef.current?.value) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setState("submitting");
    setErrors({});

    try {
      /*
       * TODO: Replace this with a real server action or API route before launch.
       * Options:
       *  - Next.js Server Action (recommended for Next.js 14+)
       *  - POST to /api/contact route handler
       *  - Third-party service (Formspree, Web3Forms, Resend, etc.)
       *
       * The endpoint should send an email notification to [EMAIL@DOMAIN.COM]
       * and return a 200 on success.
       */
      await new Promise((res) => setTimeout(res, 1000)); /* REMOVE: fake delay */
      // throw new Error("demo"); /* Uncomment to test error state */

      trackFormSubmit("contact-page");
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-success/10 border border-success/30 rounded-xl p-6 text-center">
        <svg className="h-10 w-10 text-success mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
        <p className="font-bold text-ink text-lg mb-1">Message received!</p>
        <p className="text-ink-muted text-sm">
          We will be in touch soon. For urgent matters, call{" "}
          <PhoneNumber location="contact-form-success" className="font-semibold text-primary hover:text-primary-dark" />.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users, screen readers, and visually */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">Leave this blank</label>
        <input
          ref={honeypotRef}
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          id="name"
          label="Full name"
          type="text"
          name="name"
          autoComplete="name"
          required
          error={errors.name}
        />
        <Field
          id="phone"
          label="Phone number"
          type="tel"
          name="phone"
          autoComplete="tel"
          error={errors.phone}
        />
      </div>

      <Field
        id="email"
        label="Email address"
        type="email"
        name="email"
        autoComplete="email"
        required
        error={errors.email}
      />

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-ink mb-1.5">
          Service needed
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-lg border border-border px-3.5 py-2.5 text-sm text-ink bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
        >
          <option value="">— Select a service —</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
          <option value="other">Other / Not sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
          Describe the situation <span className="text-error" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
          className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-ink bg-white focus:ring-1 outline-none transition resize-vertical ${
            errors.message
              ? "border-error focus:border-error focus:ring-error"
              : "border-border focus:border-primary focus:ring-primary"
          }`}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-xs text-error">
            {errors.message}
          </p>
        )}
      </div>

      {state === "error" && (
        <p role="alert" className="text-sm text-error bg-error/10 border border-error/30 rounded-lg px-4 py-3">
          Something went wrong. Please try again or call us directly at{" "}
          <PhoneNumber location="contact-form-error" className="font-semibold underline" />.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full bg-accent hover:bg-accent-dark disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-colors"
      >
        {state === "submitting" ? "Sending…" : "Send Message"}
      </button>

      <p className="text-xs text-ink-light text-center">
        For emergencies, calling is faster than this form.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type,
  name,
  autoComplete,
  required,
  error,
}: {
  id: string;
  label: string;
  type: string;
  name: string;
  autoComplete?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink mb-1.5">
        {label}
        {required && <span className="text-error ml-0.5" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        autoComplete={autoComplete}
        required={required}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
        className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-ink bg-white focus:ring-1 outline-none transition ${
          error
            ? "border-error focus:border-error focus:ring-error"
            : "border-border focus:border-primary focus:ring-primary"
        }`}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-error">
          {error}
        </p>
      )}
    </div>
  );
}

/*
 * Analytics helpers — GA4 via GTM dataLayer
 *
 * All phone-call clicks must fire generate_lead so the business can
 * attribute inbound calls to traffic channels. This is the primary
 * conversion event for Force1 Restoration.
 *
 * Replace [GTM_ID] in layout.tsx with the real GTM container ID once provided.
 */

type DataLayerEvent = Record<string, unknown>;

function push(event: DataLayerEvent): void {
  if (typeof window === "undefined") return;
  const w = window as Window & { dataLayer?: DataLayerEvent[] };
  if (!Array.isArray(w.dataLayer)) w.dataLayer = [];
  w.dataLayer.push(event);
}

export function trackPhoneClick(location: string, phoneNumber: string): void {
  push({
    event: "generate_lead",
    event_category: "phone_call",
    event_label: location,
    phone_number: phoneNumber,
    value: 1,
    currency: "USD",
  });
}

export function trackFormSubmit(formName: string): void {
  push({
    event: "generate_lead",
    event_category: "form_submit",
    event_label: formName,
    value: 1,
    currency: "USD",
  });
}

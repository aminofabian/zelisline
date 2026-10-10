export interface MomentComponentDef {
  id: string;
  name: string;
  description: string;
  price: number;
  /** Repeatable components can be added more than once (e.g. a second custom feature). */
  repeatable?: boolean;
}

export interface MomentBundleDef {
  id: string;
  name: string;
  includes: string;
  /** componentId -> quantity */
  items: Record<string, number>;
}

export const MOMENT_COMPONENTS: MomentComponentDef[] = [
  {
    id: "homepage",
    name: "Static homepage",
    description: "One-page branded site: event details, story, photos, share link.",
    price: 10000,
  },
  {
    id: "dashboard",
    name: "Dashboard + database",
    description: "Live dashboard with stored data, admin login and real-time updates.",
    price: 15000,
  },
  {
    id: "mpesa",
    name: "M-Pesa integration",
    description: "STK-push collection and payment confirmation.",
    price: 5000,
  },
  {
    id: "feature",
    name: "Custom feature",
    description: "A single function — RSVP form, pledge tracker, donor wall or check-in.",
    price: 10000,
    repeatable: true,
  },
];

export const MOMENT_BUNDLES: MomentBundleDef[] = [
  { id: "simple", name: "Simple event page", includes: "Static homepage", items: { homepage: 1 } },
  {
    id: "harambee",
    name: "Basic harambee",
    includes: "Homepage + dashboard/DB + M-Pesa",
    items: { homepage: 1, dashboard: 1, mpesa: 1 },
  },
  {
    id: "fundraiser",
    name: "Full fundraiser",
    includes: "Homepage + dashboard/DB + M-Pesa + 1 feature (donor wall)",
    items: { homepage: 1, dashboard: 1, mpesa: 1, feature: 1 },
  },
  {
    id: "wedding",
    name: "Wedding / guestlist",
    includes: "Homepage + dashboard/DB + 1 feature (RSVP)",
    items: { homepage: 1, dashboard: 1, feature: 1 },
  },
];

export const MOMENT_PRICING_NOTE =
  "All prices in Kenyan shillings (KES). One-time build — no subscription. Dashboard-only pricing on request.";

export const formatKes = (value: number) => `KES ${value.toLocaleString("en-KE")}`;

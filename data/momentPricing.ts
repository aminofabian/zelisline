export interface MomentComponentDef {
  id: string;
  name: string;
  description: string;
  price: number;
  /** Repeatable components can be added more than once (e.g. a second custom feature). */
  repeatable?: boolean;
  /** Components sharing a group are mutually exclusive (e.g. one hosting option). */
  group?: string;
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
  {
    id: "hosting-vercel",
    name: "Hosting — Vercel",
    description: "Deployed for free on Vercel's global platform. The simplest way to go live.",
    price: 0,
    group: "hosting",
  },
  {
    id: "hosting-vps",
    name: "Hosting — VPS + SSL",
    description: "We provision and configure a VPS with SSL, DNS and everything set up for you.",
    price: 10000,
    group: "hosting",
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

/** Zero-priced items read as "Free" rather than "KES 0". */
export const formatMomentPrice = (value: number) => (value === 0 ? "Free" : formatKes(value));

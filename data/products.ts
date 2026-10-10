export interface LaunchProduct {
  id: number;
  /** Display name — usually the product domain. */
  name: string;
  /** Domain without protocol, used for the small "visit" link. Omitted while a product is pre-launch. */
  domain?: string;
  href?: string;
  /** Small mono label above the name. */
  kicker: string;
  /** Optional status chip, e.g. "In development". */
  tag?: string;
  tagline: string;
  pitch: string;
  features: string[];
  /** CTA label; defaults to "Get {name}". */
  cta?: string;
  /** Optional link to a dedicated pricing page. */
  pricingHref?: string;
  price: {
    label: string;
    value: string;
    note?: string;
  };
}

export const launchProducts: LaunchProduct[] = [
  {
    id: 1,
    name: "kiosk.ke",
    domain: "kiosk.ke",
    href: "https://kiosk.ke",
    kicker: "E-commerce · Point of sale",
    tagline: "Your shop, online.",
    pitch:
      "Get a free e-commerce website built for real trading — a product storefront, a built-in point of sale, and your own custom domain, fully customised to your brand. We set it up with you; you start selling.",
    features: [
      "Free e-commerce website",
      "Built-in point of sale (POS)",
      "Product storefront, ready to sell",
      "Your own custom, branded domain",
      "Set up with you, end to end",
    ],
    price: {
      label: "Fully customised, one-time",
      value: "Under KES 3,000",
      note: "Free to start — pay only when you go fully custom.",
    },
  },
  {
    id: 2,
    name: "squl.co.ke",
    domain: "squl.co.ke",
    href: "https://squl.co.ke",
    kicker: "School management · Website",
    tagline: "Run your school, not the paperwork.",
    pitch:
      "A complete school management system with a marketing website built in — admissions, students, staff, fees and parent communication in one place. Free M-Pesa integration included, so payments just work.",
    features: [
      "Full school management system",
      "Marketing website included",
      "Free M-Pesa integration",
      "Admissions, records & fees",
      "Parent & staff communication",
    ],
    price: {
      label: "Complete system, one-time",
      value: "Under KES 10,000",
      note: "M-Pesa integration at no extra cost.",
    },
  },
  {
    id: 3,
    name: "kioskpay.co.ke",
    domain: "kioskpay.co.ke",
    href: "https://kioskpay.co.ke",
    kicker: "Payments · M-Pesa",
    tagline: "Get paid, instantly.",
    pitch:
      "The payments rail behind the kiosk. Merchant-first M-Pesa collections, payouts and reconciliation — built for small businesses that move fast and can't wait on paperwork.",
    features: [
      "M-Pesa collections",
      "Instant payouts",
      "Effortless reconciliation",
      "Built for merchants",
    ],
    price: {
      label: "Powered by M-Pesa",
      value: "Free",
      note: "Built into every kiosk.ke store — collections, payouts and reconciliation.",
    },
  },
  {
    id: 4,
    name: "Pop-Up Software",
    kicker: "Moment apps · M-Pesa",
    tag: "In development",
    tagline: "Built for the day. Gone when it's done.",
    pitch:
      "A studio that builds disposable, event-shaped apps in 48 hours. Tell us about the harambee, the wedding committee, the fundraiser or the launch — we assemble a custom micro-app from our moment engines, payments built in, and put it live in two days. When the event ends it produces a final report, archives everything, and shuts down on purpose.",
    features: [
      "Live in 48 hours",
      "Shareable link & live dashboard",
      "M-Pesa contributions built in",
      "Transparent, auditable ledger",
      "Final report — then it retires itself",
    ],
    cta: "Get early access",
    pricingHref: "/pop-up",
    price: {
      label: "Fixed price per event",
      value: "From KES 3,000",
      note: "KES 3,000–15,000 depending on the engine. No subscription, no maintenance — it expires by design.",
    },
  },
];

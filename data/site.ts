const PHONE_E164 = "+254714282874";
const WHATSAPP_NUMBER = "254714282874";

export const site = {
  name: "Zelisline",
  tagline: "Grow together",
  studio: "Nairobi, Kenya",
  coordinates: "1.2921° S, 36.8219° E",
  email: "zelisline@gmail.com",
  phone: {
    href: `tel:${PHONE_E164}`,
    display: "(+254) 714 28 2874",
  },
  whatsapp: {
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    message: "Hi Zelisline, I would like to talk about a project.",
  },
  offer: {
    label: "Launch offer",
    text: "Personal websites from",
    price: "KES 15,000",
    shortPrice: "15K",
    href: "/personal-website-package",
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/zelisline-ltd" },
    { label: "Twitter", href: "https://www.twitter.com/zelisline" },
    { label: "WhatsApp", href: `https://wa.me/${WHATSAPP_NUMBER}` },
  ],
} as const;

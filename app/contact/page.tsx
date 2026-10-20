import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Zelisline for web development, digital marketing and custom solutions. We reply within 24 hours.",
  alternates: { canonical: "/contact" },
};

const CONTACT_FACTS = [
  { label: "Email", value: site.email },
  { label: "Phone", value: site.phone.display },
  { label: "Location", value: site.studio },
  { label: "Response time", value: "Within 24 hours" },
];

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Write to the studio"
        description="Tell us what you are working on. We reply within a day with honest advice on scope, timeline and cost."
        facts={CONTACT_FACTS}
      />
      <ContactPage />
    </>
  );
}

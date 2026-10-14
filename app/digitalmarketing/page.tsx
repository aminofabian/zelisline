import type { Metadata } from "next";
import ServiceLandingPage from "@/components/landing/ServiceLandingPage";
import { packages } from "@/data/pricing/DMPricingPackages";
import { faqContent } from "@/data/faq";
import {
  digitalMarketingDiscipline,
  graphicalDesignDiscipline,
  webDesignDiscipline,
} from "@/data/serviceDisciplines";

export const metadata: Metadata = {
  title: "Digital marketing",
  description:
    "Digital marketing services in Kenya: SEO, social media, paid campaigns and content, with packages for every stage of growth.",
};

const DIGITAL_MARKETING_DISCIPLINES = [digitalMarketingDiscipline, webDesignDiscipline, graphicalDesignDiscipline];

export default function DigitalMarketingPage() {
  return (
    <ServiceLandingPage
      hero={{
        eyebrow: "Digital marketing · Kenya",
        title: "We promise to grow your website traffic, or you don't pay. Partner with the highest-rated digital marketing agency in Kenya",
        description: "Build a kick-ass brand with our cutting-edge digital marketing services in Kenya.",
        primary: { label: "Get started", href: "/contact" },
        secondary: { label: "View portfolio", href: "/portfolio" },
      }}
      pricing={{
        eyebrow: "Packages",
        title: "Choose your package",
        description: "Starting points to help you plan. Every campaign is scoped individually to your goals.",
        currency: "usd",
        packages,
      }}
      services={{
        eyebrow: "What we do",
        title: "From simple blogs to complex SaaS, we've got you covered",
        disciplines: DIGITAL_MARKETING_DISCIPLINES,
      }}
      faq={{ eyebrow: "Answers", title: "Questions we hear often", items: faqContent }}
    />
  );
}

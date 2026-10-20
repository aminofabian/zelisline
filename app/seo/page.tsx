import type { Metadata } from "next";
import ServiceLandingPage from "@/components/landing/ServiceLandingPage";
import { packages } from "@/data/pricing/DMPricingPackages";
import { seoFaqs } from "@/data/faq";
import {
  digitalMarketingDiscipline,
  graphicalDesignDiscipline,
  webDesignDiscipline,
} from "@/data/serviceDisciplines";

export const metadata: Metadata = {
  title: "SEO services",
  description:
    "SEO services in Kenya: keyword research, on-page and local SEO, and ongoing reporting from a Nairobi digital marketing studio.",
};

const SEO_DISCIPLINES = [digitalMarketingDiscipline, webDesignDiscipline, graphicalDesignDiscipline];

export default function SeoPage() {
  return (
    <ServiceLandingPage
      hero={{
        eyebrow: "SEO · Kenya",
        title: "We promise to grow your website traffic, or you don't pay. Partner with the highest-rated digital marketing agency in Kenya",
        description: "Build a kick-ass brand with our cutting-edge SEO services in Kenya.",
        primary: { label: "Get a free SEO audit", href: "/contact" },
        secondary: { label: "Read the journal", href: "/blog" },
      }}
      pricing={{
        eyebrow: "Packages",
        title: "Choose your SEO package",
        description: "Starting points to help you plan. Every campaign is scoped individually to your goals.",
        currency: "usd",
        packages,
      }}
      services={{
        eyebrow: "What we do",
        title: "From simple blogs to complex SaaS, we've got you covered",
        disciplines: SEO_DISCIPLINES,
      }}
      faq={{ eyebrow: "Answers", title: "SEO questions, answered", items: seoFaqs }}
    />
  );
}

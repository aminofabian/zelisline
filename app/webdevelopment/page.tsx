import type { Metadata } from "next";
import ServiceLandingPage from "@/components/landing/ServiceLandingPage";
import { packages } from "@/data/pricing/WebDevelopmentPackages";
import { webDesignFaqs } from "@/data/faq";
import { customStackDiscipline, webDesignDiscipline } from "@/data/serviceDisciplines";

export const metadata: Metadata = {
  title: "Web design & development",
  description:
    "Web design and development services in Kenya: marketing sites, web applications and custom stacks built by a Nairobi studio.",
};

const WEB_DEVELOPMENT_DISCIPLINES = [webDesignDiscipline, customStackDiscipline];

export default function WebDevelopmentPage() {
  return (
    <ServiceLandingPage
      hero={{
        eyebrow: "Website design & development",
        title: "Get web design & development services from the top agency in Kenya",
        description: "Marketing sites, web applications and custom stacks, designed and engineered by a Nairobi studio.",
        primary: { label: "Get a quote", href: "/contact" },
        secondary: { label: "See the packages", href: "#pricing" },
      }}
      pricing={{
        eyebrow: "Packages",
        title: "Choose your web development package",
        description: "Starting points to help you plan. Every build is scoped individually.",
        currency: "usd",
        packages,
      }}
      services={{
        eyebrow: "What we do",
        title: "From simple blogs to complex SaaS, we've got you covered",
        disciplines: WEB_DEVELOPMENT_DISCIPLINES,
      }}
      faq={{ eyebrow: "Answers", title: "Questions we hear often", items: webDesignFaqs }}
    />
  );
}

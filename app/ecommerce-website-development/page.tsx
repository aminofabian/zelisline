import type { Metadata } from "next";
import ServiceLandingPage from "@/components/landing/ServiceLandingPage";
import { packages } from "@/data/pricing/EcommercePackage";
import { webDesignFaqs } from "@/data/faq";
import { customStackDiscipline, webDesignDiscipline } from "@/data/serviceDisciplines";

export const metadata: Metadata = {
  title: "Ecommerce website development",
  description:
    "Ecommerce website design and development in Kenya: storefronts, product catalogues and payment integrations built by a Nairobi studio.",
};

const ECOMMERCE_DISCIPLINES = [webDesignDiscipline, customStackDiscipline];

export default function EcommercePage() {
  return (
    <ServiceLandingPage
      hero={{
        eyebrow: "Ecommerce website design & development",
        title: "The leading ecommerce website design & development service in Kenya",
        description: "Online stores with product catalogues, carts and payments, designed and launched by a Nairobi studio.",
        primary: { label: "Get a quote", href: "/contact" },
        secondary: { label: "See the packages", href: "#pricing" },
      }}
      pricing={{
        eyebrow: "Packages",
        title: "Choose your ecommerce package",
        description: "Starting points to help you plan. Every store is scoped individually to your catalogue and payments.",
        currency: "usd",
        packages,
      }}
      services={{
        eyebrow: "What we do",
        title: "From simple blogs to complex SaaS, we've got you covered",
        disciplines: ECOMMERCE_DISCIPLINES,
      }}
      faq={{ eyebrow: "Answers", title: "Questions we hear often", items: webDesignFaqs }}
    />
  );
}

import ContactPage from "@/components/ContactPage";
import PageHero, { type PageHeroProps } from "@/components/PageHero";
import Container from "@/components/system/Container";
import SectionHeader from "@/components/system/SectionHeader";
import MyAccordion from "@/components/myComponents/MyAccordion";
import PricingGrid from "@/components/pricing/PricingGrid";
import type { PriceCurrency } from "@/components/pricing/PricingCard";
import ServicesSection from "@/components/landing/ServicesSection";
import type { FaqItem, PricingPackage, ServiceDiscipline } from "@/types/content";

interface PricingBlock {
  eyebrow: string;
  title: string;
  description: string;
  currency: PriceCurrency;
  packages: PricingPackage[];
}

interface ServicesBlock {
  eyebrow: string;
  title: string;
  description?: string;
  disciplines: ServiceDiscipline[];
}

interface FaqBlock {
  eyebrow: string;
  title: string;
  description?: string;
  items: FaqItem[];
}

export interface ServiceLandingPageProps {
  hero: PageHeroProps;
  pricing: PricingBlock;
  services?: ServicesBlock;
  faq?: FaqBlock;
}

function FaqSection({ eyebrow, title, description, items }: FaqBlock) {
  return (
    <section className="border-y border-ink bg-grey-50 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        </div>
        <div className="lg:col-span-7">
          <MyAccordion items={items} />
        </div>
      </Container>
    </section>
  );
}

export default function ServiceLandingPage({ hero, pricing, services, faq }: ServiceLandingPageProps) {
  return (
    <>
      <PageHero {...hero} />

      <section id="pricing" className="scroll-mt-20 py-20 sm:py-28">
        <Container>
          <SectionHeader eyebrow={pricing.eyebrow} title={pricing.title} description={pricing.description} />
          <div className="mt-14">
            <PricingGrid packages={pricing.packages} currency={pricing.currency} />
          </div>
        </Container>
      </section>

      {services && (
        <ServicesSection
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
          disciplines={services.disciplines}
        />
      )}

      {faq && <FaqSection {...faq} />}

      <ContactPage />
    </>
  );
}

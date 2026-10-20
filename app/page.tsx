import ContactPage from "@/components/ContactPage";
import CtaBand from "@/components/CtaBand";
import FaqTabs from "@/components/FaqTabs";
import HowWeWork from "@/components/HowWeWork";
import PageHero from "@/components/PageHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/landing/ServicesSection";
import ProductLaunches from "@/components/landing/ProductLaunches";
import Pricing from "@/components/pricing/Pricing";
import Container from "@/components/system/Container";
import Marquee from "@/components/system/Marquee";
import SectionHeader from "@/components/system/SectionHeader";
import { capabilities } from "@/data/capabilities";
import { HOME_MARQUEE_ITEMS } from "@/data/marquee";
import { webDesignFaqs, seoFaqs, faqContent, logoFaqs, videoFaqs } from "@/data/faq";
import {
  digitalMarketingDiscipline,
  graphicalDesignDiscipline,
  webDesignDiscipline,
} from "@/data/serviceDisciplines";
import type { FaqGroup } from "@/types/content";

const HOME_DISCIPLINES = [webDesignDiscipline, digitalMarketingDiscipline, graphicalDesignDiscipline];

const FAQ_GROUPS: FaqGroup[] = [
  { id: "web-design", label: "Web design", items: webDesignFaqs },
  { id: "seo", label: "SEO", items: seoFaqs },
  { id: "content", label: "Content marketing", items: faqContent },
  { id: "logo", label: "Logo design", items: logoFaqs },
  { id: "video", label: "Video production", items: videoFaqs },
];

const HERO_FACTS = [
  { label: "Studio", value: "Nairobi, Kenya" },
  { label: "Projects shipped", value: "100+" },
  { label: "Experience", value: "5+ years" },
  { label: "Support", value: "Always on" },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Nairobi studio"
        title="Websites and digital products for ambitious brands"
        description="We design, build and grow the sites, storefronts and software a business actually runs on. Based in Nairobi, working with teams across East Africa."
        primary={{ label: "Begin a project" }}
        secondary={{ label: "View the work", href: "/our-work" }}
        facts={HERO_FACTS}
        index={capabilities}
        fillViewport
      />

      <Marquee items={HOME_MARQUEE_ITEMS} />

      <ProductLaunches />

      <ServicesSection
        id="services"
        eyebrow="Services"
        title="From a brochure site to a product your team runs"
        description="Strategy, design and engineering, held in one studio. The scope stays clear. The people stay the same."
        disciplines={HOME_DISCIPLINES}
      />

      <HowWeWork />
      <WhyChooseUs />
      <Pricing />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeader
            eyebrow="Questions"
            title="Before we begin"
            description="A few things clients ask first. If yours is not here, write to us."
          />
          <div className="mt-16">
            <FaqTabs groups={FAQ_GROUPS} />
          </div>
        </Container>
      </section>

      <ContactPage />
      <CtaBand />
    </>
  );
}

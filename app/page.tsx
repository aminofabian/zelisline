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
        eyebrow="Software studio · Nairobi"
        title="Web development & digital marketing for ambitious Kenyan brands"
        description="We design, build and grow websites, storefronts and digital products for businesses that want to compete online."
        primary={{ label: "Start a project" }}
        secondary={{ label: "See our work", href: "/our-work" }}
        facts={HERO_FACTS}
        index={capabilities}
        fillViewport
      />

      <Marquee items={HOME_MARQUEE_ITEMS} />

      <ProductLaunches />

      <ServicesSection
        id="services"
        eyebrow="What we do"
        title="From simple blogs to complex SaaS"
        description="Whether you need a simple business blog or a complex SaaS application, we bring strategy, design and engineering under one roof."
        disciplines={HOME_DISCIPLINES}
      />

      <HowWeWork />
      <WhyChooseUs />
      <Pricing />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Answers"
            title="Questions we hear often"
            description="A few of the things clients ask before we begin. Can't find yours? Just reach out — we're happy to talk it through."
          />
          <div className="mt-14">
            <FaqTabs groups={FAQ_GROUPS} />
          </div>
        </Container>
      </section>

      <ContactPage />
      <CtaBand />
    </>
  );
}

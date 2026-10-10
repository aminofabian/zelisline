import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/landing/ServicesSection";
import { capabilities } from "@/data/capabilities";
import {
  customStackDiscipline,
  digitalMarketingDiscipline,
  graphicalDesignDiscipline,
  webDesignDiscipline,
} from "@/data/serviceDisciplines";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design and development, digital marketing, SEO, brand and graphic design from Zelisline, a software studio in Nairobi.",
};

const SERVICE_DISCIPLINES = [webDesignDiscipline, digitalMarketingDiscipline, graphicalDesignDiscipline, customStackDiscipline];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Strategy, design and engineering under one roof"
        description="Pick a discipline to see what we build, or tell us about the whole problem and we'll shape the right mix."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "See pricing", href: "/#pricing" }}
        index={capabilities}
      />

      <ServicesSection
        eyebrow="Disciplines"
        title="Four ways we can help"
        description="Every project runs as one team with one plan, whichever disciplines it needs."
        disciplines={SERVICE_DISCIPLINES}
      />

      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import Capabilities from "@/components/Capabilities";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import ServiceIndex from "@/components/ServiceIndex";
import ProjectRow from "@/components/work/ProjectRow";
import Container from "@/components/system/Container";
import SectionHeader from "@/components/system/SectionHeader";
import { formatIndex } from "@/lib/format";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Our work",
  description:
    "Products, platforms and payment rails designed, built and shipped by Zelisline, from a digital shopfront for Kenyan traders to community platforms.",
};

const WORK_FACTS = [
  { label: "Projects", value: formatIndex(projects.length) },
  { label: "Disciplines", value: "Web · Product · Payments" },
  { label: "Studio", value: "Nairobi, Kenya" },
  { label: "Shipped to", value: "Kenya · UK · US" },
];

const projectIndex = projects.map((project) => ({
  n: formatIndex(project.id),
  label: project.title,
  href: `#project-${project.id}`,
}));

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Our work"
        description="Products, platforms and payment rails we've designed, built and shipped — from a digital shopfront for Kenyan traders to community platforms and content engines for teams across three continents."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "Browse the work", href: "#index" }}
        facts={WORK_FACTS}
      />

      <section id="index" className="scroll-mt-20 border-b border-ink py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="On this page" title="Index" description="Jump straight to a project, or read through from the top." />
          </div>
          <div className="lg:col-span-7 lg:pt-16">
            <ServiceIndex items={projectIndex} />
          </div>
        </Container>
      </section>

      <Container className="py-4">
        {projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} position={index} />
        ))}
      </Container>

      <Capabilities />
      <CtaBand />
    </>
  );
}

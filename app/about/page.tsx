import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Container from "@/components/system/Container";
import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";
import SectionHeader from "@/components/system/SectionHeader";
import { OurTeam } from "@/components/myComponents/ourTeam";
import { formatIndex } from "@/lib/format";
import {
  aboutMissionPoints,
  aboutStats,
  aboutTechStack,
  aboutTimeline,
  aboutValues,
} from "@/data/about";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zelisline is a software studio in Nairobi, Kenya, building web products, storefronts and digital marketing for ambitious brands.",
};

function MissionSection() {
  return (
    <section className="border-b border-ink py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="Mission"
            title="Our mission"
            description="At Zelisline, we're committed to empowering businesses in Kenya and beyond with cutting-edge digital solutions. Our mission is to bridge the gap between traditional businesses and the digital world, ensuring our clients stay competitive in today's fast-paced market."
          />
          <ol className="mt-12 border-t-2 border-ink">
            {aboutMissionPoints.map((point, index) => (
              <li key={point.title} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-ink py-6">
                <span className="font-mono text-[12px] text-ink-muted">{formatIndex(index + 1)}</span>
                <div>
                  <h3 className="font-display text-lg font-bold">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{point.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div data-surface="ink" className="flex flex-col justify-between bg-ink p-8 text-paper sm:p-10 lg:col-span-5 lg:self-stretch">
          <Eyebrow>Based in</Eyebrow>
          <p className="display-wide mt-16 font-display text-[2.6rem] font-bold uppercase leading-[0.95] tracking-[-0.03em] sm:text-6xl">
            Nairobi, Kenya
          </p>
          <p className="mt-10 font-mono text-[12px] tracking-[0.08em] text-paper-dim">{site.coordinates}</p>
        </div>
      </Container>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="border-b border-ink bg-grey-50 py-20 sm:py-28">
      <Container>
        <SectionHeader eyebrow="Values" title="Our core values" description="These principles guide everything we do and help us deliver exceptional results for our clients." />
        <div className="mt-14 grid grid-cols-1 gap-px border border-ink bg-ink sm:grid-cols-2">
          {aboutValues.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.05} className="flex h-full flex-col justify-between gap-10 bg-paper p-8 sm:p-10">
              <span className="font-mono text-[12px] text-ink-muted">{formatIndex(index + 1)}</span>
              <div>
                <h3 className="display-wide font-display text-2xl font-bold">{value.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-ink-muted">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TechStackSection() {
  return (
    <section className="border-b border-ink py-20 sm:py-28">
      <Container>
        <SectionHeader eyebrow="Stack" title="Our technology stack" description="We leverage cutting-edge technologies to build scalable, efficient, and modern solutions for our clients." />
        <div className="mt-14 space-y-12">
          {aboutTechStack.map((group) => (
            <div key={group.label}>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">{group.label}</p>
              <ul className="grid grid-cols-2 gap-px border border-ink bg-ink sm:grid-cols-3 lg:grid-cols-4">
                {group.items.map((tech) => (
                  <li key={tech.name} className="bg-paper p-5">
                    <p className="display-wide font-display text-lg font-bold">{tech.name}</p>
                    <p className="mt-1 text-sm text-ink-muted">{tech.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="border-b border-ink bg-grey-50 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow="History" title="Our journey" description="From our humble beginnings to where we are today, every step has been focused on delivering excellence." />
        </div>
        <ol className="border-l-2 border-ink lg:col-span-7">
          {aboutTimeline.map((item) => (
            <li key={item.year} className="relative pb-12 pl-8 last:pb-0">
              <span aria-hidden className="absolute -left-[9px] top-1 h-4 w-4 bg-ink" />
              <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-ink-muted">{item.year}</p>
              <h3 className="display-wide mt-2 font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-2 max-w-md leading-relaxed text-ink-muted">{item.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Crafting digital excellence in Kenya"
        description="We are a team of passionate developers dedicated to transforming businesses through innovative web solutions and digital marketing strategies."
        primary={{ label: "Start your project", href: "/contact" }}
        secondary={{ label: "View our work", href: "/our-work" }}
        facts={aboutStats}
      />
      <MissionSection />
      <ValuesSection />
      <TechStackSection />
      <TimelineSection />
      <OurTeam />
      <CtaBand />
    </>
  );
}

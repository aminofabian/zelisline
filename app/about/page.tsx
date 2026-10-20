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
    <section className="py-24 sm:py-32">
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="Mission"
            title="What we are here to do"
            description="Help Kenyan businesses compete online with work that is specific, well made, and still looked after a year later."
          />
          <ol className="mt-12 border-t border-grey-200">
            {aboutMissionPoints.map((point, index) => (
              <li key={point.title} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-grey-200 py-7">
                <span className="font-display italic text-brass">{formatIndex(index + 1)}</span>
                <div>
                  <h3 className="font-display text-xl font-medium">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{point.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div data-surface="ink" className="flex flex-col justify-between bg-ink p-8 text-paper sm:p-10 lg:col-span-5 lg:self-stretch">
          <Eyebrow>Based in</Eyebrow>
          <p className="mt-16 font-display text-5xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-6xl">
            Nairobi, Kenya
          </p>
          <p className="mt-10 text-[12px] font-medium uppercase tracking-[0.16em] text-paper-dim">{site.coordinates}</p>
        </div>
      </Container>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="bg-grey-50 py-24 sm:py-32">
      <Container>
        <SectionHeader eyebrow="Values" title="How we practise" description="A few principles we keep, on every project." />
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-16">
          {aboutValues.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.04} className="flex h-full flex-col justify-between gap-8 border-t border-grey-200 pt-6">
              <span className="font-display text-2xl italic text-brass">{formatIndex(index + 1)}</span>
              <div>
                <h3 className="font-display text-2xl font-medium">{value.title}</h3>
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
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader eyebrow="Stack" title="The tools we use" description="A practical set. Chosen because it stays maintainable after we hand the work over." />
        <div className="mt-16 space-y-14">
          {aboutTechStack.map((group) => (
            <div key={group.label}>
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.18em] text-brass">{group.label}</p>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
                {group.items.map((tech) => (
                  <li key={tech.name} className="border-t border-grey-200 pt-4">
                    <p className="font-display text-lg font-medium">{tech.name}</p>
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
    <section className="bg-grey-50 py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow="History" title="A short history" description="A small studio, built one project at a time." />
        </div>
        <ol className="border-l border-grey-300 lg:col-span-6 lg:col-start-7">
          {aboutTimeline.map((item) => (
            <li key={item.year} className="relative pb-12 pl-8 last:pb-0">
              <span aria-hidden className="absolute -left-[3px] top-2 h-1.5 w-1.5 rounded-full bg-brass" />
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-brass">{item.year}</p>
              <h3 className="mt-2 font-display text-2xl font-medium">{item.title}</h3>
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
        title="A software studio in Nairobi"
        description="We design and build websites, storefronts and digital products for businesses across East Africa."
        primary={{ label: "Begin a project", href: "/contact" }}
        secondary={{ label: "View the work", href: "/our-work" }}
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

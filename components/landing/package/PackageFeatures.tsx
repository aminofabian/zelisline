import Container from "@/components/system/Container";
import Reveal from "@/components/system/Reveal";
import SectionHeader from "@/components/system/SectionHeader";
import { formatIndex } from "@/lib/format";
import type { PackageFeature } from "@/types/content";

interface PackageFeaturesProps {
  title: string;
  description: string;
  features: PackageFeature[];
}

const STAGGER_STEP_S = 0.05;

export default function PackageFeatures({ title, description, features }: PackageFeaturesProps) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader eyebrow="What's included" title={title} description={description} />
        <ol className="mt-14 border-t-2 border-ink">
          {features.map((feature, index) => (
            <li key={feature.title} className="border-b border-ink">
              <Reveal delay={index * STAGGER_STEP_S} className="grid gap-6 py-8 md:grid-cols-12 md:gap-10">
                <div className="flex gap-4 md:col-span-5">
                  <span className="font-mono text-[12px] text-ink-muted">{formatIndex(index + 1)}</span>
                  <div>
                    <h3 className="display-wide font-display text-2xl font-bold leading-tight">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 md:col-span-7 md:pt-1">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-sm sm:text-base">
                      <span aria-hidden className="h-1.5 w-1.5 shrink-0 bg-ink" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

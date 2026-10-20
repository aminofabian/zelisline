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

const STAGGER_STEP_S = 0.04;

export default function PackageFeatures({ title, description, features }: PackageFeaturesProps) {
  return (
    <section className="bg-grey-50 py-24 sm:py-32">
      <Container>
        <SectionHeader eyebrow="Included" title={title} description={description} />
        <ol className="mt-16">
          {features.map((feature, index) => (
            <li key={feature.title} className="border-t border-grey-200 last:border-b">
              <Reveal delay={index * STAGGER_STEP_S} className="grid gap-6 py-10 md:grid-cols-12 md:gap-12">
                <div className="md:col-span-5">
                  <span className="font-display text-lg italic text-brass">{formatIndex(index + 1)}</span>
                  <h3 className="mt-4 font-display text-2xl font-medium leading-tight">{feature.title}</h3>
                  <p className="mt-3 max-w-[36ch] text-sm leading-[1.7] text-ink-muted">{feature.description}</p>
                </div>
                <ul className="space-y-3 md:col-span-6 md:col-start-7 md:pt-10">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm leading-[1.65] sm:text-base">
                      <span aria-hidden className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-brass" />
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

import Container from "@/components/system/Container";
import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";

const STAGGER_STEP_S = 0.04;

const REASONS = [
  { title: "A senior team", description: "Engineers with years across React, Node and cloud infrastructure." },
  { title: "Visible progress", description: "Regular checkpoints. You see the work as it takes shape." },
  { title: "A considered pace", description: "Fast where it should be. Never hurried where it matters." },
  { title: "Quality built in", description: "Unit, integration and end-to-end testing on every project." },
  { title: "Cloud and DevOps", description: "Architecture that stays secure and maintainable as you grow." },
  { title: "Security first", description: "Sound practice, regular review, and care at every stage." },
];

const STATS = [
  { value: "100+", label: "Projects delivered" },
  { value: "99.9%", label: "Uptime targeted" },
  { value: "24/7", label: "Support available" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <Eyebrow>The studio</Eyebrow>
            <h2 className="mt-6 font-display text-[2.4rem] font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
              Small on purpose
            </h2>
            <p className="mt-6 max-w-[36ch] text-pretty text-lg leading-[1.7] text-ink-muted">
              The people who scope your project are the people who build it, and who are still here when you need a
              change a year later.
            </p>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-grey-200 pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dd className="font-display text-2xl font-medium sm:text-3xl">{stat.value}</dd>
                  <dt className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <ol className="lg:col-span-6 lg:col-start-7">
            {REASONS.map((reason, index) => (
              <li key={reason.title} className="border-t border-grey-200 last:border-b">
                <Reveal delay={index * STAGGER_STEP_S} className="grid grid-cols-[3.5rem_1fr] gap-4 py-8">
                  <span className="font-display text-lg italic text-brass">0{index + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl font-medium">{reason.title}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-[1.7] text-ink-muted sm:text-base">{reason.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

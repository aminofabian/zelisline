import Container from "@/components/system/Container";
import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";
import { formatIndex } from "@/lib/format";

const STAGGER_STEP_S = 0.05;

const REASONS = [
  { title: "A senior team", description: "Engineers with years of experience across React, Node and cloud infrastructure." },
  { title: "Agile delivery", description: "Regular sprints, visible progress and continuous delivery — not a black box." },
  { title: "Fast turnaround", description: "An optimised process and CI/CD pipeline that keeps momentum high." },
  { title: "Quality assurance", description: "Unit, integration and end-to-end testing built into every project." },
  { title: "Cloud & DevOps", description: "Architecture that stays scalable, secure and maintainable as you grow." },
  { title: "Security first", description: "Best practices, regular audits and compliance applied at every stage." },
];

const STATS = [
  { value: "100+", label: "Projects delivered" },
  { value: "99.9%", label: "Uptime targeted" },
  { value: "24/7", label: "Support available" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:col-span-5 lg:self-start">
            <Eyebrow>Why Zelisline</Eyebrow>
            <h2 className="display-wide mt-6 font-display text-[2.1rem] font-bold uppercase leading-[1.02] tracking-[-0.02em] sm:text-5xl">
              A partner you can actually rely on
            </h2>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-ink-muted">
              We are small on purpose. That means the people who scope your project are the people who build it — and
              who are still there when you need changes a year later.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-px border border-ink bg-ink">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-paper p-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted">{stat.label}</dt>
                  <dd className="display-wide mt-2 font-display text-2xl font-bold sm:text-3xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ol className="border-t-2 border-ink lg:col-span-7">
            {REASONS.map((reason, index) => (
              <li key={reason.title} className="border-b border-ink">
                <Reveal delay={index * STAGGER_STEP_S} className="grid grid-cols-[3rem_1fr] gap-4 py-7 sm:grid-cols-[4rem_1fr]">
                  <span className="font-mono text-[12px] text-ink-muted">{formatIndex(index + 1)}</span>
                  <div>
                    <h3 className="display-wide font-display text-xl font-bold sm:text-2xl">{reason.title}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-muted sm:text-base">{reason.description}</p>
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

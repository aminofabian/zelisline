import Action from "@/components/system/Action";
import Container from "@/components/system/Container";
import Reveal from "@/components/system/Reveal";
import SectionHeader from "@/components/system/SectionHeader";
import { formatIndex } from "@/lib/format";

const STAGGER_STEP_S = 0.06;

const STEPS = [
  { title: "Project details", description: "You share the vision and the problem you want solved." },
  { title: "Scope analysis", description: "We map requirements, constraints and success measures." },
  { title: "Timeline & quote", description: "A clear, itemised proposal with a realistic schedule." },
  { title: "Milestone planning", description: "Work is broken into four checkpoints you can follow." },
  { title: "First milestone", description: "Development kicks off once the first milestone is set." },
  { title: "Build & launch", description: "We ship, test and support well beyond go-live." },
];

export default function HowWeWork() {
  return (
    <section className="border-y border-ink bg-grey-50 py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Process"
          title="How we work"
          description="A calm, transparent process — no mystery, no surprises. You always know what is happening and what comes next."
        />

        <ol className="mt-14 grid grid-cols-1 gap-px border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className="bg-paper">
              <Reveal delay={(index % 3) * STAGGER_STEP_S} className="flex h-full flex-col justify-between gap-12 p-6 sm:p-8">
                <span className="font-mono text-[12px] tracking-[0.1em] text-ink-muted">{formatIndex(index + 1)}</span>
                <div>
                  <h3 className="display-wide font-display text-xl font-bold leading-tight sm:text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col gap-6 border-t border-ink pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-pretty text-ink-muted">
            Clear communication, on-time delivery, and results you can build on.
          </p>
          <Action href="/contact" arrow>
            Start your project
          </Action>
        </div>
      </Container>
    </section>
  );
}

import Action from "@/components/system/Action";
import Container from "@/components/system/Container";
import Reveal from "@/components/system/Reveal";
import SectionHeader from "@/components/system/SectionHeader";

const STAGGER_STEP_S = 0.04;

const STEPS = [
  { title: "Project details", description: "You share the vision and the problem you want solved." },
  { title: "Scope analysis", description: "We map requirements, constraints and success measures." },
  { title: "Timeline and quote", description: "A clear proposal, itemised, with a realistic schedule." },
  { title: "Milestone planning", description: "The work is broken into four checkpoints you can follow." },
  { title: "First milestone", description: "Building begins once the first milestone is agreed." },
  { title: "Build and launch", description: "We ship, test and stay available well after go-live." },
];

export default function HowWeWork() {
  return (
    <section className="bg-grey-50 py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="Process"
          title="How an engagement unfolds"
          description="A quiet process. You always know what is happening, and what comes next."
        />

        <ol className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={(index % 3) * STAGGER_STEP_S} className="flex h-full flex-col gap-8 border-t border-grey-200 pt-6">
                <span className="font-display text-2xl italic text-brass">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-2xl font-medium leading-tight">{step.title}</h3>
                  <p className="mt-3 max-w-[32ch] text-sm leading-[1.7] text-ink-muted">{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-pretty leading-[1.7] text-ink-muted">
            Clear communication, delivery on the date we agreed, and work you can build on.
          </p>
          <Action href="/contact" arrow>
            Begin a project
          </Action>
        </div>
      </Container>
    </section>
  );
}

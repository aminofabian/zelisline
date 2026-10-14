import Action from "@/components/system/Action";
import Container from "@/components/system/Container";
import Reveal from "@/components/system/Reveal";
import SectionHeader from "@/components/system/SectionHeader";
import { formatIndex } from "@/lib/format";
import { teamMembers, type TeamMember } from "@/data/team";

const INITIALS_SEPARATOR = " ";
const STAGGER_STEP_S = 0.06;

const initialsOf = (name: string) =>
  name
    .split(INITIALS_SEPARATOR)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function TeamRow({ member, position }: { member: TeamMember; position: number }) {
  return (
    <li className="border-b border-ink">
      <Reveal delay={position * STAGGER_STEP_S} className="grid gap-6 py-8 md:grid-cols-12 md:gap-8">
        <div className="flex items-start gap-5 md:col-span-4">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center bg-ink font-display text-lg font-bold text-paper" aria-hidden>
            {initialsOf(member.name)}
          </span>
          <div>
            <p className="font-mono text-[11px] text-ink-muted">{formatIndex(position + 1)}</p>
            <h3 className="display-wide mt-1 font-display text-xl font-bold leading-tight sm:text-2xl">{member.name}</h3>
            <p className="mt-1 text-sm font-medium">{member.role}</p>
          </div>
        </div>

        <div className="md:col-span-4">
          <p className="text-sm leading-relaxed text-ink-muted">{member.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {member.skills.map((skill) => (
              <li key={skill} className="border border-ink px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em]">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <dl className="grid grid-cols-2 gap-4 text-sm md:col-span-4 md:grid-cols-1">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-muted">Focus</dt>
            <dd className="mt-1">{member.expertise}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-muted">Based</dt>
            <dd className="mt-1">{member.location}</dd>
          </div>
          {member.github && (
            <div className="col-span-2 md:col-span-1">
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 hover:no-underline"
              >
                GitHub profile
              </a>
            </div>
          )}
        </dl>
      </Reveal>
    </li>
  );
}

export function OurTeam() {
  return (
    <section className="border-t-2 border-ink py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="The team"
          title="Meet our expert team"
          description="A talented team of developers from Kenya, passionate about creating innovative digital solutions and delivering exceptional results for our clients."
        />

        <ol className="mt-14 border-t-2 border-ink">
          {teamMembers.map((member, index) => (
            <TeamRow key={member.name} member={member} position={index} />
          ))}
        </ol>

        <div className="mt-16 grid gap-8 border-2 border-ink p-8 sm:p-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">Hiring</p>
            <h3 className="display-wide mt-3 font-display text-2xl font-bold sm:text-3xl">Join our team</h3>
            <p className="mt-3 max-w-xl text-pretty text-ink-muted">
              We&apos;re always looking for talented developers to join our growing team. If you&apos;re passionate about
              creating amazing digital experiences, we&apos;d love to hear from you.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Action href="/contact" arrow>
              Get in touch
            </Action>
          </div>
        </div>
      </Container>
    </section>
  );
}

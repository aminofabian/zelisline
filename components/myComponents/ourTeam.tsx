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
    <li className="border-b border-grey-200">
      <Reveal delay={position * STAGGER_STEP_S} className="grid gap-6 py-10 md:grid-cols-12 md:gap-8">
        <div className="flex items-start gap-5 md:col-span-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-grey-50 font-display text-lg italic text-brass" aria-hidden>
            {initialsOf(member.name)}
          </span>
          <div>
            <p className="font-display italic text-brass">{formatIndex(position + 1)}</p>
            <h3 className="mt-1 font-display text-2xl font-medium leading-tight">{member.name}</h3>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted">{member.role}</p>
          </div>
        </div>

        <div className="md:col-span-4">
          <p className="text-sm leading-relaxed text-ink-muted">{member.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {member.skills.map((skill) => (
              <li key={skill} className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink-muted">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <dl className="grid grid-cols-2 gap-4 text-sm md:col-span-4 md:grid-cols-1">
          <div>
            <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted">Focus</dt>
            <dd className="mt-1">{member.expertise}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted">Based</dt>
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
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="The team"
          title="The people who do the work"
          description="A small team in Kenya. The same people who scope a project are the ones who build it."
        />

        <ol className="mt-16 border-t border-grey-200">
          {teamMembers.map((member, index) => (
            <TeamRow key={member.name} member={member} position={index} />
          ))}
        </ol>

        <div className="mt-20 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-brass">Hiring</p>
            <h3 className="mt-3 font-display text-3xl font-medium">Join the studio</h3>
            <p className="mt-3 max-w-xl text-pretty leading-[1.7] text-ink-muted">
              If you build carefully and like staying with the work after it ships, write to us.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Action href="/contact" arrow>
              Write to us
            </Action>
          </div>
        </div>
      </Container>
    </section>
  );
}

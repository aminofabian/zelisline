import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/system/Reveal";
import { formatIndex } from "@/lib/format";
import type { Project } from "@/data/projects";

interface ProjectRowProps {
  project: Project;
  position: number;
}

const SIDE_LEFT = "lg:order-1";
const SIDE_RIGHT = "lg:order-2";

const Label = ({ children }: { children: string }) => (
  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">{children}</p>
);

const Detail = ({ label, value }: { label: string; value: string }) => (
  <div>
    <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">{label}</dt>
    <dd className="mt-2 text-sm leading-relaxed">{value}</dd>
  </div>
);

export default function ProjectRow({ project, position }: ProjectRowProps) {
  const isFlipped = position % 2 === 1;
  const visualSide = isFlipped ? SIDE_RIGHT : SIDE_LEFT;
  const detailSide = isFlipped ? SIDE_LEFT : SIDE_RIGHT;

  return (
    <article id={`project-${project.id}`} className="scroll-mt-24 border-t-2 border-ink py-16 sm:py-24">
      <Reveal className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className={`lg:col-span-5 ${visualSide}`}>
          <div className="grayscale-plate border border-ink bg-grey-50 p-4">
            <Image src={project.image} alt={project.title} width={600} height={400} className="h-auto w-full" />
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-sm font-medium"
            >
              View project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </a>
          )}
        </div>

        <div className={`lg:col-span-7 ${detailSide}`}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[12px] text-ink-muted">{formatIndex(project.id)}</span>
            {project.tag && <span className="bg-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-paper">{project.tag}</span>}
          </div>
          <h2 className="display-wide mt-5 font-display text-3xl font-bold leading-[1.02] tracking-[-0.02em] sm:text-4xl lg:text-[2.9rem]">
            {project.title}
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">{project.description}</p>

          {(project.duration || project.teamSize || project.keyObjectives) && (
            <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-ink pt-8 sm:grid-cols-3">
              {project.duration && <Detail label="Duration" value={project.duration} />}
              {project.teamSize && <Detail label="Team" value={project.teamSize} />}
              {project.keyObjectives && <Detail label="Key objectives" value={project.keyObjectives} />}
            </dl>
          )}

          {project.techStack && project.techStack.length > 0 && (
            <div className="mt-8">
              <Label>Tech stack</Label>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li key={tech} className="border border-ink px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em]">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.outcome && (
            <div className="mt-8">
              <Label>Outcome</Label>
              <p className="mt-3 max-w-2xl leading-relaxed">{project.outcome}</p>
            </div>
          )}

          {project.testimonial && (
            <blockquote className="mt-10 border-l-2 border-ink pl-6">
              <p className="text-pretty text-lg leading-relaxed">&ldquo;{project.testimonial.text}&rdquo;</p>
              <footer className="mt-3 text-sm text-ink-muted">— {project.testimonial.author}</footer>
            </blockquote>
          )}

          {project.client && (
            <div className="mt-10 border-t border-ink pt-6">
              <Label>Client</Label>
              <p className="mt-2 font-medium">{project.client.name}</p>
            </div>
          )}
        </div>
      </Reveal>
    </article>
  );
}

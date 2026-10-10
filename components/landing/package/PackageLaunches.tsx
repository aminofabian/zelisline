import { ArrowUpRight } from "lucide-react";
import Container from "@/components/system/Container";
import SectionHeader from "@/components/system/SectionHeader";
import { formatIndex } from "@/lib/format";
import type { PackageLaunch } from "@/types/content";

interface PackageLaunchesProps {
  launches: PackageLaunch[];
}

const LAUNCHES_TITLE = "Our latest website launches";
const LAUNCHES_DESCRIPTION = "Join these successful businesses who've transformed their online presence with our expertise";

export default function PackageLaunches({ launches }: PackageLaunchesProps) {
  return (
    <section className="border-b border-ink py-20 sm:py-28">
      <Container>
        <SectionHeader eyebrow="Recent work" title={LAUNCHES_TITLE} description={LAUNCHES_DESCRIPTION} />
        <ol className="mt-14 border-t-2 border-ink">
          {launches.map((launch, index) => (
            <li key={launch.name} className="border-b border-ink">
              <a
                href={launch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-3 py-6 transition-colors hover:bg-ink hover:text-paper sm:grid-cols-12 sm:items-center sm:gap-6 sm:px-4"
              >
                <span className="font-mono text-[12px] text-ink-muted group-hover:text-paper-dim sm:col-span-1">
                  {formatIndex(index + 1)}
                </span>
                <span className="display-wide font-display text-xl font-bold sm:col-span-4 sm:text-2xl">{launch.name}</span>
                <span className="text-sm text-ink-muted group-hover:text-paper-dim sm:col-span-4">{launch.sector}</span>
                <span className="flex flex-wrap gap-2 sm:col-span-2">
                  {launch.tags.map((tag) => (
                    <span key={tag} className="border border-current px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em]">
                      {tag}
                    </span>
                  ))}
                </span>
                <ArrowUpRight className="hidden h-5 w-5 justify-self-end sm:col-span-1 sm:block" aria-hidden />
              </a>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

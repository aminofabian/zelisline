import { ArrowUpRight } from "lucide-react";
import Container from "@/components/system/Container";
import SectionHeader from "@/components/system/SectionHeader";
import { formatIndex } from "@/lib/format";
import type { PackageLaunch } from "@/types/content";

interface PackageLaunchesProps {
  launches: PackageLaunch[];
}

const LAUNCHES_TITLE = "Recent launches";
const LAUNCHES_DESCRIPTION = "A few of the sites we have shipped for studios, clinics, churches and retailers.";

export default function PackageLaunches({ launches }: PackageLaunchesProps) {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader eyebrow="Selected work" title={LAUNCHES_TITLE} description={LAUNCHES_DESCRIPTION} />
        <ol className="mt-16">
          {launches.map((launch, index) => (
            <li key={launch.name} className="border-t border-grey-200 last:border-b">
              <a
                href={launch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-3 py-7 transition-colors duration-200 sm:grid-cols-12 sm:items-center sm:gap-6"
              >
                <span className="font-display text-lg italic text-brass sm:col-span-1">{formatIndex(index + 1)}</span>
                <span className="font-display text-2xl font-medium sm:col-span-4">{launch.name}</span>
                <span className="text-sm leading-[1.6] text-ink-muted sm:col-span-4">{launch.sector}</span>
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted sm:col-span-2">
                  {launch.tags[0]}
                </span>
                <ArrowUpRight
                  className="hidden h-4 w-4 justify-self-end text-ink-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brass sm:col-span-1 sm:block"
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

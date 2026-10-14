import Container from "@/components/system/Container";
import type { PackageStat } from "@/types/content";

interface PackageStatsProps {
  stats: PackageStat[];
}

export default function PackageStats({ stats }: PackageStatsProps) {
  return (
    <section className="border-b border-ink bg-grey-50">
      <Container className="py-0">
        <dl className="grid grid-cols-1 divide-y divide-ink border-x border-ink sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-4 px-2 py-8 sm:px-8">
              <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">{stat.label}</dt>
              <dd className="display-wide font-display text-5xl font-bold leading-none tracking-[-0.03em] sm:text-6xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

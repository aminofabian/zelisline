import Container from "@/components/system/Container";
import type { PackageStat } from "@/types/content";

interface PackageStatsProps {
  stats: PackageStat[];
}

export default function PackageStats({ stats }: PackageStatsProps) {
  return (
    <section className="border-y border-grey-200">
      <Container className="py-12 sm:py-16">
        <dl className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd className="font-display text-5xl font-medium leading-none tracking-[-0.03em] sm:text-6xl">{stat.value}</dd>
              <dt className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

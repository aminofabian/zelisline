import Action from "@/components/system/Action";
import Container from "@/components/system/Container";
import Eyebrow from "@/components/system/Eyebrow";
import type { PackageLandingConfig } from "@/types/content";

interface PackageHeroProps {
  config: PackageLandingConfig;
  onOpenInquiry: () => void;
}

export default function PackageHero({ config, onOpenInquiry }: PackageHeroProps) {
  return (
    <section className="bg-paper">
      <Container className="grid gap-16 py-20 md:py-28 lg:grid-cols-12 lg:items-start lg:gap-20">
        <div className="lg:col-span-7">
          <Eyebrow>{config.eyebrow}</Eyebrow>
          <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">{config.proofLine}</p>
          <h1 className="mt-6 font-display text-[2.7rem] font-medium leading-[1.05] tracking-[-0.03em] sm:text-6xl">
            {config.title.map((part) =>
              part.emphasis ? (
                <span key={part.text} className="italic">
                  {part.text}
                </span>
              ) : (
                <span key={part.text}>{part.text} </span>
              )
            )}
          </h1>
          <p className="mt-8 max-w-[40rem] text-pretty text-lg leading-[1.7] text-ink-muted">
            {config.description}
            <span className="text-ink">{config.descriptionHighlight}</span>
          </p>
        </div>

        <div className="bg-ink p-8 text-paper sm:p-10 lg:col-span-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-paper-dim line-through">
            {config.price.strike}
          </p>
          <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-brass">{config.price.discount}</p>
          <p className="mt-6 font-display text-5xl font-medium leading-none tracking-[-0.03em]">{config.price.amount}</p>
          <p className="mt-3 text-paper-dim">{config.price.note}</p>

          <ul className="mt-8 space-y-3 border-t border-white/15 pt-8">
            {config.perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3 text-base leading-[1.6]">
                <span aria-hidden className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-brass" />
                {perk}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Action onClick={onOpenInquiry} variant="inverse" arrow>
              {config.ctaLabel}
            </Action>
          </div>
          <p className="mt-6 max-w-[28ch] text-sm leading-[1.6] text-paper-dim">{config.guarantee}</p>
        </div>
      </Container>
    </section>
  );
}

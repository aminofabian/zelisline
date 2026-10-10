import Action from "@/components/system/Action";
import Container from "@/components/system/Container";
import Eyebrow from "@/components/system/Eyebrow";
import type { PackageLandingConfig } from "@/types/content";

interface PackageHeroProps {
  config: PackageLandingConfig;
  onOpenInquiry: () => void;
}

const PERK_ICON = "—";

export default function PackageHero({ config, onOpenInquiry }: PackageHeroProps) {
  return (
    <section className="border-b border-ink bg-paper">
      <Container className="grid gap-14 py-14 md:py-20 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Eyebrow>{config.eyebrow}</Eyebrow>
          <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.1em] text-ink-muted">{config.proofLine}</p>
          <h1 className="display-wide mt-6 font-display text-[2.6rem] font-bold uppercase leading-[0.92] tracking-[-0.035em] sm:text-[4.2rem] lg:text-[5rem]">
            {config.title.map((part) =>
              part.emphasis ? (
                <span key={part.text} className="block underline decoration-[6px] underline-offset-[10px]">
                  {part.text}
                </span>
              ) : (
                <span key={part.text} className="block">
                  {part.text}
                </span>
              )
            )}
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-ink-muted sm:text-xl">
            {config.description}
            <strong className="font-bold text-ink">{config.descriptionHighlight}</strong>
          </p>
        </div>

        <div className="border-2 border-ink bg-paper p-7 sm:p-10 lg:col-span-5">
          <div className="flex items-center justify-between gap-4 font-mono text-[12px] tracking-[0.06em]">
            <span className="text-ink-muted line-through">{config.price.strike}</span>
            <span className="border border-ink bg-ink px-2.5 py-1 uppercase text-paper">{config.price.discount}</span>
          </div>
          <p className="display-wide mt-8 font-display text-[2.6rem] font-bold leading-none sm:text-5xl">{config.price.amount}</p>
          <p className="mt-3 text-ink-muted">{config.price.note}</p>

          <ul className="mt-8 space-y-3 border-t border-ink pt-8">
            {config.perks.map((perk) => (
              <li key={perk} className="flex gap-3 text-base">
                <span aria-hidden className="text-ink-muted">{PERK_ICON}</span>
                {perk}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Action onClick={onOpenInquiry} arrow className="w-full">
              {config.ctaLabel}
            </Action>
          </div>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">{config.guarantee}</p>
        </div>
      </Container>
    </section>
  );
}

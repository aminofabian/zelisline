import Action from "@/components/system/Action";
import Container from "@/components/system/Container";
import type { PackageLandingConfig } from "@/types/content";

interface PackageFinalCtaProps {
  config: Pick<PackageLandingConfig, "finalTitle" | "finalDescription" | "finalCtaLabel" | "finalGuarantee">;
  onOpenInquiry: () => void;
}

export default function PackageFinalCta({ config, onOpenInquiry }: PackageFinalCtaProps) {
  return (
    <section className="border-t border-ink bg-grey-50 py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="lg:col-span-8">
          <h2 className="display-wide font-display text-[2.2rem] font-bold uppercase leading-[0.95] tracking-[-0.03em] sm:text-6xl">
            {config.finalTitle}
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-muted">{config.finalDescription}</p>
        </div>
        <div className="lg:col-span-4">
          <Action onClick={onOpenInquiry} arrow className="w-full">
            {config.finalCtaLabel}
          </Action>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">{config.finalGuarantee}</p>
        </div>
      </Container>
    </section>
  );
}

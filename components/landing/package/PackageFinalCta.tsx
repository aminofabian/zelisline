import Action from "@/components/system/Action";
import Container from "@/components/system/Container";
import type { PackageLandingConfig } from "@/types/content";

interface PackageFinalCtaProps {
  config: Pick<PackageLandingConfig, "finalTitle" | "finalDescription" | "finalCtaLabel" | "finalGuarantee">;
  onOpenInquiry: () => void;
}

export default function PackageFinalCta({ config, onOpenInquiry }: PackageFinalCtaProps) {
  return (
    <section className="bg-ink py-24 text-paper sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="lg:col-span-8">
          <h2 className="max-w-[14ch] font-display text-[2.6rem] font-medium leading-[1.05] tracking-[-0.03em] sm:text-6xl">
            {config.finalTitle}
          </h2>
          <p className="mt-6 max-w-[42ch] text-pretty text-lg leading-[1.7] text-paper-dim">{config.finalDescription}</p>
        </div>
        <div className="lg:col-span-4">
          <Action onClick={onOpenInquiry} variant="inverse" arrow>
            {config.finalCtaLabel}
          </Action>
          <p className="mt-6 max-w-[28ch] text-sm leading-[1.6] text-paper-dim">{config.finalGuarantee}</p>
        </div>
      </Container>
    </section>
  );
}

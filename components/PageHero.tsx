"use client";

import { useState } from "react";
import Action from "@/components/system/Action";
import Container from "@/components/system/Container";
import Eyebrow from "@/components/system/Eyebrow";
import ProjectInquiryModal from "@/components/ProjectInquiryModal";
import ServiceIndex from "@/components/ServiceIndex";
import { site } from "@/data/site";
import type { CapabilityLink } from "@/data/capabilities";
import { cn } from "@/lib/utils";

const LONG_TITLE_LENGTH = 70;
const TITLE_SIZE_LONG = "text-[2rem] sm:text-[2.9rem] lg:text-[3.4rem]";
const TITLE_SIZE_DEFAULT = "text-[2.4rem] sm:text-[3.8rem] lg:text-[4.6rem]";

/** Height of the sticky chrome (promo bar h-10 + header h-16) that sits above the hero. */
const CHROME_HEIGHT = "6.5rem";

export interface HeroFact {
  label: string;
  value: string;
}

export interface HeroLink {
  label: string;
  href: string;
}

export interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  /** Without an href the primary action opens the project inquiry form. */
  primary?: { label: string; href?: string };
  secondary?: HeroLink;
  facts?: HeroFact[];
  index?: CapabilityLink[];
  /** Fill the first viewport so the facts strip is always visible without scrolling. */
  fillViewport?: boolean;
}

function HeroActions({
  primary,
  secondary,
  onOpenInquiry,
}: Pick<PageHeroProps, "primary" | "secondary"> & { onOpenInquiry: () => void }) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
      {primary?.href && (
        <Action href={primary.href} arrow>
          {primary.label}
        </Action>
      )}
      {primary && !primary.href && (
        <Action onClick={onOpenInquiry} arrow>
          {primary.label}
        </Action>
      )}
      {secondary && (
        <Action href={secondary.href} variant="outline">
          {secondary.label}
        </Action>
      )}
    </div>
  );
}

export default function PageHero({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  facts,
  index,
  fillViewport = false,
}: PageHeroProps) {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const titleSize = title.length > LONG_TITLE_LENGTH ? TITLE_SIZE_LONG : TITLE_SIZE_DEFAULT;
  const hasIndex = Boolean(index && index.length > 0);
  const hasFacts = Boolean(facts && facts.length > 0);

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-ink bg-paper",
        fillViewport && "flex flex-col"
      )}
      style={fillViewport ? { minHeight: `calc(100dvh - ${CHROME_HEIGHT})` } : undefined}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-70" />

      <Container
        className={cn(
          "relative pb-12 pt-10 md:pb-14 md:pt-12",
          fillViewport && "flex flex-1 flex-col"
        )}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink pb-4 font-mono text-[11px] uppercase tracking-[0.12em]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <span className="hidden text-ink-muted sm:inline">
            {site.studio} · {site.coordinates}
          </span>
        </div>

        <h1
          className={cn(
            "display-wide mt-8 max-w-[18ch] font-display font-bold uppercase leading-[0.92] tracking-[-0.035em]",
            titleSize
          )}
        >
          {title}
        </h1>

        <div className="mt-10 grid gap-12 border-t border-ink pt-8 lg:grid-cols-12">
          <div className={hasIndex ? "lg:col-span-6" : "lg:col-span-7"}>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-ink-muted sm:text-xl">{description}</p>
            {(primary || secondary) && (
              <HeroActions primary={primary} secondary={secondary} onOpenInquiry={() => setIsInquiryOpen(true)} />
            )}
          </div>

          {hasIndex && index && (
            <div className="border border-ink bg-grey-50 p-6 sm:p-8 lg:col-span-6">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">Capabilities</p>
              <ServiceIndex items={index} />
            </div>
          )}
        </div>

        {hasFacts && (
          <dl className={cn("grid grid-cols-2 gap-px border border-ink bg-ink sm:grid-cols-4", fillViewport ? "mt-auto pt-12" : "mt-12")}>
            {facts!.map((fact) => (
              <div key={fact.label} className="bg-paper px-5 py-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">{fact.label}</dt>
                <dd className="display-wide mt-2 font-display text-lg font-bold leading-tight sm:text-xl">{fact.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </Container>

      {primary && !primary.href && (
        <ProjectInquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
      )}
    </section>
  );
}

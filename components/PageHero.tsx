"use client";

import { useState } from "react";
import Action from "@/components/system/Action";
import Container from "@/components/system/Container";
import Eyebrow from "@/components/system/Eyebrow";
import ProjectInquiryModal from "@/components/ProjectInquiryModal";
import ServiceIndex from "@/components/ServiceIndex";
import type { CapabilityLink } from "@/data/capabilities";
import { cn } from "@/lib/utils";

const LONG_TITLE_LENGTH = 48;
const TITLE_SIZE_LONG = "text-[2.5rem] sm:text-[3.4rem] lg:text-[4.25rem]";
const TITLE_SIZE_DEFAULT = "text-[2.85rem] sm:text-[4.25rem] lg:text-[5.25rem]";

/** Height of the sticky chrome (promo bar + header) that sits above the hero. */
const CHROME_HEIGHT = "7.25rem";

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
    <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
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
        <Action href={secondary.href} variant="ghost">
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
      className={cn("relative bg-paper", fillViewport && "flex flex-col")}
      style={fillViewport ? { minHeight: `calc(100dvh - ${CHROME_HEIGHT})` } : undefined}
    >
      <Container
        className={cn(
          "relative pb-16 pt-16 md:pb-20 md:pt-24",
          fillViewport && "flex flex-1 flex-col"
        )}
      >
        <Eyebrow>{eyebrow}</Eyebrow>

        <h1
          className={cn(
            "mt-8 max-w-[14ch] font-display font-medium leading-[1.04] tracking-[-0.035em]",
            titleSize
          )}
        >
          {title}
        </h1>

        <div className="mt-12 grid gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <div className={hasIndex ? "lg:col-span-6" : "lg:col-span-7"}>
            <p className="max-w-[38rem] text-pretty text-lg leading-[1.7] text-ink-muted">{description}</p>
            {(primary || secondary) && (
              <HeroActions primary={primary} secondary={secondary} onOpenInquiry={() => setIsInquiryOpen(true)} />
            )}
          </div>

          {hasIndex && index && (
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-muted">Capabilities</p>
              <ServiceIndex items={index} />
            </div>
          )}
        </div>

        {hasFacts && (
          <dl
            className={cn(
              "grid grid-cols-2 gap-x-8 gap-y-10 border-t border-grey-200 pt-10 sm:grid-cols-4",
              fillViewport ? "mt-auto" : "mt-16"
            )}
          >
            {facts!.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">{fact.label}</dt>
                <dd className="mt-3 font-display text-xl font-medium leading-tight sm:text-2xl">{fact.value}</dd>
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

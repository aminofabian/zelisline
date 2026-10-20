"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import Action from "@/components/system/Action";
import Container from "@/components/system/Container";
import { site } from "@/data/site";

const COPIED_RESET_MS = 2000;
const PHONE_E164 = site.phone.href.replace("tel:", "");

export default function CtaBand() {
  const [isCopied, setIsCopied] = useState(false);

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(PHONE_E164);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), COPIED_RESET_MS);
    } catch {
      setIsCopied(false);
    }
  };

  return (
    <section className="bg-ink py-24 text-paper sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-brass">
              <span aria-hidden className="h-px w-8 bg-brass" />
              When you are ready
            </p>
            <h2 className="mt-6 max-w-[12ch] font-display text-[2.8rem] font-medium leading-[1.05] tracking-[-0.03em] sm:text-6xl">
              Tell us what you would like to build
            </h2>
            <p className="mt-6 max-w-[36ch] text-pretty text-lg leading-[1.7] text-paper-dim">
              An idea, a problem, or a rough sketch is enough. We will help you shape it.
            </p>
          </div>

          <div className="flex flex-col items-start gap-6 lg:col-span-4 lg:col-start-9">
            <Action href="/contact" variant="inverse" arrow>
              Begin a project
            </Action>
            <div className="flex items-center gap-4">
              <a href={site.phone.href} className="font-display text-2xl font-medium tabular-nums">
                {site.phone.display}
              </a>
              <button
                type="button"
                onClick={copyNumber}
                aria-label={isCopied ? "Phone number copied" : "Copy phone number"}
                className="text-paper-dim transition-colors duration-200 hover:text-paper"
              >
                {isCopied ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

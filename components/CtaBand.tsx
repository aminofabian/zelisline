"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import Action from "@/components/system/Action";
import Container from "@/components/system/Container";
import Eyebrow from "@/components/system/Eyebrow";
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
    <section className="border-t-2 border-ink py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow>Ready when you are</Eyebrow>
            <h2 className="display-wide mt-6 font-display text-[2.4rem] font-bold uppercase leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-[4.2rem]">
              Let&apos;s build something worth talking about
            </h2>
            <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-ink-muted">
              Bring us the idea, the problem or the rough sketch. We&apos;ll help you shape it into something your
              customers remember.
            </p>
          </div>

          <div className="flex flex-col gap-px border border-ink bg-ink lg:col-span-5 lg:self-end">
            <div className="bg-paper p-6">
              <Action href="/contact" arrow className="w-full">
                Start a project
              </Action>
            </div>
            <div className="flex items-stretch bg-paper">
              <a
                href={site.phone.href}
                className="flex flex-1 flex-col justify-center px-6 py-5 transition-colors hover:bg-grey-50"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">Call us</span>
                <span className="display-wide mt-1 font-display text-xl font-bold tabular-nums">{site.phone.display}</span>
              </a>
              <button
                type="button"
                onClick={copyNumber}
                aria-label={isCopied ? "Phone number copied" : "Copy phone number"}
                className="flex w-16 items-center justify-center border-l border-ink transition-colors hover:bg-ink hover:text-paper"
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

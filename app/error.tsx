"use client";

import { useEffect } from "react";
import Action from "@/components/system/Action";
import Container from "@/components/system/Container";
import Eyebrow from "@/components/system/Eyebrow";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center border-b border-ink py-20">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <Eyebrow>Something broke</Eyebrow>
          <h1 className="display-wide mt-6 font-display text-[3.2rem] font-bold uppercase leading-[0.95] tracking-[-0.03em] sm:text-7xl">
            We hit a snag
          </h1>
        </div>
        <div className="space-y-6 lg:col-span-4">
          <p className="text-lg leading-relaxed text-ink-muted">
            Something went wrong while loading this page. Try again, or get in touch and we&apos;ll sort it out.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Action type="button" onClick={reset} arrow>
              Try again
            </Action>
            <Action href="/contact" variant="outline">
              Contact us
            </Action>
          </div>
        </div>
      </Container>
    </section>
  );
}

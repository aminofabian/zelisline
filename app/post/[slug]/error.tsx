"use client";

import Container from "@/components/system/Container";
import Action from "@/components/system/Action";

export default function PostError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <Container className="max-w-4xl py-20 sm:py-28">
      <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-ink-muted">Error</p>
      <h1 className="display-wide mt-6 font-display text-4xl font-bold uppercase leading-[1.02] tracking-[-0.03em] sm:text-5xl">
        We couldn&apos;t load this article
      </h1>
      <p className="mt-5 max-w-xl text-pretty leading-relaxed text-ink-muted">
        Something went wrong on our end. Try again, or head back to the journal.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Action onClick={reset} arrow>
          Try again
        </Action>
        <Action href="/blog" variant="outline">
          Back to journal
        </Action>
      </div>
    </Container>
  );
}

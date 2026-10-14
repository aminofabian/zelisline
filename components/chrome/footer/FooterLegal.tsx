"use client";

import { ArrowUp } from "lucide-react";
import { site } from "@/data/site";

export default function FooterLegal() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="flex flex-col gap-4 border-t border-ink py-6 font-mono text-[11px] uppercase tracking-[0.1em] sm:flex-row sm:items-center sm:justify-between">
      <p className="text-ink-muted">
        © {currentYear} {site.name} · {site.studio}
      </p>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-ink-muted">
        <a href={`mailto:${site.email}`} className="underline-offset-4 hover:text-ink hover:underline">
          {site.email}
        </a>
        <button
          type="button"
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 text-ink underline-offset-4 hover:underline"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5 transition-transform duration-150 group-hover:-translate-y-0.5" aria-hidden />
        </button>
      </div>
    </div>
  );
}

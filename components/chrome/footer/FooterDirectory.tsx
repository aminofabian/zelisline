import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { FooterColumn } from "@/data/navigation";
import { formatIndex } from "@/lib/format";

interface FooterDirectoryProps {
  columns: FooterColumn[];
}

export default function FooterDirectory({ columns }: FooterDirectoryProps) {
  return (
    <nav aria-label="Footer" className="grid gap-px border border-ink bg-ink sm:grid-cols-3 lg:col-span-7">
      {columns.map((column, index) => (
        <div key={column.title} className="flex flex-col bg-paper p-6 sm:p-7">
          <span aria-hidden className="text-outline-ink display-wide font-display text-6xl font-bold leading-none">
            {formatIndex(index + 1)}
          </span>
          <h3 className="mt-8 font-mono text-[12px] uppercase tracking-[0.12em] text-ink">{column.title}</h3>
          <ul className="mt-4 border-t border-ink">
            {column.links.map((link) => (
              <li key={link.label} className="border-b border-grey-200">
                <Link
                  href={link.href}
                  className="group flex items-center justify-between gap-3 py-3 text-[15px] text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                  <ArrowUpRight
                    className="h-3.5 w-3.5 shrink-0 text-ink-muted opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-hover:text-ink"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

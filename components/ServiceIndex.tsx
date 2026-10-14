import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CapabilityLink } from "@/data/capabilities";

interface ServiceIndexProps {
  items: CapabilityLink[];
}

export default function ServiceIndex({ items }: ServiceIndexProps) {
  return (
    <ul className="border-t-2 border-ink">
      {items.map((item) => (
        <li key={item.n}>
          <Link
            href={item.href}
            className="group flex items-center gap-5 border-b border-ink/20 py-5 transition-colors duration-150"
          >
            <span className="font-mono text-[12px] text-ink-muted">{item.n}</span>
            <span className="display-wide flex-1 font-display text-xl font-bold leading-tight underline-offset-8 group-hover:underline sm:text-2xl">
              {item.label}
            </span>
            <ArrowUpRight
              className="h-5 w-5 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

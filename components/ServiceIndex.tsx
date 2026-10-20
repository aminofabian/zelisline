import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CapabilityLink } from "@/data/capabilities";

interface ServiceIndexProps {
  items: CapabilityLink[];
}

export default function ServiceIndex({ items }: ServiceIndexProps) {
  return (
    <ul className="mt-6 border-t border-grey-200">
      {items.map((item) => (
        <li key={item.n}>
          <Link
            href={item.href}
            className="group flex items-center gap-5 border-b border-grey-200 py-4 transition-colors duration-200 hover:text-brass"
          >
            <span className="text-[11px] font-medium tracking-[0.16em] text-ink-muted">{item.n}</span>
            <span className="flex-1 font-display text-xl font-medium leading-tight sm:text-2xl">{item.label}</span>
            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-ink-muted transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brass"
              aria-hidden
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

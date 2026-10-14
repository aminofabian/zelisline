import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import Container from "@/components/system/Container";
import { site } from "@/data/site";

export default function PromoBar() {
  return (
    <div className="border-b border-ink bg-grey-50 text-ink">
      <Container className="flex h-10 items-center justify-between gap-6 font-mono text-[11px] uppercase tracking-[0.1em]">
        <a href={site.phone.href} className="group flex items-center gap-2 transition-colors hover:text-ink-muted">
          <Phone className="h-3.5 w-3.5" aria-hidden />
          <span className="hidden sm:inline">Talk to a strategist</span>
          <span className="tabular-nums">{site.phone.display}</span>
        </a>

        <Link href={site.offer.href} className="group flex items-center gap-2 transition-colors hover:text-ink-muted">
          <span className="hidden sm:inline">
            {site.offer.label} — {site.offer.text} <strong className="font-semibold">{site.offer.price}</strong>
          </span>
          <span className="sm:hidden">
            Sites from <strong className="font-semibold">{site.offer.shortPrice}</strong>
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </Link>
      </Container>
    </div>
  );
}

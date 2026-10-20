import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import Container from "@/components/system/Container";
import { site } from "@/data/site";

export default function PromoBar() {
  return (
    <div className="border-b border-grey-200 bg-paper text-ink">
      <Container className="flex h-9 items-center justify-between gap-6 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted">
        <a href={site.phone.href} className="group flex items-center gap-2 transition-colors duration-200 hover:text-ink">
          <Phone className="h-3 w-3" aria-hidden />
          <span className="hidden sm:inline">Studio line</span>
          <span className="tabular-nums text-ink">{site.phone.display}</span>
        </a>

        <Link href={site.offer.href} className="group flex items-center gap-2 transition-colors duration-200 hover:text-ink">
          <span className="hidden sm:inline">
            {site.offer.text} <span className="text-brass">{site.offer.price}</span>
          </span>
          <span className="sm:hidden">
            Sites from <span className="text-brass">{site.offer.shortPrice}</span>
          </span>
          <ArrowUpRight className="h-3 w-3 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </Link>
      </Container>
    </div>
  );
}

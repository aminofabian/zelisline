import Action from "@/components/system/Action";
import { formatIndex, splitPackageName } from "@/lib/format";
import { formatKesPrice, formatRawPrice } from "@/lib/pricing";
import { cn } from "@/lib/utils";
import type { PricingPackage } from "@/types/content";

export type PriceCurrency = "kes" | "usd";

interface PricingCardProps {
  pkg: PricingPackage;
  position: number;
  currency: PriceCurrency;
  featured: boolean;
}

const MONTHLY_MARKER = "monthly";
const DEFAULT_HREF = "/contact";
const CARD_CTA_LABEL = "Get started";

const PRICE_FORMATTERS: Record<PriceCurrency, (value: number) => string> = {
  kes: formatKesPrice,
  usd: formatRawPrice,
};

export default function PricingCard({ pkg, position, currency, featured }: PricingCardProps) {
  const { title, tag } = splitPackageName(pkg.name);
  const isMonthly = pkg.name.toLowerCase().includes(MONTHLY_MARKER);
  const priceLabel = PRICE_FORMATTERS[currency](pkg.startingPrice);
  const muted = featured ? "text-paper-dim" : "text-ink-muted";

  return (
    <article className={cn("flex h-full flex-col p-6 sm:p-8", featured ? "bg-ink text-paper" : "bg-paper text-ink")}>
      <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.12em]">
        <span className={muted}>{formatIndex(position)}</span>
        {featured && <span className="border border-paper px-2.5 py-1">Most popular</span>}
      </div>

      <h3 className="display-wide mt-8 font-display text-2xl font-bold leading-tight">{title}</h3>
      {tag && <p className={cn("mt-2 font-mono text-[11px] uppercase tracking-[0.12em]", muted)}>{tag}</p>}
      <p className={cn("mt-4 text-sm leading-relaxed", muted)}>{pkg.description}</p>

      <div className={cn("mt-8 flex items-baseline gap-3 border-y py-5", featured ? "border-grey-300" : "border-ink")}>
        <span className={cn("font-mono text-[11px] uppercase tracking-[0.12em]", muted)}>From</span>
        <span className="display-wide font-display text-3xl font-bold sm:text-4xl">{priceLabel}</span>
        {isMonthly && <span className={cn("text-sm", muted)}>/mo</span>}
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed">
            <span aria-hidden className={cn("mt-2 h-1.5 w-1.5 shrink-0", featured ? "bg-paper" : "bg-ink")} />
            <span className={featured ? "text-paper" : "text-ink-muted"}>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Action
          href={pkg.href ?? DEFAULT_HREF}
          variant={featured ? "inverse" : "outline"}
          arrow
          className="w-full"
        >
          {CARD_CTA_LABEL}
        </Action>
      </div>
    </article>
  );
}

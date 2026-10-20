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
const CARD_CTA_LABEL = "Enquire";

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
    <article
      className={cn(
        "flex h-full flex-col p-7 sm:p-9",
        featured ? "bg-ink text-paper" : "border border-grey-200 bg-paper text-ink"
      )}
    >
      <div className="flex items-center justify-between gap-4 text-[11px] font-medium uppercase tracking-[0.16em]">
        <span className={muted}>{formatIndex(position)}</span>
        {featured && <span className="text-brass">Featured</span>}
      </div>

      <h3 className="mt-10 font-display text-[1.7rem] font-medium leading-tight">{title}</h3>
      {tag && <p className={cn("mt-2 text-[11px] font-medium uppercase tracking-[0.16em]", muted)}>{tag}</p>}
      <p className={cn("mt-4 text-sm leading-[1.7]", muted)}>{pkg.description}</p>

      <div className={cn("mt-8 flex items-baseline gap-3 border-y py-6", featured ? "border-white/15" : "border-grey-200")}>
        <span className={cn("text-[11px] font-medium uppercase tracking-[0.16em]", muted)}>From</span>
        <span className="font-display text-3xl font-medium sm:text-4xl">{priceLabel}</span>
        {isMonthly && <span className={cn("text-sm", muted)}>/mo</span>}
      </div>

      <ul className="mt-7 flex-1 space-y-3">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm leading-[1.65]">
            <span aria-hidden className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-brass" />
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

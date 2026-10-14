import PricingCard, { type PriceCurrency } from "@/components/pricing/PricingCard";
import type { PricingPackage } from "@/types/content";

interface PricingGridProps {
  packages: PricingPackage[];
  currency: PriceCurrency;
  featuredName?: string;
}

export default function PricingGrid({ packages, currency, featuredName }: PricingGridProps) {
  const count = packages.length;
  // Choose column counts that divide evenly so no empty cell exposes the ink grid behind it.
  const mdCols = count % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-1";
  const lgCols = count % 3 === 0 ? "lg:grid-cols-3" : count % 2 === 0 ? "lg:grid-cols-2" : "lg:grid-cols-1";

  return (
    <div className={`grid grid-cols-1 gap-px border border-ink bg-ink ${mdCols} ${lgCols}`}>
      {packages.map((pkg, index) => (
        <PricingCard
          key={`${index}-${pkg.name}`}
          pkg={pkg}
          position={index + 1}
          currency={currency}
          featured={pkg.name === featuredName}
        />
      ))}
    </div>
  );
}

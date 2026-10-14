import Link from "next/link";
import Action from "@/components/system/Action";
import Container from "@/components/system/Container";
import SectionHeader from "@/components/system/SectionHeader";
import MomentCalculator from "@/components/pricing/MomentCalculator";
import { site } from "@/data/site";
import { launchProducts, type LaunchProduct } from "@/data/products";
import { formatIndex } from "@/lib/format";

const PHONE_LABEL = `Call ${site.phone.display}`;

function LaunchRow({ product, position }: { product: LaunchProduct; position: number }) {
  const isFlipped = position % 2 === 1;
  const ctaLabel = product.cta ?? `Get ${product.name}`;

  return (
    <article className="grid gap-10 border-t-2 border-ink py-14 sm:py-20 lg:grid-cols-12 lg:gap-14">
      <div className={`lg:col-span-7 ${isFlipped ? "lg:order-2" : ""}`}>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="font-mono text-[12px] text-ink-muted">{formatIndex(product.id)}</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">{product.kicker}</span>
          {product.tag && (
            <span className="border border-ink px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em]">
              {product.tag}
            </span>
          )}
        </div>

        <h3 className="display-wide mt-5 font-display text-[2.4rem] font-bold uppercase leading-[0.95] tracking-[-0.03em] sm:text-5xl lg:text-[4rem]">
          {product.name}
        </h3>
        <p className="display-wide mt-4 font-display text-xl font-bold text-ink-muted sm:text-2xl">{product.tagline}</p>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted">{product.pitch}</p>

        <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-ink" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className={`lg:col-span-5 ${isFlipped ? "lg:order-1" : ""}`}>
        <div className="flex h-full flex-col justify-between border-2 border-ink bg-ink p-6 text-paper sm:p-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-dim">{product.price.label}</p>
            <p className="display-wide mt-4 font-display text-[2.4rem] font-bold leading-[0.95] tracking-[-0.03em] sm:text-[3rem]">
              {product.price.value}
            </p>
            {product.price.note && (
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper-dim">{product.price.note}</p>
            )}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Action href="/contact" variant="inverse" arrow className="w-full">
              {ctaLabel}
            </Action>
            <a
              href={site.phone.href}
              className="inline-flex w-full items-center justify-center border border-paper px-6 py-3 font-mono text-[13px] font-medium uppercase tracking-[0.1em] text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              {PHONE_LABEL}
            </a>
            {product.href && product.domain && (
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center justify-center font-mono text-[11px] uppercase tracking-[0.14em] text-paper-dim underline-offset-4 hover:text-paper hover:underline"
              >
                Visit {product.domain}
              </a>
            )}
            {product.pricingHref && (
              <Link
                href={product.pricingHref}
                className="mt-1 inline-flex items-center justify-center font-mono text-[11px] uppercase tracking-[0.14em] text-paper-dim underline-offset-4 hover:text-paper hover:underline"
              >
                See the price list
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProductLaunches() {
  return (
    <section id="products" className="scroll-mt-20 border-b-2 border-ink py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="New from the studio"
          title="Own the software your business runs on"
          description="Launches from Zelisline — a shop, a school, a payments rail and a studio for one-off moments. Honest one-time pricing, and we set it up with you."
        />

        <div className="mt-4">
          {launchProducts.map((product, index) => (
            <LaunchRow key={product.id} product={product} position={index} />
          ))}
        </div>

        {/* Price calculator for the Pop-Up Software launch above. */}
        <div className="border-t-2 border-ink pt-14 sm:pt-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">Pop-Up Software · Price it</span>
              <h3 className="display-wide mt-3 font-display text-3xl font-bold uppercase leading-[0.98] tracking-[-0.03em] sm:text-4xl">
                Build your moment app
              </h3>
            </div>
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-ink-muted">
              Tick the pieces and watch the price update. One-time, no subscription — the app expires by design.
            </p>
          </div>
          <MomentCalculator />
        </div>
      </Container>
    </section>
  );
}

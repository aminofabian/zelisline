import Link from "next/link";
import Action from "@/components/system/Action";
import Container from "@/components/system/Container";
import SectionHeader from "@/components/system/SectionHeader";
import MomentCalculator from "@/components/pricing/MomentCalculator";
import { site } from "@/data/site";
import { launchProducts, type LaunchProduct } from "@/data/products";

const PHONE_LABEL = `Call ${site.phone.display}`;

function LaunchRow({ product, position }: { product: LaunchProduct; position: number }) {
  const isFlipped = position % 2 === 1;
  const ctaLabel = product.cta ?? `Enquire about ${product.name}`;

  return (
    <article className="grid gap-12 border-t border-grey-200 py-16 sm:py-24 lg:grid-cols-12 lg:gap-16">
      <div className={`lg:col-span-7 ${isFlipped ? "lg:order-2" : ""}`}>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-brass">{product.kicker}</span>
          {product.tag && (
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted">{product.tag}</span>
          )}
        </div>

        <h3 className="mt-5 font-display text-[2.6rem] font-medium leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[3.75rem]">
          {product.name}
        </h3>
        <p className="mt-4 font-display text-xl italic text-ink-muted sm:text-2xl">{product.tagline}</p>
        <p className="mt-6 max-w-[42rem] text-pretty text-lg leading-[1.7] text-ink-muted">{product.pitch}</p>

        <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm leading-[1.6]">
              <span aria-hidden className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-brass" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className={`lg:col-span-5 ${isFlipped ? "lg:order-1" : ""}`}>
        <div className="flex h-full flex-col justify-between bg-ink p-8 text-paper sm:p-10">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brass">{product.price.label}</p>
            <p className="mt-5 font-display text-[2.6rem] font-medium leading-[1.02] tracking-[-0.03em] sm:text-[3.25rem]">
              {product.price.value}
            </p>
            {product.price.note && (
              <p className="mt-5 max-w-sm text-sm leading-[1.7] text-paper-dim">{product.price.note}</p>
            )}
          </div>

          <div className="mt-12 flex flex-col items-start gap-4">
            <Action href="/contact" variant="inverse" arrow>
              {ctaLabel}
            </Action>
            <a
              href={site.phone.href}
              className="text-[12px] font-medium uppercase tracking-[0.16em] text-paper-dim underline decoration-grey-300 underline-offset-[6px] transition-colors duration-200 hover:text-paper hover:decoration-brass"
            >
              {PHONE_LABEL}
            </a>
            {product.href && product.domain && (
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-medium uppercase tracking-[0.16em] text-paper-dim underline-offset-[6px] transition-colors duration-200 hover:text-paper hover:underline"
              >
                Visit {product.domain}
              </a>
            )}
            {product.pricingHref && (
              <Link
                href={product.pricingHref}
                className="text-[12px] font-medium uppercase tracking-[0.16em] text-paper-dim underline-offset-[6px] transition-colors duration-200 hover:text-paper hover:underline"
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
    <section id="products" className="scroll-mt-28 py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="From the studio"
          title="Software your business can own"
          description="A shop, a school, a payments rail, and a studio for one-off moments. One-time pricing. We set it up with you."
        />

        <div className="mt-8">
          {launchProducts.map((product, index) => (
            <LaunchRow key={product.id} product={product} position={index} />
          ))}
        </div>

        <div className="border-t border-grey-200 pt-16 sm:pt-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-brass">Pop-up software</span>
              <h3 className="mt-4 font-display text-3xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-4xl">
                Compose a moment
              </h3>
            </div>
            <p className="max-w-[34ch] text-pretty text-sm leading-[1.7] text-ink-muted">
              Choose the pieces. The price updates as you go. One payment, and the app retires when the moment ends.
            </p>
          </div>
          <MomentCalculator />
        </div>
      </Container>
    </section>
  );
}

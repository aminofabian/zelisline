import Container from "@/components/system/Container";
import SectionHeader from "@/components/system/SectionHeader";
import PricingGrid from "@/components/pricing/PricingGrid";
import { packages as homePackages } from "@/data/pricing/HomePage";
import type { PricingPackage } from "@/types/content";

const FEATURED_PACKAGE = "Enterprise Package (custom)";
const CONTACT_HREF = "/contact";

const PACKAGE_LINKS: Record<string, string> = {
  "Personal Website Package (templated)": "/personal-website-package",
  "Small Business Package (templated)": "/small-business-package",
  [FEATURED_PACKAGE]: CONTACT_HREF,
};

const withLink = (pkg: PricingPackage): PricingPackage => ({
  ...pkg,
  href: PACKAGE_LINKS[pkg.name] ?? CONTACT_HREF,
});

export default function Pricing() {
  const packages = homePackages.map(withLink);

  return (
    <section id="pricing" className="scroll-mt-20 border-y border-ink bg-grey-50 py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Pricing"
          title="Straightforward packages, no guesswork"
          description="Starting points to help you plan. Every build is scoped individually — tell us what you need and we'll put together an exact quote."
        />
        <div className="mt-14">
          <PricingGrid packages={packages} currency="kes" featuredName={FEATURED_PACKAGE} />
        </div>
      </Container>
    </section>
  );
}

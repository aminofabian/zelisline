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
    <section id="pricing" className="scroll-mt-28 bg-grey-50 py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="Pricing"
          title="Clear starting points"
          description="Every build is scoped on its own. These figures help you plan. Tell us what you need and we will prepare an exact quote."
        />
        <div className="mt-16">
          <PricingGrid packages={packages} currency="kes" featuredName={FEATURED_PACKAGE} />
        </div>
      </Container>
    </section>
  );
}

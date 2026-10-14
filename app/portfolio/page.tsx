import Capabilities from "@/components/Capabilities";
import ContactPage from "@/components/ContactPage";
import PageHero from "@/components/PageHero";
import Portfolio from "@/components/Portfolio";
import Container from "@/components/system/Container";
import SectionHeader from "@/components/system/SectionHeader";
import { formatIndex } from "@/lib/format";

interface WebsiteEntry {
  name: string;
  url: string;
}

const WEBSITES: WebsiteEntry[] = [
  { name: "kiosk.ke", url: "https://kiosk.ke" },
  { name: "squl.co.ke", url: "https://squl.co.ke" },
  { name: "kioskpay.co.ke", url: "https://kioskpay.co.ke" },
  { name: "Jobs Lah", url: "https://www.jobslah.com/" },
  { name: "Hawaii Family Dental", url: "https://www.hawaiifamilydental.com" },
  { name: "Fit Fusion Fitness", url: "https://www.fitfusionfitness.com" },
  { name: "Wanderlust Travel Co", url: "https://www.wanderlusttravelco.com/" },
  { name: "Rustic Retreats", url: "https://www.rustic-retreats.uk" },
];

const PORTFOLIO_FACTS = [
  { label: "Websites", value: formatIndex(WEBSITES.length) },
  { label: "Client stories", value: "05" },
  { label: "Regions", value: "Kenya · UK · US" },
  { label: "Focus", value: "Web & product" },
];

const prettyUrl = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="A few samples of our work"
        description="Websites, storefronts and product platforms we've designed and shipped — for founders and teams across Kenya, the UK and the US."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "See the sites", href: "#websites" }}
        facts={PORTFOLIO_FACTS}
      />

      <section id="websites" className="scroll-mt-20 border-b border-ink py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Live work"
              title="Websites we've built"
              description="A running list of live sites and platforms from the studio — our own products included."
            />
          </div>
          <ol className="border-t-2 border-ink lg:col-span-7 lg:mt-16">
            {WEBSITES.map((site, index) => (
              <li key={site.name} className="border-b border-ink">
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-5 transition-colors hover:bg-ink hover:text-paper sm:px-4"
                >
                  <span className="font-mono text-[12px] text-ink-muted group-hover:text-paper-dim">{formatIndex(index + 1)}</span>
                  <span className="display-wide font-display text-lg font-bold sm:text-xl">{site.name}</span>
                  <span className="hidden text-sm text-ink-muted group-hover:text-paper-dim sm:block">{prettyUrl(site.url)}</span>
                </a>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="voices" className="scroll-mt-20 py-20 sm:py-28">
        <Container>
          <SectionHeader eyebrow="Client stories" title="Straight from the people we build for" />
          <div className="mt-14">
            <Portfolio />
          </div>
        </Container>
      </section>

      <Capabilities />
      <ContactPage />
    </>
  );
}

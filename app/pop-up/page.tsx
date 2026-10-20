import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactPage from "@/components/ContactPage";
import CtaBand from "@/components/CtaBand";
import Container from "@/components/system/Container";
import SectionHeader from "@/components/system/SectionHeader";
import MomentCalculator from "@/components/pricing/MomentCalculator";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Moment app pricing",
  description:
    "Build your Pop-Up Software app and price it live — disposable, event-shaped apps built in 48 hours, with M-Pesa and a closing report built in.",
};

const HERO_FACTS = [
  { label: "Build time", value: "48 hours" },
  { label: "Billing", value: "One-time" },
  { label: "Payments", value: "M-Pesa" },
  { label: "Lifespan", value: "Expires by design" },
];

const INCLUDED = [
  {
    title: "Shareable link",
    description: "One URL your whole community can open — no app store, no friction for guests.",
  },
  {
    title: "Live dashboard",
    description: "Contributions, pledges and progress update in real time as the moment unfolds.",
  },
  {
    title: "M-Pesa built in",
    description: "STK-push collection and instant payment confirmation, straight to your account.",
  },
  {
    title: "Transparent ledger",
    description: "A public, auditable record of who gave what — the trust people actually pay for.",
  },
  {
    title: "Final report & archive",
    description: "When the event ends, the app generates the closing report and archives everything.",
  },
  {
    title: "It retires itself",
    description: "Auto shut-down by design — no maintenance, no subscription, no loose ends.",
  },
];

export default function PopUpPricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pop-Up Software"
        title="Moment apps, priced clearly"
        description="Disposable, event-shaped apps built in 48 hours. Tick the pieces you need or start from a bundle — the price updates as you go. One-time, and the app retires itself when the moment ends."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "Call the studio", href: site.phone.href }}
        facts={HERO_FACTS}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Price calculator"
            title="Build your moment app"
            description="Pick the components and watch the estimate update. Every app is assembled from these pieces — nothing more, nothing hidden."
          />
          <div className="mt-12">
            <MomentCalculator />
          </div>
        </Container>
      </section>

      <section className="border-y border-ink bg-grey-50 py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Included in every app"
            title="Built to close with trust"
            description="The parts that make a moment app different from a website that just sits there."
          />
          <ul className="mt-12 grid gap-px border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((item) => (
              <li key={item.title} className="bg-paper p-6">
                <h3 className="display-wide font-display text-lg font-bold leading-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ContactPage />
      <CtaBand />
    </>
  );
}

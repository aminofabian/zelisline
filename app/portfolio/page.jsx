"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ClientSideNav from "@/components/ClientSideNav";
import FooterRev from "@/components/FooterRev";
import Portfolio from "@/components/Portfolio";
import ContactPage from "@/components/ContactPage";
import Capabilities from "@/components/Capabilities";
import CtaBand from "@/components/CtaBand";

const websites = [
  { name: "kiosk.ke", url: "https://kiosk.ke" },
  { name: "squl.co.ke", url: "https://squl.co.ke" },
  { name: "kioskpay.co.ke", url: "https://kioskpay.co.ke" },
  { name: "Jobs Lah", url: "https://www.jobslah.com/" },
  { name: "Hawai Family Dental", url: "https://www.hawaiifamilydental.com" },
  { name: "Fit Fusion Fitness", url: "https://www.fitfusionfitness.com" },
  { name: "Wanderlust Travel Co", url: "https://www.wanderlusttravelco.com/" },
  { name: "Rustic Retreats", url: "https://www.rustic-retreats.uk" },
];

const heroFacts = [
  { k: "Websites", v: "08" },
  { k: "Client stories", v: "05" },
  { k: "Regions", v: "Kenya · UK · US" },
  { k: "Focus", v: "Web & product" },
];

const prettyUrl = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Squared surfaces, matching the homepage. */}
      <div className="edges-square">
        <div className="flex items-start">
          {/* Desktop rail — small screens use the layout-level MobileNav */}
          <div className="hidden shrink-0 pl-4 pr-2 pt-6 sm:pl-6 md:block md:self-stretch lg:pl-10">
            <ClientSideNav />
          </div>

          <main className="min-w-0 flex-1">
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-sand-200 bg-sand-50">
              <div className="pointer-events-none absolute inset-0 grid-motif mask-fade-b opacity-70" aria-hidden />
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] [background:radial-gradient(circle_at_center,rgba(254,215,170,0.5),transparent_70%)]"
                aria-hidden
              />

              <div className="relative mx-auto max-w-[1400px] px-5 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-20 lg:px-10">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-orange-500" />
                  <span className="eyebrow">Portfolio</span>
                </div>

                <h1 className="mt-5 max-w-[18ch] font-display text-[2.15rem] font-medium leading-[1.06] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[3.6rem]">
                  A few samples of our work
                </h1>

                <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
                  Websites, storefronts and product platforms we&apos;ve designed and shipped — for
                  founders and teams across Kenya, the UK and the US.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 bg-orange-600 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-orange-700"
                  >
                    Start a project
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="#websites"
                    className="group inline-flex items-center justify-center gap-2 border border-sand-300 bg-white/60 px-6 py-3.5 text-base font-medium text-ink transition-colors hover:border-ink/30 hover:bg-white"
                  >
                    See the sites
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-sand-200 pt-8 sm:grid-cols-4">
                  {heroFacts.map((fact) => (
                    <div key={fact.k}>
                      <dt className="text-xs uppercase tracking-[0.14em] text-ink-muted">{fact.k}</dt>
                      <dd className="mt-1.5 font-display text-lg text-ink">{fact.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>

            {/* Websites index */}
            <section id="websites" className="scroll-mt-24 border-b border-sand-200 bg-background">
              <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-6 sm:py-16 lg:px-10">
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
                  <div className="lg:col-span-4">
                    <span className="eyebrow">Websites we&apos;ve built</span>
                    <p className="mt-4 max-w-sm text-pretty leading-relaxed text-ink-soft">
                      A running list of live sites and platforms from the studio — our own products
                      included.
                    </p>
                  </div>

                  <div className="lg:col-span-8">
                    <ul className="border-t border-sand-200">
                      {websites.map((site, i) => (
                        <li key={site.name}>
                          <Link
                            href={site.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-baseline gap-4 border-b border-sand-200 py-3.5 transition-colors hover:border-ink/30"
                          >
                            <span className="font-display text-xs text-ink-muted">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="flex-1 font-display text-base text-ink transition-colors group-hover:text-orange-700 sm:text-lg">
                              {site.name}
                            </span>
                            <span className="hidden text-sm text-ink-muted sm:block">
                              {prettyUrl(site.url)}
                            </span>
                            <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange-600" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section id="voices" className="scroll-mt-24 py-16 sm:py-20">
              <div className="mx-auto mb-10 max-w-[1400px] px-5 sm:px-6 lg:px-10">
                <span className="eyebrow">What clients say</span>
                <h2 className="mt-3 max-w-[22ch] font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                  Straight from the people we build for
                </h2>
              </div>
              <Portfolio />
            </section>

            {/* Capabilities */}
            <Capabilities />

            {/* Contact */}
            <div className="pt-16 sm:pt-20">
              <ContactPage />
            </div>

            {/* Closing CTA */}
            <div className="pb-16 pt-16 sm:pb-20 sm:pt-20">
              <CtaBand />
            </div>
          </main>
        </div>

        <FooterRev />
      </div>
    </div>
  );
}

export default PortfolioPage;

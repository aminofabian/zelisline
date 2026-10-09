"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ClientSideNav from "@/components/ClientSideNav";
import FooterRev from "@/components/FooterRev";
import Portfolio from "@/components/Portfolio";
import ContactPage from "@/components/ContactPage";

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
            {/* Header band */}
            <section className="border-b border-sand-200 bg-sand-50">
              <div className="mx-auto max-w-[1400px] px-5 pb-14 pt-12 sm:px-6 md:pt-16 lg:px-10">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-orange-500" />
                  <span className="eyebrow">Portfolio</span>
                </div>
                <h1 className="mt-5 max-w-[20ch] font-display text-[2.15rem] font-medium leading-[1.06] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[3.6rem]">
                  A few samples of our work
                </h1>
                <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
                  Websites, storefronts and software products we&apos;ve designed, built and
                  shipped — for clients across Kenya, the UK and the US.
                </p>
              </div>
            </section>

            {/* Website index */}
            <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 sm:py-20 lg:px-10">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <span className="eyebrow">Websites we&apos;ve built</span>
                  <p className="mt-4 text-pretty leading-relaxed text-ink-soft">
                    A running list of live sites and platforms from the studio — our own
                    products included.
                  </p>
                </div>

                <ul className="lg:col-span-8">
                  {websites.map((site, i) => (
                    <li key={site.name}>
                      <Link
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-baseline gap-4 border-t border-sand-200 py-4 transition-colors hover:border-ink/30"
                      >
                        <span className="font-display text-xs text-ink-muted">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 font-display text-lg text-ink transition-colors group-hover:text-orange-700 sm:text-xl">
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
            </section>

            {/* Testimonials */}
            <section className="pb-16 sm:pb-20">
              <div className="mx-auto mb-10 max-w-[1400px] px-5 sm:px-6 lg:px-10">
                <span className="eyebrow">What clients say</span>
                <h2 className="mt-3 max-w-[22ch] font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                  Straight from the people we build for
                </h2>
              </div>
              <Portfolio />
            </section>

            {/* Contact */}
            <ContactPage />
          </main>
        </div>

        <FooterRev />
      </div>
    </div>
  );
}

export default PortfolioPage;

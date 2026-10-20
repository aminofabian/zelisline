"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "@/components/system/Container";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";

const CLOCK_REFRESH_MS = 30000;

const LINK_CLASSES = "text-[15px] leading-[1.7] text-ink-muted transition-colors duration-200 hover:text-ink";

function useNairobiClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const read = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Nairobi",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());

    setTime(read());
    const timer = setInterval(() => setTime(read()), CLOCK_REFRESH_MS);
    return () => clearInterval(timer);
  }, []);

  return time;
}

export default function SiteFooter() {
  const clock = useNairobiClock();
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-paper text-ink">
      <Container className="pb-10 pt-24 sm:pb-12 sm:pt-36">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="font-display text-[3.25rem] font-medium leading-[0.95] tracking-[-0.035em] sm:text-[4.25rem]">
              {site.name}
            </p>
            <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-muted">
              Nairobi
              <span className="mx-2.5 text-brass" aria-hidden>
                ·
              </span>
              <span className="tabular-nums">{clock ?? "—"}</span>
            </p>

            <div className="mt-12 flex flex-col gap-2">
              <a href={`mailto:${site.email}`} className="w-fit font-display text-xl tracking-[-0.02em] transition-colors duration-200 hover:text-brass-deep">
                {site.email}
              </a>
              <a
                href={site.phone.href}
                className="w-fit font-display text-xl tabular-nums tracking-[-0.02em] transition-colors duration-200 hover:text-brass-deep"
              >
                {site.phone.display}
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="grid gap-12 sm:grid-cols-3 lg:col-span-6 lg:col-start-7 lg:pt-3">
            {navigation.footer.map((column) => (
              <div key={column.title}>
                <h2 className="text-[11px] font-medium uppercase tracking-[0.22em] text-brass">{column.title}</h2>
                <ul className="mt-5 space-y-1.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={LINK_CLASSES}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-grey-200 pt-6 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted sm:mt-32 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
            <span className="mx-2.5 text-brass" aria-hidden>
              ·
            </span>
            {site.coordinates}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-ink"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
          <button type="button" onClick={scrollToTop} className="w-fit text-left transition-colors duration-200 hover:text-ink">
            Back to top
          </button>
        </div>
      </Container>
    </footer>
  );
}

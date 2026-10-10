"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import Logo from "@/components/Logo";
import { site } from "@/data/site";

const COPIED_RESET_MS = 2000;
const CLOCK_REFRESH_MS = 30000;

type CopyKey = "email" | "phone";

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

const ROW_LINK_CLASSES = "flex flex-1 flex-col justify-center px-5 py-4 transition-colors hover:bg-ink hover:text-paper";
const ROW_BUTTON_CLASSES =
  "flex w-14 items-center justify-center border-l border-ink transition-colors hover:bg-ink hover:text-paper";
const ROW_LABEL_CLASSES = "font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted";

export default function FooterContact() {
  const [copied, setCopied] = useState<CopyKey | null>(null);
  const clock = useNairobiClock();

  const copy = async (value: string, key: CopyKey) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(null), COPIED_RESET_MS);
    } catch {
      setCopied(null);
    }
  };

  return (
    <div className="flex flex-col gap-10 lg:col-span-5">
      <div>
        <Logo className="h-9" />
        <p className="mt-5 max-w-sm text-pretty leading-relaxed text-ink-muted">
          A Nairobi software studio designing, building and growing digital products for businesses across East Africa.
        </p>
      </div>

      <div className="border border-ink">
        <p className="border-b border-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
          Start a conversation
        </p>

        <div className="flex items-stretch border-b border-ink">
          <a href={`mailto:${site.email}`} className={ROW_LINK_CLASSES}>
            <span className={ROW_LABEL_CLASSES}>Email</span>
            <span className="mt-1 break-words font-display text-lg font-bold leading-tight text-ink">{site.email}</span>
          </a>
          <button
            type="button"
            onClick={() => copy(site.email, "email")}
            aria-label="Copy email address"
            className={ROW_BUTTON_CLASSES}
          >
            {copied === "email" ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
          </button>
        </div>

        <div className="flex items-stretch">
          <a href={site.phone.href} className={ROW_LINK_CLASSES}>
            <span className={ROW_LABEL_CLASSES}>Phone</span>
            <span className="mt-1 font-display text-lg font-bold tabular-nums leading-tight text-ink">
              {site.phone.display}
            </span>
          </a>
          <button
            type="button"
            onClick={() => copy(site.phone.href.replace("tel:", ""), "phone")}
            aria-label="Copy phone number"
            className={ROW_BUTTON_CLASSES}
          >
            {copied === "phone" ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
        <span className="flex items-center gap-2">
          <span aria-hidden className="h-1.5 w-1.5 bg-ink" />
          Nairobi {clock ?? "--:--"}
        </span>
        <a
          href={site.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-4 hover:text-ink hover:underline"
        >
          WhatsApp
        </a>
      </div>

      <ul className="flex gap-px border border-ink bg-ink">
        {site.socials.map((social) => (
          <li key={social.label} className="flex flex-1">
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 flex-1 items-center justify-center bg-paper px-5 font-mono text-[12px] uppercase tracking-[0.1em] transition-colors hover:bg-ink hover:text-paper"
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

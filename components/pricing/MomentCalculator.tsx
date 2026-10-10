"use client";

import { useMemo, useState, type FormEvent } from "react";
import { Check, Minus, Plus } from "lucide-react";
import Action from "@/components/system/Action";
import {
  MOMENT_BUNDLES,
  MOMENT_COMPONENTS,
  MOMENT_PRICING_NOTE,
  formatKes,
  formatMomentPrice,
} from "@/data/momentPricing";

type Counts = Record<string, number>;
type Status = "idle" | "sending" | "sent" | "error";

const emptyCounts = (): Counts => Object.fromEntries(MOMENT_COMPONENTS.map((component) => [component.id, 0]));

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

const EMAIL_INPUT_CLASSES =
  "w-full border border-paper bg-ink px-4 py-3 font-mono text-[13px] text-paper outline-none transition-colors placeholder:text-paper-dim focus:border-paper";

const idsInGroup = (group: string) =>
  MOMENT_COMPONENTS.filter((component) => component.group === group).map((component) => component.id);

export default function MomentCalculator() {
  const [counts, setCounts] = useState<Counts>(emptyCounts);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const setCount = (id: string, value: number) => setCounts((prev) => ({ ...prev, [id]: Math.max(0, value) }));

  const toggle = (id: string) => setCount(id, counts[id] ? 0 : 1);

  const toggleGroup = (id: string, group: string) => {
    const ids = idsInGroup(group);
    setCounts((prev) => {
      const turningOn = !prev[id];
      const next = { ...prev };
      for (const grouped of ids) next[grouped] = 0;
      if (turningOn) next[id] = 1;
      return next;
    });
  };

  const applyBundle = (items: Record<string, number>) => {
    const next = emptyCounts();
    for (const [id, quantity] of Object.entries(items)) next[id] = quantity;
    setCounts(next);
  };

  const lines = useMemo(
    () => MOMENT_COMPONENTS.map((component) => ({ ...component, count: counts[component.id] ?? 0 })).filter((c) => c.count > 0),
    [counts]
  );
  const total = lines.reduce((sum, line) => sum + line.price * line.count, 0);
  const isEmpty = lines.length === 0;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isEmpty || !EMAIL_PATTERN.test(email)) {
      setStatus("error");
      setError("Please enter a valid email.");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/submit-moment-build", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          total,
          items: lines.map((line) => ({ name: line.name, price: line.price, count: line.count })),
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("sent");
      setEmail("");
      setError("");
    } catch (submitError) {
      setStatus("error");
      setError(submitError instanceof Error ? submitError.message : "Something went wrong.");
    }
  };

  return (
    <div className="grid gap-px border border-ink bg-ink lg:grid-cols-12">
      {/* Options */}
      <div className="bg-paper p-6 sm:p-8 lg:col-span-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">Build your app</p>

        <ul className="mt-6">
          {MOMENT_COMPONENTS.map((component) => {
            const count = counts[component.id] ?? 0;
            const active = count > 0;

            if (component.repeatable) {
              return (
                <li key={component.id} className="flex items-start gap-5 border-t border-ink py-5">
                  <div className="flex items-center gap-2" role="group" aria-label={`${component.name} quantity`}>
                    <button
                      type="button"
                      onClick={() => setCount(component.id, count - 1)}
                      disabled={count === 0}
                      aria-label={`Remove one ${component.name}`}
                      className="flex h-8 w-8 items-center justify-center border border-ink transition-colors hover:bg-ink hover:text-paper disabled:opacity-30 disabled:hover:bg-paper disabled:hover:text-ink"
                    >
                      <Minus className="h-4 w-4" aria-hidden />
                    </button>
                    <span className="w-6 text-center font-mono text-sm tabular-nums">{count}</span>
                    <button
                      type="button"
                      onClick={() => setCount(component.id, count + 1)}
                      aria-label={`Add one ${component.name}`}
                      className="flex h-8 w-8 items-center justify-center border border-ink transition-colors hover:bg-ink hover:text-paper"
                    >
                      <Plus className="h-4 w-4" aria-hidden />
                    </button>
                  </div>
                  <div className="flex-1">
                    <span className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <span className="display-wide font-display text-lg font-bold">{component.name}</span>
                      <span className="font-mono text-[12px] tabular-nums text-ink-muted">
                        {formatMomentPrice(component.price)} each
                      </span>
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-muted">{component.description}</span>
                  </div>
                </li>
              );
            }

            return (
              <li key={component.id} className="border-t border-ink">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={active}
                  onClick={() => (component.group ? toggleGroup(component.id, component.group) : toggle(component.id))}
                  className="flex w-full items-start gap-5 py-5 text-left transition-colors hover:bg-grey-50"
                >
                  <span
                    aria-hidden
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-ink transition-colors ${
                      active ? "bg-ink text-paper" : ""
                    }`}
                  >
                    {active && <Check className="h-4 w-4" />}
                  </span>
                  <span className="flex-1">
                    <span className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <span className="display-wide font-display text-lg font-bold">{component.name}</span>
                      <span className="font-mono text-[12px] tabular-nums text-ink-muted">
                        {formatMomentPrice(component.price)}
                      </span>
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-muted">{component.description}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">{MOMENT_PRICING_NOTE}</p>
      </div>

      {/* Summary */}
      <div className="flex flex-col justify-between bg-ink p-6 text-paper sm:p-8 lg:col-span-5">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-dim">Your estimate</p>

          <ul className="mt-6 space-y-3">
            {isEmpty && <li className="text-sm text-paper-dim">Select components to build a quote.</li>}
            {lines.map((line) => (
              <li key={line.id} className="flex items-baseline justify-between gap-4 text-sm">
                <span>
                  {line.count > 1 ? `${line.count} × ` : ""}
                  {line.name}
                </span>
                <span className="tabular-nums text-paper-dim">{formatMomentPrice(line.price * line.count)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-baseline justify-between border-t border-paper pt-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-dim">Total</span>
            <span className="display-wide font-display text-3xl font-bold tabular-nums" aria-live="polite">
              {formatKes(total)}
            </span>
          </div>

          <div className="mt-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-dim">Or start from a bundle</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {MOMENT_BUNDLES.map((bundle) => (
                <button
                  key={bundle.id}
                  type="button"
                  onClick={() => applyBundle(bundle.items)}
                  title={bundle.includes}
                  className="border border-paper px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-paper transition-colors hover:bg-paper hover:text-ink"
                >
                  {bundle.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          {status === "sent" ? (
            <div className="border border-paper px-4 py-4" role="status">
              <p className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.1em]">
                <Check className="h-4 w-4" aria-hidden /> Build sent
              </p>
              <p className="mt-2 text-sm text-paper-dim">
                Thanks — we&apos;ve got your configuration and will reply with a quote shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
              <label htmlFor="moment-email" className="sr-only">
                Your email
              </label>
              <input
                id="moment-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@email.com"
                aria-label="Your email"
                className={EMAIL_INPUT_CLASSES}
              />
              <Action type="submit" variant="inverse" arrow className="w-full" disabled={status === "sending" || isEmpty}>
                {status === "sending" ? "Sending…" : "Send my build"}
              </Action>
              {isEmpty && <p className="text-center text-xs text-paper-dim">Add at least one component above.</p>}
              {status === "error" && (
                <p role="alert" className="text-center text-xs text-paper">
                  {error}
                </p>
              )}
              <p className="text-center text-xs text-paper-dim">
                Just your email — we&apos;ll send the quote and next steps. No spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

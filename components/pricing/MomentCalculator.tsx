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
  "w-full border border-white/20 bg-transparent px-4 py-3.5 text-base text-paper outline-none transition-colors duration-200 placeholder:text-paper-dim focus:border-brass";

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
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-7">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brass">Compose</p>

        <ul className="mt-6">
          {MOMENT_COMPONENTS.map((component) => {
            const count = counts[component.id] ?? 0;
            const active = count > 0;

            if (component.repeatable) {
              return (
                <li key={component.id} className="flex items-start gap-5 border-t border-grey-200 py-5">
                  <div className="flex items-center gap-2" role="group" aria-label={`${component.name} quantity`}>
                    <button
                      type="button"
                      onClick={() => setCount(component.id, count - 1)}
                      disabled={count === 0}
                      aria-label={`Remove one ${component.name}`}
                      className="flex h-8 w-8 items-center justify-center border border-grey-300 transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-paper disabled:opacity-30 disabled:hover:border-grey-300 disabled:hover:bg-transparent disabled:hover:text-ink"
                    >
                      <Minus className="h-4 w-4" aria-hidden />
                    </button>
                    <span className="w-6 text-center text-sm tabular-nums">{count}</span>
                    <button
                      type="button"
                      onClick={() => setCount(component.id, count + 1)}
                      aria-label={`Add one ${component.name}`}
                      className="flex h-8 w-8 items-center justify-center border border-grey-300 transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-paper"
                    >
                      <Plus className="h-4 w-4" aria-hidden />
                    </button>
                  </div>
                  <div className="flex-1">
                    <span className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <span className="font-display text-lg font-medium">{component.name}</span>
                      <span className="text-[12px] tabular-nums text-ink-muted">
                        {formatMomentPrice(component.price)} each
                      </span>
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-muted">{component.description}</span>
                  </div>
                </li>
              );
            }

            return (
              <li key={component.id} className="border-t border-grey-200">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={active}
                  onClick={() => (component.group ? toggleGroup(component.id, component.group) : toggle(component.id))}
                  className="flex w-full items-start gap-5 py-5 text-left transition-colors hover:bg-grey-50"
                >
                  <span
                    aria-hidden
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border transition-colors duration-200 ${
                      active ? "border-brass bg-brass text-paper" : "border-grey-300"
                    }`}
                  >
                    {active && <Check className="h-4 w-4" />}
                  </span>
                  <span className="flex-1">
                    <span className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <span className="font-display text-lg font-medium">{component.name}</span>
                      <span className="text-[12px] tabular-nums text-ink-muted">
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

        <p className="mt-6 text-sm leading-[1.7] text-ink-muted">{MOMENT_PRICING_NOTE}</p>
      </div>

      <div className="flex flex-col justify-between bg-ink p-8 text-paper sm:p-10 lg:col-span-5">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brass">Your estimate</p>

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

          <div className="mt-8 flex items-baseline justify-between border-t border-white/15 pt-6">
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-paper-dim">Total</span>
            <span className="font-display text-4xl font-medium tabular-nums" aria-live="polite">
              {formatKes(total)}
            </span>
          </div>

          <div className="mt-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-paper-dim">Or begin from a bundle</p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {MOMENT_BUNDLES.map((bundle) => (
                <button
                  key={bundle.id}
                  type="button"
                  onClick={() => applyBundle(bundle.items)}
                  title={bundle.includes}
                  className="text-[12px] font-medium uppercase tracking-[0.14em] text-paper-dim underline decoration-white/20 underline-offset-[6px] transition-colors duration-200 hover:text-paper hover:decoration-brass"
                >
                  {bundle.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          {status === "sent" ? (
            <div className="px-1 py-2" role="status">
              <p className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] text-brass">
                <Check className="h-4 w-4" aria-hidden /> Received
              </p>
              <p className="mt-3 text-sm leading-[1.7] text-paper-dim">
                We have your configuration and will reply with a quote shortly.
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
                {status === "sending" ? "Sending…" : "Request this quote"}
              </Action>
              {isEmpty && <p className="text-center text-xs text-paper-dim">Add at least one component above.</p>}
              {status === "error" && (
                <p role="alert" className="text-center text-xs text-paper">
                  {error}
                </p>
              )}
              <p className="text-center text-xs text-paper-dim">
                Your email only. We reply with the quote and the next step.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

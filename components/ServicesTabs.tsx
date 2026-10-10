"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ServiceTab } from "@/types/content";
import { cn } from "@/lib/utils";

interface ServicesTabsProps {
  tabs: ServiceTab[];
}

const PANEL_EASE = [0.22, 1, 0.36, 1] as const;
const PANEL_DURATION_S = 0.3;
const ARROW_KEYS = { next: "ArrowRight", previous: "ArrowLeft" } as const;

export default function ServicesTabs({ tabs }: ServicesTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const prefersReducedMotion = useReducedMotion();
  const active = tabs[activeIndex];

  const focusTab = (index: number) => {
    setActiveIndex(index);
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const last = tabs.length - 1;
    if (event.key === ARROW_KEYS.next) focusTab(activeIndex === last ? 0 : activeIndex + 1);
    if (event.key === ARROW_KEYS.previous) focusTab(activeIndex === 0 ? last : activeIndex - 1);
  };

  return (
    <div>
      {/* Scrolls horizontally on small screens instead of overflowing the box. */}
      <div role="tablist" aria-label="Services" className="flex overflow-x-auto border border-ink">
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={tab.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              id={`${baseId}-tab-${tab.id}`}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`${baseId}-panel`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={handleKeyDown}
              className={cn(
                "flex-none whitespace-nowrap px-5 py-4 font-mono text-[12px] uppercase tracking-[0.1em] transition-colors sm:px-7",
                index < tabs.length - 1 && "border-r border-ink",
                isActive ? "bg-ink text-paper" : "bg-paper text-ink hover:bg-grey-50"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${active.id}`} className="mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
            transition={{ duration: prefersReducedMotion ? 0 : PANEL_DURATION_S, ease: PANEL_EASE }}
          >
            {active.panel}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

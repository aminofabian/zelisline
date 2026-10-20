"use client";

import { useState } from "react";
import MyAccordion from "@/components/myComponents/MyAccordion";
import { cn } from "@/lib/utils";
import type { FaqGroup } from "@/types/content";

interface FaqTabsProps {
  groups: FaqGroup[];
}

export default function FaqTabs({ groups }: FaqTabsProps) {
  const [activeId, setActiveId] = useState(groups[0].id);
  const active = groups.find((group) => group.id === activeId) ?? groups[0];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-4">
        <div role="group" aria-label="FAQ topics" className="flex flex-col items-start gap-1">
          {groups.map((group) => {
            const isActive = group.id === active.id;
            return (
              <button
                key={group.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveId(group.id)}
                className={cn(
                  "py-2 text-left text-[13px] font-medium uppercase tracking-[0.16em] transition-colors duration-200",
                  isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                )}
              >
                <span className={cn("mr-3 inline-block h-px w-6 align-middle", isActive ? "bg-brass" : "bg-transparent")} />
                {group.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-8">
        <MyAccordion key={active.id} items={active.items} />
      </div>
    </div>
  );
}

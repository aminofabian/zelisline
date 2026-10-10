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
        <div role="group" aria-label="FAQ topics" className="flex flex-wrap gap-2">
          {groups.map((group) => {
            const isActive = group.id === active.id;
            return (
              <button
                key={group.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveId(group.id)}
                className={cn(
                  "border border-ink px-4 py-3 text-left font-mono text-[12px] uppercase tracking-[0.1em] transition-colors",
                  isActive ? "bg-ink text-paper" : "bg-paper text-ink hover:bg-grey-50"
                )}
              >
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

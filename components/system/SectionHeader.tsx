import type { ReactNode } from "react";
import Eyebrow from "@/components/system/Eyebrow";

interface SectionHeaderProps {
  eyebrow: string;
  index?: string;
  title: string;
  description?: ReactNode;
  id?: string;
}

export default function SectionHeader({ eyebrow, index, title, description, id }: SectionHeaderProps) {
  return (
    <header className="grid gap-8 md:grid-cols-12 md:items-end md:gap-16">
      <div className="md:col-span-7 lg:col-span-7">
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
        <h2
          id={id}
          className="mt-6 font-display text-[2.4rem] font-medium leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.25rem]"
        >
          {title}
        </h2>
      </div>
      {description && (
        <div className="max-w-[38ch] text-pretty text-base leading-[1.7] text-ink-muted md:col-span-5 md:pb-1 lg:col-span-4 lg:col-start-9">
          {description}
        </div>
      )}
    </header>
  );
}

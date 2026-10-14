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
    <header className="grid gap-8 border-t-2 border-ink pt-6 md:grid-cols-12 md:items-end md:gap-12">
      <div className="md:col-span-7 lg:col-span-8">
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
        <h2
          id={id}
          className="display-wide mt-6 font-display text-[2.1rem] font-bold leading-[1.02] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[3.5rem]"
        >
          {title}
        </h2>
      </div>
      {description && (
        <div className="text-pretty leading-relaxed text-ink-muted md:col-span-5 md:pb-2 lg:col-span-4">
          {description}
        </div>
      )}
    </header>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  index?: string;
  className?: string;
}

export default function Eyebrow({ children, index, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-brass",
        className
      )}
    >
      <span aria-hidden className="h-px w-8 bg-brass" />
      {index && <span className="text-ink-muted">{index}</span>}
      <span>{children}</span>
    </p>
  );
}

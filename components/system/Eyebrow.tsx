import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  index?: string;
  className?: string;
}

export default function Eyebrow({ children, index, className }: EyebrowProps) {
  return (
    <p className={cn("flex flex-wrap items-center gap-3 font-mono text-[12px] uppercase tracking-[0.12em]", className)}>
      {index && <span className="border border-current px-1.5 py-0.5 leading-none">{index}</span>}
      <span>{children}</span>
    </p>
  );
}

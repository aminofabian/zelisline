import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ActionVariant = "solid" | "outline" | "inverse" | "ghost";
type ActionSize = "md" | "sm";
type ActionType = "button" | "submit";

interface ActionProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ActionType;
  variant?: ActionVariant;
  size?: ActionSize;
  arrow?: boolean;
  disabled?: boolean;
  className?: string;
}

const BASE_CLASSES =
  "group inline-flex items-center justify-center gap-3 border font-mono font-medium uppercase tracking-[0.1em] transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-40";

const VARIANT_CLASSES: Record<ActionVariant, string> = {
  solid: "border-ink bg-ink text-paper hover:bg-paper hover:text-ink",
  outline: "border-ink bg-paper text-ink hover:bg-ink hover:text-paper",
  inverse: "border-paper bg-paper text-ink hover:bg-ink hover:text-paper",
  ghost: "border-transparent bg-transparent text-ink underline underline-offset-4 decoration-1 hover:decoration-2",
};

const SIZE_CLASSES: Record<ActionSize, string> = {
  md: "min-h-12 px-6 py-3 text-[13px]",
  sm: "min-h-10 px-4 py-2 text-[12px]",
};

const ARROW_CLASSES =
  "h-4 w-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5";

export default function Action({
  children,
  href,
  external = false,
  onClick,
  type = "button",
  variant = "solid",
  size = "md",
  arrow = false,
  disabled = false,
  className,
}: ActionProps) {
  const classes = cn(BASE_CLASSES, VARIANT_CLASSES[variant], SIZE_CLASSES[size], className);
  const content = (
    <>
      <span>{children}</span>
      {arrow && <ArrowUpRight className={ARROW_CLASSES} aria-hidden />}
    </>
  );

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}

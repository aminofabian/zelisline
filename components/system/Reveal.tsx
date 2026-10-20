"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const REVEAL_OFFSET_PX = 8;
const REVEAL_DURATION_S = 0.28;
const REVEAL_VIEWPORT_MARGIN = "-60px";
const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  // `data-reveal` gives us a CSS-only fallback (see globals.css) so content is
  // never trapped at opacity 0 when scripting is unavailable.
  return (
    <motion.div
      data-reveal
      initial={prefersReducedMotion ? false : { opacity: 0, y: REVEAL_OFFSET_PX }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: REVEAL_VIEWPORT_MARGIN }}
      transition={{ duration: REVEAL_DURATION_S, delay, ease: REVEAL_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

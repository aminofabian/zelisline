"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { clientStories } from "@/data/clientStories";

const AUTOPLAY_INTERVAL_MS = 7000;
const FADE_DURATION_S = 0.3;
const FIRST_SLIDE = 0;

const STEP_NEXT = 1;
const STEP_PREVIOUS = -1;

const wrapIndex = (value: number, count: number) => (value + count) % count;

export default function Portfolio() {
  const [index, setIndex] = useState(FIRST_SLIDE);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const count = clientStories.length;

  // `index` in the deps resets the timer on any manual step, so a click never
  // races the next autoplay tick. Hover/focus pauses it entirely.
  useEffect(() => {
    if (isPaused || isHovered || count <= 1) return;
    const timer = setInterval(
      () => setIndex((previous) => wrapIndex(previous + STEP_NEXT, count)),
      AUTOPLAY_INTERVAL_MS
    );
    return () => clearInterval(timer);
  }, [count, isPaused, isHovered, index]);

  if (count === 0) {
    return (
      <div className="border border-ink bg-grey-50 p-10 text-center">
        <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-ink-muted">Client stories coming soon</p>
      </div>
    );
  }

  const story = clientStories[index];
  const step = (direction: number) => setIndex((previous) => wrapIndex(previous + direction, count));

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Client stories"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsHovered(true)}
      onBlurCapture={() => setIsHovered(false)}
      className="grid border border-ink lg:grid-cols-2"
    >
      <div className="grayscale-plate border-b border-ink bg-grey-50 p-5 sm:p-8 lg:border-b-0 lg:border-r">
        <AnimatePresence mode="wait">
          <motion.div
            key={story.client}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: FADE_DURATION_S }}
            className="border border-ink bg-paper p-2"
          >
            <Image
              src={`/${story.screenshot}`}
              alt={`${story.client} website screenshot`}
              width={1200}
              height={800}
              className="h-auto w-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col justify-between gap-10 bg-paper p-6 sm:p-10">
        <div aria-live="polite" aria-atomic="true">
          <AnimatePresence mode="wait">
            <motion.figure
              key={story.client}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: FADE_DURATION_S }}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">Client story</p>
              <blockquote className="mt-5 text-pretty text-lg leading-relaxed sm:text-xl">
                &ldquo;{story.review}&rdquo;
              </blockquote>
              <figcaption className="display-wide mt-8 font-display text-xl font-bold">{story.client}</figcaption>
              <a
                href={story.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
              >
                Visit site
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </a>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <ControlButton label="Previous testimonial" onClick={() => step(STEP_PREVIOUS)}>
            <ArrowLeft className="h-4 w-4" aria-hidden />
          </ControlButton>
          <ControlButton label="Next testimonial" onClick={() => step(STEP_NEXT)}>
            <ArrowRight className="h-4 w-4" aria-hidden />
          </ControlButton>
          <ControlButton
            label={isPaused ? "Resume autoplay" : "Pause autoplay"}
            onClick={() => setIsPaused((paused) => !paused)}
          >
            {isPaused ? <Play className="h-4 w-4" aria-hidden /> : <Pause className="h-4 w-4" aria-hidden />}
          </ControlButton>
          <span className="ml-3 font-mono text-[12px] tabular-nums text-ink-muted">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}

interface ControlButtonProps {
  label: string;
  onClick: () => void;
  children: ReactNode;
}

function ControlButton({ label, onClick, children }: ControlButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center border border-ink bg-paper transition-colors hover:bg-ink hover:text-paper"
    >
      {children}
    </button>
  );
}

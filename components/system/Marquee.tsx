import { Fragment } from "react";

const WORD_CLASSES =
  "font-display text-[1.75rem] font-normal italic leading-none tracking-[-0.02em] text-ink/75 sm:text-5xl";

interface MarqueeProps {
  items: readonly string[];
}

function MarqueeTrack({ items }: MarqueeProps) {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <Fragment key={item}>
          <span className={WORD_CLASSES}>{item}</span>
          <span aria-hidden className="mx-8 text-brass sm:mx-12">
            ·
          </span>
        </Fragment>
      ))}
    </div>
  );
}

export default function Marquee({ items }: MarqueeProps) {
  return (
    <div aria-hidden className="group overflow-hidden border-y border-grey-200 py-8 sm:py-10">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <MarqueeTrack items={items} />
        <MarqueeTrack items={items} />
      </div>
    </div>
  );
}

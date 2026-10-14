import { Fragment } from "react";

const WORD_CLASSES =
  "text-outline-ink display-wide font-display text-[2.75rem] font-bold uppercase leading-none tracking-[-0.03em] sm:text-7xl lg:text-[5.5rem]";
const SEPARATOR_CLASSES = "mx-8 inline-block h-3 w-3 shrink-0 bg-ink sm:mx-12";

interface MarqueeProps {
  items: readonly string[];
}

function MarqueeTrack({ items }: MarqueeProps) {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <Fragment key={item}>
          <span className={WORD_CLASSES}>{item}</span>
          <span aria-hidden className={SEPARATOR_CLASSES} />
        </Fragment>
      ))}
    </div>
  );
}

export default function Marquee({ items }: MarqueeProps) {
  return (
    <div aria-hidden className="group overflow-hidden border-b border-ink bg-grey-50 py-6 sm:py-8">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <MarqueeTrack items={items} />
        <MarqueeTrack items={items} />
      </div>
    </div>
  );
}

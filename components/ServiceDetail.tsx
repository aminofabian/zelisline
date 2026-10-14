import Lottie from "@/components/ClientLottie";
import Reveal from "@/components/system/Reveal";
import Eyebrow from "@/components/system/Eyebrow";
import { formatIndex } from "@/lib/format";
import type { ServiceDiscipline } from "@/types/content";

const STAGGER_STEP_S = 0.05;

export default function ServiceDetail({ kicker, title, lead, animation, items }: Omit<ServiceDiscipline, "id" | "tabLabel">) {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
        <Eyebrow>{kicker}</Eyebrow>
        <h3 className="display-wide mt-5 font-display text-[1.9rem] font-bold uppercase leading-[1] tracking-[-0.02em] sm:text-4xl">
          {title}
        </h3>
        <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">{lead}</p>

        <div className="grayscale-plate mt-8 flex h-56 items-center justify-center border border-ink bg-grey-50 p-6">
          <Lottie animationData={animation} loop className="h-full w-full max-w-[220px]" />
        </div>
      </div>

      <ol className="border-t-2 border-ink lg:col-span-7">
        {items.map((item, index) => (
          <li key={item.name} className="group border-b border-ink transition-colors duration-150 hover:bg-ink hover:text-paper">
            <Reveal
              delay={index * STAGGER_STEP_S}
              className="grid grid-cols-[3rem_1fr] gap-4 px-3 py-5 sm:grid-cols-[4rem_1fr] sm:px-5"
            >
              <span className="font-mono text-[12px] text-ink-muted group-hover:text-paper-dim">{formatIndex(index + 1)}</span>
              <div>
                <h4 className="display-wide font-display text-lg font-bold leading-tight sm:text-xl">{item.name}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted group-hover:text-paper-dim">{item.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

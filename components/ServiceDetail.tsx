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
        <h3 className="mt-5 font-display text-[2rem] font-medium leading-[1.1] tracking-[-0.03em] sm:text-4xl">
          {title}
        </h3>
        <p className="mt-5 max-w-[36ch] text-pretty text-base leading-[1.7] text-ink-muted sm:text-lg">{lead}</p>

        <div className="mt-10 flex h-56 items-center justify-center bg-grey-50 p-6">
          <Lottie animationData={animation} loop className="h-full w-full max-w-[220px]" />
        </div>
      </div>

      <ol className="lg:col-span-7">
        {items.map((item, index) => (
          <li key={item.name} className="border-t border-grey-200 last:border-b">
            <Reveal
              delay={index * STAGGER_STEP_S}
              className="grid grid-cols-[3rem_1fr] gap-4 py-6 sm:grid-cols-[4rem_1fr]"
            >
              <span className="font-display text-lg italic text-brass">{formatIndex(index + 1)}</span>
              <div>
                <h4 className="font-display text-xl font-medium leading-tight">{item.name}</h4>
                <p className="mt-2 text-sm leading-[1.7] text-ink-muted">{item.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

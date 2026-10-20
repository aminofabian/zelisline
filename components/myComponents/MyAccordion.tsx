import type { FaqItem } from "@/types/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { stripDecorativeMarker } from "@/lib/format";

interface MyAccordionProps {
  items: FaqItem[];
}

export default function MyAccordion({ items }: MyAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full border-t border-grey-200">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{stripDecorativeMarker(item.triggerText)}</AccordionTrigger>
          <AccordionContent>
            <p className="max-w-2xl whitespace-pre-line text-pretty text-base leading-relaxed text-ink-muted">
              {item.content.trim()}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

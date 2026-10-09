import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionItemProps {
  value: string;
  triggerText: string;
  content: string;
}

interface MyAccordionProps {
  items: AccordionItemProps[];
}

const MyAccordion: React.FC<MyAccordionProps> = ({ items }) => {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={item.value}
            className="border-b border-sand-200 last:border-b-0"
          >
            <AccordionTrigger className="py-4 text-left font-display text-lg text-ink transition-colors hover:text-orange-700 hover:no-underline">
              {item.triggerText}
            </AccordionTrigger>
            <AccordionContent className="pb-5 pr-2 text-base leading-relaxed text-ink-soft">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default MyAccordion;

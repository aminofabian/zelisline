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
    <div className='w-full text-slate-500'>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={item.value}
            className="border-b border-orange-200/30 last:border-b-0 last:mb-0"
          >
            <AccordionTrigger 
              className='text-slate-800 text-base sm:text-lg font-medium hover:text-orange-500 transition-colors py-3 px-2'
            >
              {item.triggerText}
            </AccordionTrigger>
            <AccordionContent 
              className='bg-orange-50/50 p-3 sm:p-4 text-base sm:text-lg font-light text-slate-700 rounded-lg mt-1 mb-2'
            >
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
    
export default MyAccordion;
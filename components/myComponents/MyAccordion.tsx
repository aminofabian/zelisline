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
    <div className='px-20'>
    <Accordion type="single" collapsible>
    {items.map((item, index) => (
      <AccordionItem key={index} value={item.value}>
      <AccordionTrigger className='text-slate-800 text-lg font-light'>{item.triggerText}</AccordionTrigger>
      <AccordionContent className='bg-slate-50 p-10 rounded-xl text-lg font-light text-slate-800 space-y-10'>{item.content}</AccordionContent>
      </AccordionItem>
      ))}
      </Accordion>
      </div>
      );
    };
    
    export default MyAccordion;
    
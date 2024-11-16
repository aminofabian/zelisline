import React from "react";
import { motion } from "framer-motion";
import { Tabs } from "../ui/tabs";
import MyAccordion from "./MyAccordion";
import * as items from "@/data/faq";
import { Globe, Search, PenTool, Image, Video, LucideIcon } from 'lucide-react';

type TabTitle = "Web Design" | "SEO Services" | "Content Marketing" | "Logo Design" | "Video Production";

const tabIcons: Record<TabTitle, LucideIcon> = {
  "Web Design": Globe,
  "SEO Services": Search,
  "Content Marketing": PenTool,
  "Logo Design": Image,
  "Video Production": Video,
};

export function TabsDemo() {
  const tabs = [
    {
      title: "Web Design" as TabTitle,
      value: "product",
      content: (
        <FAQSection title="Web Design FAQs" items={items.webDesignFaqs} />
      ),
    },
    {
      title: "SEO Services" as TabTitle,
      value: "seo",
      content: (
        <FAQSection title="SEO FAQs" items={items.seoFaqs} />
      ),
    },
    {
      title: "Content Marketing" as TabTitle,
      value: "content",
      content: (
        <FAQSection title="Content Marketing FAQs" items={items.faqContent} />
      ),
    },
    {
      title: "Logo Design" as TabTitle,
      value: "logo",
      content: (
        <FAQSection title="Logo Design FAQs" items={items.logoFaqs} />
      ),
    },
    {
      title: "Video Production" as TabTitle,
      value: "video",
      content: (
        <FAQSection title="Video Production FAQs" items={items.videoFaqs} />
      ),
    },
  ];
  
  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-orange-50/30 py-4 px-1 sm:px-6 lg:px-8">
      <div className="w-[98%] sm:container mx-auto sm:max-w-6xl">
        <motion.h2 
          className="text-2xl sm:text-4xl font-bold text-center mb-4 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Browse Our <span className="text-orange-500">FAQs</span>
        </motion.h2>
        <Tabs 
          tabs={tabs}
          containerClassName="mb-2"
          contentClassName="relative z-10"
        />
      </div>
    </div>
  );
}

const FAQSection: React.FC<{ title: string; items: any[] }> = ({ title, items }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-6 w-full relative"
  >
    <h3 className="text-xl sm:text-3xl font-semibold mb-3 text-orange-500 px-2">{title}</h3>
    <div className="relative">
      <MyAccordion items={items} />
    </div>
  </motion.div>
);

// Custom tab component to include icons
const CustomTab = ({ title }: { title: TabTitle }) => {
  const Icon = tabIcons[title];
  return (
    <div className="flex items-center space-x-2 relative z-10">
      <Icon className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300" />
      <span className="transition-colors duration-300">{title}</span>
    </div>
  );
};
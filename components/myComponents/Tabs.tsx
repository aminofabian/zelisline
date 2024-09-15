"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs } from "../ui/tabs";
import MyAccordion from "./MyAccordion";
import * as items from "@/data/faq";
import { Globe, Search, PenTool, Image, Video, LucideIcon } from 'lucide-react';

const tabIcons: Record<string, LucideIcon> = {
  "Web Design": Globe,
  "SEO Services": Search,
  "Content Marketing": PenTool,
  "Logo Design": Image,
  "Video Production": Video,
};

interface Tab {
  title: string;
  value: string;
  content: React.ReactNode;
  titleElement?: React.ReactNode;
}

const tabs: Tab[] = [
  { title: "Web Design", value: "web-design", content: <div>Web Design Content</div> },
  { title: "SEO Services", value: "seo-services", content: <div>SEO Services Content</div> },
  { title: "Content Marketing", value: "content-marketing", content: <div>Content Marketing Content</div> },
  { title: "Logo Design", value: "logo-design", content: <div>Logo Design Content</div> },
  { title: "Video Production", value: "video-production", content: <div>Video Production Content</div> },
  
  
];

export function TabsDemo() {
  const tabsWithElements: Tab[] = tabs.map(tab => ({
    ...tab,
    titleElement: (
      <div className="flex items-center space-x-2">
      {React.createElement(tabIcons[tab.title], { className: "w-5 h-5" })}
      <span>{tab.title}</span>
      </div>
    ),
  }));
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
    <motion.h2
    className="text-4xl font-bold text-center mb-12 text-gray-800"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
    Browse Our <span className="text-orange-500">FAQs</span>
    </motion.h2>
    <Tabs tabs={tabsWithElements} />
    </div>
    </div>
  );
}



interface FAQSectionProps {
  title: string;
  items: any[]; // Replace 'any' with the actual type of your FAQ items
}

const FAQSection: React.FC<FAQSectionProps> = ({ title, items }) => (
  <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.5 }}
  className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
  >
  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-orange-500">{title}</h3>
  <MyAccordion items={items} />
  </motion.div>
);
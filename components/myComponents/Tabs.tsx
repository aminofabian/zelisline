"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs } from "../ui/tabs";
import MyAccordion from "./MyAccordion";
import * as items from "@/data/faq";
import { Globe, Search, PenTool, Image, Video } from 'lucide-react';

const tabIcons = {
  "Web Design": Globe,
  "SEO Services": Search,
  "Content Marketing": PenTool,
  "Logo Design": Image,
  "Video Production": Video,
};

export function TabsDemo() {
  const tabs = [
    {
      title: "Web Design",
      value: "product",
      content: (
        <FAQSection title="Web Design FAQs" items={items.webDesignFaqs} />
      ),
    },
    {
      title: "SEO Services",
      value: "SEO Services",
      content: (
        <FAQSection title="SEO FAQs" items={items.seoFaqs} />
      ),
    },
    {
      title: "Content Marketing",
      value: "content",
      content: (
        <FAQSection title="Content Marketing FAQs" items={items.faqContent} />
      ),
    },
    {
      title: "Logo Design",
      value: "logo",
      content: (
        <FAQSection title="Logo Design FAQs" items={items.logoFaqs} />
      ),
    },
    {
      title: "Video Production",
      value: "video",
      content: (
        <FAQSection title="Video Production FAQs" items={items.videoFaqs} />
      ),
    },
  ];
  
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
    <Tabs tabs={tabs.map(tab => ({
      ...tab,
      title: (
        <div className="flex items-center space-x-2">
        {React.createElement(tabIcons[tab.title], { className: "w-5 h-5" })}
        <span>{tab.title}</span>
        </div>
      )
    }))} />
    </div>
    </div>
  );
}

const FAQSection = ({ title, items }) => (
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
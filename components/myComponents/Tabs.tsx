'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MyAccordion from './MyAccordion';
import * as items from '@/data/faq';
import { Globe, Search, PenTool, Image, Video } from 'lucide-react';

const tabs = [
  { title: 'Web design', icon: Globe, items: items.webDesignFaqs },
  { title: 'SEO', icon: Search, items: items.seoFaqs },
  { title: 'Content marketing', icon: PenTool, items: items.faqContent },
  { title: 'Logo design', icon: Image, items: items.logoFaqs },
  { title: 'Video production', icon: Video, items: items.videoFaqs },
];

export function TabsDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = tabs[activeIndex];

  return (
    <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
      <div className="grid gap-6 sm:grid-cols-2 sm:items-end">
        <div>
          <span className="eyebrow">Answers</span>
          <h2 className="mt-3 max-w-[20ch] font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
            Questions we hear often
          </h2>
        </div>
        <p className="text-pretty leading-relaxed text-ink-soft sm:pb-1">
          A few of the things clients ask before we begin. Can&apos;t find yours?
          Just reach out — we&apos;re happy to talk it through.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Tab list */}
        <div className="lg:col-span-4">
          <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = index === activeIndex;
              return (
                <button
                  key={tab.title}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={`group flex shrink-0 items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors lg:w-full lg:text-base ${
                    isActive
                      ? 'bg-orange-50 text-orange-700'
                      : 'text-ink-soft hover:bg-sand-100 hover:text-ink'
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-orange-600' : 'text-ink-muted group-hover:text-orange-600'}`} />
                  <span className="whitespace-nowrap lg:whitespace-normal">{tab.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel */}
        <div className="lg:col-span-8">
          <div className="rounded-2xl border border-sand-200 bg-white p-4 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <MyAccordion items={active.items} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";
import MyAccordion from "./MyAccordion";
import * as items from "@/data/faq";

export function TabsDemo() {
  const tabs = [
    {
      title: "Web Design",
      value: "product",
      content: (
        <div className="max-w-screen h-screen rounded-2xl p-5 text-xl md:text-4xl font-bold text-slate-700 bg-gradient-to-br from-cyan-50 to-sky-50">
        <p>Web Design FAQs</p>
        <MyAccordion items={items.webDesignFaqs} />
        </div>
        ),
      },
      {
        title: "SEO Services",
        value: "SEO Services",
        content: (
          <div className="w-full overflow-hidden relative h-fit rounded-3xl p-5 text-xl md:text-4xl font-bold  text-slate-600 bg-gradient-to-br from-sky-50 to-cyan-50">
          <p>SEO FAQs</p>
          <MyAccordion items={items.seoFaqs} />
          </div>
          ),
        },
        {
          title: "Content Marketing",
          value: "content",
          content: (
            <div className="w-full overflow-hidden relative h-fit rounded-2xl p-5 text-xl md:text-4xl font-bold  text-slate-600 bg-gradient-to-br from-sky-100 to-cyan-100">
            <p>Content Marketing FAQs</p>
            <MyAccordion items={items.faqContent} />
            </div>
            ),
          },
          {
            title: "Logo Design",
            value: "logo",
            content: (
              <div className="w-full overflow-hidden relative h-fit rounded-2xl p-5 text-xl md:text-4xl font-bold text-slate-600 bg-gradient-to-br from-sky-100 to-cyan-100">
              <p>Logo Design FAQs</p>
              <MyAccordion items={items.logoFaqs} />
              </div>
              ),
            },
            {
              title: "Video Production",
              value: "video",
              content: (
                <div className="w-full overflow-hidden relative h-fit rounded-2xl p-5 text-xl md:text-4xl font-bold  text-slate-600 bg-gradient-to-br from-sky-100 to-cyan-100">
                <p>Video Production FAQs</p>
                <MyAccordion items={items.videoFaqs} />
                </div>
                ),
              },
            ];
            
            return (
              <div className="h-[50rem] md:h-[60rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-1">
              <div className="w-full">
              <h2 className="text-4xl font-bold text-center mb-5 text-slate-500 p-3 transition-all justify-center">
              Browse Our FAQs
              </h2>
              </div>
              <Tabs tabs={tabs} />
              </div>
              );
            }
            
            
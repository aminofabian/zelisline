"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";
import MyAccordion from "./MyAccordion";
import { items } from "@/data/faq";

export function TabsDemo() {
  const tabs = [
    {
      title: "Web Design",
      value: "product",
      content: (
        <div className="max-w-screen-2xl relative z-10 h-screen rounded-2xl p-5 text-xl md:text-4xl font-bold text-slate-700 bg-gradient-to-br from-sky-50 to-slate-50">
        <p>Web Design FAQs</p>
        <MyAccordion items={items} />
        </div>
        ),
      },
      {
        title: "SEO Services",
        value: "SEO Services",
        content: (
          <div className="w-full overflow-hidden relative h-fit rounded-3xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-sky-100 to-cyan-100">
          <p>SEO FAQs</p>
          <MyAccordion items={items} />
          </div>
          ),
        },
        {
          title: "Content Marketing",
          value: "content",
          content: (
            <div className="w-full overflow-hidden relative h-fit rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-sky-100 to-cyan-100">
            <p>Social Media Marketing FAQs</p>
            <MyAccordion items={items} />
            </div>
            ),
          },
          {
            title: "Logo Design",
            value: "logo",
            content: (
              <div className="w-full overflow-hidden relative h-fit rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-sky-100 to-cyan-100">
              <p>Logo Design FAQs</p>
              <MyAccordion items={items} />
              </div>
              ),
            },
            {
              title: "Video Production",
              value: "video",
              content: (
                <div className="w-full overflow-hidden relative h-fit rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-sky-100 to-cyan-100">
                <p>Vido Production FAQs</p>
                <MyAccordion items={items} />
                </div>
                ),
              },
            ];
            
            return (
              <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
              <Tabs tabs={tabs} />
              </div>
              );
            }
            
            // const DummyContent = () => {
            //   return (
            //     <Image
            //     src="/linear.webp"
            //     alt="dummy image"
            //     width="1000"
            //     height="1000"
            //     className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
            //     />
            //     );
            //   };
            
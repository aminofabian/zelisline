'use client';

import React, { ReactNode } from 'react';
import { Jost } from "next/font/google";
import { motion } from "framer-motion"; // Ensure motion is imported
import { cn } from "@/lib/utils";
import ShuffleHero from '@/components/ShuffleHero';
import Pricing from '@/components/pricing/Pricing';
import Services from '@/components/Services';
import { TabsDemo } from '@/components/myComponents/Tabs';
import ContactPage from '@/components/ContactPage';
import FooterRev from '@/components/FooterRev';
import SideNav from '@/components/SideNav';
import WhyChooseUs from '@/components/WhyChooseUs';

const font = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface SectionProps {
  children: ReactNode;
  flip?: boolean;
  color?: string;
}

interface WaveBorderProps {
  flip?: boolean;
  color?: string; // Add color prop here
}


const WaveBorder: React.FC<WaveBorderProps> = ({ flip = false, color = "fill-orange-100" }) => (
  <div className={`w-full overflow-hidden ${flip ? 'rotate-180' : ''}`}>
  <svg viewBox="0 0 1440 120" className="w-full h-auto">
  <path
  className="fill-orange-100"
  fillOpacity="1"
  d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
  ></path>
  </svg>
  </div>
);

const Section: React.FC<SectionProps> = ({ children, color = "bg-white" }) => (
  <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}  // Reduced duration
  viewport={{ once: true, amount: 0.3 }}
  className={`relative ${color}`}
  >
  <WaveBorder flip color={`fill-${color.split('-')[1]}-100`} />
  <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
  {children}
  </div>
  <WaveBorder color={`fill-${color.split('-')[1]}-100`} />
  </motion.section>
);

const HomePage = () => {
  const buttons = [
    { link: "/contact", text: "Write Us" },
    { link: "/blog", text: "Read our Blog" },
  ];
  
  return (
    <div className={cn("min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50", font.className)}>
    <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row">
    <aside className="lg:w-64 lg:mr-8 mb-8 lg:mb-0">
    <div className="sticky top-8 z-10">
    <SideNav />
    </div>
    </aside>
    <main className="flex-1 text-emerald-800">
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4 }}  // Reduced duration
    className="mb-16"
    >
    <ShuffleHero
    subTitle="Driving Growth from Series A to IPO"
    title="YOUR ONE-STOP-SHOP FOR WEB DEVELOPMENT AND DIGITAL MARKETING SERVICES IN KENYA"
    bgImage="/bg.jpg"
    buttons={buttons}
    />
    </motion.div>
    
    <Section color="bg-orange-50">
    <Pricing />
    </Section>
    
    <Section color="bg-white">
    <Services />
    </Section>
    
    <Section color="bg-teal-50">
    <WhyChooseUs />
    </Section>
    
    <Section color="bg-white">
    <TabsDemo />
    </Section>
    
    <Section color="bg-orange-50">
    <ContactPage />
    </Section>
    </main>
    </div>
    
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className='relative z-50'
    >
    <FooterRev />
    </motion.div>
    </div>
    </div>
  );
}

export default HomePage;

'use client';

import React, { ReactNode, Suspense, useState } from 'react';
import { Jost } from "next/font/google";
import { cn } from "@/lib/utils";
import dynamic from 'next/dynamic';
import type { ShuffleHeroProps } from '@/types/components';
import { useScrollWidth } from '@/hooks/useScrollWidth';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const ShuffleHero = dynamic<ShuffleHeroProps>(() => import('@/components/ShuffleHero'), { ssr: false });
const Pricing = dynamic(() => import('@/components/pricing/Pricing'));
const Services = dynamic(() => import('@/components/Services'));
const TabsDemo = dynamic(() => import('@/components/myComponents/Tabs').then(mod => mod.TabsDemo));
const ContactPage = dynamic(() => import('@/components/ContactPage'));
const FooterRev = dynamic(() => import('@/components/FooterRev'));
const SideNav = dynamic(() => import('@/components/ClientSideNav'), { ssr: false });
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'));
const HowWeWork = dynamic(() => import('@/components/HowWeWork'));

const font = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface SectionProps {
  children: ReactNode;
  color?: string;
}

const WaveBorder: React.FC<{ flip?: boolean; color?: string }> = ({ flip = false, color = "fill-orange-50" }) => (
  <div className={`w-full overflow-hidden ${flip ? 'rotate-180' : ''}`}>
    <svg viewBox="0 0 1440 120" className="w-full h-auto">
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#fff1e6', stopOpacity: 0.6 }}>
            <animate
              attributeName="stop-color"
              values="#fff1e6;#ffe4d4;#fff1e6"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" style={{ stopColor: '#ffe4d4', stopOpacity: 0.6 }}>
            <animate
              attributeName="stop-color"
              values="#ffe4d4;#fff1e6;#ffe4d4"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
      <path
        className="transition-all duration-300 ease-in-out"
        fill="url(#waveGradient)"
        fillOpacity="1"
        d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
      >
        <animate
          attributeName="d"
          values="
            M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z;
            M0,32L80,42.7C160,53,320,75,480,85.3C640,96,800,96,960,90.7C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z;
            M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          dur="10s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
);

const Section: React.FC<SectionProps> = ({ children, color = "bg-white" }) => (
  <section className={`relative ${color}`}>
    <WaveBorder flip color={`fill-${color.split('-')[1]}-100`} />
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {children}
    </div>
    <WaveBorder color={`fill-${color.split('-')[1]}-100`} />
  </section>
);

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '+254714282874';
  const formattedNumber = '(+254) 714 28 2874';

  const handleClick = () => {
    navigator.clipboard.writeText(phoneNumber);
    // You could add a toast notification here
  };

  const { mainClass, isScrolled } = useScrollWidth();
  const buttons = [
    { link: "/contact", text: "Get Started" },
    { link: "/our-work", text: "View  Our Work" },
  ];
  
  return (
    <div className={cn("min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50", font.className)}>
      <div className={`transition-all duration-300 ease-in-out ${isScrolled ? 'container-fluid px-4' : 'container mx-auto'}`}>
        <div className="flex flex-col lg:flex-row">
          <aside className={`transition-all duration-300 ease-in-out ${isScrolled ? 'lg:w-16' : 'lg:w-64'} lg:mr-4 mb-8 lg:mb-0`}>
            <div className="sticky top-8 z-10">
              <SideNav />
            </div>
          </aside>
          <main className={`flex-1 transition-all duration-300 ease-in-out ${isScrolled ? 'w-full' : ''}`}>
            <div className="mb-4">
              <ShuffleHero
                subTitle="Driving Growth from Series A to IPO"
                title="WEB DEVELOPMENT AND DIGITAL MARKETING SERVICES IN KENYA"
                bgImage="/bg.jpg"
                buttons={buttons}
              />
            </div>
            
            <Section color="bg-orange-50">
              <Pricing />
            </Section>
            
            <Section color="bg-white">
              <Services />
            </Section>
            
            <Section color="bg-teal-50">
              <HowWeWork />
            </Section>
            
            <Section color="bg-white">
              <WhyChooseUs />
            </Section>
            
            <Section color="bg-white">
              <TabsDemo />
            </Section>
            
            <Section color="bg-orange-50">
              <ContactPage />
            </Section>
            
            <div className="flex justify-center items-center min-h-[200px]">
              <motion.div
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={handleClick}
                className="relative cursor-pointer group"
              >
                <motion.div
                  className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-500 rounded-xl shadow-lg hover:shadow-xs transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5 text-white" />
                  <motion.span
                    className="text-xl font-xs text-white"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: isHovered ? 0 : 1 }}
                  >
                    {formattedNumber}
                  </motion.span>
                  <motion.span
                    className="absolute left-[62px] text-xl font-medium text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                  >
                    Click to Copy
                  </motion.span>
                </motion.div>
                
                {/* Decorative elements */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl opacity-50 blur-lg"
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                    opacity: isHovered ? 0.7 : 0.5,
                  }}
                />
              </motion.div>
            </div>
          </main>
        </div>
        
        <div className='relative z-50'>
          <FooterRev />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
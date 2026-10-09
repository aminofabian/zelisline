'use client';

import dynamic from 'next/dynamic';
import type { ShuffleHeroProps } from '@/types/components';

const ShuffleHero = dynamic<ShuffleHeroProps>(() => import('@/components/ShuffleHero'), { ssr: false });
const Pricing = dynamic(() => import('@/components/pricing/Pricing'));
const Services = dynamic(() => import('@/components/Services'));
const TabsDemo = dynamic(() => import('@/components/myComponents/Tabs').then(mod => mod.TabsDemo));
const ContactPage = dynamic(() => import('@/components/ContactPage'));
const FooterRev = dynamic(() => import('@/components/FooterRev'));
const SideNav = dynamic(() => import('@/components/ClientSideNav'), { ssr: false });
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'));
const HowWeWork = dynamic(() => import('@/components/HowWeWork'));
const CtaBand = dynamic(() => import('@/components/CtaBand'));

const HomePage = () => {
  const buttons = [
    { link: "/contact", text: "Start a project" },
    { link: "/our-work", text: "See our work" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Squared surfaces across the homepage. */}
      <div className="edges-square">
        <div className="flex items-start">
          {/* Desktop rail — small screens use the layout-level MobileNav */}
          <div className="hidden shrink-0 pl-4 pr-2 pt-6 sm:pl-6 md:block md:self-stretch lg:pl-10">
            <SideNav />
          </div>

          <main className="min-w-0 flex-1">
            <ShuffleHero
              subTitle="Software studio · Nairobi"
              title="Web development & digital marketing for ambitious Kenyan brands"
              buttons={buttons}
            />

            <div className="space-y-16 sm:space-y-20 lg:space-y-28">
              <Services />
              <HowWeWork />
              <WhyChooseUs />
              <Pricing />
              <TabsDemo />
              <ContactPage />
              <CtaBand />
            </div>
          </main>
        </div>

        <FooterRev />
      </div>
    </div>
  );
}

export default HomePage;

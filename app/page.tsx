"use client"

import ContactPage from '@/components/ContactPage'
import Pricing from '@/components/Pricing'
import ShuffleHero from '@/components/ShuffleHero'
import SideNav from '@/components/SideNav'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'
import Footer from '@/components/Footer'
import Services from '@/components/Services'

export default function page() {
  return (
    <main className="flex h-screen relative md:flex-row md:overflow-hidden xl:px-40 md:px-10 bg-transparent">
    <div className="w-screen lg:w-44 md:border-r mr-15 border-slate-50 justify-center align-middle">
    <div className="hidden md:flex pr-10"><SideNav /></div>
    </div>      
    <div className="flex-grow mt-12 md:mt-0 flex-1 w-full md:overflow-y-auto sm:p-6 md:p-12 max-w-7xl mx-auto animate-bounce-custom">
    <ShuffleHero />
    <div className="m-12 rounded-xl">
    <Pricing />
    </div>
    <div className="rounded-3xl">
    <WhyChooseUs />
    </div>
    <div>
    <Services />
    </div>
    <div>
    </div>
    <div>
    <ContactPage />
    </div>
    <Footer />
    </div>
    </main>
    )
  }
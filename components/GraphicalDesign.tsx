
import React from 'react'
import Image from 'next/image';
import {
  Palette,
  Wallet,
  Scissors,
  Layout,
  Code,
} from 'lucide-react'; // Assuming these are your icon components
import Lottie from 'lottie-react';
import Animation1 from './Animation1.json'


function GraphicalDesign() {
  
  
  const GraphicDesignServices = [
    {
      name: 'Logo Design',
      description: 'Crafting unique and memorable logos for your brand.',
      icon: <Palette size={30} />,
    },
    {
      name: 'Poster Design',
      description: 'Designing eye-catching posters for events and promotions.',
      icon: <Wallet size={30} />,
    },
    {
      name: 'Cutting and Editing',
      description: 'Precise cutting and editing for a polished final product.',
      icon: <Scissors size={30} />,
    },
    {
      name: 'Layout Design',
      description: 'Creating visually appealing layouts for various materials.',
      icon: <Layout size={30} />,
    },
    {
      name: 'Digital Illustration',
      description: 'Producing digital illustrations for diverse purposes.',
      icon: <Code size={30} />,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 py-8 md:py-12 flex flex-col md:flex-row">
    <div className="lg:w-1/2 flex items-center justify-center clip-rabet translate-x-6 ease-in-out duration-1000  bg-slate-300 opacity-40 animate-bounce-custom">
    <Lottie
    animationData={Animation1}
    className="flex justify-center items-center"
    loop />
    {/* <Image
    src="/hello.gif"
    width={600}
    height={600}
    alt="Picture of the author"
  /> */}
  </div>
  <div className="md:w-1/2 md:p-8 overflow-y-auto">
  <h2 className="text-2xl font-bold my-4 text-center md:text-left text-cyan-500">
  Graphical Design Services
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
  {GraphicDesignServices.map((service, index) => (
    <div key={index} className="flex items-center">
    <div className="mr-2 text-cyan-500">{service.icon}</div>
    <div>
    <h3 className="text-lg text-cyan-500 font-semibold">{service.name}</h3>
    <p className="text-sm">{service.description}</p>
    </div>
    </div>
    ))}
    </div>
    </div>
    </div>    )
  }
  
  export default GraphicalDesign
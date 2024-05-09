
import React from 'react'
import Image from 'next/image';
import {
  Palette,
  Wallet,
  Scissors,
  Layout,
  Code,
} from 'lucide-react'; 
import Lottie from 'lottie-react';
import Animation1 from './Animation1.json'


function GraphicalDesign() {
  const GraphicDesignServices = [
    {
      name: 'HTML',
      description: 'Crafted with semantic markup for solid foundation and SEO-friendly structure.',
      icon: <Palette size={30} />,
    },
    {
      name: 'CSS',
      description: 'Stylish designs and layouts tailored to your brand is aesthetics and responsiveness.',
      icon: <Wallet size={30} />,
    },
    {
      name: 'JavaScript',
      description: 'Rapid development with mobile-first, customizable components for a sleek UI.',
      icon: <Scissors size={30} />,
    },
    {
      name: 'NodeJS',
      description: 'Scalable backend solutions and API integrations for robust web applications.',
      icon: <Layout size={30} />,
    },
    {
      name: 'NestJs',
      description: 'Real-time database, authentication, and hosting for scalable and secure applications.',
      icon: <Code size={30} />,
    },
    {
      name: 'React',
      description: 'Building powerful, scalable, and reusable components for dynamic web applications.',
      icon: <Palette size={30} />,
    },
    {
      name: 'NextJs',
      description: 'Server-side rendering and seamless client-side navigation for blazing-fast performance.',
      icon: <Wallet size={30} />,
    },
    {
      name: 'Redux',
      description: 'State management for complex data flows and predictable application behavior.',
      icon: <Scissors size={30} />,
    },
    {
      name: 'Payment Integration',
      description: 'Creating visually appealing layouts for various materials.',
      icon: <Layout size={30} />,
    },
    {
      name: 'Django',
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
    </div>
    <div className="md:w-1/2 md:p-8 overflow-y-auto">
    <h2 className="text-2xl font-bold my-4 text-center md:text-left text-cyan-500">
    Custom Web Development
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
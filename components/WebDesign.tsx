
import React from 'react'
import Image from 'next/image';
import Animation from './Animation.json';
import {
  Globe,
  Laptop,
  Settings,
  Code,
  Smartphone,
  LayoutTemplate,
  FolderSync,
  BookMarked,
  Braces,
} from 'lucide-react';
import Lottie from 'lottie-react';


function WebDesign() {
  
  const WebDesignServices = [ 
    {
      name: 'Mobile App Design',
      description: 'Crafting intuitive and visually appealing mobile application interfaces.',
      icon: <Smartphone size={30} />,
    },
    {
      name: 'Customization and Settings',
      description: 'Tailoring websites to meet specific client needs and preferences.',
      icon: <Settings size={30} />,
    },
    {
      name: 'Frontend Development',
      description: 'Implementing responsive and interactive frontend solutions.',
      icon: <LayoutTemplate size={30} />,
    },
    {
      name: 'WordPress Development',
      description: 'Building websites using the WordPress platform for flexibility and ease of use.',
      icon: <BookMarked size={30} />,
    },
    {
      name: 'Headless WordPress',
      description: 'Implementing headless WordPress setups for decoupled frontend and backend architecture.',
      icon: <FolderSync size={30} />,
    },
    {
      name: 'Custom WordPress Themes',
      description: 'Designing and developing custom WordPress themes for a unique online presence.',
      icon: <Code size={30} />,
    },
    {
      name: 'SaaS (Software as a Service)',
      description: 'Creating scalable and cloud-based software solutions for various industries.',
      icon: <Braces size={30} />,
    },
  ];
  
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 py-8 md:py-12 flex flex-col md:flex-row">
    <div className="lg:w-1/2 flex items-center justify-center clip-rabet translate-x-6 ease-in-out duration-1000  bg-slate-300 opacity-40">
    
    <Lottie
    animationData={Animation}
    className="flex justify-center items-center"
    loop />
    {/* <Image
    src="/webanim.gif"
    width={600}
    height={600}
    alt="Picture of the author"
  /> */}
  </div>
  <div className="md:w-1/2 md:p-8 overflow-y-auto">
  <h2 className="text-2xl font-bold my-4 text-center md:text-left text-sky-600">
  Website Design Services
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
  {WebDesignServices.map((service, index) => (
    <div key={index} className="flex items-center">
    <div className="mr-2 text-sky-600">{service.icon}</div>
    <div>
    <h3 className="text-lg font-semibold text-sky-600">{service.name}</h3>
    <p className="text-sm">{service.description}</p>
    </div>
    </div>
    ))}
    </div>
    </div>
    </div>  )
  }
  
  export default WebDesign

import Image from 'next/image';
import React from 'react';

import {
  Globe,
  Wallet,
  User,
  Settings,
  Monitor,
} from 'lucide-react'; // Assuming these are your icon components
import Lottie from 'lottie-react';
import Animation2 from './Animation2.json'

const digitalMarketingServices = [
  {
    name: 'SEO (Search Engine Optimization)',
    description: 'Enhancing online visibility and search engine rankings.',
    icon: <Globe size={30} />,
  },
  {
    name: 'SMM (Social Media Marketing)',
    description: 'Engaging audiences and promoting brands through social media.',
    icon: <Wallet size={30} />,
  },
  {
    name: 'PPC Advertising',
    description: 'Driving targeted traffic with pay-per-click advertising campaigns.',
    icon: <User size={30} />,
  },
  {
    name: 'Content Marketing',
    description: 'Creating and distributing valuable content to attract a targeted audience.',
    icon: <Settings size={30} />,
  },
  {
    name: 'Email Marketing',
    description: 'Executing effective email campaigns for customer engagement and retention.',
    icon: <Monitor size={30} />,
  },
];

const DigitalMarketing = () => { 
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 py-8 md:py-12 flex flex-col md:flex-row">
    <div className="lg:w-1/2 flex items-center justify-center clip-rabet translate-x-6 ease-in-out duration-1000  bg-slate-300 opacity-40">
    
    <Lottie
    animationData={Animation2}
    className="flex justify-center items-center"
    loop />
    {/* <Image
    src="/gif.gif"
    width={600}
    height={600}
    alt="Picture of the author"
  /> */}
  </div>
  <div className="md:w-1/2 md:p-8 overflow-y-auto">
  <h2 className="text-2xl font-bold my-4 text-center md:text-left text-green-600">
  Digital Marketing
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
  {digitalMarketingServices.map((service, index) => (
    <div key={index} className="flex items-center">
    <div className="mr-2 text-green-600">{service.icon}</div>
    <div>
    <h3 className="text-lg text-green-600 font-semibold">{service.name}</h3>
    <p className="text-sm">{service.description}</p>
    </div>
    </div>
    ))}
    </div>
    </div>
    </div>
    );
  };
  
  export default DigitalMarketing;
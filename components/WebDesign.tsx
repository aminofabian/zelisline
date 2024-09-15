import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import Animation from './Animation.json';
import {
  Smartphone,
  Settings,
  LayoutTemplate,
  BookMarked,
  FolderSync,
  Code,
  Braces,
} from 'lucide-react';

const WebDesignServices = [
  {
    name: 'Mobile App Design',
    description: 'Crafting intuitive and visually appealing mobile application interfaces.',
    icon: Smartphone,
  },
  {
    name: 'Customization and Settings',
    description: 'Tailoring websites to meet specific client needs and preferences.',
    icon: Settings,
  },
  {
    name: 'Frontend Development',
    description: 'Implementing responsive and interactive frontend solutions.',
    icon: LayoutTemplate,
  },
  {
    name: 'WordPress Development',
    description: 'Building websites using the WordPress platform for flexibility and ease of use.',
    icon: BookMarked,
  },
  {
    name: 'Headless WordPress',
    description: 'Implementing headless WordPress setups for decoupled frontend and backend architecture.',
    icon: FolderSync,
  },
  {
    name: 'Custom WordPress Themes',
    description: 'Designing and developing custom WordPress themes for a unique online presence.',
    icon: Code,
  },
  {
    name: 'SaaS (Software as a Service)',
    description: 'Creating scalable and cloud-based software solutions for various industries.',
    icon: Braces,
  },
];

function WebDesign() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
    <div className="flex flex-col lg:flex-row items-center gap-12">
    <motion.div 
    className="lg:w-1/2"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    >
    <h2 className="text-3xl font-bold mb-6 text-gray-800">
    <span className="text-orange-500">Web Design</span> Services
    </h2>
    <p className="text-lg text-gray-600 mb-8">
    Elevate your online presence with our cutting-edge web design services. From responsive layouts to custom solutions, we bring your vision to life.
    </p>
    <div className="bg-gradient-to-r from-orange-400 to-teal-400 p-1 rounded-2xl">
    <div className="bg-white rounded-xl overflow-hidden">
    <Lottie
    animationData={Animation}
    className="w-full h-64 object-cover"
    loop
    />
    </div>
    </div>
    </motion.div>
    
    <motion.div 
    className="lg:w-1/2"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {WebDesignServices.map((service, index) => (
      <motion.div 
      key={index}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      >
      <service.icon className="w-10 h-10 text-orange-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h3>
      <p className="text-gray-600">{service.description}</p>
      </motion.div>
    ))}
    </div>
    </motion.div>
    </div>
    </div>
  );
}

export default WebDesign;
import React from 'react';
import { motion } from 'framer-motion';
import Lottie from '@/components/ClientLottie';
import Animation1 from './Animation1.json';
import {
  Palette,
  Image as ImageIcon,
  Scissors,
  Layout,
  PenTool,
} from 'lucide-react';

const GraphicDesignServices = [
  {
    name: 'Logo Design',
    description: 'Crafting unique and memorable logos for your brand.',
    icon: Palette,
  },
  {
    name: 'Poster Design',
    description: 'Designing eye-catching posters for events and promotions.',
    icon: ImageIcon,
  },
  {
    name: 'Cutting and Editing',
    description: 'Precise cutting and editing for a polished final product.',
    icon: Scissors,
  },
  {
    name: 'Layout Design',
    description: 'Creating visually appealing layouts for various materials.',
    icon: Layout,
  },
  {
    name: 'Digital Illustration',
    description: 'Producing digital illustrations for diverse purposes.',
    icon: PenTool,
  },
];

function GraphicalDesign() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
    <motion.div 
    className="flex flex-col lg:flex-row items-center gap-12"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    >
    <div className="lg:w-1/2">
    <motion.h2 
    className="text-3xl font-bold mb-6 text-gray-800"
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2 }}
    >
    <span className="text-orange-500">Graphical Design</span> Services
    </motion.h2>
    <motion.p 
    className="text-lg text-gray-600 mb-8"
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.3 }}
    >
    Transform your ideas into stunning visuals with our expert graphical design services. We blend creativity with strategy to deliver designs that captivate and communicate.
    </motion.p>
    <motion.div 
    className="bg-gradient-to-r from-orange-400 to-teal-400 p-1 rounded-2xl"
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.4 }}
    >
    <div className="bg-white rounded-xl overflow-hidden">
    <Lottie
    animationData={Animation1}
    className="w-full h-64 object-cover"
    loop
    />
    </div>
    </motion.div>
    </div>
    
    <div className="lg:w-1/2">
    <motion.div 
    className="grid grid-cols-1 md:grid-cols-2 gap-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, staggerChildren: 0.1 }}
    >
    {GraphicDesignServices.map((service, index) => (
      <motion.div 
      key={index}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.05, backgroundColor: "#E6FFFB" }}
      transition={{ type: "spring", stiffness: 300 }}
      >
      <service.icon className="w-10 h-10 text-orange-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h3>
      <p className="text-gray-600">{service.description}</p>
      </motion.div>
    ))}
    </motion.div>
    </div>
    </motion.div>
    </div>
  );
}

export default GraphicalDesign;
import React from 'react';
import { motion } from 'framer-motion';
import Lottie from '@/components/ClientLottie';
import Animation2 from './Animation2.json';
import {
  Globe,
  Share2,
  MousePointerClick,
  FileText,
  Mail,
} from 'lucide-react';

const digitalMarketingServices = [
  {
    name: 'SEO Optimization',
    description: 'Boost your visibility in search engine results.',
    icon: Globe,
  },
  {
    name: 'Social Media Marketing',
    description: 'Engage and grow your audience across social platforms.',
    icon: Share2,
  },
  {
    name: 'PPC Advertising',
    description: 'Drive targeted traffic with effective pay-per-click campaigns.',
    icon: MousePointerClick,
  },
  {
    name: 'Content Marketing',
    description: 'Create valuable content that attracts and retains customers.',
    icon: FileText,
  },
  {
    name: 'Email Marketing',
    description: 'Build customer relationships through strategic email campaigns.',
    icon: Mail,
  },
];

const DigitalMarketing = () => {
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
    <span className="text-orange-500">Digital Marketing</span> Services
    </motion.h2>
    <motion.p 
    className="text-lg text-gray-600 mb-8"
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.3 }}
    >
    Amplify your online presence and drive growth with our comprehensive digital marketing solutions. We leverage cutting-edge strategies to connect you with your target audience.
    </motion.p>
    <motion.div 
    className="bg-gradient-to-r from-orange-400 to-teal-400 p-1 rounded-2xl"
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.4 }}
    >
    <div className="bg-white rounded-xl overflow-hidden">
    <Lottie
    animationData={Animation2}
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
    {digitalMarketingServices.map((service, index) => (
      <motion.div 
      key={index}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.05, backgroundColor: "#FFF5E6" }}
      transition={{ type: "spring", stiffness: 300 }}
      >
      <service.icon className="w-10 h-10 text-teal-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h3>
      <p className="text-gray-600">{service.description}</p>
      </motion.div>
    ))}
    </motion.div>
    </div>
    </motion.div>
    </div>
  );
};

export default DigitalMarketing;
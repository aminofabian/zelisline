'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, WordPress, Code } from 'lucide-react';
import WebDesign from './WebDesign';
import DigitalMarketing from './DigitalMarketing';
import GraphicalDesign from './CustomDesignServices';

const services = [
  { name: 'Ecommerce', component: GraphicalDesign, icon: ShoppingCart, description: 'Build powerful online stores' },
  { name: 'WordPress', component: DigitalMarketing, icon: WordPress, description: 'Create flexible content-managed sites' },
  { name: 'Custom', component: WebDesign, icon: Code, description: 'Develop tailored web applications' },
];

function Services() {
  const [selectedService, setSelectedService] = useState(services[0].name);
  
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-teal-50">
    <div className="container mx-auto px-4">
    <motion.h1 
    className="text-4xl md:text-5xl font-bold text-center mb-12"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
    From <span className="text-orange-500">Simple Blogs</span> to <span className="text-teal-500">Complex SaaS</span>,<br />We've Got You Covered
    </motion.h1>
    
    <div className="flex flex-wrap justify-center gap-4 mb-16">
    {services.map((service) => (
      <motion.button
      key={service.name}
      className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${
        selectedService === service.name
        ? 'bg-gradient-to-r from-orange-400 to-teal-400 text-white shadow-lg'
        : 'bg-white text-gray-700 hover:bg-orange-100'
      }`}
      onClick={() => setSelectedService(service.name)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      >
      <service.icon className="inline-block mr-2 mb-1" size={20} />
      {service.name}
      </motion.button>
    ))}
    </div>
    
    <AnimatePresence mode="wait">
    <motion.div
    key={selectedService}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-3xl shadow-xl p-8 min-h-[60vh] relative overflow-hidden"
    >
    <motion.div
    className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-teal-400 text-white px-4 py-2 rounded-full text-sm font-medium"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.3 }}
    >
    {services.find(s => s.name === selectedService)?.description}
    </motion.div>
    {services.find(s => s.name === selectedService)?.component()}
    </motion.div>
    </AnimatePresence>
    </div>
    </section>
  );
}

export default Services;
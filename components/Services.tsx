'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Megaphone, PenTool } from 'lucide-react';
import WebDesign from './WebDesign';
import DigitalMarketing from './DigitalMarketing';
import GraphicalDesign from './GraphicalDesign';

const services = [
  { name: 'Web Design', component: WebDesign, icon: Code },
  { name: 'Digital Marketing', component: DigitalMarketing, icon: Megaphone },
  { name: 'Graphical Design', component: GraphicalDesign, icon: PenTool },
];

function Services() {
  const [selectedService, setSelectedService] = useState(services[0].name);
  
  const renderComponent = (serviceName: string) => {
    setSelectedService(serviceName);
  };
  
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-teal-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.h2 
    className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
    From <span className="text-orange-500">Simple Business Blogs</span> to <span className="text-teal-500">Complex SaaS Applications</span>, We've Got You Covered
    </motion.h2>
    
    <motion.div 
    className="bg-white rounded-lg shadow-lg p-2 mb-12 border border-orange-200"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    >
    <div className="flex flex-col sm:flex-row justify-between items-center">
    {services.map((service) => (
      <motion.button
      key={service.name}
      className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all m-1 ${
        selectedService === service.name
        ? 'bg-gradient-to-r from-orange-400 to-teal-400 text-white'
        : 'text-gray-600 hover:bg-orange-50 hover:text-teal-600'
      }`}
      onClick={() => renderComponent(service.name)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      >
      <service.icon className={`w-5 h-5 mb-2 mx-auto ${selectedService === service.name ? 'text-white' : 'text-orange-500'}`} />
      {service.name}
      </motion.button>
    ))}
    </div>
    </motion.div>
    
    <AnimatePresence mode="wait">
    <motion.div
    key={selectedService}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-lg p-8 min-h-[60vh] border-t-4 border-teal-400"
    >
    {services.find(service => service.name === selectedService)?.component()}
    </motion.div>
    </AnimatePresence>
    </div>
    </section>
  );
}

export default Services;
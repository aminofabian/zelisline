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
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50/80 via-white to-orange-50/80">
      <div className="w-[98%] sm:max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From{' '}
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-500 inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Simple Business Blogs
            </motion.span>{' '}
            to{' '}
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-400 inline-block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Complex SaaS Applications
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            We provide comprehensive solutions tailored to your unique business needs
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-2 sm:p-3 mb-8 sm:mb-12 border border-orange-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-stretch gap-2">
            {services.map((service, index) => (
              <motion.button
                key={service.name}
                className={`flex-1 py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-sm font-medium transition-all flex flex-col items-center justify-center gap-2 sm:gap-3 group relative overflow-hidden ${
                  selectedService === service.name
                    ? 'bg-gradient-to-br from-orange-500 to-orange-400 text-white shadow-md'
                    : 'text-gray-600 hover:bg-orange-50 hover:text-orange-600'
                }`}
                onClick={() => renderComponent(service.name)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={selectedService === service.name ? { opacity: 1 } : { opacity: 0 }}
                />
                <motion.div 
                  className="relative"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                    selectedService === service.name ? 'text-white' : 'text-orange-500'
                  } transition-colors duration-300`} />
                </motion.div>
                <motion.span 
                  className="font-semibold relative"
                  whileHover={{ scale: 1.05 }}
                >
                  {service.name}
                </motion.span>
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
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-8 lg:p-10 min-h-[60vh] border border-orange-100 relative overflow-hidden"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {services.find(service => service.name === selectedService)?.component()}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Services;
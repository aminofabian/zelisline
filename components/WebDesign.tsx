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
    <div className="w-full">
      <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-12">
        <motion.div 
          className="w-full lg:w-1/2 lg:sticky lg:top-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-500 inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Web Design
            </motion.span>{' '}
            <motion.span 
              className="text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Services
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Elevate your online presence with our cutting-edge web design services. From responsive layouts to custom solutions, 
            we bring your vision to life with modern design principles and innovative technology.
          </motion.p>
          <motion.div 
            className="bg-gradient-to-br from-orange-500 to-orange-400 p-[1px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white rounded-2xl overflow-hidden">
              <Lottie
                animationData={Animation}
                className="w-full h-48 sm:h-64 object-cover"
                loop
              />
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="w-full lg:w-1/2 space-y-4 sm:space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
            {WebDesignServices.map((service, index) => (
              <motion.div 
                key={index}
                className="group bg-white/90 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100/50 backdrop-blur-sm relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100"
                  initial={false}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative">
                  <motion.div 
                    className="mb-3 sm:mb-4 p-2 bg-orange-50 rounded-lg inline-block"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
                  </motion.div>
                  <motion.h3 
                    className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 group-hover:text-orange-500 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.name}
                  </motion.h3>
                  <motion.p 
                    className="text-sm sm:text-base text-gray-600 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {service.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-6 sm:mt-8 p-4 sm:p-6 bg-orange-50/50 rounded-xl sm:rounded-2xl border border-orange-100 relative overflow-hidden group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100"
              initial={false}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="relative">
              <motion.h4 
                className="text-base sm:text-lg font-semibold text-orange-600 mb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Why Choose Our Web Design Services?
              </motion.h4>
              <motion.p 
                className="text-sm sm:text-base text-gray-600"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                We combine creativity with technical expertise to deliver websites that not only look stunning but also perform exceptionally well. 
                Our focus on user experience and modern design principles ensures your website stands out in today's digital landscape.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default WebDesign;
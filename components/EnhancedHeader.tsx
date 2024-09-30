import React from 'react';
import { motion } from 'framer-motion';

export const EnhancedHeader: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };
  
  const highlightVariants = {
    hidden: { width: '0%' },
    visible: { 
      width: '100%',
      transition: { 
        delay: 1,
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };
  
  return (
    <motion.div
    className="text-center mb-16"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    >
    <motion.h2
    className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 relative inline-block"
    variants={itemVariants}
    >
    Schedule an Appointment with{' '}
    <span className="relative">
    <span className="relative z-10 text-orange-600">Zelisline</span>
    <motion.span
    className="absolute bottom-0 left-0 h-3 bg-orange-200 z-0"
    variants={highlightVariants}
    />
    </span>
    </motion.h2>
    <motion.p
    className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
    variants={itemVariants}
    >
    Let&apos;s discuss how we can make{' '}
    <motion.span
    className="font-semibold text-orange-600"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    >
    your business standout 
    </motion.span>{' '}
    in the competitive business landscape    </motion.p>
    </motion.div>
  );
};

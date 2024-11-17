'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Sparkles, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function HelloBar() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gradient-to-r from-orange-600 to-orange-500 text-white relative overflow-hidden shadow-lg"
    >
      <div className="container mx-auto py-2 px-4 flex items-center justify-between text-xs">
        <motion.a
          href="tel:+254714282874"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-1.5 text-orange-100 hover:text-white transition-all duration-300 group"
        >
          <div className="w-4 h-4 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300">
            <Phone className="w-2.5 h-2.5" />
          </div>
          <span className="hidden sm:inline">Ready to chat? (+254) 714 28 2874</span>
          <span className="sm:hidden">Call Now</span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex-1 text-center mx-4"
        >
          <Link 
            href="/personal-website-package"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm group"
          >
            <Rocket className="w-3 h-3 text-orange-200 group-hover:rotate-12 transition-transform duration-300" />
            <span className="hidden sm:inline">✨ Launch Your Dream Website for Just 15K! Limited Time Offer</span>
            <span className="sm:hidden">✨ Website Package: 15K Only!</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="hidden sm:flex items-center gap-1.5 text-orange-100"
        >
          <Sparkles className="w-3 h-3" />
          <span className="animate-pulse">50% OFF Today!</span>
        </motion.div>
      </div>

      {/* Animated background effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
        animate={{
          x: ['0%', '100%', '0%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Glowing dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: '50%',
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

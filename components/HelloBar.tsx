'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Sparkles, Rocket, Star, PartyPopper, Gift, Zap } from 'lucide-react';
import Link from 'next/link';

const bounceAnimation = {
  initial: { y: 0 },
  animate: { 
    y: [-2, 2, -2],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const floatAnimation = {
  initial: { y: 0, x: 0 },
  animate: {
    y: [-4, 4, -4],
    x: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function HelloBar() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 text-white relative overflow-hidden shadow-lg border-b-4 border-orange-600"
    >
      {/* Fun cartoon background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto py-3 px-4 flex items-center justify-between text-sm relative">
        <motion.a
          href="tel:+254714282874"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 text-white hover:scale-105 transition-all duration-300 group relative"
        >
          <motion.div
            {...bounceAnimation}
            className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center shadow-lg group-hover:bg-orange-300"
          >
            <Phone className="w-4 h-4" />
          </motion.div>
          <div className="flex flex-col">
            <span className="hidden sm:inline font-bold">Call Us Now 🎉</span>
            <span className="hidden sm:inline text-orange-100">(+254) 714 28 2874</span>
            <span className="sm:hidden font-bold">Call Now 🎉</span>
          </div>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex-1 text-center mx-4"
        >
          <Link 
            href="/personal-website-package"
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-white/10 to-white/20 hover:from-white/20 hover:to-white/30 transition-all duration-500 backdrop-blur-sm group border-2 border-white/20 hover:border-white/40 relative shadow-xl"
          >
            <motion.div {...bounceAnimation} className="relative">
              <Rocket className="w-5 h-5 text-yellow-300" />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-1 -right-1 w-2 h-2 bg-orange-300 rounded-full"
              />
            </motion.div>
            
            <div className="flex items-center gap-2">
              <motion.div {...floatAnimation} className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-300" />
                <PartyPopper className="w-4 h-4 text-pink-300" />
                <Gift className="w-4 h-4 text-blue-300" />
              </motion.div>
              
              <motion.div 
                className="hidden sm:block font-bold text-lg"
                {...bounceAnimation}
              >
                <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
                  Launch Your Dream Website
                </span>
                <motion.span 
                  className="inline-block ml-2 transform origin-center"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-white font-extrabold">15K!</span>
                  <Zap className="w-4 h-4 text-yellow-300 inline ml-1" />
                </motion.span>
              </motion.div>
              <span className="sm:hidden font-bold">✨ 15K Only ✨</span>
            </div>

            <motion.div
              animate={{
                x: [0, 5, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-orange-400 rounded-full p-1"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="hidden sm:flex items-center gap-2 bg-orange-400 px-4 py-2 rounded-full shadow-lg"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-5 h-5 text-yellow-300" />
          </motion.div>
          <motion.span 
            className="font-bold"
            animate={{
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            50% OFF Today 🎈
          </motion.span>
        </motion.div>
      </div>

      {/* Cartoon-style floating bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              background: `radial-gradient(circle at 30% 30%, ${
                ['#FDE68A', '#FCA5A5', '#BFDBFE', '#C4B5FD'][i % 4]
              }, transparent)`,
            }}
            animate={{
              y: [-15, 5, -15],
              x: [-5, 5, -5],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

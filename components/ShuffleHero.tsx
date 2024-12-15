'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { FaArrowRight, FaStar, FaShieldAlt, FaClock, FaCheck, FaAward, FaUsers, FaRocket } from "react-icons/fa";
import ProjectInquiryModal from "./ProjectInquiryModal";
import type { ShuffleHeroProps } from "@/types/components";

const ShuffleHero: React.FC<ShuffleHeroProps> = ({ 
  title = "Transform Your Ideas into Digital Reality",
  subTitle,
  bgImage = "/hero-bg.jpg",
  buttons = [
    { link: "#", text: "Get Started" },
    { link: "/our-work", text: "View Our Work" }
  ]
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const description = "We craft stunning websites that convert visitors into customers. Join 500+ satisfied clients who trust us with their online presence.";

  const trustIndicators = [
    { icon: FaStar, text: "5-Star Rated", subtext: "on Google & Clutch", color: "text-amber-500", bgColor: "bg-amber-50" },
    { icon: FaAward, text: "Award Winning", subtext: "Agency 2023", color: "text-emerald-500", bgColor: "bg-emerald-50" },
    { icon: FaUsers, text: "500+ Clients", subtext: "Worldwide", color: "text-blue-500", bgColor: "bg-blue-50" }
  ];

  const features = [
    { icon: FaRocket, text: "Modern, Responsive Design", color: "text-purple-500" },
    { icon: FaCheck, text: "SEO Optimization", color: "text-green-500" },
    { icon: FaClock, text: "Fast Loading Speed", color: "text-blue-500" },
    { icon: FaShieldAlt, text: "24/7 Support", color: "text-orange-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const gradientTextStyle = "bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-500 to-orange-400";

  return (
    <div ref={containerRef} className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-orange-50/50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          style={{ opacity, scale }}
          className="absolute -top-4 -right-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          style={{ opacity, scale }}
          className="absolute -bottom-8 -left-8 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.15, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Trust Badges */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8"
          >
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                className={`flex items-center space-x-3 ${indicator.bgColor} px-4 py-3 rounded-xl shadow-sm border border-white/50 backdrop-blur-sm`}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`w-10 h-10 rounded-lg ${indicator.bgColor} flex items-center justify-center`}>
                  <indicator.icon className={`w-5 h-5 ${indicator.color}`} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-gray-800">{indicator.text}</div>
                  <div className="text-xs text-gray-600">{indicator.subtext}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Title */}
          {subTitle && (
            <motion.h2
              variants={itemVariants}
              className="text-lg font-semibold tracking-wide text-orange-500 uppercase mb-4"
            >
              {subTitle}
            </motion.h2>
          )}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span className={gradientTextStyle}>{title}</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Features List */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-xl shadow-sm border border-gray-100"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <feature.icon className={`w-5 h-5 ${feature.color}`} />
                <span className="text-sm font-medium text-gray-700">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          >
            {buttons.map((button, index) => (
              index === 0 ? (
                <motion.button
                  key={index}
                  onClick={() => setIsModalOpen(true)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-400 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12"
                    animate={{
                      x: ['100%', '-100%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <span className="relative">{button.text}</span>
                  <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 relative" />
                </motion.button>
              ) : (
                <Link key={index} href={button.link}>
                  <motion.button
                    className="group px-8 py-4 bg-white text-gray-800 shadow-md hover:shadow-lg border border-gray-100 hover:bg-gray-50 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{button.text}</span>
                  </motion.button>
                </Link>
              )
            ))}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8"
          >
            <div className="flex -space-x-4">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-14 h-14 rounded-full border-2 border-white bg-gradient-to-br from-orange-100 to-amber-50 shadow-lg flex items-center justify-center text-orange-600 font-medium relative"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  whileHover={{ y: -2, scale: 1.1, zIndex: 10 }}
                >
                  <Image
                    src={`/testimonial-${i + 1}.jpeg`}
                    alt={`Client ${i + 1}`}
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="text-center sm:text-left bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-sm border border-gray-100"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-gray-900 font-semibold">500+ Happy Clients</div>
              <div className="text-gray-600 text-sm">Join our success story today!</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Inquiry Modal */}
      <ProjectInquiryModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ShuffleHero;

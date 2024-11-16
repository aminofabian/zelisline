'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronRight, Sparkles } from "lucide-react";
import ButtonAlert from "./myComponents/ButtonAlert";
import { WritingPen } from "./myComponents/WritingPen";

export const ShuffleHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    "Stunning Modern Designs",
    "24/7 Expert Support",
    "SEO Optimization",
    "Fast Delivery"
  ];

  const writingTexts = [
    "We join the dots",
    "Build Stunning Websites",
    "And Our Clients Loves Us for It",
    "Bringing ideas to life",
    "Creating experiences",
    "Making web magic",
    "We build dreams",
    "Make clients happy"
  ];

  return (
    <section className="w-full px-4 sm:px-6 py-12 sm:py-16 lg:py-20 min-h-[90vh] flex items-center bg-gradient-to-br from-orange-50/80 via-white to-orange-50/80">
      <div className="w-[98%] sm:max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-orange-100/80 rounded-full mb-4 sm:mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-orange-500" />
                <span className="text-sm sm:text-base font-medium text-orange-700">
                  Transform Your Digital Presence
                </span>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col gap-3 sm:gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Web Design & Digital Marketing
              </motion.h1>

              <WritingPen texts={writingTexts} />

              <motion.p 
                className="text-gray-600 text-base sm:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                We create stunning websites and implement effective digital marketing strategies to help your business thrive online.
              </motion.p>

              {/* Project Stats */}
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex flex-col items-center p-4 bg-white/50 rounded-xl backdrop-blur-sm border border-orange-100">
                  <span className="text-3xl font-bold text-orange-500">20+</span>
                  <span className="text-sm text-slate-600">SaaS Projects</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/50 rounded-xl backdrop-blur-sm border border-orange-100">
                  <span className="text-3xl font-bold text-orange-500">100+</span>
                  <span className="text-sm text-slate-600">Websites</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/50 rounded-xl backdrop-blur-sm border border-orange-100">
                  <span className="text-3xl font-bold text-orange-500">50+</span>
                  <span className="text-sm text-slate-600">Marketed</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/50 rounded-xl backdrop-blur-sm border border-orange-100">
                  <span className="text-3xl font-bold text-orange-500">95%</span>
                  <span className="text-sm text-slate-600">Client Satisfaction</span>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <ButtonAlert
                  triggerText="Get Started"
                  title="Ready to Transform Your Business?"
                  description="Let's discuss your project and create something amazing together."
                  cancelText="Not yet"
                  continueText="Let's Begin!"
                  customTrigger={
                    <motion.button 
                      className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-400 text-white rounded-xl font-semibold flex items-center space-x-2 hover:shadow-lg hover:shadow-orange-200/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Start Your Project</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  }
                />
                
                <motion.button 
                  className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold flex items-center space-x-2 hover:bg-gray-50 transition-all duration-300 group border border-gray-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Our Work</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              <motion.div 
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex flex-col gap-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-orange-500" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Client Avatars */}
              <motion.div 
                className="mt-8 flex items-center justify-center lg:justify-start space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ delay: 1 }}
              >
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-orange-100 flex items-center justify-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                    >
                      <span className="text-sm font-medium text-orange-600">
                        {String.fromCharCode(65 + i)}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">50+</span> happy clients
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image Grid */}
          <motion.div 
            className="relative grid grid-cols-2 gap-4 sm:gap-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="animated-border rounded-2xl group cursor-pointer"
              initial={{ opacity: 0, y: 20, rotateY: -15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.4 }
              }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white">
                <motion.img 
                  src="/wanderlust.jpg" 
                  alt="Wanderlust Project" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-orange-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                  initial={false}
                  whileHover={{ 
                    background: "linear-gradient(to bottom right, rgba(249, 115, 22, 0.4), rgba(251, 146, 60, 0.3), transparent)"
                  }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <motion.span 
                    className="text-white font-semibold block text-lg sm:text-xl mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    Wanderlust Travel
                  </motion.span>
                  <motion.p 
                    className="text-white/80 text-sm hidden group-hover:block transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100"
                  >
                    Modern travel platform with immersive experiences
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="animated-border rounded-2xl group cursor-pointer"
              style={{ '--angle': '90deg' } as any}
              initial={{ opacity: 0, y: 20, rotateY: 15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.7,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: -5,
                transition: { duration: 0.4 }
              }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white">
                <motion.img 
                  src="/fitfusion.jpg" 
                  alt="FitFusion Project" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-bl from-orange-500/30 via-orange-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                  initial={false}
                  whileHover={{ 
                    background: "linear-gradient(to bottom left, rgba(249, 115, 22, 0.4), rgba(251, 146, 60, 0.3), transparent)"
                  }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <motion.span 
                    className="text-white font-semibold block text-lg sm:text-xl mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    FitFusion App
                  </motion.span>
                  <motion.p 
                    className="text-white/80 text-sm hidden group-hover:block transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100"
                  >
                    Fitness tracking and wellness coaching platform
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="animated-border rounded-2xl group cursor-pointer"
              style={{ '--angle': '180deg' } as any}
              initial={{ opacity: 0, y: 20, rotateY: -15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.4 }
              }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white">
                <motion.img 
                  src="/jobslah.jpg" 
                  alt="Jobslah Project" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 via-orange-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                  initial={false}
                  whileHover={{ 
                    background: "linear-gradient(to top right, rgba(249, 115, 22, 0.4), rgba(251, 146, 60, 0.3), transparent)"
                  }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <motion.span 
                    className="text-white font-semibold block text-lg sm:text-xl mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    Jobslah Platform
                  </motion.span>
                  <motion.p 
                    className="text-white/80 text-sm hidden group-hover:block transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100"
                  >
                    Job search and recruitment management system
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="animated-border rounded-2xl group cursor-pointer"
              style={{ '--angle': '270deg' } as any}
              initial={{ opacity: 0, y: 20, rotateY: 15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.9,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: -5,
                transition: { duration: 0.4 }
              }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white">
                <motion.img 
                  src="/rustic.jpg" 
                  alt="Rustic Project" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tl from-orange-500/30 via-orange-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                  initial={false}
                  whileHover={{ 
                    background: "linear-gradient(to top left, rgba(249, 115, 22, 0.4), rgba(251, 146, 60, 0.3), transparent)"
                  }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <motion.span 
                    className="text-white font-semibold block text-lg sm:text-xl mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1 }}
                  >
                    Rustic Restaurant
                  </motion.span>
                  <motion.p 
                    className="text-white/80 text-sm hidden group-hover:block transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100"
                  >
                    Fine dining restaurant booking and menu showcase
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShuffleHero;

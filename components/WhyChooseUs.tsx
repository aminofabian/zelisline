import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Lightbulb, Quote, ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Expertise",
      icon: CheckCircle,
      color: "text-orange-500",
      bgColor: "bg-orange-100",
      points: [
        "Crafting websites that don't suck",
        "Staying ahead of design trends",
        "Mastering user experience",
        "Building responsive designs",
        "Optimizing for peak performance",
      ]
    },
    {
      title: "Innovation",
      icon: Lightbulb,
      color: "text-teal-500",
      bgColor: "bg-teal-100",
      points: [
        "Pioneering web solutions",
        "Continuous learning and growth",
        "Pushing design boundaries",
        "Anticipating future trends",
        "Adapting to industry shifts",
      ]
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-teal-50">
    <div className="container mx-auto px-4">
    <motion.h2 
    className="text-5xl font-bold mb-16 text-center"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
    Why <span className="text-orange-500">Choose</span> <span className="text-teal-500">Us</span>?
    </motion.h2>
    
    <motion.div 
    className="grid grid-cols-1 md:grid-cols-2 gap-12"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    >
    {reasons.map((reason, index) => (
      <motion.div 
      key={index} 
      className={`${reason.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
      variants={itemVariants}
      >
      <h3 className={`text-3xl font-semibold mb-6 flex items-center ${reason.color}`}>
      <reason.icon size={40} className="mr-4" />
      {reason.title}
      </h3>
      <ul className="space-y-4">
      {reason.points.map((point, idx) => (
        <motion.li 
        key={idx} 
        className="flex items-start"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: idx * 0.1 }}
        >
        <ArrowRight size={20} className={`${reason.color} mr-3 mt-1 flex-shrink-0`} />
        <span className="text-gray-700 text-lg">{point}</span>
        </motion.li>
      ))}
      </ul>
      </motion.div>
    ))}
    </motion.div>
    
    <motion.div 
    className="mt-20 bg-white p-10 rounded-3xl shadow-xl"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    >
    <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">
    <Quote size={48} className="text-orange-400 inline-block mr-4 mb-2" />
    We don&apos;t just build websites, we craft digital experiences
    </h3>
    <p className="text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
    We&apos;re not just designers and developers; we&apos;re digital artisans passionate about creating exceptional online experiences. With a blend of creativity, expertise, and cutting-edge technology, we transform your vision into a stunning digital reality.
    </p>
    <motion.button 
    className="mt-10 px-8 py-3 bg-gradient-to-r from-orange-400 to-teal-400 text-white font-semibold rounded-full text-lg shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto block"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    >
    Let&apos;s Create Something Amazing
    </motion.button>
    </motion.div>
    </div>
    </section>
  );
};

export default WhyChooseUs;
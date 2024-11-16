import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Lightbulb, Quote, ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Expertise",
      icon: CheckCircle,
      color: "text-orange-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100/80",
      borderColor: "border-orange-200",
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
      color: "text-orange-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100/80",
      borderColor: "border-orange-200",
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
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-500">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We combine expertise and innovation to deliver exceptional digital solutions
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className={`${reason.bgColor} p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${reason.borderColor} backdrop-blur-sm`}
              variants={itemVariants}
            >
              <h3 className={`text-2xl sm:text-3xl font-semibold mb-6 flex items-center ${reason.color}`}>
                <reason.icon className="w-8 h-8 sm:w-10 sm:h-10 mr-4" />
                {reason.title}
              </h3>
              <ul className="space-y-4">
                {reason.points.map((point, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + idx * 0.1 }}
                  >
                    <ArrowRight className={`w-5 h-5 ${reason.color} mr-3 mt-1 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1`} />
                    <span className="text-gray-700 text-base sm:text-lg font-medium">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
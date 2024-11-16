import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Globe, Briefcase, ShoppingCart, Building, Palette, AlarmClockCheck } from 'lucide-react';
import { packages } from "@/data/pricing/HomePage";

// Define types for our data structures
type IconName = keyof typeof iconMap;

interface Package {
  name: string;
  startingPrice: number;
  description: string;
  features: string[];
}

const iconMap = {
  "Personal Website Package (templated)": Globe,
  "Small Business Package (templated)": Briefcase,
  "E-Commerce Website Package (custom)": ShoppingCart,
  "Enterprise Package (custom)": Building,
  "Maintenance Package (monthly)": AlarmClockCheck,
  "Additional Services": Palette,
};

// Update ButtonAlert props
interface ButtonAlertProps {
  triggerText: string;
  title: string;
  description: string;
  cancelText: string;
  continueText: string;
  customTrigger?: React.ReactNode;
}

const ButtonAlert: React.FC<ButtonAlertProps> = ({ triggerText, title, description, cancelText, continueText, customTrigger }) => {
  // Implement your ButtonAlert component here
  return null; // Placeholder return
};

export default function Pricing() {
  return (
    <div className="w-full">
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
          <motion.span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Perfect
          </motion.span>{' '}
          <motion.span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-400"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Pricing Plans
          </motion.span>
        </motion.h2>
        <motion.p 
          className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Select the plan that best suits your needs and start creating amazing content today.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {packages.map((packageItem, index) => (
          <motion.div
            key={packageItem.name}
            className={`relative group overflow-hidden rounded-2xl border ${
              packageItem.name === "Enterprise Package (custom)"
                ? 'border-orange-200 bg-gradient-to-br from-orange-50 to-white'
                : 'border-gray-200 bg-white'
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            {packageItem.name === "Enterprise Package (custom)" && (
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-orange-600 to-orange-400 text-white text-sm font-medium rounded-b-lg"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                Most Popular
              </motion.div>
            )}
            
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100"
              initial={false}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="p-6 sm:p-8 relative">
              <motion.div 
                className="mb-5"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{packageItem.name}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{packageItem.description}</p>
              </motion.div>
              
              <motion.div 
                className="mb-6 sm:mb-8"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-baseline">
                  <span className="text-sm sm:text-base font-medium text-gray-900 mr-1">KES</span>
                  <span className="text-4xl sm:text-5xl font-bold text-gray-900">{packageItem.startingPrice * 100}</span>
                  <span className="text-gray-600 ml-2">/ month</span>
                </div>
              </motion.div>
              
              <motion.ul 
                className="space-y-3 mb-6 sm:mb-8"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {packageItem.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + featureIndex * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.button
                className={`w-full py-3 px-4 rounded-xl text-center font-medium transition-all ${
                  packageItem.name === "Enterprise Package (custom)"
                    ? 'bg-gradient-to-r from-orange-600 to-orange-400 text-white hover:shadow-lg hover:shadow-orange-200'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
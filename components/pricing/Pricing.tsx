import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Globe, Briefcase, ShoppingCart, Building, Palette, AlarmClockCheck } from 'lucide-react';
import ButtonAlert from "../myComponents/ButtonAlert";
import { packages } from "@/data/pricing/HomePage";

const iconMap = {
  "Personal Website Package (templated)": Globe,
  "Small Business Package (templated)": Briefcase,
  "E-Commerce Website Package (custom)": ShoppingCart,
  "Enterprise Package (custom)": Building,
  "Maintenance Package (monthly)": AlarmClockCheck,
  "Additional Services": Palette,
};

export default function Pricing() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-teal-50 py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
    <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center mb-16"
    >
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
    Choose Your <span className="text-orange-500">Perfect</span> Package
    </h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    Select the plan that best suits your needs and start creating amazing content today.
    </p>
    </motion.div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {packages.map((packageItem, index) => {
      const IconComponent = iconMap[packageItem.name] || Globe;
      return (
        <motion.div 
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl flex flex-col"
        >
        <div className="p-8 flex-grow">
        <div className="flex items-center justify-between mb-4">
        <IconComponent className="w-12 h-12 text-emerald-500" />
        <span className="text-2xl font-bold text-emerald-500">${packageItem.startingPrice}</span>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">{packageItem.name}</h3>
        <p className="text-gray-600 mb-6">{packageItem.description}</p>
        <ul className="space-y-3 mb-8">
        {packageItem.features.map((feature, i) => (
          <li key={i} className="flex items-start">
          <CheckCircle className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-1" />
          <span className="text-gray-700">{feature}</span>
          </li>
        ))}
        </ul>
        </div>
        <div className="px-8 pb-8 mt-auto">
        <ButtonAlert
        triggerText={
          <motion.div 
          className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-orange-600 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          >
          <span>Get Started</span>
          <ArrowRight size={20} />
          </motion.div>
        }
        title={`Ready to start with ${packageItem.name}?`}
        descriptionComponent={`Fill in the form to get started with your ${packageItem.name.toLowerCase()}.`}
        cancelText="Not yet"
        continueText="Let's go!"
        />
        </div>
        </motion.div>
      );
    })}
    </div>
    </div>
    </section>
  );
}
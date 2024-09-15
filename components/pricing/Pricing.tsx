import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Search, PenTool, Image, Video, LucideIcon } from 'lucide-react';

// Define a type for the package names
type PackageName = 
| "Personal Website Package (templated)"
| "Small Business Package (templated)"
| "E-Commerce Website Package (custom)"
| "Enterprise Package (custom)"
| "Maintenance Package (monthly)"
| "Additional Services";

// Create a mapping of package names to icons
const iconMap: Record<PackageName, LucideIcon> = {
  "Personal Website Package (templated)": Globe,
  "Small Business Package (templated)": Search,
  "E-Commerce Website Package (custom)": PenTool,
  "Enterprise Package (custom)": Image,
  "Maintenance Package (monthly)": Video,
  "Additional Services": Globe,
};

// Define the structure of a package item
interface PackageItem {
  name: PackageName;
  icon: LucideIcon;
  features: string[];  
  description: string;
  price: string;
  
  
}

const packages: PackageItem[] = [
  {
    name: "Personal Website Package (templated)",
    description: "Description for Personal Website Package",
    price: "$500",
    icon: Globe,
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    name: "Small Business Package (templated)",
    description: "Description for Small Business Package",
    price: "$1000",
    icon: Search,
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    name: "E-Commerce Website Package (custom)",
    description: "Description for E-Commerce Website Package",
    price: "$2000",
    icon: PenTool,
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    name: "Enterprise Package (custom)",
    description: "Description for Enterprise Package",
    price: "$5000",
    icon: Image,
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    name: "Maintenance Package (monthly)",
    description: "Description for Maintenance Package",
    price: "$100/month",
    icon: Video,
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    name: "Additional Services",
    description: "Description for Additional Services",
    price: "Varies",
    icon: Globe,
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
];

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
    <motion.h2
    className="text-4xl font-bold text-center mb-12 text-gray-800"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
    Browse Our <span className="text-orange-500">Pricing Packages</span>
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {packages.map((packageItem, index) => {
      const IconComponent = iconMap[packageItem.name] || Globe;
      return (
        <motion.div 
        key={index}
        className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        >
        <div className="flex items-center space-x-2 mb-4">
        <IconComponent className="w-5 h-5" />
        <h3 className="text-xl font-bold">{packageItem.name}</h3>
        </div>
        <p className="text-gray-600 mb-4">{packageItem.description}</p>
        <p className="text-gray-800 font-bold">{packageItem.price}</p>
        </motion.div>
      );
    })}
    </div>
    </div>
    </div>
  );
};

export default Pricing;

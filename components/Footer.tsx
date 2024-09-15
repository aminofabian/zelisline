'use client';

import React from 'react';
import { motion } from "framer-motion";
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: "Our Services",
      links: ["Digital Marketing", "Web Design", "Content Marketing", "Logo Design", "Video Production", "SEO Services", "Social Media"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Privacy Policy"]
    },
    {
      title: "Resources",
      links: ["Blog", "Guides", "API Documentation", "Community"]
    },
    {
      title: "Contact",
      links: ["Support", "Sales", "Partnerships", "Feedback"]
    }
  ];
  
  const socialIcons = [
    { Icon: Twitter, href: "https://www.twitter.com/zelisline", color: "text-blue-400" },
    { Icon: Instagram, href: "https://www.instagram.com/zelisline", color: "text-pink-500" },
    { Icon: Facebook, href: "https://www.facebook.com/zelisline", color: "text-blue-600" },
    { Icon: Linkedin, href: "https://www.linkedin.com/company/zelisline-ltd", color: "text-blue-700" }
  ];
  
  return (
    <footer className="bg-gradient-to-br from-orange-50 via-white to-purple-50 text-gray-800 py-16 mt-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
    {footerSections.map((section, index) => (
      <motion.div 
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      >
      <h3 className="text-lg font-semibold mb-4 text-orange-500">{section.title}</h3>
      <ul className="space-y-2">
      {section.links.map((link, linkIndex) => (
        <motion.li 
        key={linkIndex}
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
        <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">{link}</a>
        </motion.li>
      ))}
      </ul>
      </motion.div>
    ))}
    </div>
    
    <motion.div 
    className="border-t border-orange-200 pt-8 flex flex-col md:flex-row justify-between items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    >
    <div className="mb-4 md:mb-0">
    <Image src="/zelisline.svg" alt="Zelisline Logo" width={150} height={50} />
    </div>
    <div className="flex space-x-6 mb-4 md:mb-0">
    {socialIcons.map(({ Icon, href, color }, index) => (
      <motion.a
      key={index}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${color} hover:text-orange-500 transition-colors duration-200`}
      whileHover={{ y: -3, scale: 1.1 }}
      >
      <Icon size={24} />
      </motion.a>
    ))}
    </div>
    <div className="text-sm text-gray-500">
    © {currentYear} Zelisline. All rights reserved.
    </div>
    </motion.div>
    </div>
    </footer>
  );
};

export default Footer;
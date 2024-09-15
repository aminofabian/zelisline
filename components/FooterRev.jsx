'use client';

import React from 'react';
import { motion } from "framer-motion";
import { Twitter, Github, Youtube, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const FooterRev = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { href: "/digitalmarketing", text: "Digital Marketing" },
        { href: "/webdevelopment", text: "Web Development Services (WordPress)" },
        { href: "/ecommerce-website-development", text: "Ecommerce Website Design & Development" },
        { href: "#", text: "Content Marketing" },
        { href: "#", text: "Video Production" },
        { href: "#", text: "Social Media Services" },
        { href: "#", text: "Graphic Design/Logo Design" },
      ]
    },
    {
      title: "Company",
      links: [
        { href: "#", text: "Who We Are" },
        { href: "#", text: "Client Reviews" },
        { href: "#", text: "Hover, Focus, & Other States" },
        { href: "#", text: "Our Portfolio" },
        { href: "#", text: "Partner with Us" },
        { href: "#", text: "Blog" },
        { href: "#", text: "Contact Us" },
      ]
    },
    {
      title: "Helpful Links",
      links: [
        { href: "#", text: "Privacy Policy" },
        { href: "#", text: "Terms of Use" },
        { href: "#", text: "Your Privacy Choices" },
        { href: "#", text: "FAQs" },
        { href: "#", text: "Topics and Insights" },
        { href: "#", text: "Testimonials" },
        { href: "#", text: "Tell Us About Your Project" },
      ]
    },
    {
      title: "Find Us",
      links: [
        { href: "#", text: "GitHub", Icon: Github },
        { href: "#", text: "Discord", Icon: MessageCircle },
        { href: "#", text: "Twitter", Icon: Twitter },
        { href: "#", text: "YouTube", Icon: Youtube },
      ]
    }
  ];

  const socialIcons = [
    { Icon: Github, href: "#", color: "text-gray-800" },
    { Icon: MessageCircle, href: "#", color: "text-indigo-500" },
    { Icon: Twitter, href: "#", color: "text-blue-400" },
    { Icon: Youtube, href: "#", color: "text-red-600" },
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
                    <Link href={link.href} className="text-gray-600 hover:text-orange-500 transition-colors duration-200 flex items-center">
                      {link.Icon && <link.Icon className="w-4 h-4 mr-2" />}
                      {link.text}
                    </Link>
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
                className={`${color} hover:text-orange-500 transition-colors duration-200`}
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
          <div className="text-sm text-gray-500">
            <span className="text-orange-500 font-medium">Zelisline</span> is a registered trademark of Zelisline, Inc. Copyright © {currentYear} Zelisline, Inc.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterRev;
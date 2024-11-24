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
    <footer className="bg-gradient-to-br from-orange-50/80 via-white to-purple-50/80 text-gray-800 py-12 sm:py-16 mt-24 border-t border-orange-100/50">
      <div className="w-full transition-all duration-300 ease-in-out md:ml-[80px] lg:ml-[160px]">
        <div className="max-w-[calc(100%-2rem)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {footerSections.map((section, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <h3 className="text-lg font-semibold mb-6 text-orange-500 inline-block pb-2 border-b-2 border-orange-200">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li 
                      key={linkIndex}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Link 
                        href={link.href} 
                        className="text-gray-600 hover:text-orange-500 transition-all duration-200 flex items-center text-sm lg:text-base group"
                      >
                        {link.Icon && <link.Icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />}
                        <span className="border-b border-transparent group-hover:border-orange-300">
                          {link.text}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="border-t border-orange-200/70 pt-8 mt-8 flex flex-col lg:flex-row justify-between items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="order-1 lg:order-1">
              <Image 
                src="/zelisline.svg" 
                alt="Zelisline Logo" 
                width={150} 
                height={50}
                className="transform hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="flex space-x-8 order-2 lg:order-2">
              {socialIcons.map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className={`${color} hover:text-orange-500 transition-all duration-200`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Icon size={22} className="hover:drop-shadow-md" />
                </motion.a>
              ))}
            </div>
            <div className="text-sm text-gray-500 order-3 lg:order-3 text-center w-full px-4">
              <div className="flex flex-wrap justify-center items-center gap-1 break-words max-w-[90%] mx-auto">
                <span className="text-orange-500 font-medium whitespace-normal">Zelisline</span>
                <span className="whitespace-normal">is a registered trademark of Zelisline, Inc.</span>
                <span className="whitespace-normal">Copyright {currentYear} Zelisline, Inc.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default FooterRev;
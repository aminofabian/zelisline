"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaServer, FaCheckCircle, FaStar, FaShieldAlt, FaClock, FaRocket, FaPalette, FaGlobe, FaShareAlt } from "react-icons/fa";
import { MdDesignServices, MdDomain, MdPages, MdArticle } from "react-icons/md";
import ProjectInquiryModal from "@/components/ProjectInquiryModal";
import Image from "next/image";

const SmallBusinessPackage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: <MdDesignServices className="w-6 h-6" />,
      title: "Templated Design",
      description: "Choose from our collection of professional pre-made layouts",
      benefits: ["Modern, responsive templates", "Easy customization", "Industry-specific designs"]
    },
    {
      icon: <MdPages className="w-6 h-6" />,
      title: "10 Essential Pages",
      description: "Complete website structure with all necessary pages",
      benefits: ["Home & About pages", "Services & Portfolio", "Blog & Contact form"]
    },
    {
      icon: <FaSearch className="w-6 h-6" />,
      title: "SEO Setup",
      description: "Get found by your target audience online",
      benefits: ["Keyword optimization", "Meta tags setup", "Search console integration"]
    },
    {
      icon: <FaShareAlt className="w-6 h-6" />,
      title: "Social Integration",
      description: "Connect with your audience across platforms",
      benefits: ["Social media links", "Share buttons", "Feed integration"]
    },
    {
      icon: <FaGlobe className="w-6 h-6" />,
      title: "Domain & Hosting",
      description: "Everything you need to go live",
      benefits: ["Custom domain name", "Fast, secure hosting", "SSL certificate"]
    },
    {
      icon: <MdArticle className="w-6 h-6" />,
      title: "Content Support",
      description: "Help with your website content",
      benefits: ["Content structure", "Basic copywriting", "Image optimization"]
    },
  ];

  const testimonials = [
    {
      name: "David Kamau",
      role: "Restaurant Owner",
      image: "/api/placeholder/64/64",
      content: "The templated approach saved us time and money while still giving us a professional look. Exactly what we needed!",
      rating: 5
    },
    {
      name: "Jane Muthoni",
      role: "Retail Shop Owner",
      image: "/api/placeholder/64/64",
      content: "Perfect solution for our small business. The social media integration really helped boost our online presence.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-8 lg:pt-16">
      {/* Logo - Fixed on the right */}
      <div className="fixed right-8 top-8 z-10 hidden lg:block">
        <Image
          src="/zelisline-logo.png"
          width={600}
          height={160}
          alt="Zelisline — grow together"
          priority
          className="w-40 h-auto"
        />
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Trust Badges */}
            <div className="mb-6 flex flex-col items-center">
              <motion.div 
                className="flex justify-center space-x-3 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <FaStar className="text-amber-400 w-8 h-8 lg:w-10 lg:h-10" />
                  </motion.div>
                ))}
              </motion.div>
              <motion.span 
                className="text-gray-600 font-medium text-lg lg:text-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Trusted by 200+ Small Businesses
              </motion.span>
            </div>

            {/* Mobile Logo - Only shows on mobile */}
            <div className="lg:hidden flex justify-center mb-6">
              <Image
                src="/zelisline-logo.png"
                width={600}
                height={160}
                alt="Zelisline — grow together"
                priority
                className="w-36 h-auto"
              />
            </div>

            {/* Main Heading Section */}
            <div className="bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-2xl p-6 lg:p-8 mb-8 lg:mb-12 mx-auto max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Launch Your Business Website<br />
                with Our <span className="text-amber-500">Templated Solution</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get a professional, feature-rich website perfect for small businesses - 
                <span className="font-semibold text-amber-600"> at an affordable price</span>
              </p>
            </div>
            
            {/* Pricing Card */}
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-lg mx-auto mb-16 border border-gray-100">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="text-gray-400 line-through text-xl">KES 65,000/month</div>
                <div className="bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-bold">
                  23% OFF
                </div>
              </div>
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl p-8 mb-8">
                <p className="text-4xl md:text-5xl font-bold text-center">KES 50,000</p>
                <p className="text-center opacity-90 mt-2 text-lg">per month</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <FaPalette className="text-amber-500 mr-4 w-5 h-5 flex-shrink-0" />
                  <span className="text-lg">Choose from premium templates</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <FaRocket className="text-amber-500 mr-4 w-5 h-5 flex-shrink-0" />
                  <span className="text-lg">10 custom pages included</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <FaShareAlt className="text-amber-500 mr-4 w-5 h-5 flex-shrink-0" />
                  <span className="text-lg">Social media integration</span>
                </li>
              </ul>
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold px-8 py-4 rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Business Website Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Everything Your Business Needs Online</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our small business package includes all the essential features to establish your professional online presence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-amber-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400 w-5 h-5" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join 200+ successful small businesses who've transformed their online presence with our templated solution.
            </p>
            <div className="flex flex-col items-center space-y-4">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="inline-block bg-white text-amber-500 font-semibold px-12 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Business Online Today
              </motion.button>
              <p className="text-sm opacity-90">✓ 30-day money-back guarantee • ✓ No hidden fees • ✓ Cancel anytime</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Inquiry Modal */}
      <ProjectInquiryModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default SmallBusinessPackage;

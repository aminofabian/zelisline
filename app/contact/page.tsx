'use client'

import Head from "next/head";
import SideNav from "@/components/SideNav";
import Footer from "@/components/Footer";
import React, { useState } from 'react'; 
import 'reactjs-popup/dist/index.css';
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import Lottie from 'lottie-react';
import contactAnimation from '@/public/phone-flow.json';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "Make sure to complete all fields before submitting your message.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.status === 200) {
        toast({
          title: "Message sent successfully! ",
          description: "We'll get back to you within 24 hours. Check your email for confirmation.",
          variant: "default"
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Message not sent",
        description: "Please try again or contact us directly at zelisline@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const ContactInfo = ({ icon: Icon, title, content, action }: { icon: any, title: string, content: string, action?: () => void }) => (
    <motion.div 
      className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={action}
    >
      <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full text-white">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </motion.div>
  );

  return (
    <>
      <Head>
        <title>Contact Us - Zelisline | Web Development & Digital Solutions</title>
        <meta name="description" content="Get in touch with Zelisline for professional web development, digital marketing, and custom solutions. We'll respond within 24 hours!" />
        <link rel="canonical" href='/contact' />
      </Head>
      <div className="flex min-h-screen relative md:flex-row md:overflow-hidden xl:px-40 md:px-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-screen lg:w-44 md:border-r border-slate-50 justify-center align-middle">
          <div className="hidden md:flex"><SideNav /></div>
        </div>
        
        <div className="flex-grow">
          <div className="m-3 rounded-2xl">
            <section className="max-w-7xl mx-auto py-12">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
                  >
                    Let's Build Something Amazing Together
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-gray-600 max-w-2xl mx-auto"
                  >
                    Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
                  </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8"
                  >
                    <div className="w-full max-w-lg mx-auto">
                      <Lottie
                        animationData={contactAnimation}
                        loop={true}
                        className="w-full h-auto"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ContactInfo 
                        icon={Mail} 
                        title="Email Us"
                        content="zelisline@gmail.com"
                        action={() => window.location.href = 'mailto:zelisline@gmail.com'}
                      />
                      <ContactInfo 
                        icon={Phone} 
                        title="Call Us"
                        content="+254 714 282 874"
                        action={() => window.location.href = 'tel:+254714282874'}
                      />
                      <ContactInfo 
                        icon={MapPin} 
                        title="Location"
                        content="Nairobi, Kenya"
                      />
                      <ContactInfo 
                        icon={Send} 
                        title="Response Time"
                        content="Within 24 Hours"
                      />
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white p-8 rounded-2xl shadow-xl"
                  >
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>
                      
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full relative bg-gradient-to-r ${
                          isSubmitting 
                            ? 'from-orange-400 to-orange-300 cursor-not-allowed' 
                            : 'from-orange-600 to-orange-400 hover:shadow-lg hover:shadow-orange-200/50'
                        } text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300`}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      >
                        <div className="relative flex items-center justify-center">
                          <span className={`transition-opacity duration-200 flex items-center gap-2 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                            Send Message <ArrowRight size={20} />
                          </span>
                          {isSubmitting && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="flex gap-1">
                                <motion.div
                                  className="w-2 h-2 bg-white rounded-full"
                                  animate={{
                                    y: ["0%", "-50%", "0%"],
                                  }}
                                  transition={{
                                    duration: 0.6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0,
                                  }}
                                />
                                <motion.div
                                  className="w-2 h-2 bg-white rounded-full"
                                  animate={{
                                    y: ["0%", "-50%", "0%"],
                                  }}
                                  transition={{
                                    duration: 0.6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.2,
                                  }}
                                />
                                <motion.div
                                  className="w-2 h-2 bg-white rounded-full"
                                  animate={{
                                    y: ["0%", "-50%", "0%"],
                                  }}
                                  transition={{
                                    duration: 0.6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.4,
                                  }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.button>
                    </form>
                  </motion.div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;

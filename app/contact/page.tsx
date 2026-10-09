'use client'

import Head from "next/head";
import SideNav from "@/components/SideNav";
import Footer from "@/components/Footer";
import React, { useState } from 'react'; 
import 'reactjs-popup/dist/index.css';
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight, Loader2 } from 'lucide-react';
import Lottie from '@/components/ClientLottie';
import contactAnimation from '@/public/phone-flow.json';
import SimpleCaptcha from '@/components/SimpleCaptcha';

function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    if (!isCaptchaValid) errors.captcha = 'Please complete the captcha verification';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isCaptchaValid) {
      toast({
        title: "⚠️ Verification Required",
        description: "Please complete the captcha verification before submitting.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    if (!validateForm()) {
      toast({
        title: "⚠️ Form Incomplete",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      toast({
        title: "✨ Success!",
        description: (
          <div className="flex flex-col space-y-2">
          <p>Thank you for your message!</p>
          <p className="text-sm text-gray-500">
          We&apos;ve received your inquiry and will get back to you within 24-48 hours.
          </p>
          </div>
        ),
        className: "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsCaptchaValid(false);
    } catch (error) {
      toast({
        title: "❌ Error",
        description: (
          <div className="flex flex-col space-y-2">
          <p>Failed to send your message.</p>
          <p className="text-sm text-red-500">
          Please try again or contact us directly at zelisline@gmail.com
          </p>
          </div>
        ),
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
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
    <div className="w-screen lg:w-72 md:border-r border-slate-50 justify-center align-middle">
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
    Let&apos;s Build Something Amazing Together
    </motion.h1>
    <motion.p 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    className="text-lg text-gray-600 max-w-2xl mx-auto"
    >
    Have a project in mind? We&apos;d love to hear about it. Drop us a message and we&apos;ll get back to you within 24 hours.
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
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
    <div className="mb-6">
    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name *</label>
    <input
    type="text"
    id="name"
    name="name"
    value={formData.name}
    onChange={handleInputChange}
    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
      formErrors.name ? 'border-red-500' : 'border-gray-300'
    }`}
    placeholder="Your name"
    />
    {formErrors.name && (
      <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
    )}
    </div>
    <div className="mb-6">
    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email *</label>
    <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleInputChange}
    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
      formErrors.email ? 'border-red-500' : 'border-gray-300'
    }`}
    placeholder="your@email.com"
    />
    {formErrors.email && (
      <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
    )}
    </div>
    <div className="mb-6">
    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message *</label>
    <textarea
    id="message"
    name="message"
    value={formData.message}
    onChange={handleInputChange}
    rows={4}
    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
      formErrors.message ? 'border-red-500' : 'border-gray-300'
    }`}
    placeholder="Your message"
    />
    {formErrors.message && (
      <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
    )}
    </div>
    
    {/* Captcha */}
    <div className="mb-6">
    <SimpleCaptcha onValidate={setIsCaptchaValid} />
    {formErrors.captcha && (
      <p className="mt-1 text-sm text-red-500">{formErrors.captcha}</p>
    )}
    </div>
    
    <motion.button
    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
    disabled={isSubmitting}
    type="submit"
    className={`w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white ${
      isSubmitting
      ? 'bg-gray-400 cursor-not-allowed'
      : 'bg-orange-600 hover:bg-orange-700'
    }`}
    >
    {isSubmitting ? (
      <span className="flex items-center">
      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
      Sending...
      </span>
    ) : (
      <span className="flex items-center">
      Send Message
      <ArrowRight className="ml-2 h-5 w-5" />
      </span>
    )}
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

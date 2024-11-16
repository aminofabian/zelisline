'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from "@/components/ui/use-toast";

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const budgetRanges = [
  'KES 25,000 - 50,000',
  'KES 50,000 - 100,000',
  'KES 100,000 - 250,000',
  'KES 250,000+',
];

const timeframes = [
  'As soon as possible',
  'Within 1 month',
  'Within 3 months',
  'Flexible',
];

const ProjectInquiryModal = ({ isOpen, onClose }: ProjectInquiryModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDescription: '',
    budget: '',
    timeframe: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if required fields are filled
    if (!formData.name || !formData.email || !formData.projectDescription || !formData.budget || !formData.timeframe) {
      toast({
        title: "Please fill in all required fields",
        description: "Make sure to complete all required fields before submitting your inquiry.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-project-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Project Inquiry Submitted Successfully",
          description: "Thank you for your inquiry! We'll get back to you as soon as possible.",
          variant: "default"
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectDescription: '',
          budget: '',
          timeframe: '',
        });
        onClose();
      } else {
        const errorData = await response.json();
        toast({
          title: "Submission Failed",
          description: errorData.error || "Failed to submit your inquiry. Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while submitting your inquiry. Please try again later.",
        variant: "destructive"
      });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={e => e.stopPropagation()}
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="relative p-6 sm:p-8">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Tell Us About Your Project</h2>
                <p className="text-gray-600">Help us understand your vision better</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Your phone number"
                  />
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Description
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Budget Range */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors appearance-none bg-white"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Timeframe */}
                  <div>
                    <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-1">
                      Desired Timeframe
                    </label>
                    <select
                      id="timeframe"
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors appearance-none bg-white"
                    >
                      <option value="">Select timeframe</option>
                      {timeframes.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-3 bg-gradient-to-r relative overflow-hidden ${
                    isSubmitting 
                      ? 'from-orange-400 to-orange-300 cursor-not-allowed' 
                      : 'from-orange-600 to-orange-400 hover:shadow-lg hover:shadow-orange-200/50'
                  } text-white rounded-lg font-semibold transition-all duration-300`}
                >
                  <div className="relative flex items-center justify-center">
                    <span className={`transition-opacity duration-200 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                      Submit Inquiry
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
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectInquiryModal;

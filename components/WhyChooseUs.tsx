'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2,
  Gem,
  Rocket,
  Clock,
  Shield,
  Users,
  Cloud,
  Workflow
} from 'lucide-react';

const features = [
  {
    title: "Expert Development Team",
    icon: Code2,
    description: "Senior developers with 5+ years of experience in modern tech stacks including React, Node.js, and Cloud technologies.",
    position: "lg:top-24 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-full"
  },
  {
    title: "Agile Methodology",
    icon: Workflow,
    description: "We follow Agile practices with regular sprints, daily standups, and continuous delivery to ensure project success.",
    position: "lg:top-1/2 lg:-right-24 lg:translate-x-full lg:-translate-y-1/2"
  },
  {
    title: "Rapid Development",
    icon: Clock,
    description: "Quick turnaround times with our optimized development process and CI/CD pipeline implementation.",
    position: "lg:top-24 lg:right-1/2 lg:translate-x-1/2 lg:-translate-y-full"
  },
  {
    title: "Quality Assurance",
    icon: Gem,
    description: "Comprehensive testing strategy including unit tests, integration tests, and end-to-end testing for robust applications.",
    position: "lg:bottom-1/2 lg:-left-24 lg:-translate-x-full lg:-translate-y-1/2"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Expert cloud architecture and DevOps practices ensuring scalable, secure, and maintainable applications.",
    position: "lg:bottom-24 lg:right-1/2 lg:translate-x-1/2 lg:translate-y-full"
  }
];

const stats = [
  { number: "100+", label: "Projects Delivered" },
  { number: "99.9%", label: "Uptime Guaranteed" },
  { number: "24/7", label: "Support Available" }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            Why <span className="text-blue-600">Choose</span> Us?
          </h2>
          <p className="mt-4 text-gray-600">
            Delivering excellence in software development with cutting-edge technologies
          </p>
        </motion.div>

        <div className="relative">
          {/* Center Circle - Hidden on mobile, shown on lg screens */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full shadow-lg flex-col items-center justify-center text-center p-6 z-10"
          >
            <Shield className="w-12 h-12 text-orange-500 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Security First Approach</h3>
            <p className="text-sm text-gray-600">
              We prioritize security at every stage of development, implementing best practices, regular security audits, and compliance measures to protect your application.
            </p>
          </motion.div>

          {/* Mobile Security Card - Shown on mobile, hidden on lg screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden mb-8 bg-white rounded-lg p-6 shadow-sm"
          >
            <div className="flex flex-col items-center text-center">
              <Shield className="w-12 h-12 text-orange-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Security First Approach</h3>
              <p className="text-sm text-gray-600">
                We prioritize security at every stage of development, implementing best practices, regular security audits, and compliance measures to protect your application.
              </p>
            </div>
          </motion.div>

          {/* Feature Cards Container */}
          <div className="lg:min-h-[600px] relative">
            {/* Mobile Layout - Stack */}
            <div className="lg:hidden space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <feature.icon className="w-8 h-8 text-orange-500 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop Layout - Radial */}
            <div className="hidden lg:block">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`absolute bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ${feature.position}`}
                  style={{ width: '300px' }}
                >
                  <feature.icon className="w-8 h-8 text-orange-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 border rounded-lg p-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h4 className="text-3xl font-bold text-blue-600">{stat.number}</h4>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
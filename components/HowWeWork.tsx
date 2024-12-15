'use client';

import { motion } from "framer-motion";
import { MessageSquare, FileSearch, Calendar, FileCheck, CreditCard, Rocket, Award, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Project Details",
    description: "Share your project vision and requirements with us through our detailed brief form.",
    color: "bg-blue-500",
  },
  {
    icon: FileSearch,
    title: "Scope Analysis",
    description: "Our team analyzes your requirements and prepares a comprehensive project scope.",
    color: "bg-purple-500",
  },
  {
    icon: Calendar,
    title: "Timeline & Quote",
    description: "We provide you with a detailed timeline and transparent cost breakdown.",
    color: "bg-pink-500",
  },
  {
    icon: FileCheck,
    title: "Milestone Planning",
    description: "Project is divided into 4 clear milestones for better management and delivery.",
    color: "bg-orange-500",
  },
  {
    icon: CreditCard,
    title: "First Milestone",
    description: "Begin with the first milestone payment to kickstart your project.",
    color: "bg-green-500",
  },
  {
    icon: Rocket,
    title: "Development",
    description: "Our team starts building your project with regular updates and communication.",
    color: "bg-cyan-500",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function HowWeWork() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-base font-semibold text-orange-600 tracking-wide uppercase"
          >
            Our Process
          </motion.h2>
          <motion.h3 
            variants={itemVariants}
            className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl"
          >
            How We Work
          </motion.h3>
          <motion.p 
            variants={itemVariants}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-500"
          >
            A streamlined process to turn your vision into reality
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative group"
              >
                <div className="relative p-6 bg-white rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-xl ${step.color} text-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {index !== steps.length - 1 && (
                    <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full text-orange-600"
          >
            <Award className="w-5 h-5" />
            <span className="font-medium">100% Satisfaction Guaranteed</span>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
            We're committed to delivering high-quality results that exceed your expectations.
            Our milestone-based approach ensures transparency and satisfaction at every step.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Lightbulb, 
  Clock, 
  Target, 
  Users, 
  Shield, 
  Code, 
  Sparkles,
  ArrowRight 
} from 'lucide-react';

const reasons = [
  {
    title: "Expert Team",
    icon: Users,
    description: "Our seasoned professionals bring years of industry experience to your project",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    points: [
      "Senior developers with 5+ years experience",
      "UI/UX design specialists",
      "Dedicated project managers",
      "Quality assurance experts",
      "24/7 support team",
    ]
  },
  {
    title: "Proven Process",
    icon: Target,
    description: "A streamlined development process that delivers results",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
    points: [
      "Clear project milestones",
      "Regular progress updates",
      "Transparent communication",
      "Agile methodology",
      "Continuous delivery",
    ]
  },
  {
    title: "Quality First",
    icon: Shield,
    description: "We never compromise on the quality of our deliverables",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
    points: [
      "Rigorous testing protocols",
      "Best coding practices",
      "Performance optimization",
      "Security-first approach",
      "Scalable architecture",
    ]
  },
  {
    title: "Innovation",
    icon: Sparkles,
    description: "Staying ahead with cutting-edge technologies and trends",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-100",
    points: [
      "Latest tech stack",
      "Modern design patterns",
      "AI integration capabilities",
      "Progressive web apps",
      "Cloud-native solutions",
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold text-orange-600 tracking-wide uppercase">
            Why Choose Us
          </h2>
          <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            The Right Team for Your Project
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                className="relative group"
              >
                <div className={`h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${reason.borderColor}`}>
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${reason.bgColor} ${reason.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        {reason.title}
                      </h4>
                      <p className="mt-1 text-gray-600">
                        {reason.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {reason.points.map((point, pointIndex) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: pointIndex * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className={`w-5 h-5 ${reason.color} flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-600">{point}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`mt-6 flex items-center space-x-2 text-sm font-medium ${reason.color} cursor-pointer`}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full text-orange-600">
            <span className="font-medium">Ready to get started?</span>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us with their digital presence.
            Let's build something amazing together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
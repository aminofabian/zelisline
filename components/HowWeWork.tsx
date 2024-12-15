'use client';

import { motion } from "framer-motion";
import { MessageSquare, FileSearch, Calendar, FileCheck, CreditCard, Rocket } from "lucide-react";
import { useEffect, useState } from "react";

const steps = [
  {
    id: 'project-details',
    icon: MessageSquare,
    title: "Project Details",
    description: "Share your project vision",
    connections: ['scope-analysis'],
    type: 'circle',
  },
  {
    id: 'scope-analysis',
    icon: FileSearch,
    title: "Scope Analysis",
    description: "We analyze requirements",
    connections: ['timeline'],
    type: 'rounded',
  },
  {
    id: 'timeline',
    icon: Calendar,
    title: "Timeline & Quote",
    description: "Get detailed timeline",
    connections: ['milestone'],
    type: 'rounded',
  },
  {
    id: 'milestone',
    icon: FileCheck,
    title: "Milestone Planning",
    description: "4-phase breakdown",
    connections: ['payment'],
    type: 'rounded',
  },
  {
    id: 'payment',
    icon: CreditCard,
    title: "First Milestone",
    description: "Begin development",
    connections: ['development'],
    type: 'diamond',
  },
  {
    id: 'development',
    icon: Rocket,
    title: "Development",
    description: "Project execution",
    connections: [],
    type: 'circle',
  }
];

export default function HowWeWork() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold text-orange-600 tracking-wide uppercase">
            Our Process
          </h2>
          <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            How We Work
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            A streamlined process to turn your vision into reality
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3.5, 0 7"
                  fill="rgba(107, 114, 128, 0.3)"
                />
              </marker>
            </defs>
            {steps.map(step => 
              step.connections.map(connectionId => {
                const startEl = document.getElementById(step.id);
                const endEl = document.getElementById(connectionId);
                if (startEl && endEl) {
                  const startRect = startEl.getBoundingClientRect();
                  const endRect = endEl.getBoundingClientRect();
                  const containerRect = startEl.parentElement?.getBoundingClientRect();
                  if (containerRect) {
                    const startX = startRect.left - containerRect.left + startRect.width;
                    const startY = startRect.top - containerRect.top + startRect.height/2;
                    const endX = endRect.left - containerRect.left;
                    const endY = endRect.top - containerRect.top + endRect.height/2;
                    return (
                      <line
                        key={`${step.id}-${connectionId}`}
                        x1={startX}
                        y1={startY}
                        x2={endX}
                        y2={endY}
                        stroke="rgba(107, 114, 128, 0.2)"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                        markerEnd="url(#arrowhead)"
                      />
                    );
                  }
                }
                return null;
              })
            )}
          </svg>

          {/* Process steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const shapeClasses = {
                circle: 'rounded-full',
                rounded: 'rounded-2xl',
                diamond: 'rounded-xl transform rotate-45',
              }[step.type];

              const iconColors = {
                'project-details': 'bg-blue-100 text-blue-600',
                'scope-analysis': 'bg-purple-100 text-purple-600',
                'timeline': 'bg-pink-100 text-pink-600',
                'milestone': 'bg-orange-100 text-orange-600',
                'payment': 'bg-green-100 text-green-600',
                'development': 'bg-cyan-100 text-cyan-600',
              }[step.id];

              return (
                <motion.div
                  key={step.id}
                  id={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative z-10"
                >
                  <div className={`relative bg-white ${shapeClasses} p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100`}>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${iconColors}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="inline-flex items-center justify-center w-6 h-6 text-sm font-semibold rounded-full bg-gray-100 text-gray-700">
                            {index + 1}
                          </span>
                          <h4 className="text-lg font-semibold text-gray-900">
                            {step.title}
                          </h4>
                        </div>
                        <p className="mt-2 text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full text-orange-600">
            <span className="font-medium">Ready to start your project?</span>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our proven process ensures clear communication, timely delivery, and exceptional results.
            Start your journey with us today.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

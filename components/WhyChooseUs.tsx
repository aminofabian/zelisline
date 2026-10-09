'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Workflow,
  Clock,
  Gem,
  Cloud,
  Shield,
} from 'lucide-react';

const reasons = [
  { title: 'A senior team', icon: Code2, description: 'Engineers with years of experience across React, Node and cloud infrastructure.' },
  { title: 'Agile delivery', icon: Workflow, description: 'Regular sprints, visible progress and continuous delivery — not a black box.' },
  { title: 'Fast turnaround', icon: Clock, description: 'An optimised process and CI/CD pipeline that keeps momentum high.' },
  { title: 'Quality assurance', icon: Gem, description: 'Unit, integration and end-to-end testing built into every project.' },
  { title: 'Cloud & DevOps', icon: Cloud, description: 'Architecture that stays scalable, secure and maintainable as you grow.' },
  { title: 'Security first', icon: Shield, description: 'Best practices, regular audits and compliance applied at every stage.' },
];

const stats = [
  { number: '100+', label: 'Projects delivered' },
  { number: '99.9%', label: 'Uptime targeted' },
  { number: '24/7', label: 'Support available' },
];

const WhyChooseUs = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky intro */}
          <div className="lg:col-span-4 lg:sticky lg:top-6 lg:self-start">
            <span className="eyebrow">Why Zelisline</span>
            <h2 className="mt-3 max-w-[16ch] font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
              A partner you can actually rely on
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-ink-soft">
              We are small on purpose. That means the people who scope your project
              are the people who build it — and who are still there when you need
              changes a year later.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-sand-200 bg-sand-200 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-sand-50 px-4 py-5">
                  <div className="font-display text-2xl text-orange-700">{stat.number}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.1em] text-ink-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Reason list */}
          <div className="lg:col-span-8">
            <div className="sm:grid sm:grid-cols-2 sm:gap-x-10">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
                    className="group border-t border-sand-200 py-6"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-orange-600" />
                      <h3 className="font-display text-lg text-ink">{reason.title}</h3>
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{reason.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

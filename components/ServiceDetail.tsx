'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import Lottie from '@/components/ClientLottie';

export interface ServiceItem {
  name: string;
  description: string;
  icon: LucideIcon;
}

interface ServiceDetailProps {
  kicker: string;
  title: string;
  lead: string;
  animation: object;
  items: ServiceItem[];
}

/**
 * Shared presentation for a single service discipline. Keeping all three
 * services on one component guarantees a consistent rhythm across the section.
 */
const ServiceDetail: React.FC<ServiceDetailProps> = ({ kicker, title, lead, animation, items }) => {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5 lg:sticky lg:top-6 lg:self-start">
        <span className="eyebrow">{kicker}</span>
        <h3 className="mt-3 font-display text-2xl text-ink sm:text-3xl">{title}</h3>
        <p className="mt-4 text-pretty leading-relaxed text-ink-soft">{lead}</p>

        <div className="mt-7 overflow-hidden rounded-xl border border-sand-200 bg-sand-50 p-4">
          <Lottie animationData={animation} loop className="mx-auto h-40 w-full max-w-[220px]" />
        </div>
      </div>

      <dl className="lg:col-span-7">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="group flex items-start gap-4 border-b border-sand-200 py-4 first:border-t first:border-sand-200"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <dt className="font-display text-lg text-ink">{item.name}</dt>
                <dd className="mt-0.5 text-sm leading-relaxed text-ink-soft">{item.description}</dd>
              </div>
            </motion.div>
          );
        })}
      </dl>
    </div>
  );
};

export default ServiceDetail;

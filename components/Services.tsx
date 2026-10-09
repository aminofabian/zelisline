'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Megaphone, PenTool } from 'lucide-react';
import WebDesign from './WebDesign';
import DigitalMarketing from './DigitalMarketing';
import GraphicalDesign from './GraphicalDesign';

const services = [
  { name: 'Web Design', label: 'Web & product', component: WebDesign, icon: Code },
  { name: 'Digital Marketing', label: 'Growth & SEO', component: DigitalMarketing, icon: Megaphone },
  { name: 'Graphical Design', label: 'Brand & design', component: GraphicalDesign, icon: PenTool },
];

function Services() {
  const [selectedService, setSelectedService] = useState(services[0].name);
  const active = services.find((service) => service.name === selectedService)!;

  return (
    <section>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 sm:items-end">
          <div>
            <span className="eyebrow">What we do</span>
            <h2 className="mt-3 max-w-[22ch] font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
              Three disciplines, one steady team
            </h2>
          </div>
          <p className="text-pretty leading-relaxed text-ink-soft sm:pb-1">
            Whether you need a simple business blog or a complex SaaS application, we
            bring strategy, design and engineering under one roof.
          </p>
        </div>

        {/* Tab list */}
        <div
          role="tablist"
          aria-label="Services"
          className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-b border-sand-200"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = selectedService === service.name;
            return (
              <button
                key={service.name}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedService(service.name)}
                className={`group relative flex items-center gap-2.5 pb-4 pt-1 text-left transition-colors ${
                  isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                }`}
              >
                <Icon className={`h-4 w-4 transition-colors ${isActive ? 'text-orange-600' : 'text-ink-muted group-hover:text-orange-600'}`} />
                <span className="text-sm font-medium sm:text-base">{service.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="service-underline"
                    className="absolute inset-x-0 -bottom-px h-0.5 bg-orange-600"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {active.component()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Services;

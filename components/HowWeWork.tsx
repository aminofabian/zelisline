'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, MessageSquare, FileSearch, Calendar, FileCheck, CreditCard, Rocket } from 'lucide-react';

const steps = [
  { icon: MessageSquare, title: 'Project details', description: 'You share the vision and the problem you want solved.' },
  { icon: FileSearch, title: 'Scope analysis', description: 'We map requirements, constraints and success measures.' },
  { icon: Calendar, title: 'Timeline & quote', description: 'A clear, itemised proposal with a realistic schedule.' },
  { icon: FileCheck, title: 'Milestone planning', description: 'Work is broken into four checkpoints you can follow.' },
  { icon: CreditCard, title: 'First milestone', description: 'Development kicks off once the first milestone is set.' },
  { icon: Rocket, title: 'Build & launch', description: 'We ship, test and support well beyond go-live.' },
];

export default function HowWeWork() {
  return (
    <section>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Process</span>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
              How we work
            </h2>
          </div>
          <p className="max-w-md text-pretty leading-relaxed text-ink-soft">
            A calm, transparent process — no mystery, no surprises. You always know
            what is happening and what comes next.
          </p>
        </div>

        <div className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
                className="group border-t border-sand-200 py-7"
              >
                <div className="flex items-center gap-4">
                  <span className="font-display text-sm tabular-nums text-orange-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-sand-200 transition-colors duration-300 group-hover:bg-orange-300" />
                  <Icon className="h-5 w-5 text-ink-muted transition-colors duration-300 group-hover:text-orange-600" />
                </div>
                <h3 className="mt-5 font-display text-xl text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-start gap-3 border-t border-sand-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-pretty text-ink-soft">
            Clear communication, on-time delivery, and results you can build on.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 font-medium text-orange-700 transition-colors hover:text-orange-800"
          >
            Start your project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

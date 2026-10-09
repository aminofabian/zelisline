'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Phone } from 'lucide-react';
import Link from 'next/link';

export default function HelloBar() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-40 bg-ink text-sand-100"
    >
      <div className="mx-auto flex h-10 max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <a
          href="tel:+254714282874"
          className="group flex items-center gap-2 text-xs font-medium text-sand-100 transition-colors hover:text-white sm:text-sm"
        >
          <Phone className="h-3.5 w-3.5 text-orange-400" />
          <span className="hidden sm:inline">Talk to a strategist —</span>
          <span className="tabular-nums">(+254) 714 28 2874</span>
        </a>

        <Link
          href="/personal-website-package"
          className="group flex items-center gap-2 text-xs font-medium text-sand-100 transition-colors hover:text-white sm:text-sm"
        >
          <span className="relative hidden h-1.5 w-1.5 sm:block">
            <span className="absolute inset-0 rounded-full bg-orange-400" />
            <span className="absolute inset-0 animate-ping rounded-full bg-orange-400/60" />
          </span>
          <span className="hidden sm:inline">
            Launch offer · Personal websites from{' '}
            <span className="font-semibold text-white">KES 15,000</span>
          </span>
          <span className="sm:hidden">
            Sites from <span className="font-semibold text-white">15K</span>
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 text-orange-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}

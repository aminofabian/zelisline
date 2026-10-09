'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Copy, Phone } from 'lucide-react';

const PHONE = '+254714282874';
const PHONE_LABEL = '(+254) 714 28 2874';

const CtaBand = () => {
  const [copied, setCopied] = useState(false);

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(PHONE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the tel: link still works */
    }
  };

  return (
    <section className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute inset-0 grid-motif-light" aria-hidden />
        <div
          className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 [background:radial-gradient(circle_at_center,rgba(194,65,12,0.35),transparent_70%)]"
          aria-hidden
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="relative max-w-2xl"
        >
          <span className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-orange-400">Ready when you are</span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-white sm:text-[2.75rem] sm:leading-[1.1]">
            Let&apos;s build something worth talking about
          </h2>
          <p className="mt-5 max-w-lg text-pretty leading-relaxed text-sand-300">
            Bring us the idea, the problem or the rough sketch. We&apos;ll help you
            shape it into something your customers remember.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-orange-500"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <div className="inline-flex items-center gap-3 rounded-xl border border-white/15 px-5 py-3">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 text-base font-medium text-white transition-colors hover:text-orange-300"
              >
                <Phone className="h-4 w-4 text-orange-400" />
                <span className="tabular-nums">{PHONE_LABEL}</span>
              </a>
              <button
                onClick={copyNumber}
                aria-label="Copy phone number"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-sand-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBand;

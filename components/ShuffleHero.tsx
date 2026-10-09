'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ProjectInquiryModal from "./ProjectInquiryModal";
import type { ShuffleHeroProps } from "@/types/components";

const index = [
  { n: "01", label: "Web design & development", href: "/webdevelopment" },
  { n: "02", label: "Digital marketing & SEO", href: "/digitalmarketing" },
  { n: "03", label: "E-commerce storefronts", href: "/ecommerce-website-development" },
];

const facts = [
  { k: "Studio", v: "Nairobi, Kenya" },
  { k: "Projects shipped", v: "100+" },
  { k: "Experience", v: "5+ years" },
  { k: "Support", v: "Always on" },
];

const ShuffleHero: React.FC<ShuffleHeroProps> = ({
  title = "Web development & digital marketing for ambitious brands",
  subTitle,
  buttons = [
    { link: "/contact", text: "Start a project" },
    { link: "/our-work", text: "See our work" },
  ],
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const primary = buttons[0];
  const secondary = buttons[1];

  return (
    <section className="relative overflow-hidden border-b border-sand-200 bg-sand-50">
      {/* Structural grid motif — a quiet nod to the "line" in Zelisline */}
      <div className="pointer-events-none absolute inset-0 grid-motif mask-fade-b opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] [background:radial-gradient(circle_at_center,rgba(254,215,170,0.5),transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1400px] px-5 pb-16 pt-14 sm:px-6 md:pb-24 md:pt-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12"
        >
          {/* Statement */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500" />
              <span className="eyebrow">{subTitle ?? "Software studio · Nairobi"}</span>
            </div>

            <h1 className="mt-5 max-w-[18ch] font-display text-[2.15rem] font-medium leading-[1.06] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[3.6rem]">
              {title}
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
              We partner with founders and teams across East Africa to design,
              build and grow the products their businesses run on — from a
              considered marketing site to complex, custom software.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-orange-700"
              >
                {primary.text}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.button>
              <Link
                href={secondary.link}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-sand-300 bg-white/60 px-6 py-3.5 text-base font-medium text-ink transition-colors hover:border-ink/30 hover:bg-white"
              >
                {secondary.text}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Service index */}
          <div className="lg:col-span-5 lg:pl-8">
            <div className="border-t border-sand-200">
              {index.map((row, i) => (
                <motion.div
                  key={row.n}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                >
                  <Link
                    href={row.href}
                    className="group flex items-baseline gap-4 border-b border-sand-200 py-4 transition-colors hover:border-ink/30"
                  >
                    <span className="font-display text-xs text-ink-muted">{row.n}</span>
                    <span className="flex-1 font-display text-lg text-ink transition-colors group-hover:text-orange-700 sm:text-xl">
                      {row.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange-600" />
                  </Link>
                </motion.div>
              ))}
            </div>
            <p className="mt-4 font-hand text-xl text-orange-700/90">
              …and we stay on after launch.
            </p>
          </div>
        </motion.div>

        {/* Facts strip */}
        <motion.dl
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-sand-200 pt-8 sm:grid-cols-4"
        >
          {facts.map((f) => (
            <div key={f.k}>
              <dt className="text-xs uppercase tracking-[0.14em] text-ink-muted">{f.k}</dt>
              <dd className="mt-1.5 font-display text-lg text-ink">{f.v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <ProjectInquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default ShuffleHero;

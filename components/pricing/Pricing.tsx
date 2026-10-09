import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';
import { packages } from "@/data/pricing/HomePage";
import Link from 'next/link';

const getPackageLink = (packageName: string) => {
  switch (packageName) {
    case 'Personal Website Package (templated)':
      return '/personal-website-package';
    case 'Small Business Package (templated)':
      return '/small-business-package';
    case 'Enterprise Package (custom)':
      return '/enterprise-package';
    default:
      return '#';
  }
};

const getShortName = (name: string) => name.replace(/\s*\(.*\)\s*/, '');

const formatPrice = (value: number) =>
  new Intl.NumberFormat('en-KE', { maximumFractionDigits: 0 }).format(value * 100);

const isMonthly = (name: string) => name.toLowerCase().includes('monthly');

const FEATURED = 'Enterprise Package (custom)';

export default function Pricing() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 sm:items-end">
          <div>
            <span className="eyebrow">Pricing</span>
            <h2 className="mt-3 max-w-[20ch] font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
              Straightforward packages, no guesswork
            </h2>
          </div>
          <p className="text-pretty leading-relaxed text-ink-soft sm:pb-1">
            Starting points to help you plan. Every build is scoped individually —
            tell us what you need and we&apos;ll put together an exact quote.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => {
            const featured = pkg.name === FEATURED;
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
                className={`relative flex flex-col rounded-2xl p-7 transition-colors duration-300 ${
                  featured
                    ? 'bg-ink text-sand-100'
                    : 'border border-sand-200 bg-white hover:border-ink/25'
                }`}
              >
                {featured && (
                  <span className="absolute right-7 top-7 rounded-full bg-orange-600 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white">
                    Most popular
                  </span>
                )}

                <h3 className={`font-display text-xl ${featured ? 'text-white' : 'text-ink'}`}>
                  {getShortName(pkg.name)}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${featured ? 'text-sand-300' : 'text-ink-soft'}`}>
                  {pkg.description}
                </p>

                <div className={`my-6 border-t ${featured ? 'border-white/15' : 'border-sand-200'}`} />

                <div className="flex items-baseline gap-2">
                  <span className={`text-xs font-medium ${featured ? 'text-sand-300' : 'text-ink-muted'}`}>From KES</span>
                  <span className={`font-display text-4xl ${featured ? 'text-white' : 'text-ink'}`}>
                    {formatPrice(pkg.startingPrice)}
                  </span>
                  {isMonthly(pkg.name) && (
                    <span className={`text-sm ${featured ? 'text-sand-300' : 'text-ink-muted'}`}>/mo</span>
                  )}
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? 'text-orange-400' : 'text-orange-600'}`} />
                      <span className={`text-sm leading-relaxed ${featured ? 'text-sand-200' : 'text-ink-soft'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={getPackageLink(pkg.name)}
                  className={`group mt-8 inline-flex items-center justify-between rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${
                    featured
                      ? 'bg-orange-600 text-white hover:bg-orange-500'
                      : 'border border-sand-300 text-ink hover:border-ink/40 hover:bg-sand-50'
                  }`}
                >
                  Get started
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

const testimonials = [
  {
    client: 'Jobslah',
    websiteLink: 'https://www.jobslah.com/',
    screenshot: 'jobslah.png',
    review: "Fabian and the Team really exceeded our expectations. They're a small team, but their dedication and attention to detail are second to none. They took the time to understand our business, our goals and our target audience - something other agencies we've worked with didn't bother doing. The end result was a visually stunning website that not only represents our brand perfectly, but also drives results. We couldn't be happier with Jobslah's new website!",
  },
  {
    client: 'Hawaii Family Dental',
    websiteLink: 'https://hawaiifamilydental.com/',
    screenshot: 'hfd.png',
    review: "Zelisline isn't just a web design agency, they're true partners. We've been working with them for years and every project has been a success. They have an incredible eye for design and their technical skills are top-notch. But what sets them apart is their commitment to customer satisfaction. They truly care about our business and always go above and beyond to make sure we're happy with the final product. Hawaii Family Dental's website is a testament to their expertise and dedication.",
  },
  {
    client: 'Wanderlust Travel Co.',
    websiteLink: 'https://www.wanderlusttravelco.com/',
    screenshot: 'wander.png',
    review: "Working with Fabian and the team at Zelisline was an absolute pleasure. They're not just web designers, they're storytellers. They were able to capture the essence of our travel company and create a website that truly speaks to our audience. From the stunning visuals to the user-friendly interface, everything was executed flawlessly. We've received so many compliments on our new site and it's all thanks to Zelisline!",
  },
  {
    client: 'Rustic Retreats',
    websiteLink: 'https://www.rustic-retreats.uk/',
    screenshot: 'rustic.png',
    review: "Slow but steady wins the race and that's exactly how we felt working with Zelisline. They were patient, methodical, and thorough in their approach to designing our website. We appreciated their attention to detail and open communication throughout the entire process. The end result was a beautiful website that perfectly captures the rustic and cozy feel of our retreats. We highly recommend Zelisline to any business looking for a top-notch web design team.",
  },
  {
    client: 'FitFusion Fitness',
    websiteLink: 'https://www.fitfusionfitness.com/',
    screenshot: 'fitness.png',
    review: "As a fitness studio, it was important for us to have a website that not only looked great but also functioned seamlessly. Zelisline delivered on both accounts and more. They incorporated our branding into the design effortlessly and created a user-friendly platform for our clients to navigate. We've seen an increase in website traffic and inquiries since launching our new site.",
  },
];

function Portfolio() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const go = useCallback(
    (dir: number) => setIndex((prev) => (prev + dir + count) % count),
    [count]
  );

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % count), 7000);
    return () => clearInterval(timer);
  }, [count]);

  const current = testimonials[index];

  return (
    <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
      <div className="grid border border-sand-200 lg:grid-cols-2">
        {/* Screenshot */}
        <div className="bg-sand-100 p-5 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.client}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="border border-sand-200 bg-white p-2"
            >
              <Image
                src={current.screenshot}
                alt={`${current.client} website screenshot`}
                width={1200}
                height={800}
                className="h-auto w-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quote */}
        <div className="flex flex-col justify-between gap-8 bg-sand-50 p-6 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.figure
              key={current.client}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <span className="eyebrow">Client story</span>
              <blockquote className="mt-5 text-pretty text-lg leading-relaxed text-ink-soft">
                &ldquo;{current.review}&rdquo;
              </blockquote>
              <figcaption className="mt-6 font-display text-lg text-ink">
                {current.client}
              </figcaption>
              <Link
                href={current.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-orange-700 transition-colors hover:text-orange-800"
              >
                Visit site
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.figure>
          </AnimatePresence>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center border border-sand-300 text-ink transition-colors hover:border-ink/40 hover:text-orange-700"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center border border-sand-300 text-ink transition-colors hover:border-ink/40 hover:text-orange-700"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
            <span className="ml-1 font-display text-sm tabular-nums text-ink-muted">
              {index + 1} / {count}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

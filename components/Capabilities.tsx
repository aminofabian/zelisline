import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const capabilities = [
  { n: '01', label: 'Web design & development', href: '/webdevelopment' },
  { n: '02', label: 'Digital marketing & SEO', href: '/digitalmarketing' },
  { n: '03', label: 'E-commerce storefronts', href: '/ecommerce-website-development' },
];

const Capabilities: React.FC = () => {
  return (
    <section className="border-y border-sand-200 bg-sand-50">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow">What we can build for you</span>
            <h2 className="mt-3 max-w-[18ch] font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
              Three disciplines, one steady team
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-ink-soft">
              The same team behind the work above can take your idea from a rough sketch to
              something your customers remember.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-sand-200">
              {capabilities.map((item) => (
                <Link
                  key={item.n}
                  href={item.href}
                  className="group flex items-baseline gap-4 border-b border-sand-200 py-5 transition-colors hover:border-ink/30"
                >
                  <span className="font-display text-xs text-ink-muted">{item.n}</span>
                  <span className="flex-1 font-display text-xl text-ink transition-colors group-hover:text-orange-700">
                    {item.label}
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange-600" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;

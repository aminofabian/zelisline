'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, MessageCircle, Twitter, Youtube } from 'lucide-react';

const footerSections = [
  {
    title: 'Services',
    links: [
      { href: '/webdevelopment', text: 'Web Development' },
      { href: '/digitalmarketing', text: 'Digital Marketing' },
      { href: '/seo', text: 'SEO Services' },
      { href: '/ecommerce-website-development', text: 'E-commerce' },
      { href: '/services', text: 'Brand & Design' },
    ],
  },
  {
    title: 'Packages',
    links: [
      { href: '/personal-website-package', text: 'Personal Website' },
      { href: '/small-business-package', text: 'Small Business' },
      { href: '/contact', text: 'Enterprise / Custom' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', text: 'About' },
      { href: '/our-work', text: 'Our Work' },
      { href: '/blog', text: 'Journal' },
      { href: '/contact', text: 'Contact' },
      { href: '/client', text: 'Client Portal' },
    ],
  },
];

const socials = [
  { Icon: Linkedin, href: 'https://www.linkedin.com/company/zelisline-ltd', label: 'LinkedIn' },
  { Icon: Twitter, href: 'https://www.twitter.com/zelisline', label: 'Twitter' },
  { Icon: MessageCircle, href: 'https://wa.me/254714282874', label: 'WhatsApp' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
  { Icon: Github, href: '#', label: 'GitHub' },
];

const FooterRev = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-sand-200 bg-sand-100">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" aria-label="Zelisline home">
              <Image src="/zelisline-logo.png" alt="Zelisline — grow together" width={600} height={160} className="h-9 w-auto" />
            </Link>
            <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-ink-soft">
              A Nairobi software studio designing, building and growing digital
              products for businesses across East Africa.
            </p>
            <div className="mt-6 flex items-center gap-1">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-white hover:text-orange-700"
                >
                  <Icon className="h-[1.15rem] w-[1.15rem]" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {section.links.map((link) => (
                    <li key={`${section.title}-${link.text}`}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-soft transition-colors hover:text-orange-700"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-sand-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-muted">
            © {currentYear} Zelisline. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink-muted">
            <Link href="#" className="transition-colors hover:text-orange-700">Privacy Policy</Link>
            <Link href="#" className="transition-colors hover:text-orange-700">Terms of Use</Link>
            <a href="mailto:zelisline@gmail.com" className="transition-colors hover:text-orange-700">
              zelisline@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterRev;

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';
import Logo from './Logo';
import { primaryLinks, secondaryLinks } from './NavLink';

const allLinks = [...primaryLinks, ...secondaryLinks];

/**
 * Small-screen navigation. Rendered once at the layout level so every page
 * shares the same mobile header and drawer.
 */
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="sticky top-0 z-50 md:hidden">
      <div className="flex h-14 items-center justify-between border-b border-sand-200 bg-sand-50/90 px-4 backdrop-blur-md">
        <Link href="/" aria-label="Zelisline home">
          <Logo className="h-7" />
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-lg border border-sand-200 bg-white px-3 py-2 text-sm font-medium text-ink transition-colors hover:border-sand-300"
          aria-label="Open menu"
        >
          <Menu className="h-4 w-4" />
          Menu
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex flex-col bg-sand-50"
          >
            <div className="flex h-14 items-center justify-between border-b border-sand-200 px-4">
              <Logo className="h-7" />
              <button
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-sand-200 bg-white text-ink transition-colors hover:border-sand-300"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
              {allLinks.map((link, i) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3.5 transition-colors ${
                        isActive ? 'bg-orange-50 text-orange-700' : 'text-ink hover:bg-sand-100'
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${isActive ? 'text-orange-600' : 'text-ink-muted'}`} />
                      <span className="text-lg font-medium">{link.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="space-y-3 border-t border-sand-200 p-4">
              <a
                href="tel:+254714282874"
                className="flex items-center justify-center gap-2 text-sm font-medium text-ink-soft"
              >
                <Phone className="h-4 w-4 text-orange-600" />
                <span className="tabular-nums">(+254) 714 28 2874</span>
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-4 py-3.5 text-base font-semibold text-white"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

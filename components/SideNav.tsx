'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Phone } from 'lucide-react';
import Logo from './Logo';
import NavLinks from './NavLink';

/**
 * Desktop navigation rail.
 *
 * Deliberately a calm, pinned vertical rail rather than the previous
 * drag-anywhere floating panel — navigation should be predictable.
 */
function SideNav() {
  return (
    <nav className="sticky top-6 hidden w-[252px] shrink-0 md:block" aria-label="Primary">
      <div className="flex max-h-[calc(100vh-3rem)] flex-col overflow-y-auto rounded-2xl border border-sand-200 bg-white p-3">
        <div className="flex items-center px-2 pb-4 pt-2">
          <Link
            href="/"
            aria-label="Zelisline home"
            className="-ml-1.5 flex items-center rounded-xl px-2 py-1.5 transition-colors hover:bg-sand-100"
          >
            <Logo className="h-9" />
          </Link>
        </div>

        <NavLinks />

        <div className="mt-auto pt-6">
          <div className="rounded-xl bg-ink p-4 text-sand-100">
            <p className="font-display text-[0.95rem] leading-snug text-white">
              Have a project in mind?
            </p>
            <p className="mt-1 text-xs leading-relaxed text-sand-300">
              Tell us what you&apos;re building — we&apos;ll reply within a day.
            </p>
            <Link
              href="/contact"
              className="group mt-4 flex items-center justify-between rounded-lg bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="tel:+254714282874"
              className="mt-3 flex items-center gap-2 px-1 text-xs text-sand-300 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="tabular-nums">(+254) 714 28 2874</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SideNav;

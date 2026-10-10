"use client";

import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import Logo from "@/components/Logo";
import Action from "@/components/system/Action";
import Container from "@/components/system/Container";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { formatIndex } from "@/lib/format";
import { cn } from "@/lib/utils";

const MENU_ID = "mobile-menu";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string | null;
}

const isCurrent = (pathname: string | null, href: string) =>
  pathname === href || (href !== "/" && Boolean(pathname?.startsWith(`${href}/`)));

export default function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  // Headless UI's Dialog gives us a real focus trap, focus restore, ESC handling
  // and scroll lock — things the previous hand-rolled version was missing.
  return (
    <Dialog open={isOpen} onClose={onClose} id={MENU_ID} className="fixed inset-0 z-[60]">
      <Dialog.Title className="sr-only">Site menu</Dialog.Title>
      <div className="flex h-full flex-col bg-paper">
        <Container className="flex h-16 shrink-0 items-center justify-between border-b border-ink">
          <Logo className="h-7" />
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 border border-ink px-3 py-2 font-mono text-[12px] uppercase tracking-[0.1em] hover:bg-ink hover:text-paper"
          >
            <X className="h-4 w-4" aria-hidden />
            Close
          </button>
        </Container>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto">
          <Container>
            <ul>
              {navigation.primary.map((item, index) => {
                const isActive = isCurrent(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex items-baseline gap-5 border-b border-ink py-5 transition-colors",
                        isActive ? "bg-ink px-4 text-paper" : "hover:bg-grey-50"
                      )}
                    >
                      <span className="font-mono text-[12px] text-ink-muted">{formatIndex(index + 1)}</span>
                      <span className="display-wide flex-1 font-display text-[1.9rem] font-bold uppercase leading-none">
                        {item.label}
                      </span>
                      <ArrowUpRight className="h-5 w-5 shrink-0 self-center" aria-hidden />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[12px] uppercase tracking-[0.1em]">
              {navigation.secondary.map((item) => (
                <Link key={item.href} href={item.href} onClick={onClose} className="underline underline-offset-4">
                  {item.label}
                </Link>
              ))}
            </div>
          </Container>
        </nav>

        <Container className="grid gap-4 border-t border-ink py-6">
          <Action href="/contact" className="w-full" arrow>
            Start a project
          </Action>
          <a
            href={site.phone.href}
            className="flex items-center justify-center font-mono text-[12px] uppercase tracking-[0.1em] text-ink-muted"
          >
            {site.phone.display}
          </a>
        </Container>
      </div>
    </Dialog>
  );
}

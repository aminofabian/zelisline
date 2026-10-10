"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { Menu } from "lucide-react";
import Logo from "@/components/Logo";
import Action from "@/components/system/Action";
import Container from "@/components/system/Container";
import MobileMenu from "@/components/chrome/MobileMenu";
import { navigation } from "@/data/navigation";
import { formatIndex } from "@/lib/format";
import { cn } from "@/lib/utils";

const NAV_LINK_CLASSES =
  "flex items-center gap-2 border-l border-ink px-4 font-mono text-[12px] uppercase tracking-[0.1em] transition-colors duration-150";

export default function SiteHeader() {
  const pathname = usePathname();
  // Storing the pathname the menu was opened on means navigating closes it automatically.
  const [menuOpenPath, setMenuOpenPath] = useState<string | null>(null);
  const isMenuOpen = menuOpenPath === pathname;
  const closeMenu = useCallback(() => setMenuOpenPath(null), []);

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-paper">
      <Container className="flex h-16 items-stretch justify-between gap-4">
        <Link href="/" aria-label="Zelisline home" className="flex items-center">
          <Logo className="h-7" priority />
        </Link>

        <nav aria-label="Primary" className="hidden items-stretch border-r border-ink xl:flex">
          {navigation.primary.map((item, index) => {
            const isActive = pathname === item.href || (item.href !== "/" && Boolean(pathname?.startsWith(`${item.href}/`)));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(NAV_LINK_CLASSES, isActive ? "bg-ink text-paper" : "hover:bg-grey-50")}
              >
                <span className={cn(isActive ? "text-paper-dim" : "text-ink-muted")}>{formatIndex(index + 1)}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-stretch">
          <Action href="/contact" size="sm" className="hidden self-center md:inline-flex">
            Start a project
          </Action>
          <button
            type="button"
            onClick={() => setMenuOpenPath(pathname)}
            aria-expanded={isMenuOpen}
            className={cn(NAV_LINK_CLASSES, "border-r xl:hidden")}
          >
            <Menu className="h-4 w-4" aria-hidden />
            Menu
          </button>
        </div>
      </Container>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} pathname={pathname} />
    </header>
  );
}

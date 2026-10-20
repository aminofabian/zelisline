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
import { cn } from "@/lib/utils";

const NAV_LINK_CLASSES =
  "relative flex items-center px-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted transition-colors duration-200 hover:text-ink";

export default function SiteHeader() {
  const pathname = usePathname();
  // Storing the pathname the menu was opened on means navigating closes it automatically.
  const [menuOpenPath, setMenuOpenPath] = useState<string | null>(null);
  const isMenuOpen = menuOpenPath === pathname;
  const closeMenu = useCallback(() => setMenuOpenPath(null), []);

  return (
    <header className="sticky top-0 z-50 border-b border-grey-200 bg-paper/90 backdrop-blur-md">
      <Container className="flex h-20 items-stretch justify-between gap-6">
        <Link href="/" aria-label="Zelisline home" className="flex items-center">
          <Logo className="h-7" priority />
        </Link>

        <nav aria-label="Primary" className="hidden items-stretch xl:flex">
          {navigation.primary.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && Boolean(pathname?.startsWith(`${item.href}/`)));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  NAV_LINK_CLASSES,
                  isActive && "text-ink after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-px after:bg-brass"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Action href="/contact" size="sm" className="hidden md:inline-flex">
            Begin a project
          </Action>
          <button
            type="button"
            onClick={() => setMenuOpenPath(pathname)}
            aria-expanded={isMenuOpen}
            className={cn(NAV_LINK_CLASSES, "xl:hidden")}
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

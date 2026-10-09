import React from 'react';
import { Home, Layers, Users, Contact, KanbanSquare, PanelTop, LogIn } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface NavLinksProps {
  isShrunk?: boolean;
}

export const primaryLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Layers },
  { name: 'Our Work', href: '/our-work', icon: KanbanSquare },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Journal', href: '/blog', icon: PanelTop },
  { name: 'Contact', href: '/contact', icon: Contact },
];

export const secondaryLinks = [
  { name: 'Client Portal', href: '/client', icon: LogIn },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0 },
};

const Row: React.FC<{
  href: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  isActive: boolean;
  isShrunk: boolean;
}> = ({ href, name, icon: Icon, isActive, isShrunk }) => (
  <Link
    href={href}
    aria-current={isActive ? 'page' : undefined}
    className={`group relative flex items-center rounded-lg px-3 py-2.5 transition-colors duration-200 ${
      isActive ? 'bg-orange-50 text-orange-700' : 'text-ink-soft hover:bg-sand-100 hover:text-ink'
    }`}
  >
    {/* Active marker */}
    <span
      className={`absolute left-0 top-1/2 h-5 -translate-y-1/2 rounded-r-full bg-orange-600 transition-all duration-300 ${
        isActive ? 'w-[3px] opacity-100' : 'w-0 opacity-0'
      }`}
    />
    <Icon
      className={`h-[18px] w-[18px] shrink-0 transition-colors duration-200 ${
        isActive ? 'text-orange-600' : 'text-ink-muted group-hover:text-orange-600'
      }`}
    />
    {!isShrunk && (
      <span className={`ml-3 text-sm font-medium tracking-wide ${isActive ? 'text-orange-700' : ''}`}>
        {name}
      </span>
    )}
  </Link>
);

function NavLinks({ isShrunk = false }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <motion.nav variants={container} initial="hidden" animate="show" className="flex flex-col gap-0.5">
      {primaryLinks.map((link) => (
        <motion.div key={link.href} variants={item}>
          <Row
            href={link.href}
            name={link.name}
            icon={link.icon}
            isActive={pathname === link.href}
            isShrunk={isShrunk}
          />
        </motion.div>
      ))}

      <div className="my-3 border-t border-sand-200" />

      {secondaryLinks.map((link) => (
        <motion.div key={link.href} variants={item}>
          <Row
            href={link.href}
            name={link.name}
            icon={link.icon}
            isActive={pathname === link.href}
            isShrunk={isShrunk}
          />
        </motion.div>
      ))}
    </motion.nav>
  );
}

export default NavLinks;

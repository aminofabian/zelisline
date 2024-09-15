import React from 'react';
import { Home, Layers, Users, Contact, KanbanSquare, PanelTop, LogIn } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Layers },
  { name: 'Client Section', href: '/client', icon: LogIn },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: Contact },
  { name: 'Portfolio', href: '/portfolio', icon: KanbanSquare },
  { name: 'Blog', href: '/blog', icon: PanelTop }
];

function NavLinks() {
  return (
    <nav className="flex flex-col space-y-1 md:space-y-2">
    {navLinks.map((link) => (
      <Link 
      href={link.href} 
      key={link.href}
      className="flex items-center p-2 rounded-lg transition-colors duration-200 hover:bg-orange-100 group"
      >
      <link.icon className="w-6 h-6 text-gray-600 group-hover:text-orange-500" />
      <span className="hidden md:block ml-3 text-sm font-medium text-gray-700 group-hover:text-orange-600">
      {link.name}
      </span>
      </Link>
    ))}
    </nav>
  );
}

export default NavLinks;
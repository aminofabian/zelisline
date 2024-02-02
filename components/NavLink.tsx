import React from 'react';
import { Home, Layers, Users, Contact, KanbanSquare, PanelTop, MoreHorizontal, LogIn } from 'lucide-react';
import Link from 'next/link';



const navLinks = [
  {
    name: 'Home',
    href: '/',
    icon: Home,
  },
  {
    name: 'Services',
    href: '/services',
    icon: Layers,
  },
  {
    name: 'Client Section',
    href: '/client',
    icon: LogIn,
  },
  {
    name: 'About',
    href: '/about',
    icon: Users,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Contact,
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
    icon: KanbanSquare,
  },
  {
    name: 'Blog',
    href: '/blog',
    icon: PanelTop,
  }
];

function NavLinks() {
  return (
    <div className='mt-2'>
    {navLinks.map((link) => (
      <Link href={link.href} key={link.href}>
      <div className="flex flex-row md:flex-col items-center space-x-1 text-slate-900 hover:text-sky-600">
      <link.icon className="w-7 h-10" />
      <div className="hidden md:block mb-7 text-slate-600 text-xs font-mono hover:scale-125">{link.name}</div>
      </div>
      </Link>
      ))}
      </div>
      );
    }
    
    export default NavLinks;
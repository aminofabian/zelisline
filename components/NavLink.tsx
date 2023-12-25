import React from 'react'
import { AlignJustify, Home, Layers, Users, Contact, KanbanSquare, PanelTop } from 'lucide-react';
import Link from 'next/link';



const navLinks = [
  {
    name: 'Home',
    href: '/',
    icon: Home, // Replace with the icon identifier or URL
  },
  {
    name: 'Our Services',
    href: '/services',
    icon: Layers,
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
    href: 'portfolio',
    icon: KanbanSquare,
  },
  {
    name: 'Blog',
    href: '/blog',
    icon: PanelTop,
  }
];

export default function NavLinks() {
  return (
    <div className='mt-12'>
    {navLinks.map((link) => (
      <Link href={link.href} key={link.href}>
      <div className="flex flex-row md:flex-col items-center space-x-2 text-slate-900 hover:text-cyan-400 hover:motion-safe:animate-bounce">
      <link.icon className="w-10 h-12" />
      </div>
      <div className="hidden md:block mb-10 text-slate-600 text-sm font-mono hover:scale-125">{link.name}</div>
      </Link>
      ))}  
      </div>
      )
    }
    
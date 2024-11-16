import React from 'react';
import { Home, Layers, Users, Contact, KanbanSquare, PanelTop, LogIn } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface NavLinksProps {
  isShrunk?: boolean;
}

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Layers },
  { name: 'Client Section', href: '/client', icon: LogIn },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: Contact },
  { name: 'Our Work', href: '/our-work', icon: KanbanSquare },
  { name: 'Blog', href: '/blog', icon: PanelTop }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

function NavLinks({ isShrunk = false }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <motion.nav 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col space-y-2"
    >
      {navLinks.map((link, index) => {
        const isActive = pathname === link.href;
        return (
          <motion.div
            key={link.href}
            variants={item}
            whileHover={{ 
              scale: 1.02,
              ...(isShrunk && { x: 2 })
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={link.href}
              className={`group flex items-center px-3 py-2.5 rounded-xl transition-all duration-300 ease-out
                ${isActive 
                  ? 'bg-white dark:bg-neutral-800 shadow-lg shadow-orange-500/5' 
                  : 'hover:bg-white/50 dark:hover:bg-neutral-800/50'
                } relative overflow-hidden`}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-50/0 via-orange-50/0 to-orange-50/0 
                dark:from-orange-900/0 dark:via-orange-900/0 dark:to-orange-900/0 
                group-hover:from-orange-50/50 group-hover:via-orange-50/25 group-hover:to-transparent 
                dark:group-hover:from-orange-900/10 dark:group-hover:via-orange-900/5 dark:group-hover:to-transparent 
                transition-all duration-500 ease-out" />

              <div className="relative z-10 flex items-center w-full">
                {/* Icon container with glow effect */}
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: isActive ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <link.icon className={`w-[18px] h-[18px] transition-all duration-300 ${
                      isActive 
                        ? 'text-orange-500 dark:text-orange-400' 
                        : 'text-gray-500 dark:text-gray-400 group-hover:text-orange-500 dark:group-hover:text-orange-400'
                    }`} />
                  </motion.div>
                  
                  {/* Glow effect */}
                  <motion.div 
                    className={`absolute inset-0 bg-orange-400/20 dark:bg-orange-400/10 rounded-full blur-lg transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: isActive ? [0.5, 0.2, 0.5] : [0, 0, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {!isShrunk && (
                  <span className={`ml-3 font-medium text-sm tracking-wide transition-all duration-300 ${
                    isActive 
                      ? 'text-orange-500 dark:text-orange-400 translate-x-0.5' 
                      : 'text-gray-600 dark:text-gray-300 group-hover:text-orange-500 dark:group-hover:text-orange-400 group-hover:translate-x-0.5'
                  }`}>
                    {link.name}
                  </span>
                )}

                {/* Active indicator */}
                {isActive && !isShrunk && (
                  <motion.div 
                    className="ml-auto flex items-center space-x-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <div className="h-1 w-1 rounded-full bg-orange-500 dark:bg-orange-400" />
                    <div className="h-1 w-1 rounded-full bg-orange-400/50 dark:bg-orange-400/50" />
                    <div className="h-1 w-1 rounded-full bg-orange-300/25 dark:bg-orange-400/25" />
                  </motion.div>
                )}

                {/* Shrunk state active indicator */}
                {isActive && isShrunk && (
                  <motion.div 
                    className="absolute -right-1 top-1/2 transform -translate-y-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="h-2 w-1 rounded-full bg-orange-500 dark:bg-orange-400" />
                  </motion.div>
                )}
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.nav>
  );
}

export default NavLinks;
'use client';

import React, { useState, useEffect } from 'react';
import Logo from "./Logo";
import MoreDropdown from "./MoreDropDown";
import NavLinks from "./NavLink";
import Link from 'next/link';
import { motion, useAnimation, AnimatePresence, PanInfo } from "framer-motion";
import { Minimize2, Maximize2, GripVertical, Menu, X } from 'lucide-react';

interface Position {
  x: number;
  y: number;
}

function SideNav() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isShrunk, setIsShrunk] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const controls = useAnimation();

  // Position state without localStorage persistence
  const [position, setPosition] = useState<Position>({ x: 20, y: 20 });

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Auto-shrink based on scroll position
      if (window.scrollY > 100) {
        setIsShrunk(true);
        setIsExpanded(false);
      } else {
        setIsShrunk(false);
        setIsExpanded(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDragStart = (): void => {
    setIsDragging(true);
    controls.start({ scale: 0.95 });
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    setIsDragging(false);
    controls.start({ scale: 1 });
    setPosition({ x: info.point.x, y: info.point.y });
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed z-30 top-4 left-4 p-2 rounded-xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg shadow-lg border border-white/20 dark:border-neutral-800/20 md:hidden"
        onClick={toggleMobileMenu}
      >
        <Menu className="w-6 h-6 text-gray-600 dark:text-gray-400" />
      </button>

      {/* Main Sidebar */}
      <motion.div 
        className={`fixed z-50 md:z-30 md:left-0 ${!isMobileMenuOpen ? 'hidden md:block' : ''}`}
        initial={false}
        animate={{ 
          x: position.x,
          y: position.y,
          scale: isDragging ? 0.95 : 1,
          width: isShrunk ? "60px" : "280px"
        }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
        drag
        dragMomentum={false}
        dragElastic={0.1}
        dragConstraints={{ left: 20, right: window.innerWidth - 300, top: 20, bottom: window.innerHeight - 100 }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        style={{ touchAction: "none" }}
      >
        <motion.div 
          animate={{ 
            width: isShrunk ? "60px" : "280px",
            height: isExpanded ? "90vh" : "auto"
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative"
        >
          <motion.div 
            className={`bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg rounded-2xl shadow-2xl
              border border-white/20 dark:border-neutral-800/20
              ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            animate={{ 
              height: isExpanded ? "100%" : "auto"
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Mobile Toggle Button */}
            <button
              className="absolute top-4 right-4 p-2.5 rounded-xl bg-gradient-to-br from-white/50 to-white/30 dark:from-neutral-800/50 dark:to-neutral-900/30 backdrop-blur-md shadow-lg border border-white/20 dark:border-neutral-700/30 group md:hidden"
              onClick={toggleMobileMenu}
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors" />
            </button>

            {/* Drag Handle */}
            <motion.div 
              className="absolute -top-3 left-1/2 transform -translate-x-1/2 
                bg-white dark:bg-neutral-800 rounded-full px-3 py-1 shadow-lg
                border border-gray-200/50 dark:border-neutral-700/50
                cursor-grab active:cursor-grabbing"
              animate={{
                scale: scrollY > 100 ? 0.8 : 1,
                opacity: scrollY > 200 ? 0.8 : 1
              }}
            >
              <GripVertical className="w-4 h-4 text-gray-400" />
            </motion.div>

            {/* Floating Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                animate={{
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                  opacity: scrollY > 100 ? 0.3 : 1
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }}
                className="absolute -right-6 top-20 w-12 h-12 bg-orange-200/10 rounded-full blur-2xl"
              />
              <motion.div
                animate={{
                  x: [0, -10, 0],
                  y: [0, 10, 0],
                  opacity: scrollY > 100 ? 0.3 : 1
                }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  ease: "easeInOut"
                }}
                className="absolute -left-6 top-40 w-12 h-12 bg-blue-200/10 rounded-full blur-2xl"
              />
            </div>

            <div className="flex flex-col h-full relative">
              {/* Logo Section */}
              <motion.div 
                className="flex items-center justify-between px-4 py-4 border-b border-gray-200/50 dark:border-neutral-800/50"
                animate={{
                  opacity: scrollY > 100 ? 0.8 : 1,
                  height: scrollY > 100 ? "50px" : "auto"
                }}
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors md:hidden"
                  >
                    <X className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors" />
                  </button>
                  <AnimatePresence>
                    {!isShrunk && (
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        className="flex items-center"
                      >
                        <Link href="./" className="transition-all duration-300 hover:scale-105 hover:rotate-2">
                          <Logo />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {!isShrunk && (
                  <motion.button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                    animate={{
                      scale: scrollY > 100 ? 0.8 : 1,
                      opacity: scrollY > 100 ? 0 : 1
                    }}
                  >
                    {isExpanded ? (
                      <Minimize2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    ) : (
                      <Maximize2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    )}
                  </motion.button>
                )}
              </motion.div>

              {/* Navigation Section */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar"
                  >
                    <NavLinks isShrunk={isShrunk} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* More Dropdown Section */}
              <AnimatePresence>
                {isExpanded && !isShrunk && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: scrollY > 100 ? 0 : 1,
                      height: scrollY > 100 ? 0 : "auto"
                    }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-200/50 dark:border-neutral-800/50 p-4 backdrop-blur-sm"
                  >
                    <MoreDropdown />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Glass effect overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/2 to-white/10 dark:from-black/5 dark:via-black/2 dark:to-black/10 rounded-2xl pointer-events-none"
              animate={{
                opacity: scrollY > 100 ? 0.9 : 0.5
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default SideNav;
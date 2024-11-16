'use client';

import { useState, useEffect } from 'react';

export const useScrollWidth = (threshold = 100) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > threshold;
      setScrolled(isScrolled);
    };

    // Set initial value
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return {
    mainClass: `flex-1 transition-all duration-300 ease-in-out ${
      scrolled ? 'lg:ml-0 w-full' : 'lg:ml-4'
    }`,
    isScrolled: scrolled
  };
};

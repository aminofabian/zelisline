"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { squareData } from "@/data/squareData";

interface Button {
  link: string;
  text: string;
}

interface ShuffleHeroProps {
  subTitle: string;
  title: string;
  bgImage: string;
  buttons: Button[];
}


const ShuffleHero: React.FC<ShuffleHeroProps> = ({ subTitle, title, bgImage, buttons }) => {
  const highlightWords = (text: string) => {
    const words = text.split(' ');
    return words.map((word, index) => 
      index % 5 === 0 ? <span key={index} className="text-teal-500">{word} </span> : word + ' '
  );
};

return (
  <section className="w-full px-4 py-12 md:py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
  <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="space-y-4"
  >
  {subTitle && (
    <motion.span 
    className="block text-xs md:text-sm font-semibold text-orange-600"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
    >
    {subTitle}
    </motion.span>
  )}
  {title && (
    <motion.h1 
    className="text-2xl md:text-3xl lg:text-lg font-bold text-gray-800 leading-tight"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    >
    {highlightWords(title)}
    </motion.h1>
  )}
  <motion.div 
  className="flex flex-wrap gap-3 mt-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
  >
  {buttons.map((button, index) => (
    <Link key={index} href={button.link}>
    <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
      index === 0
      ? "bg-orange-500 text-white hover:bg-orange-600"
      : "bg-white text-teal-600 border border-teal-300 hover:bg-teal-50"
    }`}
    >
    {button.text}
    </motion.button>
    </Link>
  ))}
  </motion.div>
  </motion.div>
  <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  >
  <ShuffleGrid />
  </motion.div>
  </div>
  </section>
);
};

const shuffle = <T,>(array: T[]): T[] => {
  let currentIndex = array.length,
  randomIndex;
  
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  
  return array;
};

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
    key={sq.id}
    layout
    transition={{ duration: 1.5, type: "spring" }}
    className="w-full h-full relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    style={{
      backgroundImage: `url(${sq.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    >
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-900/20 to-teal-900/20 opacity-30 hover:opacity-0 transition-opacity duration-300"></div>
    </motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(generateSquares());
  
  useEffect(() => {
    shuffleSquares();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []); 
  
  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };
  
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-2 h-[400px] w-full max-w-[400px] mx-auto">
    {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;

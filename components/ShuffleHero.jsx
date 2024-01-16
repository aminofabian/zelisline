/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";


const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-6xl mx-auto bg-[url('/bg.jpg')]/90 bg-cover rounded-e-xl">
      <div>
        <span className="block mb-4 text-xs md:text-sm font-bold text-slate-600 py-1 inset-0 z-0 relative">
          Driving Growth from Series A to IPO
        </span>
        <h1 className="text-4xl md:text-2xl font-semibold mt-1 text-slate-600">
          YOUR ONE-STOP-SHOP FOR <span className="text-sky-600 relative hover:text-orange-400">WEB DEVELOPMENT AND DIGITAL MARKETING <span className="text-cyan-600">SERVICES IN KENYA</span></span>
        </h1>
        {/* <h2 className="text-base md:text-xl text-white my-4 md:my-6 relative hover:scale-90 bg-sky-600/75 opacity-90 p-10 border-x-8 border-lime-500 transform -skew-x-6 rounded-xl">
          We're committed to helping startups and small businesses grow. From software to marketing, we'll help you get there.
        </h2> */}
        <div className="flex -space-x-0.5 mt-10">
          <Link href="/blog">  <button className="bg-orange-500 border-2 border-orange-500 text-white font-sm py-1 px-4 transition-all hover:bg-white hover:text-orange-500 hover:animate-bounce-custom relative rounded-l-2xl">
            Write Us
          </button> </Link>
          <Link href="/contact"> <button className="bg-transparent border-2 border-orange-500 text-orange-500 font-sm py-1 px-4 transition-all hover:bg-orange-500 hover:text-white hover:animate-bounce active:animate-pulse relative rounded-r-2xl">
            Read our Blog
          </button> </Link>
        </div>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
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

const squareData = [
  {
    id: 1,
    src: "1.svg",
  },
  {
    id: 2,
    src: "2.svg",
  },
  {
    id: 3,
    src: "3.svg",
  },
  {
    id: 4,
    src: "4.svg",
  },
  {
    id: 5,
    src: "5.svg",
  },
  {
    id: 6,
    src: "6.svg",
  },
  {
    id: 7,
    src: "7.svg",
  },
  {
    id: 8,
    src: "8.svg",
  },
  {
    id: 9,
    src: "9.svg",
  },
  {
    id: 10,
    src: "10.svg",
  },
  {
    id: 11,
    src: "11.svg",
  },
  {
    id: 12,
    src: "12.svg",
  },
  {
    id: 13,
    src: "13.svg",
  },
  {
    id: 14,
    src: "14.svg",
  },
  {
    id: 15,
    src: "15.svg",
  },
  {
    id: 16,
    src: "16.svg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full hover:animate-spin relative z-0 border-l-8 rounded-xl animate-bounce-custom"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());



  useEffect(() => {
    shuffleSquares();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  const shuffleSquares = () => {
    setSquares(generateSquares());
    if (timeoutRef.current) timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
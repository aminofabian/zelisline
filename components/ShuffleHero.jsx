/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";


const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto bg-[url('/bg.jpg')] bg-cover rounded-e-xl">
      <div>
        <span className="block mb-4 text-xs md:text-sm font-bold text-slate-100 py-1 inset-0 z-0 relative">
          Driving Growth from Series A to IPO
        </span>
        <h1 className="text-4xl md:text-2xl font-semibold mt-1 text-slate-100">
          YOUR ONE-STOP-SHOP FOR <span className="text-green-500 relative hover:text-orange-400">WEB DEVELOPMENT AND DIGITAL MARKETING SERVICES IN KENYA</span>
        </h1>
        <h2 className="text-base md:text-lg text-slate-100 my-4 md:my-6 relative hover:scale-90 bg-sky-500/75 opacity-90 p-10 border-y-8 border-lime-500 transform -skew-x-6">
          We're committed to helping startups and small businesses grow. From software to marketing, we'll help you get there.
        </h2>
        <div className="flex -space-x-0.5">
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
    src: "1.png",
  },
  {
    id: 2,
    src: "2.jpg",
  },
  {
    id: 3,
    src: "3.png",
  },
  {
    id: 4,
    src: "4.jpg",
  },
  {
    id: 5,
    src: "17.png",
  },
  {
    id: 6,
    src: "6.jpg",
  },
  {
    id: 7,
    src: "15.png",
  },
  {
    id: 8,
    src: "9.jpg",
  },
  {
    id: 9,
    src: "10.jpg",
  },
  {
    id: 10,
    src: "11.png",
  },
  {
    id: 11,
    src: "12.jpg",
  },
  {
    id: 12,
    src: "13.jpg",
  },
  {
    id: 13,
    src: "20.png",
  },
  {
    id: 14,
    src: "21.jpg",
  },
  {
    id: 15,
    src: "22.jpg",
  },
  {
    id: 16,
    src: "23.jpg",
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
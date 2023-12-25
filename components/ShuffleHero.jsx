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
        <h3 className="text-4xl md:text-6xl font-semibold mt-1 text-slate-100">
          WELCOME TO <span className="text-orange-500 relative hover:text-orange-400">ZELISLINE</span>
        </h3>
        <p className="text-base md:text-lg text-white my-4 md:my-6 relative hover:scale-90 bg-cyan-500 opacity-80 p-10 border-l-8 border-flourish-500 transform -skew-x-6">
          We're committed to helping startups and small businesses grow. From software to marketing, we'll help you get there.
        </p>
        <div className="flex space-x-1">
          <Link href="/blog">  <button className="bg-orange-500 text-white font-medium py-2 px-4 rounded-l-xl transition-all hover:bg-orange-300 hover:scale-110 animate-pulse relative">
            Our Blog
          </button> </Link>
          <Link href="/contact"> <button className="bg-cyan-300 text-white font-medium py-2 px-4 rounded-r-xl transition-all hover:bg-orange-300 hover:scale-110 active:animate-pulse relative">
            Talk to Us
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
    src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 2,
    src: "content.jpeg",
  },
  {
    id: 3,
    src: "flutter.jpeg",
  },
  {
    id: 4,
    src: "next.svg",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 10,
    src: "react.png",
  },
  {
    id: 11,
    src: "gif.gif",
  },
  {
    id: 12,
    src: "ideas.jpg",
  },
  {
    id: 13,
    src: "solutions.jpg",
  },
  {
    id: 14,
    src: "advertising.jpg",
  },
  {
    id: 15,
    src: "webdesign.png",
  },
  {
    id: 16,
    src: "seo2.jpeg",
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
"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { squareData } from "@/data/squareData";


const ShuffleHero = ({ subTitle, title, bgImage, buttons }) => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-6xl mx-auto bg-[url(${bgImage})]/90 bg-gradient-to-l rounded-e-xl">
      <div>
        {subTitle && (
          <span className="block mb-4 text-xs md:text-sm font-bold text-slate-600 py-1 inset-0 z-0 relative">
            {subTitle}
          </span>
        )}
        {title && (
          <h1 className="text-3xl md:text-xl font-semibold mt-1 text-sky-600">
            {title}
          </h1>
        )}
        <div className="flex -space-x-0.5 mt-10">
          {buttons.map((button, index) => (
            <Link key={index} href={button.link}>
              <button
                className={`${index === 0
                  ? "bg-orange-500 border-2 border-orange-500 text-white hover:bg-sky-500 hover:border-sky-600"
                  : "bg-transparent border-2 border-orange-500 text-orange-500 hover:text-cyan-500 hover:border-cyan-500"
                  } font-sm py-1 px-4 transition-all hover:bg-${index === 0 ? "white" : "orange-500"
                  } hover:text-${index === 0 ? "orange-500" : "white"} hover:animate-bounce-custom relative rounded-${index === 0 ? "l" : "r"
                  }-2xl`}
              >
                {button.text}
              </button>
            </Link>
          ))}
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
import React, { useContext, useRef, useState } from "react";
import backgroundImage from "../../assets/images/backgound.jpg";
import Hero from "../Hero";
import { motion } from "framer-motion";

import detective from "../../assets/images/sherlock.jpg";
import detectiveBG from "../../assets/images/Rectangle 2264.svg";
import Arrow from "../../assets/images/Arrow 1.svg";
import fantasy from "../../assets/images/Rectangle 2261.svg";
import fantasyBG from "../../assets/images/Rectangle 2265.svg";
import Psychology from "../../assets/images/scale_1200.jpg";
import business from "../../assets/images/luchshie-knigi-pro-biznesmenov.jpg";
import { Link } from "react-router-dom";
import { RootContext } from "../../Context";
import romance from "../../assets/images/princess-and-her-knight-v0-bgrakhnits6f1.webp";
const CATEGORIES = [
  {
    id: 1,
    name: "Детектив",
    value: "Detective",
    img: detective,
    bg: detectiveBG,
    path: "/detective",
  },
  {
    id: 2,
    name: "Фантастика",
    value: "Sci-Fi",
    img: fantasy,
    bg: fantasyBG,
    path: "/fantasy",
  },
  {
    id: 3,
    name: "Романы",
    value: "Romance",
    img: romance,
    bg: fantasyBG,
  },
  {
    id: 4,
    name: "Психология",
    value: "Psychology",
    img: Psychology,
    bg: detectiveBG,
  },
  {
    id: 5,
    name: "Бизнес",
    value: "Business",
    img: business,
    bg: fantasyBG,
  },
];

const Home = () => {
  const booksSectionRef = useRef(null);

  const scrollToBooks = (e) => {
    e.preventDefault();
    booksSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1719310469053-8c5c0c6803d3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3NoZWxmfGVufDB8fDB8fHww)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container px-4">
          <div className=" flex justify-center items-center min-h-200 ">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 w-full max-w-2xl text-center p-6 md:p-12 md:rounded-30 rounded-[30px] border border-white/30 bg-white/10 backdrop-blur-md shadow-2xl"
            >
              <h1 className="text-3xl md:text-6xl font-bold text-white/90 mb-6 md:mb-6 drop-shadow-lg leading-tight">
                Discover Your Next <br /> Great Read
              </h1>

              <p className="text-base md:text-lg  text-white/90 mb-6 max-w-md mx-auto leading-relaxed">
                Explore a curated collection of fiction, non-fiction, and rare
                books. Find adventure, knowledge, and inspiration.
              </p>

              <button
                onClick={scrollToBooks}
                className="bg-[#010049] mt-5 md:relative top-5  md:px-10 hover:bg-[#020066]
                 text-white px-6 md:py-4
                 rounded gap-3 mx-auto transition-all active:scale-95 shadow-lg"
              >
                <span className="text-lg md:text-xl">📖</span>
                <span className="font-semibold text-base md:text-lg whitespace-nowrap">Browse Books</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className=" flex flex-col gap-10 p-5">
          <h1
            ref={booksSectionRef}
            className="text-3xl text-[#010049] font-bold scroll-mt-10"
          >
            Категории
          </h1>

          <div className="flex gap-8  ">
            <div className="flex gap-4 md:gap-8 overflow-x-auto px-2 pb-4 scrollbar-hide">
              {CATEGORIES.map((el) => (
                <Link
                  to={`/search/${el.value}`}
                  key={el.id}
                  className="flex items-center relative shrink-0 snap-center group transition-transform hover:scale-[1.02] "
                >
                  <img src={el.bg} alt="" className="w-75   " />
                  <img
                    src={el.img}
                    className="w-75 h-55 rounded-2xl absolute left-0"
                  />
                  <div className="absolute inset-0 bg-[#01004980]/80 rounded-2xl"></div>
                  <div className=" flex absolute right-20 top-45">
                    <h1 className="text-white   text-2xl font-semibold">
                      {el.name}
                    </h1>
                    <img src={Arrow} className="w-7 relative top-1 left-10" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Hero />
    </>
  );
};

export default Home;

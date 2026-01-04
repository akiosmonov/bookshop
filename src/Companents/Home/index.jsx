import React, { useContext, useRef } from "react";
import backgroundImage from "../../assets/images/backgound.jpg";
import Hero from "../Hero";
import { motion } from "framer-motion";

import detective from "../../assets/images/Rectangle 2260.svg";
import detectiveBG from "../../assets/images/Rectangle 2264.svg";
import Arrow from "../../assets/images/Arrow 1.svg";
import fantasy from "../../assets/images/Rectangle 2261.svg";
import fantasyBG from "../../assets/images/Rectangle 2265.svg";
import travel from "../../assets/images/Rectangle 2262.svg";
import sciens from "../../assets/images/Rectangle 2263.svg";
import story from "../../assets/images/Bykov_Folklore.jpeg";
import { Link } from "react-router-dom";
const CATEGORIES = [
  {
    id: 1,
    name: "Детектив",
    img: detective,
    bg: detectiveBG,
    path: "/detective",
  },
  { id: 2, name: "Фантастика", img: fantasy, bg: fantasyBG, path: "/fantasy" },
  {
    id: 3,
    name: "Приключения",
    img: travel,
    bg: detectiveBG,
    path: "/adventure",
  },
  { id: 4, name: "Научная", img: sciens, bg: detectiveBG, path: "/science" },
  { id: 5, name: "Фольклор", img: story, bg: detectiveBG, path: "/folklore" },
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
          padding: "200px",
        }}
      >
        <div className="container">
          <div className=" flex justify-center ">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }} // Начало: прозрачный и чуть ниже
              animate={{ opacity: 1, scale: 1, y: 0 }} // Финал: четкий и на месте
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 w-full max-w-2xl text-center p-12 rounded-[30px] border border-white/30 bg-white/10 backdrop-blur-md shadow-2xl"
            >
              {/* backdrop-blur-md — это и есть эффект размытия стекла */}

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Discover Your Next <br /> Great Read
              </h1>

              <p className="text-lg text-white/90 mb-10 max-w-lg mx-auto leading-relaxed">
                Explore a curated collection of fiction, non-fiction, and rare
                books. Find adventure, knowledge, and inspiration.
              </p>

              <button
                onClick={scrollToBooks}
                className="bg-[#010049] relative left-36 top-5  hover:bg-[#020066] text-white px-10 py-4 rounded-xl flex items-center gap-3 mx-auto transition-all active:scale-95 shadow-lg"
              >
                <span className="text-xl">📖</span>
                <span className="font-semibold text-lg">Browse Books</span>
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

            <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
              {CATEGORIES.map((el) => (
                <div
                  key={el.id}
                  className="flex items-center relative shrink-0 snap-center "
                >
                  <img src={el.bg} alt="" className="w-75   " />
                  <img
                    src={el.img}
                    className="w-75 h-55 rounded-2xl absolute left-0"
                  />
                  <div className="absolute inset-0 bg-[#01004980]/80 rounded-2xl"></div>
                  <Link to={el.path} className=" flex absolute right-20 top-45">
                    <h1 className="text-white   text-2xl font-semibold">
                      {el.name}
                    </h1>
                    <img src={Arrow} className="w-7 relative top-1 left-10" />
                  </Link>
                </div>
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

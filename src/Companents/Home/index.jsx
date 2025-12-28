import React from "react";
import backgroundImage from "../../assets/images/backgound.jpg";
import Hero from "../Hero";
import { motion } from "framer-motion";

const Home = () => {
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

            <button className="bg-[#010049] relative left-36 top-5  hover:bg-[#020066] text-white px-10 py-4 rounded-xl flex items-center gap-3 mx-auto transition-all active:scale-95 shadow-lg">
              <span className="text-xl">📖</span>
              <span className="font-semibold text-lg">Browse Books</span>
            </button>
          </motion.div>
         </div>
        </div>
      </div>
      <Hero />
    </>
  );
};

export default Home;

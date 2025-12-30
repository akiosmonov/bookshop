import React, { useEffect, useState } from "react";
import detective from "../../assets/images/Rectangle 2260.svg";
import detectiveBG from "../../assets/images/Rectangle 2264.svg";
import Arrow from "../../assets/images/Arrow 1.svg";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import fantasy from "../../assets/images/Rectangle 2261.svg";
import fantasyBG from "../../assets/images/Rectangle 2265.svg";
import travel from "../../assets/images/Rectangle 2262.svg";
import sciens from "../../assets/images/Rectangle 2263.svg";
import story from "../../assets/images/Bykov_Folklore.jpeg";
import polygon from "../../assets/images/Polygon 1.svg";
import axios from "axios";
const Hero = () => {
  const [hero, setHero] = useState([]);

  async function getAdmin() {
    try {
      let response = await axios(
        `https://api-crud.elcho.dev/api/v1/41339-d8eb5-75fc7/bookshop`
      );
      setHero(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Error");
    }
  }

  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <div className="p-10">
      <div className="container">
        <div className=" flex flex-col gap-10">
          <h1 className="text-3xl text-[#010049] font-bold ">Котегории</h1>
          <div className="flex gap-8  ">
            {/* Item Card 1 */}
            <div className="flex items-center relative shrink-0 snap-center ">
              <img src={detectiveBG} alt="" className="w-75   " />
              <img
                src={detective}
                className="w-75 rounded-2xl absolute left-0"
              />
              <div className="absolute inset-0 bg-[#01004980]/80 rounded-2xl"></div>
              <Link to={"/"} className=" flex absolute right-35 top-40">
                <h1 className="text-white  text-2xl font-semibold">Детектив</h1>
                <img
                  src={Arrow}
                  className="w-7 relative top-1 left-4 bottom-22"
                />
              </Link>
            </div>

            <div className="flex items-center relative shrink-0 snap-center ">
              <img src={fantasyBG} alt="" className="w-75 " />
              <img
                src={fantasy}
                alt=""
                className="w-75 rounded-2xl absolute left-0 "
              />
              <div className="absolute inset-0 bg-[#01004980]/90 rounded-2xl"></div>

              <Link to={"/"} className=" flex absolute right-30 top-40">
                <h1 className="text-white  text-2xl font-semibold">
                  Фантастика
                </h1>

                <img
                  src={Arrow}
                  className="w-7 relative top-1 left-4 bottom-22"
                />
              </Link>
            </div>

            <div className="flex items-center relative shrink-0 snap-center ">
              <img src={detectiveBG} alt="" className="w-75   " />
              <img
                src={travel}
                alt=""
                className="w-75 rounded-2xl absolute left-0 "
              />
              <div className="absolute inset-0 bg-[#01004980]/80 rounded-2xl"></div>
              <Link to={"/"} className=" flex absolute right-20 top-40">
                <h1 className="text-white  text-2xl font-semibold">
                  Приключения
                </h1>
                <img
                  src={Arrow}
                  className="w-7 relative top-1 left-4 bottom-22"
                />
              </Link>
            </div>

            <div className="flex items-center relative shrink-0 snap-center ">
              <img src={detectiveBG} alt="" className="w-75  " />
              <img
                src={sciens}
                alt=""
                className="w-75 rounded-2xl absolute left-0 "
              />
              <div className="absolute inset-0 bg-[#01004980]/80 rounded-2xl"></div>
              <Link to={"/"} className=" flex absolute right-35 top-40">
                <h1 className="text-white  text-2xl font-semibold">Научная</h1>
                <img
                  src={Arrow}
                  className="w-7 relative top-1 left-4 bottom-22"
                />
              </Link>
            </div>

            <div className="flex items-center relative shrink-0 snap-center w-75 ">
              <img src={detectiveBG} alt="" className="w-75 rounded-2xl   " />
              <img
                src={story}
                alt=""
                className="w-75 h-55 rounded-2xl absolute left-0 transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#01004980]/80 rounded-2xl"></div>
              <Link to={"/"} className=" flex absolute right-35 top-40">
                <h1 className="text-white  text-2xl font-semibold">Научная</h1>
                <img
                  src={Arrow}
                  className="w-7 relative top-1 left-4 bottom-22"
                />
              </Link>
            </div>
          </div>
          <div className="">
            <div className=" flex  justify-between">
              <h1 className="text-3xl text-[#010049] font-bold ">
                Возможно, Вам понравится
              </h1>
              <button className=" flex items-center rounded-xs gap-9 border-2 pl-4 pr-4">
                Сортировка
                <Link to={"/"}>
                  <img src={polygon} className="w-4" />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

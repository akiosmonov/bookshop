import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// ASSETS

import polygon from "../../assets/images/Polygon 1.svg";
import { RootContext } from "../../Context";

const Hero = () => {
  const { isloading, filteredBooks, setSortType } = useContext(RootContext);
  const [sort, setSort] = useState("Сортировка");


  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortType(value);

    if (value === "price-asc") setSort("Сначала дешевые");
    else if (value === "price-desc") setSort("Сначала дорогие");
    else if (value === "name") setSort("По алфавиту (А-Я)");
    else setSort("Сортировка");
  };

  return (
    <div className="p-10">
      <div className="container mx-auto">
        <div className=" flex flex-col gap-10">
          <div className="">
            <div className=" flex  justify-between">
              <h1 className="text-3xl text-[#010049] font-bold ">
                Возможно, Вам понравится
              </h1>
              <div className="relative flex items-center border-2 rounded-xs">
                <div className="flex items-center gap-9 pl-4 pr-4 py-2 bg-transparent">
                  <span className="text-black">{sort}</span>
                  <img src={polygon} alt="icon" className="w-3" />
                </div>

                <select
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleSortChange}
                >
                  <option value="" disabled>
                    Сортировка
                  </option>
                  <option className="text-black" value="price-asc">
                    Сначала дешевые
                  </option>
                  <option className="text-black" value="price-desc">
                    Сначала дорогие
                  </option>
                  <option className="text-black" value="name">
                    По алфавиту (А-Я)
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {isloading ? (
              <p>Загрузка...</p>
            ) : filteredBooks.length > 0 ? (
              filteredBooks.map((el) => (
                <div
                  key={el.uniqueId}
                  className="p-4 gap-2 w-60 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl bg-white group:"
                >
                  <Link to={`/BooksDetails/${el._id}`}>
                    <div className=" relative w-full h-70 overflow-hidden">
                      <img
                        src={el.img}
                        className="w-full h-full rounded object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75 "
                        alt={el.name}
                      />
                    </div>
                  </Link>
                  <h2 className="font-bold h-13 overflow-hidden">{el.name}</h2>
                  <p className="text-gray-600">{el.price} сом</p>
                </div>
              ))
            ) : (
              <p>Данные не найдены</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;

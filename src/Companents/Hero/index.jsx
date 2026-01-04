import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// ASSETS

import polygon from "../../assets/images/Polygon 1.svg";
import { RootContext, RootContextProvider } from "../../Context";

const Hero = () => {
  const { isloading, setIsloading, books, setBooks } = useContext(RootContext);
  console.log(books);

  return (
    <div className="p-10">
      <div className="container mx-auto">
        <div className=" flex flex-col gap-10">
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

          <div className=" flex flex-wrap gap-4">
            {isloading ? (
              <p>Загрузка...</p>
            ) : Array.isArray(books) ? (
              books.map((el) => (
                <div
                  key={el._id}
                  className="p-4 gap-2 w-60 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <Link to={`/BooksDetails/${el._id}`}>
                    <img src={el.img} className=" rounded-xl w-50 h-70" />
                  </Link>
                  <div className=" flex flex-col justify-around">
                    <h2 className="font-bold  w-50 h-13">{el.name}</h2>
                    <div className=" flex justify-between">
                      <p className="text-gray-600">{el.price} $</p>
                      {/* <p>{el.cotegory}</p> */}
                    </div>
                  </div>
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

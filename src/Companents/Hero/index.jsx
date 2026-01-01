import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// ASSETS
import detective from "../../assets/images/Rectangle 2260.svg";
import detectiveBG from "../../assets/images/Rectangle 2264.svg";
import Arrow from "../../assets/images/Arrow 1.svg";
import fantasy from "../../assets/images/Rectangle 2261.svg";
import fantasyBG from "../../assets/images/Rectangle 2265.svg";
import travel from "../../assets/images/Rectangle 2262.svg";
import sciens from "../../assets/images/Rectangle 2263.svg";
import story from "../../assets/images/Bykov_Folklore.jpeg";
import polygon from "../../assets/images/Polygon 1.svg";

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

const Hero = () => {
  const [books, setBooks] = useState([]);
  const [isloading, setIsloading] = useState(true);

  async function getBooks() {
    try {
      setIsloading(true);
      let response = await axios(
        `https://api-crud.elcho.dev/api/v1/41339-d8eb5-75fc7/bookshop`
      );
      setBooks(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log("Error");
    } finally {
      setIsloading(!true);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="p-10">
      <div className="container mx-auto">
        <div className=" flex flex-col gap-10">
          <h1 className="text-3xl text-[#010049] font-bold ">Котегории</h1>

          <div className="flex gap-8  ">
            {/* Item Card 1 */}

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

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {isloading ? (
              <p>Загрузка...</p>
            ) : Array.isArray(books) ? (
              books.map((el) => (
                <div
                  key={el.id}
                  className="p-4 flex flex-col justify-center border rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <Link to={"/BooksDetails"}>
                    <img
                      src={el.img}
                      className="border-2 rounded-xl w-80 h-100"
                    />
                  </Link>
                  <div className=" flex flex-col justify-around">
                    <h2 className="font-bold text-lg w-50 h-13">{el.name}</h2>
                    <p className="text-gray-600">{el.price} $</p>
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

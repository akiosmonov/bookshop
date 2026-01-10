import React, { useEffect, useEffectEvent, useState } from "react";
import logo from "../../assets/images/BOOKShop.svg";
import { IoIosSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { LuCircleUser } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [bookName, setBookName] = useState("");

  const AdminPassword = (e) => {
    e.preventDefault();
    const password = prompt("Введите пароль для доступа к админке: ");

    if (password === "12345") {
      navigate("/admin");
    } else {
      alert("Неверный пароль!");
    }
  };

  const SearchBooks = () => {
    const trimmedName = bookName.trim();

    if (trimmedName === "") {
      alert("Введите название книги");
    } else {
      navigate(`/search/${trimmedName}`);
      setBookName("");
    }
  };
  const handleKey = (e) => {
    if (e.key === "Enter") {
      SearchBooks();
    }
  };

  return (
    <>
      <div className="bg-[#010049] p-3 md:p-5 sticky top-0 z-50">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Логотип и иконки для мобилок */}
            <div className="flex justify-between items-center w-full md:w-auto">
              <Link to={"/"}>
                <img src={logo} alt="logo" className="w-32 md:w-auto" />
              </Link>

              {/* Иконки корзины и админа выносим сюда для мобильной версии, если нужно сэкономить место */}
              <div className="flex md:hidden gap-5">
                <Link to={"/Basket"} className="text-white text-2xl">
                  <FaCartShopping />
                </Link>
                <div onClick={AdminPassword} className="text-white text-2xl">
                  <LuCircleUser />
                </div>
              </div>
            </div>

            {/* Поиск и навигация */}
            <div className="flex items-center gap-3 md:gap-8 w-full md:w-auto">
              {/* Контейнер поиска */}
              <div className="relative grow md:grow-0">
                <input
                  onChange={(e) => setBookName(e.target.value)}
                  value={bookName}
                  type="text"
                  placeholder="Search here"
                  className="text-black text-base md:text-xl p-2 pr-10 bg-[#ececec] rounded-[5px] w-full md:w-64 lg:w-80 outline-none"
                  onKeyDown={handleKey}
                />
                <IoIosSearch
                  onClick={SearchBooks}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#010049] text-2xl cursor-pointer"
                />
              </div>

              {/* Корзина и Админ (скрываем текст на мобилках) */}
              <div className="hidden md:flex gap-6 items-center">
                <Link
                  to={"/Basket"}
                  className="flex flex-col items-center hover:opacity-80 transition"
                >
                  <FaCartShopping className="text-white text-2xl" />
                  <span className="text-white text-xs">Корзина</span>
                </Link>

                <div
                  onClick={AdminPassword}
                  className="flex flex-col items-center cursor-pointer hover:opacity-80 transition"
                >
                  <LuCircleUser className="text-white text-2xl" />
                  <span className="text-white text-xs">Админ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

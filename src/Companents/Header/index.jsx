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
    <div className=" bg-[#010049] p-3 ">
      <div className="container">
        <div className="flex justify-between items-center ">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <div className=" flex gap-10 items-center justify-center">
            <input
              onChange={(e) => setBookName(e.target.value)}
              value={bookName}
              type="text"
              placeholder="Search here"
              className="text-black text-xl p-2 bg-[#ececec] rounded-[5px] w-70   "
              onKeyDown={handleKey}
            />
            <a
              onClick={() => SearchBooks()}
              className="text-[#ffffff] text-3xl relative right-5  cursor-pointer "
            >
              <IoIosSearch />
            </a>
            <Link to={"/Basket"}>
              <div className=" flex flex-col items-center ">
                <span className="text-white text-2xl">
                  <FaCartShopping />
                </span>
                <h1 className="text-white ">Корзина</h1>
              </div>
            </Link>

            <div
              onClick={AdminPassword}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className=" flex flex-col ">
                <span className="text-white  text-2xl relative left-3">
                  <LuCircleUser />
                </span>
                <h1 className="text-white ">Админ</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import logo from "../../assets/images/BOOKShop.svg";
import { IoIosSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { LuCircleUser } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const negative = useNavigate();

  const AdminPassword = (e) => {
    e.preventDefault();
    const password = prompt("Введите пароль для доступа к админке: ");

    if (password === "12345") {
      negative("/admin");
    } else {
      alert("Неверный пароль!");
    }
  };

  return (
    <div className=" bg-[#010049] p-5">
      <div className="container">
        <div className="flex justify-between items-center ">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <div className=" flex gap-10 items-center justify-center">
            <input
              type="text"
              placeholder="Search here"
              className="text-black text-xl p-2 bg-[#ececec] rounded-[5px] w-70   "
            />
            <a href="" className=" text-[#A4A4A4] text-2xl relative right-20  ">
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

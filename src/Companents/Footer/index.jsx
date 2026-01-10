import React from "react";
import logo from "../../assets/images/BOOKShop.svg";
import { Link } from "react-router-dom";
import inst from "../../assets/images/Vector.svg";
import telegram from "../../assets/images/Vector (1).svg";
import watssap from "../../assets/images/Vector (2).svg";
import facebook from "../../assets/images/Vector (3).svg";

const Footer = () => {
  return (
    <div className="bg-[#010049] p-10">
      <div className="container">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center ">
          <div className="flex justify-center sm:justify-start">
            <Link to={"/"}>
              <img src={logo} alt="" className="" />
            </Link>
          </div>
          <div className=" flex flex-col gap-4 text-center sm:text-left">
            <h1 className=" cursor-pointer hover:text-white transition text-white/80">
              Способ оплаты
            </h1>
            <h1 className=" cursor-pointer hover:text-white transition text-white/80">
              Условия доставки
            </h1>
            <h1 className=" cursor-pointer hover:text-white transition text-white/80">
              Правила покупки
            </h1>
            <h1 className=" cursor-pointer hover:text-white transition text-white/80">
              FAQ
            </h1>
            <h1 className=" cursor-pointer hover:text-white transition text-white/80">
              О нас
            </h1>
          </div>

          <div className=" flex flex-col gap-3 text-center sm:text-left">
            <h1 className=" text-white font-bold mb-2">Связаться с нами:</h1>
            <a href="#" className=" text-white/80 hover:text-white transition">
              +996 222 533 735
            </a>
            <a href="#" className=" text-white/80 hover:text-white transition">
              +996 222 533 735
            </a>

            <div className=" flex gap-3 justify-center sm:justify-start mt-2">
              <img src={inst} className="w-6 h-6 cursor-pointer" />
              <img src={telegram} className="w-6 h-6 cursor-pointer" />
              <img src={watssap} className="w-6 h-6 cursor-pointer" />
              <img src={facebook} className="w-6 h-6 cursor-pointer" />
            </div>
          </div>

          <div className=" flex flex-col gap-3 text-center sm:text-left">
            <h1 className="text-white font-bold mb-2">Адрес</h1>
            <p className="text-white/80 text-sm leading-relaxed max-w-[250] mx-auto sm:mx-0 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius in
              dolor viverra feugiat neque, sed in. Mattis volutpat malesuada
              velit parturient aliquam, est.
            </p>
          </div>
          <div className="border-t border-white/10 mt-10 pt-5 text-center">
            <p className="text-white/40 text-xs">
              © 2024 BOOKShop. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

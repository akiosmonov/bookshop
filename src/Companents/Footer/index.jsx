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
        <div className=" flex justify-around  items-center ">
          <Link to={"/"}>
            <img src={logo} alt=""  className=""/>
          </Link>
          <div className="">
            <h1 className=" text-white">Способ оплаты</h1>
            <h1 className=" text-white">Условия доставки</h1>
            <h1 className=" text-white">Правила покупки</h1>
          </div>
          <div className="">
            <h1 className="text-white">FAQ</h1>
            <h1 className="text-white">О нас</h1>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className=" text-white">Связаться с нами:</h1>
            <a href="#" className=" text-white">
              +996 222 533 735
            </a>
            <a href="#" className=" text-white">
              +996 222 533 735
            </a>
            <a href="#" className=" text-white">
              +996 222 533 735
            </a>
            <div className=" flex gap-3">
              <img src={inst} alt="" />
              <img src={telegram} alt="" />
              <img src={watssap} alt="" />
              <img src={facebook} alt="" />
            </div>
          </div>
          <div className=" flex flex-col items-center text-center">
            <h1 className="text-white">Адрес</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Varius in
              dolor viverra feugiat <br /> neque, sed in. Mattis volutpat malesuada <br />
              velit parturient aliquam, est. <br /> Mauris vitae velit laoreet faucibus
              nec amet velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

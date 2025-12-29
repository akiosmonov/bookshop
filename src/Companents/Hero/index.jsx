import React from "react";
import detective from "../../assets/images/Rectangle 2260.svg";
import detectiveBG from "../../assets/images/Rectangle 2264.svg";

const Hero = () => {
  return (
    <div className="p-10">
      <div className="container">
        <h1 className="text-2xl text-[#010049] relative font-bold ">
          Котегории
        </h1>
        <div className=" flex  w-50">
          <img src={detectiveBG} alt="" className=" relative left-80" />
          <img src={detective} alt="" className=" rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

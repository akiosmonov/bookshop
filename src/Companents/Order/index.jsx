import React from "react";
import { motion } from "framer-motion";

const Order = () => {
  return (
    <div className=" p-5 bg-gray-50 min-h-screen">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
          <div className="flex-col md:flex gap-20 md:gap-50">
            <div className=" flex flex-col gap-4">
              <h1 className="text-[#010049] text-lg md:text-2xl font-bold ">
                Контакные данные
              </h1>
              <input
                type="text"
                placeholder="Фио*"
                className="w-full border-2  rounded-[3px] pl-3 pt-1 pb-1 border-[#010049] focus:ring-2 ring-blue-200 outline-none"
              />
              <input
                type="tel"
                placeholder="Телефон*"
                className=" w-full border-2  rounded-[3px] pl-3 pt-1 pb-1 border-[#010049] focus:ring-2 ring-blue-200 outline-none"
              />
            </div>
            <div className=" flex  flex-col gap-5">
              <h1 className="text-[#010049] text-lg md:text-2xl font-bold ">
                Оплата
              </h1>
              <div className=" flex gap-4 items-center ">
                <input type="checkbox" name="payment" className="w-5 h-5 rounded-full appearance-none border-2 border-[#010049] checked:bg-[#010049] transition-all cursor-pointer" />
                <h2 className="text-[#010049] group-hover:underline">
                  Оплачу наличными при получении <br /> заказа
                </h2>
              </div>
              <div className=" flex flex-col gap-2 ">
                <h1 className="text-[#010049]">
                  Оплата с банковской картой через <br />{" "}
                  <span className=" text-green-600 font-bold tracking-wide">PayBox</span>
                </h1>
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#010049] w-full  text-white  h-8 rounded-[3px]"
                >
                  Оплатить
                </motion.button>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-15">
            <div className=" flex flex-col gap-20">
              <div className=" flex  flex-col gap-1">
                <h1 className="text-[#010049] text-lg md:text-2xl font-bold ">
                  Доставка
                </h1>
                <p className="text-[#000000E5]">
                  Выберите удобный способ доставки <br /> для этого заказа.
                </p>
              </div>
              <div className=" flex flex-col gap-3">
                <div className=" flex gap-4 items-center">
                  <input type="checkbox" className="w-5 h-5 rounded-full appearance-none border-2 border-[#010049] checked:bg-[#010049] transition-all cursor-pointer" />
                  <h1 className="text-[#010049] font-medium">Самовывоз</h1>
                </div>
                <div className=" flex gap-4 items-center">
                  <input type="checkbox" className="w-5 h-5 rounded-full appearance-none border-2 border-[#010049] checked:bg-[#010049] transition-all cursor-pointer" />
                  <h1 className="text-[#010049] font-medium">
                    Доставка курьером
                  </h1>
                </div>
              </div>
              <textarea
                placeholder="Область, город (район, село), улица, дом№, кв.№*"
                className="w-full pt-5 pl-10 pb-20 border-2  border-[#010049] outline-none resize-none transition-colors"
              />
            </div>
            <div className="bg-[#010049] w-full  p-5 flex flex-col gap-5">
              <div className=" flex justify-between">
                <h1 className="text-white">Общая сумма:</h1>
                <h2 className="text-white">3000$</h2>
              </div>
              <h1 className="text-white text-center">Ещё не оплачено</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;

import React from "react";
import { motion } from "framer-motion";

const Order = () => {
  return (
    <div className=" p-30">
      <div className="container">
        <div className=" flex justify-around">
          <div className=" flex flex-col gap-50">
            <div className=" flex flex-col gap-4">
              <h1 className="text-[#010049] text-2xl font-bold ">
                Контакные данные
              </h1>
              <input
                type="text"
                placeholder="Фио*"
                className="w-70 border-2  rounded-[3px] pl-3 pt-1 pb-1 border-[#010049]"
              />
              <input
                type="text"
                placeholder="Телефон*"
                className="w-70 border-2  rounded-[3px] pl-3 pt-1 pb-1 border-[#010049]"
              />
            </div>
            <div className=" flex  flex-col gap-5">
              <h1 className="text-[#010049] text-2xl font-bold ">Оплата</h1>
              <div className=" flex gap-4 items-center ">
                <input type="checkbox" className="w-5 h-5 accent-[#010049]" />
                <h2 className="text-[#010049] ">
                  Оплачу наличными при получении <br /> заказа
                </h2>
              </div>
              <div className=" flex flex-col gap-2 ">
                <h1 className="text-[#010049]">
                  Оплата с банковской картой через <br />{" "}
                  <span className=" text-green-500 font-medium">PayBox</span>
                </h1>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#010049] text-white w-70 h-8 rounded-[3px]"
                >
                  Оплатить
                </motion.button>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-15">
            <div className=" flex flex-col gap-10">
              <div className=" flex  flex-col gap-1">
                <h1 className="text-[#010049] text-2xl font-bold ">Доставка</h1>
                <p className="text-[#000000E5]">
                  Выберите удобный способ доставки <br /> для этого заказа.
                </p>
              </div>
              <div className=" flex flex-col gap-3">
                <div className=" flex gap-4 items-center">
                  <input type="checkbox" className="w-5 h-5 accent-[#010049]" />
                  <h1 className="text-[#010049] font-medium">Самовывоз</h1>
                </div>
                <div className=" flex gap-4 items-center">
                  <input type="checkbox" className="w-5 h-5 accent-[#010049]" />
                  <h1 className="text-[#010049] font-medium">
                    Доставка курьером
                  </h1>
                </div>
              </div>
              <textarea
                placeholder="Область, город (район, село), улица, дом№, кв.№*"
                className="w-full pr-30 pt-5 pl-10 pb-20 border-2  border-[#010049] outline-none resize-none"
              />
            </div>
            <div className="bg-[#010049] p-5 flex flex-col gap-5">
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

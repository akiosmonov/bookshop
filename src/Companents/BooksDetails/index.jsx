import React, { useContext, useState } from "react";
import { RootContext } from "../../Context";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import { useNavigate, useParams } from "react-router-dom";

const BooksDetails = () => {
  const { id } = useParams();
  const { isloading, books, setCardBooks, cardBooks } = useContext(RootContext);
  const [count, setCount] = useState(1);
  const [btn, setBtn] = useState("");
  const navigate = useNavigate();

  if (isloading) return <h1 className="text-center">Загрузка...</h1>;

  const product = books.find(
    (el) => String(el.uniqueId || el.id) === String(id)
  );

  if (!product) return <h1 className="text-center">Книга не найдена</h1>;

  const isProductInCard = cardBooks.some(
    (el) => String(el.uniqueId || el.id) === String(product.uniqueId || el.id)
  );

  const BuyNow = () => {
    if (!isProductInCard) {
      const updated = [...cardBooks, { ...product, quantity: Number(count) }];
      setCardBooks(updated);
      localStorage.setItem("card", JSON.stringify(updated));
    }
    navigate("/order");
  };
  const toggleCardBooks = () => {
    let updated;
    if (isProductInCard) {
      updated = cardBooks.filter((el) => String(el.id) !== String(product.id));
    } else {
      updated = [...cardBooks, { ...product, quantity: Number(count) }];
    }

    setCardBooks(updated);
    localStorage.setItem("card", JSON.stringify(updated));
  };
  const { name, img, price, cotegory, description } = product;

  return (
    <>
      <div className="p-10 md:py-10 px-4">
        <div className="container mx-auto">
          <div className=" flex gap-8 lg:flex-row lg:gap-20">
            <div className=" w-full lg:w-1/3 lg:flex-row flex justify-center">
              <img
                src={img}
                alt=""
                className="w-full max-w-400 lg:max-w-none rounded-sm border shadow-md object-cover"
              />
            </div>
            <div className="w-full lg:w-2/3  flex flex-col gap-6 md:gap-10">
              <div className=" flex flex-col gap-5">
                {" "}
                <h2 className=" font-bold text-xl md:text-3xl  text-[#010049] ">
                  {name}
                </h2>
                <h1 className=" font-bold text-xl md:text-2xl  text-[#010049]"></h1>
                {price} сом
              </div>
              <h3 className="font-bold text-[#595959] text-lg md:text-xl">
                {" "}
                Ganre: {" " + cotegory}
              </h3>
              <div className=" flex items-center w-fit border overflow-hidden  border-[#010049]">
                <motion.button
                  type="submit"
                  whileTap={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => setCount(count == 1 ? count : count - 1)}
                  className="w-10 flex items-center justify-center transition-opacity active:opacity-70 text-white text-center bg-[#010049]  "
                >
                  -
                </motion.button>
                <h1 className="w-11 h-6 border-2 bg-white text-center ">
                  {count}
                </h1>
                <motion.button
                  type="submit"
                  whileTap={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => setCount(count == 10 ? count : count + 1)}
                  className="w-10 flex items-center justify-center transition-opacity active:opacity-70 text-white text-center bg-[#010049]  "
                >
                  +
                </motion.button>
              </div>

              <div className=" flex flex-col gap-3">
                <h1 className="text-[#595959] font-bold text-xl md:text-2xl">
                  Description
                </h1>
                <p className="text-[#595959] leading-relaxed text-sm md:text-base">
                  {" "}
                  {description}
                </p>
              </div>

              <div className=" flex flex-col gap-6 w-full max-w-md ">
                <motion.button
                  onClick={toggleCardBooks}
                  type="submit"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#010049",
                    color: "#fff",
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onChange={(e) => setBtn(e.target.value)}
                  className={`flex items-center justify-center gap-2 w-full py-4 font-semibold rounded-lg text-lg border-2 transition-all ${
                    isProductInCard
                      ? "bg-[#010049] text-white border-[#010049]"
                      : "bg-transparent text-[#010049] border-[#010049]"
                  }`}
                >
                  {isProductInCard ? (
                    <>
                      <GiCheckMark /> In Cart
                    </>
                  ) : (
                    "Add to cart"
                  )}
                </motion.button>

                <motion.button
                  onClick={BuyNow}
                  type="submit"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#010049",
                    color: "#fff",
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className=" w-full py-4 font-semibold bg-transparent text-[#010049] rounded-lg text-lg border-2 border-[#010049] hover:bg-[#010049] hover:text-white transition-all"
                >
                  Buy now
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksDetails;

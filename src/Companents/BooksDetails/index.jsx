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

  const product = books.find((el) => String(el._id) === String(id));

  if (!product) return <h1 className="text-center">Книга не найдена</h1>;

  const isProductInCard = cardBooks.some(
    (el) => String(el._id) === String(product._id)
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
      updated = cardBooks.filter(
        (el) => String(el._id) !== String(product._id)
      );
    } else {
      updated = [...cardBooks, { ...product, quantity: Number(count) }];
    }

    setCardBooks(updated);
    localStorage.setItem("card", JSON.stringify(updated));
  };
  const { name, img, price, cotegory, description } = product;

  return (
    <>
      <div className="p-20">
        <div className="container">
          <div className=" flex gap-20">
            <img src={img} alt="" className="w-140 rounded border" />
            <div className=" flex flex-col gap-10">
              <div className=" flex flex-col gap-5">
                {" "}
                <h1 className=" font-bold text-2xl text-[#010049]">{name}</h1>
                <h2 className=" font-bold text-2xl text-[#010049] ">
                  {price} сом
                </h2>
              </div>
              <h3 className="font-bold text-[#595959] text-xl">
                {" "}
                Ganre: {" " + cotegory}
              </h3>
              <div className=" w-25 h-6 flex items-center justify-center  border-[#010049]">
                <motion.button
                  type="submit"
                  whileTap={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => setCount(count == 1 ? count : count - 1)}
                  className="w-7 text-white text-center bg-[#010049]  "
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
                  className="w-7 text-white text-center bg-[#010049] "
                >
                  +
                </motion.button>
              </div>
              <div className=" flex flex-col gap-5">
                <h1 className="text-[#595959] font-bold text-2xl">
                  Description
                </h1>
                <p className="text-[#595959]"> {description}</p>
              </div>
              <div className=" flex flex-col gap-6 w-90 items-center ">
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
                  className={`flex items-center justify-center gap-2 w-full py-3 font-semibold rounded-[5px] text-[18px] border-2 transition-colors ${
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
                  className=" pl-35.5 pr-35.5 pt-3 pb-3 font-semibold bg-transparent rounded-[5px] text-[18px] border-2 border-[#010049]"
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

import axios from "axios";
import React, { useState } from "react";
import miniStick from "../../assets/images/Vector 40.png";
import stick from "../../assets/images/Vector 39.svg";
import { motion } from "framer-motion";

const Admin = () => {
  const [productName, setProductName] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCotegory, setProductCotegory] = useState("");

  async function postProduct(e) {
    if (e) e.preventDefault();

    if (
      !productDescription.trim() ||
      !productName.trim() ||
      !productPrice ||
      !productUrl ||
      !productCotegory
    ) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    let newProduct = {
      name: productName,
      description: productDescription,
      price: productPrice,
      img: productUrl,
      cotegory: productCotegory,
    };

    try {
      await axios.post(
        `https://api-crud.elcho.dev/api/v1/41339-d8eb5-75fc7/bookshop`,
        newProduct
      );

      setProductDescription("");
      setProductName("");
      setProductUrl("");
      setProductPrice("");
      setProductCotegory("");
    } catch (error) {
      console.error("Error posting product: ", error);
      alert("Failed to add product");
    }
  }

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      postProduct();
    }
  };


  return (
    <div className=" p-10">
      <div className="container">
        <div className=" flex justify-center items-center gap-10 ">
          <div className="w-1/3 relative bottom-15">
            <div
              className="w-full h-100 relative border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center overflow-hidden bg-gray-50 hover:border-[#010049] transition-colors cursor-pointer"
              onClick={() => {
                const url = prompt("Введите URL изображения книги:");
                if (url) setProductUrl(url);
              }}
            >
              {productUrl ? (
                <img
                  src={productUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center p-5">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-gray-400 text-sm">
                    Нажмите, чтобы добавить URL обложки
                  </p>
                </div>
              )}
            </div>
          </div>
          <form
            onSubmit={postProduct}
            className=" flex items-center justify-center flex-col gap-10 "
          >
            <input
              onKeyDown={handleSubmit}
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder=" Product Name(...)"
              className="pr-30 pt-5  pb-5 pl-10 border-2 text-xl  border-[#010049]"
            />
            <div className=" flex relative gap-2 ">
              <input
                onChange={(e) => setProductCotegory(e.target.value)}
                value={productCotegory}
                type="text"
                placeholder="Cotegory"
                className=" border-2 text-[13px] p-5 border-[#010049]"
              />
              <input
                onKeyDown={handleSubmit}
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value < 0 ? 0 : e.target.value)}
                type="number"
                placeholder=" Price"
                className=" border-2 text-[13px] p-5 border-[#010049]"
              />
            </div>
            <textarea
              onKeyDown={handleSubmit}
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Product Description"
              className="w-full pr-30 pt-5 pl-10 pb-20 border-2 text-xl border-[#010049] outline-none resize-none"
            />

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#010049",
                color: "#fff",
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className=" pl-43 pr-43 pt-2 pb-2 font-semibold text-[18px] border-5 border-[#010049]"
            >
              Save
            </motion.button>
            <img
              src={miniStick}
              alt=""
              className=" relative bottom-38 left-46"
            />
            <img src={stick} alt="" className=" relative bottom-55 left-44" />
          </form>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Admin;

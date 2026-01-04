import React, { useContext } from "react";
import { RootContext } from "../../Context";
import { Link } from "react-router-dom";

const Basket = () => {
  const { cardBooks } = useContext(RootContext);

  console.log(cardBooks);

  // const { img, name, price, cotegory, quantity } = cardBooks;

  return (
    <div className="p-10">
      <div className="container">
        <div className=" flex flex-wrap gap-10">
          {cardBooks.map((el) => (
            <div
              key={el._id}
              className="p-4 w-70 h-110 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow"
            >
              <Link to={`/BooksDetails/${el._id}`}>
              <div className=" transition-0.5">
                <img src={el.img} className=" hover:scale-101  w-60 h-80" />
              </div>
              </Link>
              <div className=" flex flex-col justify-around">
                <h2 className="font-bold text-lg w-50 h-13">{el.name}</h2>
                <p className="text-gray-600">{el.price} $</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Basket;

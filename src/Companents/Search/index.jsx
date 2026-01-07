import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RootContext } from "../../Context/RootContext";

const Search = () => {
  const { bookTitle } = useParams();
  const { filteredBooks, isloading, books, setSearchValue } = useContext(RootContext);

  useEffect(() => {
    if (bookTitle) {
      setSearchValue(bookTitle);
    }

    return () => setSearchValue("");
  }, [bookTitle, setSearchValue]);

  if (isloading) return <h1>Загрузка...</h1>;
  return (
    <>
      <div className="container flex flex-col gap-20 p-10">
        <h2 className="text-2xl mb-4 text-[]">
          Результаты поиска для: "{bookTitle}"
        </h2>
        <div className="grid grid-cols-4 gap-4 ">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((el) => (
              <div key={el.uniqueId} className="border p-4 rounded shadow">
                <img
                  src={el.img}
                  alt={el.name}
                  className="h-100 w-full object-cover"
                />
                <h3 className="mt-2 font-bold">{el.name}</h3>
                <p>{el.price} $</p>
              </div>
            ))
          ) : (
            <p>Книги не найдены</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { number } from "framer-motion";

export const RootContext = createContext();

const RootContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [sortType, setSortType] = useState("");
  const [searchValue, setSearchValue] = useState("");

  // const url = ;
  const apiEndpoints = [

    `https://695fc4447f037703a814c2fe.mockapi.io/677f98590476123f76a76985/newProduct`,
    `https://695fc4447f037703a814c2fe.mockapi.io/677f98590476123f76a76985/newProduct2`,

    
    // "https://695fc4447f037703a814c2fe.mockapi.io/api/v1/:endpoint",

    // "https://api-crud.elcho.dev/api/v1/1d346-5500f-354c2/booksshop",
    // "https://api-crud.elcho.dev/api/v1/df970-13743-db46c/project1",
    // "https://api-crud.elcho.dev/api/v1/63f69-cf1f7-d90b8/project2",
    // "https://api-crud.elcho.dev/api/v1/a274e-cee89-73e88/project3",
    // `https://api-crud.elcho.dev/api/v1/1d346-5500f-354c2/booksshop`
  ];

  const getSafeLocalStorage = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    if (saved === null || saved === "undefined" || saved === "") {
      return defaultValue;
    }
    try {
      return JSON.parse(saved);
    } catch (error) {
      console.error(`Error parsing localStorage key "${key}":`, error);
      return defaultValue;
    }
  };
  const [cardBooks, setCardBooks] = useState(() =>
    getSafeLocalStorage("card", [])
  );

  // const searchBooks = (title) => {
  //   if (!title || !title.trim()) {
  //     setFilteredBooks(books);
  //   } else {
  //     const searchLow = title.toLowerCase();
  //     const result = books.filter(
  //       (item) =>
  //         item.name.toLowerCase().includes(searchLow) ||
  //         (item.cotegory && item.cotegory.toLowerCase().includes(searchLow))
  //     );
  //     setFilteredBooks(result);
  //   }
  // };

  // const sortBooks = (e) => {
  //   let sorted = [...filteredBooks];

  //   if (e === "price-asc") {
  //     sorted.sort((a, b) => Number(a.price) - Number(b.price));
  //   } else if (e === "price-desc") {
  //     sorted.sort((a, b) => Number(b.price) - Number(a.price));
  //   } else if (e === "name") {
  //     sorted.sort((a, b) => a.name.localeCompare(b.name));
  //   }

  //   setFilteredBooks(sorted);
  // };

  const getALlBooks = async () => {
    try {
      setIsloading(true);

      const requests = apiEndpoints.map((url) => axios.get(url));
      const responses = await Promise.all(requests);

      const allBooks = responses.flatMap((res, index) => {
        const data = res.data.data || res.data;

        return data.map((book) => ({
          ...book,
          uniqueId: `api${index}-${book.id}`,
        }));
      });

      setBooks(allBooks);
      setFilteredBooks(allBooks);
    } catch (error) {
      console.log("error");
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    getALlBooks();
  }, []);

  useEffect(() => {
    let result = [...books];
    if (searchValue.trim()) {
      const searchLow = searchValue.toLowerCase();
      result = result.filter((e) => {
        const nameMatch = e.name.toLowerCase().includes(searchLow);
        const cotegoryMatch = e.cotegory?.toLowerCase() === searchLow;
        const cotegoryInclude = e.cotegory?.toLowerCase().includes(searchLow);
        return nameMatch || cotegoryInclude || cotegoryMatch;
      });
    }

    if (sortType === "price-asc") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortType === "price-desc") {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (sortType === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredBooks(result);
  }, [searchValue, books, sortType]);

  console.log(books);
  

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(cardBooks));
  }, [cardBooks]);

  return (
    <RootContext.Provider
      value={{
        books,
        setBooks,
        isloading,
        setIsloading,
        cardBooks,
        setCardBooks,
        filteredBooks,
        sortType,
        setSortType,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </RootContext.Provider>
  );
};

export default RootContextProvider;

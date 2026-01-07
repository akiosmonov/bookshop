import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { number } from "framer-motion";

export const RootContext = createContext();

const RootContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [filteredBooks, setFilteredBooks] = useState([]);

  // const url = `https://api-crud.elcho.dev/api/v1/1d346-5500f-354c2/booksshop`;
  const apiEndpoints = [
    "https://api-crud.elcho.dev/api/v1/1d346-5500f-354c2/booksshop",
    "https://api-crud.elcho.dev/api/v1/df970-13743-db46c/project1",
    "https://api-crud.elcho.dev/api/v1/63f69-cf1f7-d90b8/project2",
    "https://api-crud.elcho.dev/api/v1/a274e-cee89-73e88/project3",
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

  // async function getBooks() {
  //   try {
  //     setIsloading(true);
  //     const response = await axios.get(`${url}?limit=100`);

  //     const allData = response.data.data;

  //     setBooks(allData);
  //     setFilteredBooks(allData);
  //   } catch (error) {
  //     console.error("Ошибка при получении книг:", error);
  //   } finally {
  //     setIsloading(false);
  //   }
  // }

  const searchBooks = (title) => {
    if (!title || !title.trim()) {
      setFilteredBooks(books);
    } else {
      const searchLow = title.toLowerCase();
      const result = books.filter(
        (item) =>
          item.name.toLowerCase().includes(searchLow) ||
          (item.cotegory && item.cotegory.toLowerCase().includes(searchLow))
      );
      setFilteredBooks(result);
    }
  };

  const sortBooks = (e) => {
    let sorted = [...filteredBooks];

    if (e === "price-asc") {
      sorted.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (e === "price-desc") {
      sorted.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (e === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredBooks(sorted);
  };

  const getALlBooks = async () => {
    try {
      setIsloading(true);

      const requests = apiEndpoints.map((url) => axios.get(url));
      const responses = await Promise.all(requests);

      const allBooks = responses.flatMap((res) => res.data.data || res.data);

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
    setFilteredBooks(books);
  }, [books]);

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
        searchBooks,
        filteredBooks,
        sortBooks,
      }}
    >
      {children}
    </RootContext.Provider>
  );
};

export default RootContextProvider;

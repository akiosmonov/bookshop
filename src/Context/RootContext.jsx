import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RootContext = createContext();

const RootContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [isloading, setIsloading] = useState(true);

  const url = `https://api-crud.elcho.dev/api/v1/41339-d8eb5-75fc7/bookshop`;

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

  async function getBooks() {
    try {
      setIsloading(true);
      const response = await axios.get(url);
      setBooks(response.data.data);
    } catch (error) {
      console.error("Ошибка при получении книг:", error);
    } finally {
      setIsloading(false);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

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
      }}
    >
      {children}
    </RootContext.Provider>
  );
};

export default RootContextProvider;

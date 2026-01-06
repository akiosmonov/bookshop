import React from "react";
import "./App.css";
import Header from "./Companents/Header";
import Admin from "./Companents/Admin";
import { Route, Routes } from "react-router-dom";
import Home from "./Companents/Home";
import Footer from "./Companents/Footer";
import Basket from "./Companents/Basket";
import BooksDetails from "./Companents/BooksDetails";
import Order from "./Companents/Order";
import Search from "./Companents/Search";
const App = () => {
  let routes = [
    { id: 1, link: "/", element: <Home /> },
    { id: 2, link: "/admin", element: <Admin /> },
    { id: 3, link: "/BooksDetails/:id", element: <BooksDetails /> },
    { id: 4, link: "/Basket", element: <Basket /> },
    { id: 5, link: "/order", element: <Order /> },
    { id: 6, link: "/search/:bookTitle", element: <Search /> },
  ];
  return (
    <div className="app">
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route key={el.id} path={el.link} element={el.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

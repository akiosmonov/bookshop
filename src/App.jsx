import React from "react";
import "./App.css";
import Header from "./Companents/Header";
import Admin from "./Companents/Admin";
import { Route, Routes } from "react-router-dom";
import Home from "./Companents/Home";
import Footer from "./Companents/Footer";
const App = () => {
  let routes = [
    {
      id: 1,
      link: "/",
      element: <Home />,
    },
    {
      id: 2,
      link: "/admin",
      element: <Admin />,
    },
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

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "./redux/slices/filterSlice";

import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./components/NotFoundBlock";
import Cart from "./pages/Cart";

import "../src/scss/_app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./components/NotFoundBlock";
import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";

import "../src/scss/_app.scss";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<FullPizza />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

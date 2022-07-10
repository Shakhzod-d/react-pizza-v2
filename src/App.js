import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "./redux/slices/filterSlice";

import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./components/NotFoundBlock";
import Cart from "./pages/Cart";

import "../src/scss/_app.scss";

export const SearchContext = React.createContext("");

// console.log(SearchContext);

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home searchValue={searchValue} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;

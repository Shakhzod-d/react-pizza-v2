// import "./scss/app.scss";

import React, { useState } from "react";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

import pizzas from "./assets/pizzas.json";

import "../src/scss/_app.scss";
// console.log(pizzas);
function App() {
  const [items, setItems] = useState([]);
  const url = "https://628a09fee5e5a9ad32203421.mockapi.io/items";
  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            {/* categorisses */}
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => {
              // const { id, title, price, imageUrl, sizes, types } = obj;
              return <PizzaBlock key={obj.id} {...obj} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

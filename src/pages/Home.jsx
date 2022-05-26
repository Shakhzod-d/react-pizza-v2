import React, { useState } from "react";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLaoding] = useState(true);
  const url = "https://628a09fee5e5a9ad32203421.mockapi.io/items";
  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLaoding(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        {/* categorisses */}
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
};

export default Home;

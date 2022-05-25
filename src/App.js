// import "./scss/app.scss";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

import pizzas from "./assets/pizzas.json";

import "../src/scss/_app.scss";
// console.log(pizzas);
function App() {
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
            {pizzas.map((obj) => {
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

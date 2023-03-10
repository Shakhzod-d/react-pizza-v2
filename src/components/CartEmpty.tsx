import React from "react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Корзина пустая <span>😕</span>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img
        src="https://github.com/Archakov06/react-pizza-html/blob/master/public/img/empty-cart.png?raw=true"
        alt="Empty cart"
      />
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default CartEmpty;

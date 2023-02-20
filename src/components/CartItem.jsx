import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { minusItem, addItem, removeItem } from "../redux/slices/cartSlice";

const CartItem = ({ id, title, type, size, price, count, imageUrl }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm("Are you sure you want to remove?")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div class="cart__item">
      <div class="cart__item-img">
        <img class="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div class="cart__item-info">
        <h3>{title}</h3>
        <p>
          {type} {size} см.
        </p>
      </div>
      <div class="cart__item-count">
        <div
          onClick={onClickMinus}
          class="button button--outline button--circle cart__item-count-minus"
        >
          -
        </div>
        <b>{count}</b>
        <div
          onClick={onClickPlus}
          class="button button--outline button--circle cart__item-count-plus"
        >
          +
        </div>
      </div>
      <div class="cart__item-price">
        <b>{price * count} ₽</b>
      </div>
      <div class="cart__item-remove">
        <div
          onClick={onClickRemove}
          class="button button--outline button--circle"
        >
          X
        </div>
      </div>
    </div>
  );
};

export default CartItem;

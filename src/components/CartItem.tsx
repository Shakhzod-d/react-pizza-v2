import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  minusItem,
  addItem,
  removeItem,
  CartItem,
} from "../redux/slices/cartSlice";

type CartItemProps = {
  id: number;
  title: string;
  type: string;
  size: number;
  price: number;
  count: number;
  imageUrl: string;
};

const CartItemBlock: React.FC<CartItemProps> = ({
  id,
  title,
  type,
  size,
  price,
  count,
  imageUrl,
}) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    let currentId = String(id);
    dispatch(addItem({ id: currentId } as CartItem));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id as any));
  };

  const onClickRemove = () => {
    if (window.confirm("Are you sure you want to remove?")) {
      dispatch(removeItem(id as any));
    }
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>
          {type} {size} см.
        </p>
      </div>
      <div className="cart__item-count">
        <div
          onClick={onClickMinus}
          className="button button--outline button--circle cart__item-count-minus"
        >
          -
        </div>
        <b>{count}</b>
        <div
          onClick={onClickPlus}
          className="button button--outline button--circle cart__item-count-plus"
        >
          +
        </div>
      </div>
      <div className="cart__item-price">
        <b>{price * count} ₽</b>
      </div>
      <div className="cart__item-remove">
        <div
          onClick={onClickRemove}
          className="button button--outline button--circle"
        >
          X
        </div>
      </div>
    </div>
  );
};

export default CartItemBlock;

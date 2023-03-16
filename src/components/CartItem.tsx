import React from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import { minusItem, addItem, removeItem } from "../redux/cart/slice";
import { CartItem } from "../redux/cart/types";

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
        <button
          disabled={count === 1}
          onClick={onClickMinus}
          className={clsx(
            "button button--outline button--circle cart__item-count-minus",
            { "cart__item-count-minus--disabled": count === 1 }
          )}
        >
          -
        </button>
        <b>{count}</b>
        <button
          onClick={onClickPlus}
          className="button button--outline button--circle cart__item-count-plus"
        >
          +
        </button>
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

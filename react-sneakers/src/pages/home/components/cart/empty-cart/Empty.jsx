import React from "react";
import emptyCart from "./box.png";
export const Empty = ({ onClickClose }) => {
  return (
    <div className="cart__empty">
      <div className="cart__empty-wrapper">
        <div className="cart__empty-img">
          <img src={emptyCart} alt="cart empty" />
        </div>
        <h4 className="cart__empty-title">Корзина пустая</h4>
        <p className="cart__empty-desc ">
          Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
        </p>
        <button onClick={onClickClose} className="cart__empty-btn cart__btn">
          Вернуться назад
        </button>
      </div>
    </div>
  );
};

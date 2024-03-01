import React from "react";
import document from "./img.png";

export const Order = ({ onClickClose }) => {
  return (
    <div className="cart__order">
      <div className="cart__order-wrapper">
        <div className="cart__order-img">
          <img src={document} alt="order" />
        </div>
        <h5 className="cart__order-title">Заказ оформлен!</h5>
        <p className="cart__order-desc">
          Ваш заказ #18 скоро будет передан курьерской доставке
        </p>
        <button onClick={onClickClose} className="cart__btn cart__order-btn">
          Вернуться назад
        </button>
      </div>
    </div>
  );
};

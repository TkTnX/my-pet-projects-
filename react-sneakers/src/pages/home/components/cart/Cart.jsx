import React from "react";
import "./_cart.scss";
import plus from "./plus.svg";
import sneaker from "./sneaker.png";
import delImg from "./del.svg";

export const Cart = (props) => {
  return (
    <div className="cart">
      <div className="cart__wrapper">
        <div className="cart__top">
          <h3 className="cart__title">
            Корзина
            <button onClick={props.onClickClose} className="cart__close">
              <img src={plus} alt="close" />
            </button>
          </h3>
          <ul className="cart__products">
            <li className="cart__product">
              <div className="card__img">
                <img src={sneaker} alt="sneaker" />
              </div>
              <div className="card__product-text">
                <h6 className="card__product-title">
                  Мужские Кроссовки Nike Air Max 270
                </h6>
                <div className="card__product-bottom">
                  <p className="card__product-price">12 999 руб.</p>
                  <button className="card__product-delBtn">
                    <img src={delImg} alt="Delete" />
                  </button>
                </div>
              </div>
            </li>
            <li className="cart__product">
              <div className="card__img">
                <img src={sneaker} alt="sneaker" />
              </div>
              <div className="card__product-text">
                <h6 className="card__product-title">
                  Мужские Кроссовки Nike Air Max 270
                </h6>
                <div className="card__product-bottom">
                  <p className="card__product-price">12 999 руб.</p>
                  <button className="card__product-delBtn">
                    <img src={delImg} alt="Delete" />
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-desc">
            <div className="cart__bottom-title">Итого:</div>
            <div className="cart__bottom-price">21 498 руб.</div>
          </div>
          <div className="cart__bottom-desc">
            <div className="cart__bottom-title">Налог 5%:</div>
            <div className="cart__bottom-price">1074 руб.</div>
          </div>
          <button className="cart__btn">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

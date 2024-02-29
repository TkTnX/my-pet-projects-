import React, { useEffect } from "react";
import "./_cart.scss";
import plus from "./plus.svg";
import emptyCart from "./empty-cart/box.png";
import delImg from "./del.svg";

export const Cart = ({ onClickClose, items = [], onClickDelete }) => {
  return (
    <div className="cart">
      <div className="cart__wrapper">
        <div className="cart__top">
          <h3 className="cart__title">
            Корзина
            <button onClick={onClickClose} className="cart__close">
              <img src={plus} alt="close" />
            </button>
          </h3>
          <ul className="cart__products">
            {items.length === 0 ? (
              <div className="cart__empty">
                <div className="cart__empty-wrapper">
                  <div className="cart__empty-img">
                    <img src={emptyCart} alt="cart empty" />
                  </div>
                  <h4 className="cart__empty-title">Корзина пустая</h4>
                  <p className="cart__empty-desc ">
                    Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
                  </p>
                  <button
                    onClick={onClickClose}
                    className="cart__empty-btn cart__btn"
                  >
                    Вернуться назад
                  </button>
                </div>
              </div>
            ) : (
              items.map(({ id, img, title, price }) => (
                <li key={id} className="cart__product">
                  <div className="card__img">
                    <img width={70} src={img} alt={title} />
                  </div>
                  <div className="card__product-text">
                    <h6 className="card__product-title">{title}</h6>
                    <div className="card__product-bottom">
                      <p className="card__product-price">{price}</p>

                      <button
                        onClick={() => onClickDelete(id)}
                        className="card__product-delBtn"
                      >
                        <img src={delImg} alt="Delete" />
                      </button>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
        {items.length === 0 ? null : (
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
        )}
      </div>
    </div>
  );
};

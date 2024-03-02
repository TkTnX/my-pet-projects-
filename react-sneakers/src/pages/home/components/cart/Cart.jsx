import React, { useState } from "react";
import "./_cart.scss";
import { Order } from "./order/Order";
import { Empty } from "./empty-cart/Empty";

import plus from "./plus.svg";
import delImg from "./del.svg";

export const Cart = ({ onClickClose, items = [], onClickDelete }) => {
  const [order, setOrder] = useState(false);
  const totalPrice = items.reduce((sum, obj) => parseInt(obj.price) + sum, 0);

  const orderFunc = () => setOrder(!order);
  return (
    <div className="overlay">
      <div className="cart">
        <div className="cart__wrapper">
          <div className="cart__top">
            <h3 className="cart__title">
              Корзина
              <button onClick={onClickClose} className="cart__close">
                <img src={plus} alt="close" />
              </button>
            </h3>
            <ul className={order ? "none" : "cart__products"}>
              {items.length === 0 ? (
                <Empty onClickClose={onClickClose} />
              ) : (
                items.map(({ id, img, title, price }) => (
                  <li key={id} className="cart__product">
                    <div className="card__img">
                      <img width={70} src={img} alt={title} />
                    </div>
                    <div className="card__product-text">
                      <h6 className="card__product-title">{title}</h6>
                      <div className="card__product-bottom">
                        <p className="card__product-price">{price} руб.</p>

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
            <div className={order ? "none" : "cart__bottom"}>
              <div className="cart__bottom-desc">
                <div className="cart__bottom-title">Итого:</div>
                <div className="dotted-line"></div>
                <b className="cart__bottom-price">{totalPrice} руб.</b>
              </div>
              <div className="cart__bottom-desc">
                <div className="cart__bottom-title">Налог 5%:</div>
                <div className="dotted-line"></div>
                <b className="cart__bottom-price">
                  {(totalPrice * 0.05).toFixed(1)} руб
                </b>
              </div>
              <button onClick={() => orderFunc()} className="cart__btn">
                Оформить заказ
              </button>
            </div>
          )}
          {order && <Order onClickClose={onClickClose} />}
        </div>
      </div>
    </div>
  );
};

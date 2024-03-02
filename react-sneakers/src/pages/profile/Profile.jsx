import React from "react";
import { NavLink } from "react-router-dom";
import "./_profile.scss";
import leftArrow from "./leftArrow.svg";

export const Profile = ({ items = [] }) => {
  return (
    <section className="favorite profile">
      <div className="container">
        <div className="favorite__top profile__top">
          <NavLink to="/" className="favorite__back profile__back">
            <img src={leftArrow} alt="back to main" />
          </NavLink>
          <h2 className="favorite__title profile__title">Мои покупки</h2>
        </div>
        <ul className="favorite__list profile__list">
          {items.map(({ img, title, price, id }) => {
            return (
              <li key={id} className="card">
                <div className="card__img">
                  <img src={img} alt="img1" />
                </div>
                <h5 className="card__title">{title}</h5>
                <div className="card__bottom">
                  <div className="card__price">
                    <p className="card__price-title">ЦЕНА:</p>
                    <p className="card__price-price">{price} руб.</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

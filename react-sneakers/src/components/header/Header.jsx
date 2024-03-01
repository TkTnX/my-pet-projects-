import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./_header.scss";

import logo from "./img/logo.png";

import cart from "./img/cart.svg";
import heart from "./img/heart.svg";
import profile from "./img/profile.svg";

export const Header = ({ onClickCart }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <NavLink to="/" className="logo">
            <img src={logo} alt="Logo" />
            <div className="logo__text">
              <h3 className="logo__title">REACT SNEAKERS</h3>
              <p className="logo__desc">Магазин лучших кроссовок</p>
            </div>
          </NavLink>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <button
                  onClick={onClickCart}
                  type="button"
                  className="header__link"
                >
                  <img src={cart} className="header__item-img" alt="cart" />
                  <p className="header__item-text header__price">1205 руб.</p>
                </button>
              </li>
              <li className="header__item">
                <NavLink className="header__link" to="/favorite">
                  <img src={heart} className="header__item-img" alt="heart" />
                  <p className="header__item-text">Закладки</p>
                </NavLink>
              </li>
              <li className="header__item">
                <a href="#!" className="header__link">
                  <img
                    src={profile}
                    className="header__item-img"
                    alt="profile"
                  />
                  <p className="header__item-text">Профиль</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

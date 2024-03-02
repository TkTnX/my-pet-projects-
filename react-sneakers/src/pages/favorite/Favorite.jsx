import React from "react";
import { NavLink } from "react-router-dom";
import "./_favorite.scss";
import leftArrow from "./img/leftArrow.svg";
import { Empty } from "./Empty/Empty";

export const Favorite = ({ favoriteItems = [], onClickDelFav }) => {
  return (
    <section className="favorite">
      <div className="container">
        <div className="favorite__top">
          <NavLink to="/" className="favorite__back">
            <img src={leftArrow} alt="back to main" />
          </NavLink>
          <h2 className="favorite__title">Мои закладки</h2>
        </div>

        {favoriteItems.length === 0 ? (
          <Empty />
        ) : (
          <ul className="favorite__list">
            {favoriteItems.map(({ img, title, price, id }) => {
              return (
                <li key={id} className="card">
                  <button
                    onClick={() => onClickDelFav(id)}
                    className={"card__heart card__heart--liked"}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.8609 3.07455C13.5204 2.73389 13.1161 2.46365 12.6711 2.27927C12.2261 2.0949 11.7492 2 11.2675 2C10.7859 2 10.3089 2.0949 9.86396 2.27927C9.41898 2.46365 9.0147 2.73389 8.67419 3.07455L7.96753 3.78122L7.26086 3.07455C6.57307 2.38676 5.64022 2.00036 4.66753 2.00036C3.69484 2.00036 2.76199 2.38676 2.07419 3.07455C1.3864 3.76235 1 4.69519 1 5.66788C1 6.64057 1.3864 7.57342 2.07419 8.26122L2.78086 8.96788L7.96753 14.1546L13.1542 8.96788L13.8609 8.26122C14.2015 7.92071 14.4718 7.51643 14.6561 7.07145C14.8405 6.62648 14.9354 6.14954 14.9354 5.66788C14.9354 5.18623 14.8405 4.70929 14.6561 4.26431C14.4718 3.81934 14.2015 3.41505 13.8609 3.07455Z"
                        stroke="#EAEAEA"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
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
        )}
      </div>
    </section>
  );
};

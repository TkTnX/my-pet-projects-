import React, { useEffect, useState } from "react";
import "./_sneakers.scss";

import img1 from "./img/01.jpg";
import add from "./img/plus.svg";
import heart from "./img/heart.svg";
import searchImg from "./img/search.svg";
export const Sneakers = () => {
  const [card, setCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://65d89a38c96fbb24c1bbe549.mockapi.io/cards")
      .then((res) => res.json())
      .then((json) => {
        setCard(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("Не удалось получить данные!");
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className="sneakers">
      <div className="container">
        <div className="sneakers__top">
          <h2 className="sneakers__title">Все кроссовки</h2>
          <div className="sneakers__form">
            <img src={searchImg} alt="search" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Поиск..."
              className="sneakers__input"
            />
          </div>
        </div>
        <ul className="sneakers__list">
          {isLoading ? (
            <h2 className="loading">Loading...</h2>
          ) : (
            card
              .filter((value) => {
                return (
                  value.title.toLowerCase().includes(search.toLowerCase()) ||
                  value.price.toLowerCase().includes(search.toLowerCase())
                );
              })
              .map((value) => {
                return (
                  <li key={value.id} className="card">
                    <button className="card__heart">
                      <img src={heart} alt="add to favorite!" />
                    </button>
                    <div className="card__img">
                      <img src={value.img} alt="img1" />
                    </div>
                    <h5 className="card__title">{value.title}</h5>
                    <div className="card__bottom">
                      <div className="card__price">
                        <p className="card__price-title">ЦЕНА:</p>
                        <p className="card__price-price">{value.price}</p>
                      </div>
                      <button className="card__add">
                        <img src={add} alt="add to cart!" />
                      </button>
                    </div>
                  </li>
                );
              })
          )}
        </ul>
      </div>
    </section>
  );
};

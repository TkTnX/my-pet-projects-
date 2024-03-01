import React, { useEffect, useState } from "react";
import "./_sneakers.scss";

import searchImg from "./img/search.svg";
import { Card } from "./components/Card/Card";
import { Skeleton } from "./components/Card/Skeleton";

export const Sneakers = ({ setCartItems, setFavoriteItems }) => {
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

  const onAddToCard = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  const onAddToFav = (obj) => {
    setFavoriteItems((prev) => [...prev, obj])
  }



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
            <Skeleton />
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
                  <Card
                    onFav={() => onAddToFav(value)}
                    onPlus={() => onAddToCard(value)}
                    key={value.id}
                    {...value}
                  />
                );
              })
          )}
        </ul>
      </div>
    </section>
  );
};

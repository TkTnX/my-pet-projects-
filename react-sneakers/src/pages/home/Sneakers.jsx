import React, { useEffect, useState } from "react";
import axios from "axios";
import "./_sneakers.scss";

import searchImg from "./img/search.svg";
import { Card } from "./components/Card/Card";
import { Skeleton } from "./components/Card/Skeleton";

export const Sneakers = ({
  setCartItems,
  setFavoriteItems,
  cartItems = [],
  favoriteItems,
}) => {
  const [card, setCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://65d89a38c96fbb24c1bbe549.mockapi.io/cards")
      .then((res) => {
        setCard(res.data);
      })
      .finally(() => setIsLoading(false));

    // axios
    //   .get("https://65d89a38c96fbb24c1bbe549.mockapi.io/cartBack")
    //   .then((res) => {
    //     setCard(res.data);
    //   })
    //   .finally(() => setIsLoading(false));
  }, []);

  const onAddToCard = (obj) => {
    const isItemInCart = cartItems.some((value) => value.id === obj.id);

    if (isItemInCart) {
      return null;
    } else {
      axios.post("https://65d89a38c96fbb24c1bbe549.mockapi.io/cartBack", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onAddToFav = (obj) => {
    const isItemInCart = favoriteItems.some((value) => value.id === obj.id);
    isItemInCart ? null : setFavoriteItems((prev) => [...prev, obj]);
  };

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

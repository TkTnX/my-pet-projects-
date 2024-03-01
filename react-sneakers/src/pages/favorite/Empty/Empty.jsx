import React from "react";
import { NavLink } from "react-router-dom";
import "./_empty.scss";

import badSmile from "./bad.png";
export const Empty = () => {
  return (
    <div className="empty">
      <div className="empty__wrapper">
        <div className="empty__img">
          <img src={badSmile} alt="Закладок нет" />
        </div>
        <h4 className="empty__title">Закладок нет :(</h4>
        <p className="empty__desc">Вы ничего не добавляли в закладки</p>
        <NavLink to="/" className="cart__btn empty__btn">
          Вернуться назад
        </NavLink>
      </div>
    </div>
  );
};

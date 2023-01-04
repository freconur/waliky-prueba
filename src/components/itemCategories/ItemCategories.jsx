import React from "react";
import { Link } from "react-router-dom";

import "./itemCategories.css";
const ItemCategories = ({ item }) => {
  return (
    <>
      <Link className="item__link" to={item.name}>
        <li className="item__list">
          <img className="item__image" src={item.image} alt={item.name} />
          <h2 className="item__name">{item.name}</h2>
        </li>
      </Link>
    </>
  );
};

export { ItemCategories };

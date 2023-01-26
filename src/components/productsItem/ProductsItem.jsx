import React from "react";
import { Link } from "react-router-dom";
// import './productItem.css'
const ProductsItem = ({ items }) => {

  const addLocalStorageItem = (product) => {
    // const localStorageItem = localStorage.setItem()
    const localStorageProduct = localStorage.setItem('CURRENT_PRODUCT',JSON.stringify(product))
    console.log('localStorageProduct',localStorageProduct)

  }

  return (
    <ul className="products-items">
      {items.map((item) => {
        {console.log('item',item)}
        return (
          <li onClick={() => addLocalStorageItem(item)} className="products-item__container" key={item.id}>
            <Link to={`/detalle-producto/${item.name}-${item.id}`}>
              <div className="products-item__info">
                <div className="product-item__image__container">
                  {Array.isArray(item.image) ? (
                    <img
                      className="product-item__image"
                      src={item.image[0]}
                      alt=""
                    />
                  ) : (
                    <img
                      className="product-item__image"
                      src={item.image}
                      alt=""
                    />
                  )}
                </div>
                <div className="products-item__info-text">
                  <p className="products-item__info-text__marca">
                    {item?.marca}
                  </p>
                  <p className="products-item__info-text__name">{item.name}</p>
                  <p className="products-item__info-text__price">
                    S/ {item?.price}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { ProductsItem };

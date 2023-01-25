import React from "react";
// import './productItem.css'
const ProductsItem = ({ items }) => {
  return (
    <ul className="products-items">
      {items.map((item) => {
        return (
          <li className="products-item__container" key={item.id}>
            <div className="products-item__info">
              <div className="product-item__image__container">
                {
                  Array.isArray(item.image) ? (
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
                  )
                }
              </div>
              <div className="products-item__info-text">
                <p className="products-item__info-text__marca">{item?.marca}</p>
                <p className="products-item__info-text__name">{item.name}</p>
                <p className="products-item__info-text__price">S/ {item?.price}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export { ProductsItem };

import React from "react";
import { useParams } from "react-router-dom";
// import './productItem.css'
const ProductsItem = ({ items }) => {
  const {idPlantillas} = useParams()
  // console.log('product item plantillas',idPlantillas)
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
                <p>{item?.marca}</p>
                <span>{item.name}</span>
                <p>S/ {item?.price}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export { ProductsItem };

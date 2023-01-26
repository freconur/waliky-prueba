import React from 'react'
import './pageDetailProducts.css'
const PageDetailProducts = () => {
  const localStorageTodos = localStorage.getItem('CURRENT_PRODUCT')
  const product = JSON.parse(localStorageTodos)

  console.log('localStorageTodos2',product)

    return (
        <div className="page-detail-product-detail">
          <div className="page-detail-product-detail__container">
            <div className="page-detail-product__image-contianer">
            <div className="product-item__image__container">
                  {Array.isArray(product.image) ? (
                    <img
                      className="product-item__image"
                      src={product.image[0]}
                      alt=""
                    />
                  ) : (
                    <img
                      className="product-item__image"
                      src={product.image}
                      alt=""
                    />
                  )}
                </div>
              {/* <img
                className="page-detail-product__image"
                src={product.image}
                alt=""
              /> */}
            </div>
            <div className="page-detail-product__info-products">
              <div className="page-detail-product__info-products__container">
                <div className="page-detail-product__marca-container">
                <h3 className="page-detail-product__marca">{product.marca}</h3>
                <span className="page-detail-product__id">Id: {product.id}</span>
                </div>
                <h2 className="page-detail-product-title">{product.name}</h2>
                <p className="page-detail-product-description">{product?.description}</p>
                <div className="page-detail-product-list__container">
                  {/* <h3 className="page-detail-product-list__title">productos que incluyen:</h3> */}
                  {/* <ul className="page-detail-product-list">
                    {state.themeFilterCilindrosBiombos.products?.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul> */}
                  {/* <div className="page-detail-product__price-container">
                    <span>antes:</span>
                    <span className="page-detail-product__precio-anterior">
                      S/ {product.price}
                    </span>
                  </div> */}
                  <div className="page-detail-product__price-container page-detail-product__price-container--negrita">
                    <span>precio:</span>
                    {/* <span className="">S/ {Number(product.price) * 0.8}</span> */}
                    <span className="">S/ {product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export {PageDetailProducts}
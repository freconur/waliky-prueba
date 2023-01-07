import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import { getfilterComboBts } from "../../../../extension/functionBts";
import { HEADER_IMAGE } from "../../../../imagesLink/headerImages";
import { btsReducer, initialStateBts } from "../../../../reducer/bts.reducer";
import "../comboPageDetail.css";
const ComboPageDetails = () => {
  const { comboName } = useParams();
  const [state, dispatch] = useReducer(btsReducer, initialStateBts);
  const comboBts = state.comboBtsfilter;
  const products = state.comboBtsfilter.products;

  useEffect(() => {
    getfilterComboBts(dispatch, comboName);
  }, []);

  //   console.log("comboBtsfilter", comboBtsfilter);
  //   console.log("comboBtsfilter", comboBtsfilter.products);
  // const products = comboBtsfilter.products;
  console.log("products", products);
  console.log("comboBts", comboBts);
  return (
    <div className="combo-bts-detail">
      <div className="combo-bts-detail__container">
        <div className="combo-bts__image-contianer">
          <img
            className="combo-bts__image"
            src={HEADER_IMAGE.HEADER_BIOMBOS_MOVIL}
            alt=""
          />
        </div>
        <div className="combo-bts__info-products">
          <div className="combo-bts__info-products__container">
            <div className="combo-bts__marca-container">
            <h3 className="combo-bts__marca">{comboBts.marca}</h3>
            <span className="combo-bts__id">Id: {comboName}</span>
            </div>
            <h2 className="combo-bts-title">{comboBts.name}</h2>
            <p className="combo-bts-description">{comboBts.description}</p>
            <div className="combo-bts-list__container">
              <h3 className="combo-bts-list__title">productos que incluyen:</h3>
              <ul className="combo-bts-list">
                {products?.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
              <div className="combo-bts__price-container">
                <span>antes:</span>
                <span className="combo-bts__precio-anterior">
                  S/ {comboBts.price}
                </span>
              </div>
              <div className="combo-bts__price-container combo-bts__price-container--negrita">
                <span>precio:</span>
                <span className="">S/ {Number(comboBts.price) * 0.8}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboPageDetails;

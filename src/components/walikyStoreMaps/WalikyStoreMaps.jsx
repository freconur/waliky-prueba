import React from "react";
import { IMAGES_LINK } from "../../imagesLink/images.link";
import "./walikyStoreMaps.css";
const WalikyStoreMaps = () => {
  return (
    <section className="section-maps">
      <div className="section-maps__container">
        <h2 className="section-maps__title">ubicanos</h2>
        <div className="section-maps__grid">
          <div className="section-maps__text__container">
            <p className="section-maps__text">
              Nos ubicamos a una cuadra del cruce de av. Tambopata con jr.
              Conima. Nuestro local se cuenta en la esquina misma
            </p>
          </div>
          <div className="section-maps__image__container">
            <img
              className="section-maps__image"
              src={IMAGES_LINK.LOCATION_MAPS}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { WalikyStoreMaps };

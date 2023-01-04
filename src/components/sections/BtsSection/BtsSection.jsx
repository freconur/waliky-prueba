import React from "react";
import { Link } from "react-router-dom";
import { IMAGES_LINK } from "../../../imagesLink/images.link";
import "../sections.css";
const BtsSection = () => {
  return (
    <section className="section">
      <h2 className="section__title">BTS</h2>
      <div className="section__container">
        <img className="section__image" src={IMAGES_LINK.BTS_SECTION} alt="" />
        <div className="container__text">
          <p className="text__description">
            Si te consideras una o un verdadero fan de BTS entonces es casi
            obligatorio que te des una vuelta por nuestra tienda del grupo K-POP
            del momento, estamos seguros que te llevaras una gran sorpresa con lo que
            podras encontrar, dale click al boton de abajo y sorprendete.
          </p>
          <Link to="/bts" className="description__link">
            <div className="link">ver productos</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { BtsSection };

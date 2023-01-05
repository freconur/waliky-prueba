import React from "react";
import { Link } from "react-router-dom";
import { IMAGES_LINK } from "../../../imagesLink/images.link";
import "../sections.css";

const KawaiSection = () => {
  return (
    <section className="section">
      <h2 className="section__title">productos Kawaii</h2>
      <div className="section__container">
        <img
          className="section__image"
          src={IMAGES_LINK.SUBLIMADOS_PERSONALIZADOS}
          alt=""
        />
        <div className="container__text">
          <p className="text__description">
            Hemos creado un espacio con productos kawaii, si eres de los que le
            gusta las cosas curiosas lindas y bonitas en colores y animales, entonces te encantara lo que veras aqui, echale un vistazo, de
            seguro que encontraras algo que llame tu atencion.
          </p>
          <Link to="/kawaii" className="description__link">
            <div className="link">ver productos</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { KawaiSection };

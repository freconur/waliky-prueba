import React from "react";
import { Link } from "react-router-dom";
import { IMAGES_LINK } from "../../../imagesLink/images.link";
import "../sections.css";
const SublimadosSection = () => {
  return (
    <section className="section">
      <h2 className="section__title">sublimados</h2>
      <div className="section__container">
        <img
          className="section__image"
          src={IMAGES_LINK.SUBLIMADOS_PERSONALIZADOS}
          alt=""
        />
        <div className="container__text">
          <p className="text__description">
            Estas buscando una alternativa a lo convencional, dejame decirte que
            nuestros productos sublimados es lo que estas buscando, con disenos
            variados y personalizados, sera facil encontrar lo que estas
            buscando, asi que no te pierdas esta invitacion al mundo de los
            sublimados.
          </p>
          <Link className="description__link" to="/sublimados">
            <div className="link">sublimados</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { SublimadosSection };

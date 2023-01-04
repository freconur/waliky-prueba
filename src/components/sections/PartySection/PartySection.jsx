import React from "react";
import { Link } from "react-router-dom";
import { IMAGES_LINK } from "../../../imagesLink/images.link";
import "../sections.css";

const PartySection = () => {
  return (
    <section className="section">
      <h2 className="section__title">SECTION PARTYS</h2>
      <div className="section__container">
        {/* <div className="section__image"> */}
          <img
            className="image"
            src={IMAGES_LINK.PARTY_SECTION}
            alt=""
          />
        {/* </div> */}
        <div className="container__text">
          <p className="text__description">
            Asi que estas planeado tu proxima fiesta, entonces si realmente
            quieres lucirte, definitivamente no puedes dejar pasar esta
            oportunidad, no quedara duda que lo que estas planeando es la mejor
            fiesta del ano, crea ese momento inolvidable y memorable, estas a un
            clic de hacerlo, que esperas, ENTRA YA!
          </p>
          {/* <p>holi</p> */}
          <Link className="description__link" to="/">
            <div className="link">ver productos</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { PartySection };

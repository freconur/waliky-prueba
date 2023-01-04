import React from "react";
import { Link } from "react-router-dom";
import { IMAGES_LINK } from "../../../imagesLink/images.link";
import '../sections.css'

const KawaiSection = () => {
  return (
    <section className="section">
      <h2 className="section__title">SECTION KAWAII</h2>
      <div className="section__container">
        <img className="section__image" src={IMAGES_LINK.SUBLIMADOS_PERSONALIZADOS} alt="" />
        <div className="container__text">
          <p className="text__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            corporis ullam numquam nesciunt, aut alias neque ipsum rem nemo
            iste, voluptatem perspiciatis tenetur, temporibus velit maiores.
            Ipsa fuga velit mollitia.
          </p>
          <Link className="description__link">
            <div className="link">ver productos</div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export {KawaiSection}
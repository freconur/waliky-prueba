import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { getCilindrosBiombosThemes } from "../../extension/functionCilindrosBiombos";
import { BIOMBOS_IMAGE } from "../../imagesLink/biombosLinks";
import {
  cilindrosBiombosReducer,
  initialStateCilindrosBiombos,
} from "../../reducer/cilindros-biombos.reducer";
import "./cilindrosBiombos.css";
const CilindrosBiombos = () => {
  const [state, dispatch] = useReducer(
    cilindrosBiombosReducer,
    initialStateCilindrosBiombos
  );

  const { allThemes } = state;

  useEffect(() => {
    getCilindrosBiombosThemes(dispatch);
  }, []);
  console.log("allThemes", allThemes);
  return (
    <div className="cilindros-biombos">
      <div className="cilindros-biombos__container">
        <h2 className="cilindros-biombos__title">
          cilindros y biombos para fiestas
        </h2>
        <p className="cilindros-biombos__description-page">
          Reserva tus ciclindros y biombos para tu fiesta a unos precios
          increibles, echale un ojo a nuestras tematicas disponibles.
        </p>
        {/* <div className="cilindros-biombos__section">
          <div className="cilindros-biombos__image-container">
            <img
              className="cilinbros-biombos__image"
              src={BIOMBOS_IMAGE.BIOMBOS_CILINDROS}
              alt=""
            />
          </div>
          <div className="cilindros-biombos__text-container">
            <p className="cilinbros-biombos__text">
              reserva tus ciclindros y biombos para tu fiesta. Puedes hacerlos
              desde 150 soles
            </p>
          </div>
        </div> */}

        <section className="tematicas-disponibles">
          <h2 className="tematicas-disponibles__title">
            Tematicas disponibles
          </h2>
          <ul className="tematicas-disponibles__list">
            {allThemes?.map((item, index) => {
              return (
                <li className="tematicas-disponibles__item">
                  <Link to={`${item.id}`}>
                    <img
                      className="tematicas-disponibles__image"
                      src={item.image}
                      alt=""
                    />
                    <h3 className="tematicas-disponibles__name">
                      {" "}
                      {item.theme}
                    </h3>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};

export { CilindrosBiombos };

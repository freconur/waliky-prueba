import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { getBtsCombos } from "../../../extension/functionBts";
import { btsReducer, initialStateBts } from "../../../reducer/bts.reducer";
import "./combosBts.css";

const CombosBts = () => {
  const [state, dispatch] = useReducer(btsReducer, initialStateBts);
  const { combosBts } = state;

  useEffect(() => {
    getBtsCombos(dispatch);
  }, []);

  console.log("combosBts", combosBts);
  return (
    <div className="combo-bts">
      <div className="combo-bts__container">
        <h1 className="combo-bts__title">nuestros combos BTS a un super precio</h1>
        <section className="combo-bts__section">
          {/* <div className="section-title__container">
            <h1 className="section-title">combo sublimado</h1>
          </div> */}
          <ul className="section-info__container">
            {combosBts.map((item, index) => {
              return (
                <li key={index}>
                  <Link className="combo__link" to={`/bts/combos-bts/${item.id}`}>
                    <img className="combo__image" src={item.image} alt={item.name} />
                    <h4 className="combo__title">{item.name}</h4>
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

export { CombosBts };

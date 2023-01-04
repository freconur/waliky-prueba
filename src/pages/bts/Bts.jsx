import React, { useEffect, useReducer, useState } from "react";
import { ItemCategories } from "../../components/itemCategories/ItemCategories";
import { getBtsCategories } from "../../extension/functionBts";
import { useWindowsSize } from "../../extension/sizeWindows";
import { HEADER_IMAGE } from "../../imagesLink/headerImages";
import { IMAGES_LINK } from "../../imagesLink/images.link";
import { btsReducer, initialStateBts } from "../../reducer/bts.reducer";
import "./bts.css";


const Bts = () => {
  const [mode, setMode] = useState(false);
  const [state, dispatch] = useReducer(btsReducer, initialStateBts);
  const { categories } = state;

const [height, width] = useWindowsSize()

  useEffect(() => {
    getBtsCategories(dispatch);
  }, []);

  console.log("btsCategories", categories);
  return (
    <>
      <section className="page__header">
        {
          width < 840 
          ?
          <img className="page__header-image" src={HEADER_IMAGE.HEADER_BTS} alt="" />
          :
          width >= 840 &&
          <img className="page__header-image" src={IMAGES_LINK.HEADER__BTS} alt="" />
        }
      </section>
      <p className="page__description">
        porque sabemos que eres fan de BTS hemos decidido abrir una tienda
        especial para todos los army
      </p>
      <div className="page__section-categories">
        <h1 className="page__categories__title">categorias</h1>
        <ul className="page__categories-list__container page__categories-list__container--pru">
          {categories?.map((item) => {
            return <ItemCategories key={item.id} item={item} />;
          })}
        </ul>
      </div>
    </>
  );
};

export { Bts };

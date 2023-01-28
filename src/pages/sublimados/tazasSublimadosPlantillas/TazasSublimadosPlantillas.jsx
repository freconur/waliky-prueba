import React, { useReducer } from "react";
import { useEffect } from "react";
import { ProductsItem } from "../../../components/productsItem/ProductsItem";
import {
  getCategoriesTazasSublimadasPlantillas,
  getTazasSublimadasPlantillas,
} from "../../../extension/functionSublimados";
import {
  initialStateSublimados,
  sublimadosReducer,
} from "../../../reducer/sublimados.reducer";
import { SidebarTazasSublimadosDisenos } from "../../../components/sidebar/sibebarTazasSublimadosDisenos/sidebarTazasSublimadosDisenos";
import { useParams } from "react-router-dom";
import { SideBarStickyTazasSublimadas } from "../../../components/sidebar/sibebarTazasSublimadosDisenos/sidebarStickyTazasSublimados";
const TazasSublimadosPlantillas = () => {

  const { idDisenos } = useParams();
  const [state, dispatch] = useReducer(
    sublimadosReducer,
    initialStateSublimados
  );
  const { tazasSublimadosPlantillas, categoriesTazasSublimadasDisenos } = state;

  useEffect(() => {
    getTazasSublimadasPlantillas(dispatch, idDisenos);
    getCategoriesTazasSublimadasPlantillas(dispatch);
  }, [idDisenos]);
  return (
    <div className="products-store__container">
      {/* {
        !location.pathname === "/kawaii"
        &&
        <SideBarSticky title="cartucheras"/>
      } */}
        <SideBarStickyTazasSublimadas itemsCategories={categoriesTazasSublimadasDisenos} />
      <div className="products-store">
        {/* <SideBar title="tazas sublimados plantillas" /> */}

        <SidebarTazasSublimadosDisenos
          itemsCategories={categoriesTazasSublimadasDisenos}
        />
        <ProductsItem items={tazasSublimadosPlantillas} />
      </div>
    </div>
  );
};

export { TazasSublimadosPlantillas };

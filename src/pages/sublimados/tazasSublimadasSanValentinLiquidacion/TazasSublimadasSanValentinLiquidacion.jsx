import React, { useReducer } from "react";
import { useEffect } from "react";
import { ProductsItem } from "../../../components/productsItem/ProductsItem";
import { SidebarTazasSublimadosSanValentin } from "../../../components/sidebar/sidebarTazasSublimadosSanValentin/SidebarTazasSublimadosSanValentin";
import { getTazasSublimadasSanValentinLiquidacion } from "../../../extension/functionSublimados";
import {
  initialStateSublimados,
  sublimadosReducer,
} from "../../../reducer/sublimados.reducer";

const TazasSublimadasSanValentinLiquidacion = () => {
  const [state, dispatch] = useReducer(
    sublimadosReducer,
    initialStateSublimados
  );
    const { tazasSanValentinLiquidacion } = state
  useEffect(() => {
    getTazasSublimadasSanValentinLiquidacion(dispatch);
  }, []);
  return (
    <div className="products-store__container">
      {/* <SideBarStickyTazasSublimadas itemsCategories={categoriesTazasSublimadasDisenos} /> */}
      <div className="products-store">
        {/* <SideBar title="tazas sublimados plantillas" /> */}

        <SidebarTazasSublimadosSanValentin />
        <ProductsItem items={tazasSanValentinLiquidacion} />
      </div>
    </div>
  );
};

export { TazasSublimadasSanValentinLiquidacion };

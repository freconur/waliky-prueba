import React, { useEffect, useReducer } from "react";
import { btsReducer, initialStateBts } from "../../../reducer/bts.reducer";
import { getTazasBts } from "../../../extension/functionBts";
import { ProductsItem } from "../../../components/productsItem/ProductsItem";
import "../../pageProducts.css";
import { SideBar } from "../../../components/sidebar/SideBar";
import { SideBarSticky } from "../../../components/sidebar/sideBarSticky";

const TazasBtsPage = () => {
    const [state, dispatch] = useReducer(btsReducer, initialStateBts);
    const { tazas } = state;
    useEffect(() => {
      getTazasBts(dispatch);
    }, []);
    console.log("tazas", tazas);
    return (
      <div className="products-store__container">
        <SideBarSticky className="products-store"/>
        <div className="products-store">
          <SideBar title="tazas" />
          <ProductsItem items={tazas} />
        </div>
      </div>
    );
}

export {TazasBtsPage}
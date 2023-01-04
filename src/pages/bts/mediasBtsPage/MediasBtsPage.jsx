import React, { useEffect, useReducer } from "react";
import { btsReducer, initialStateBts } from "../../../reducer/bts.reducer";
import { getMediasBts } from "../../../extension/functionBts";
import { ProductsItem } from "../../../components/productsItem/ProductsItem";
import "../../pageProducts.css";
import { SideBar } from "../../../components/sidebar/SideBar";
import { SideBarSticky } from "../../../components/sidebar/sideBarSticky";

const MediasBtsPage = () => {
    const [state, dispatch] = useReducer(btsReducer, initialStateBts);
    const { medias } = state;
    useEffect(() => {
      getMediasBts(dispatch);
    }, []);
    console.log("medias", medias);
    return (
      <div className="products-store__container">
        <SideBarSticky title="cartucheras" />
        <div className="products-store">
          <SideBar title="medias" />
          <ProductsItem items={medias} />
        </div>
      </div>
    );
}

export {MediasBtsPage}
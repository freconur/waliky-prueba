import React, { useEffect, useReducer } from "react";
import { btsReducer, initialStateBts } from "../../../reducer/bts.reducer";
import { getLibretasBts } from "../../../extension/functionBts";
import { ProductsItem } from "../../../components/productsItem/ProductsItem";
import "../../pageProducts.css";
import { SideBar } from "../../../components/sidebar/SideBar";
import { SideBarSticky } from "../../../components/sidebar/sideBarSticky";

const LibretasBtsPage = () => {
  const [state, dispatch] = useReducer(btsReducer, initialStateBts);
  const { libretas } = state;
  useEffect(() => {
    getLibretasBts(dispatch);
  }, []);
  console.log("libretas", libretas);
  return (
    <div className="products-store__container">
      <SideBarSticky title="cartucheras" />
      <div className="products-store">
        <SideBar title="libretas" />
        <ProductsItem items={libretas} />
      </div>
    </div>
  );
}

export {LibretasBtsPage}
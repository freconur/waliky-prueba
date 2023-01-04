import React, { useEffect, useReducer } from "react";
import { btsReducer, initialStateBts } from "../../../reducer/bts.reducer";
import { getCartucherasBts, getPolosBts } from "../../../extension/functionBts";
import { ProductsItem } from "../../../components/productsItem/ProductsItem";
import "../../pageProducts.css";
import { SideBar } from "../../../components/sidebar/SideBar";
import { SideBarSticky } from "../../../components/sidebar/sideBarSticky";

const PolosBtsPage = () => {
  const [state, dispatch] = useReducer(btsReducer, initialStateBts);
  const { polos } = state;
  useEffect(() => {
    getPolosBts(dispatch);
  }, []);
  console.log("polos", polos);
  return (
    <div className="products-store__container">
      <SideBarSticky className="products-store"/>
      <div className="products-store">
        <SideBar title="polos" />
        <ProductsItem items={polos} />
      </div>
    </div>
  );
};

export { PolosBtsPage };

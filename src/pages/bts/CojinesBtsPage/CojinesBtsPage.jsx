import React, { useEffect, useReducer } from "react";
import { btsReducer, initialStateBts } from "../../../reducer/bts.reducer";
import { getCojinesBts } from "../../../extension/functionBts";
import { ProductsItem } from "../../../components/productsItem/ProductsItem";
import "../../pageProducts.css";
import { SideBar } from "../../../components/sidebar/SideBar";
import { SideBarSticky } from "../../../components/sidebar/sideBarSticky";

const CojinesBtsPage = () => {
  const [state, dispatch] = useReducer(btsReducer, initialStateBts);
  const { cojines } = state;
  useEffect(() => {
    getCojinesBts(dispatch);
  }, []);
  return (
    <div className="products-store__container">
      <SideBarSticky title="cojines"/>
      <div className="products-store">
        <SideBar title="cojines" />
        <ProductsItem items={cojines} />
      </div>
    </div>
  );
};

export { CojinesBtsPage };
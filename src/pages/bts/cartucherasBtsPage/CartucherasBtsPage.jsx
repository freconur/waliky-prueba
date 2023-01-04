import React, { useEffect, useReducer } from "react";
import { btsReducer, initialStateBts } from "../../../reducer/bts.reducer";
import { getCartucherasBts } from "../../../extension/functionBts";
import { ProductsItem } from "../../../components/productsItem/ProductsItem";
import "../../pageProducts.css";
import { SideBar } from "../../../components/sidebar/SideBar";
import { SideBarSticky } from "../../../components/sidebar/sideBarSticky";

const CartucherasBtsPage = () => {
  const [state, dispatch] = useReducer(btsReducer, initialStateBts);
  const { cartucheras } = state;
  useEffect(() => {
    getCartucherasBts(dispatch);
  }, []);
  console.log("cartucheras", cartucheras);
  return (
    <div className="products-store__container">
      <SideBarSticky title="cartucheras"/>
      <div className="products-store">
        <SideBar title="cartucheras" />
        <ProductsItem items={cartucheras} />
      </div>
    </div>
  );
};

export { CartucherasBtsPage };

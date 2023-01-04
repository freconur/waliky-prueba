import React, { useEffect, useReducer } from "react";
import { btsReducer, initialStateBts } from "../../../reducer/bts.reducer";
import { getCojinesBts, getCojinesMidBts } from "../../../extension/functionBts";
import { ProductsItem } from "../../../components/productsItem/ProductsItem";
import "../../pageProducts.css";
import { SideBar } from "../../../components/sidebar/SideBar";
import { SideBarSticky } from "../../../components/sidebar/sideBarSticky";

const CojinesMidBtsPage = () => {
    const [state, dispatch] = useReducer(btsReducer, initialStateBts);
    const { conjinesMid } = state;
    useEffect(() => {
      getCojinesMidBts(dispatch);
    }, []);
    console.log("conjinesMid", conjinesMid);
    return (
      <div className="products-store__container">
        <SideBarSticky className="products-store"/>
        <div className="products-store">
          <SideBar title="conjinesMid" />
          <ProductsItem items={conjinesMid} />
        </div>
      </div>
    );
}

export {CojinesMidBtsPage}
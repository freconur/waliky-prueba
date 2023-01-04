import React, { useEffect, useReducer } from "react";
import { btsReducer, initialStateBts } from "../../../reducer/bts.reducer";
import { getPosterBts } from "../../../extension/functionBts";
import { ProductsItem } from "../../../components/productsItem/ProductsItem";
import "../../pageProducts.css";
import { SideBar } from "../../../components/sidebar/SideBar";
import { SideBarSticky } from "../../../components/sidebar/sideBarSticky";


const PosterBtsPage = () => {
    const [state, dispatch] = useReducer(btsReducer, initialStateBts);
    const { poster } = state;
    useEffect(() => {
      getPosterBts(dispatch);
    }, []);
    console.log("poster", poster);
    return (
      <div className="products-store__container">
        <SideBarSticky title="cartucheras" />
        <div className="products-store">
          <SideBar title="poster" />
          <ProductsItem items={poster} />
        </div>
      </div>
    );
}

export {PosterBtsPage}
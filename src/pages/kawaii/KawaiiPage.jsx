import React, { useEffect, useReducer } from "react";
import { getKawaii } from "../../extension/functionKawai";
import { initialStateKawaii, kawaiiReducer } from "../../reducer/kawaii.reducer";
import "../pageProducts.css";
import { SideBarSticky } from "../../components/sidebar/sideBarSticky";
import { ProductsItem } from "../../components/productsItem/ProductsItem";
import { SideBar } from "../../components/sidebar/SideBar";
import { useLocation } from "react-router-dom";

const KawaiiPage = () => {
  const [state, dispatch] = useReducer(kawaiiReducer, initialStateKawaii);
  const { allProducts } = state;
  const location = useLocation()
  useEffect(() => {
    getKawaii(dispatch);
  }, []);

  return (
    <div className="products-store__container">
      {
        !location.pathname === "/kawaii"
        &&
        <SideBarSticky title="cartucheras"/>

      }
      <div className="products-store">
        <SideBar title="Kawaii" />
        <ProductsItem items={allProducts} />
      </div>
    </div>
  )
};

export { KawaiiPage };

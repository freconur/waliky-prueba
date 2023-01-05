import React, { useEffect, useReducer } from "react";
import { getKawaii } from "../../extension/functionKawai";
import { initialStateKawaii, kawaiiReducer } from "../../reducer/kawaii.reducer";
import "../pageProducts.css";
import { SideBarSticky } from "../../components/sidebar/sideBarSticky";
import { ProductsItem } from "../../components/productsItem/ProductsItem";
import { SideBar } from "../../components/sidebar/SideBar";

const KawaiiPage = () => {
  const [state, dispatch] = useReducer(kawaiiReducer, initialStateKawaii);
  const { allProducts } = state;
  useEffect(() => {
    getKawaii(dispatch);
  }, []);

  console.log('allProducts', allProducts)
  return (
    <div className="products-store__container">
      <SideBarSticky title="cartucheras"/>
      <div className="products-store">
        <SideBar title="Kawaii" />
        <ProductsItem items={allProducts} />
      </div>
    </div>
  )
};

export { KawaiiPage };

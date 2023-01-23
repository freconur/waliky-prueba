import React, {useReducer, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getCategoriesTazasSublimadasPlantillas } from "../../../extension/functionSublimados";
import {sublimadosReducer,initialStateSublimados } from "../../../reducer/sublimados.reducer"
const SidebarTazasSublimadosDisenos = ({itemsCategories}) => {
    const {idPlantillas} =  useParams()
  // const [state, dispatch] = useReducer(
  //   sublimadosReducer,
  //   initialStateSublimados
  // );
  //   const { categoriesTazasSublimadasDisenos } = state
  // useEffect(() => {
  //   getCategoriesTazasSublimadasPlantillas(dispatch);
  // }, []);
  console.log('idPlantillas',idPlantillas)
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__title-container">
          <h4 className="sidebar__title-page">Bts</h4>
          {/* <h2 className="sidebar__title">{title}</h2> */}
        </div>
        <div className="sidebar__category">
        <ul className="sidebar__list-container">
                {itemsCategories.map((item, index) => {
                  return (
                    // <Link className="sidebar__link" to={`/sublimados/tazas-sublimados-personalizados/${item.name}`}>
                    <Link className="sidebar__link" to={`/sublimados/tazas-sublimados-personalizados/${item.link}-${item.id}`}>
                      <li key={index}>{item.name}</li>
                    </Link>
                  );
                })}
              </ul>
          {/* {location.pathname === "/kawaii" ? (
            <p>Los mejores productos kawaii para regalo.</p>
          ) : (
            <>
              <h3 className="sidebar__title-category">categorias</h3>
              <ul className="sidebar__list-container">
                {categories.map((item, index) => {
                  return (
                    <Link className="sidebar__link" to={`/bts/${item.name}`}>
                      <li key={index}>{item.name}</li>
                    </Link>
                  );
                })}
              </ul>
            </>
          )} */}
        </div>
      </div>
    </div>
  );
};

export { SidebarTazasSublimadosDisenos };

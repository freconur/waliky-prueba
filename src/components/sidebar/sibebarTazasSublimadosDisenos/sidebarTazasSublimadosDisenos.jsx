import React from "react";
import { Link } from "react-router-dom";

const SidebarTazasSublimadosDisenos = ({ itemsCategories }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__title-container">
          <h4 className="sidebar__title-page">Tazas Sublimadas</h4>
          {/* <h2 className="sidebar__title">{title}</h2> */}
        </div>
        <div className="sidebar__category">
          <ul className="sidebar__list-container">
            {itemsCategories.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    className="sidebar__link"
                    to={`/sublimados/tazas-sublimados-personalizados/${item.link}`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { SidebarTazasSublimadosDisenos };

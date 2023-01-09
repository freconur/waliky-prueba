import React, { useEffect, useReducer } from "react";
import { Link, useLocation } from "react-router-dom";
import { getBtsCategories } from "../../extension/functionBts";
import { btsReducer, initialStateBts } from "../../reducer/bts.reducer";

const SideBar = ({ title }) => {
  const [state, dispatch] = useReducer(btsReducer, initialStateBts);
  const { categories } = state;
  const location = useLocation();
  useEffect(() => {
    getBtsCategories(dispatch);
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__title-container">
          <h4 className="sidebar__title-page">Bts</h4>
          <h2 className="sidebar__title">{title}</h2>
        </div>
        <div className="sidebar__category">
          {location.pathname === "/kawaii" ? (
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
          )}
        </div>
      </div>
    </div>
  );
};

export { SideBar };

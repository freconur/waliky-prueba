import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { getBtsCategories } from "../../extension/functionBts";
import { btsReducer, initialStateBts } from "../../reducer/bts.reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter as filtro } from "@fortawesome/free-solid-svg-icons";

const SideBarSticky = ({ title }) => {
  const [state, dispatch] = useReducer(btsReducer, initialStateBts);
  const { categories } = state;
  const [openCategoryList, setOpenCategoryList] = useState(false);
  useEffect(() => {
    getBtsCategories(dispatch);
  }, []);
  console.log("categories", categories);
  return (
    <div className="sidebar-sticky">
      <div className="sidebar-sticky__container">
        {/* <div className="sidebar-sticky__title-container">
          <h4 className="sidebar-sticky__title-page">Bts</h4>
          <h2 className="sidebar-sticky__title">{title}</h2>
        </div> */}
        <div className="sidebar-sticky__category">
          <div onClick={() => setOpenCategoryList(!openCategoryList)} className="sidebar-sticky__category__container">
            <h3
              
              className="sidebar-sticky__title-category"
            >
              categorias
            </h3>
            <FontAwesomeIcon icon={filtro} />
          </div>

          {openCategoryList && (
              <ul className="sidebar-sticky__list-container">
                <span onClick={() => setOpenCategoryList(!openCategoryList)} className="button-close">X</span>
                {categories.map((item) => {
                  return (
                    <Link
                      className="sidebar-sticky__link"
                      to={`/bts/${item.name}`}
                    >
                      <li key={item.id}>{item.name}</li>
                    </Link>
                  );
                })}
              </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export { SideBarSticky };

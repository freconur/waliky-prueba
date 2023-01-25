import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faFilter as filtro } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SideBarStickyTazasSublimadas = ({ title, itemsCategories }) => {
  const [openCategoryList, setOpenCategoryList] = useState(false);
  return (
    <div className="sidebar-sticky">
      <div className="sidebar-sticky__container">
        <div className="sidebar-sticky__category">
          <div
            onClick={() => setOpenCategoryList(!openCategoryList)}
            className="sidebar-sticky__category__container"
          >
            <h3 className="sidebar-sticky__title-category">categorias</h3>
            <FontAwesomeIcon icon={filtro} />
          </div>

          {openCategoryList && (
            <ul className="sidebar-sticky__list-container">
              <span
                onClick={() => setOpenCategoryList(!openCategoryList)}
                className="button-close"
              >
                X
              </span>
              {itemsCategories.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      onClick={() => setOpenCategoryList(!openCategoryList)}
                      className="sidebar-sticky__link"
                      to={`/sublimados/tazas-sublimados-personalizados/${item.link}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export { SideBarStickyTazasSublimadas };

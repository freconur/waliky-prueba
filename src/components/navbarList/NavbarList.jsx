import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./navbarList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown as down } from "@fortawesome/free-solid-svg-icons";
const NavbarList = ({ width, menuActive, setMenuActive }) => {
  const [activeProducts, setActiveProducts] = useState(false);

  return (
    <ul className="navbar__list">
      {
        (width < 800 &&  width >= 421)
        &&
      <button onClick={() => setMenuActive(!menuActive)} className={`close-menu-nav-list ${!menuActive && "close-menu-nav-list__close"}`}>X</button>
      }
      <Link
        onClick={() => setMenuActive(!menuActive)}
        className="navbar_list_link"
        to="/"
      >
        <li className="navbar__list-li">inicio</li>
      </Link>
      <Link
        onClick={() => setMenuActive(!menuActive)}
        className="navbar_list_link"
        to="/contacto"
      >
        <li className="navbar__list-li">contactanos</li>
      </Link>
      <Link
        onClick={() => setMenuActive(!menuActive)}
        className="navbar_list_link"
        to="/nosotros"
      >
        <li className="navbar__list-li">nosotros</li>
      </Link>
      <Link className="navbar_list_link">
        <li
          className={`navbar__list-li ${
            activeProducts && "list-products--padding"
          }`}
        >
          <ul
            className="list-products"
            onClick={() => setActiveProducts(!activeProducts)}
          >
            <div className="list-products-ul">
              productos
              <FontAwesomeIcon className="down-icon" icon={down} />
            </div>
            {activeProducts && (
              <div className="list-products__container">
                <Link onClick={() => setMenuActive(!menuActive)} to="/bts">
                  <li>bts</li>
                </Link>
                <Link onClick={() => setMenuActive(!menuActive)} to="/kawaii">
                  <li>kawaii</li>
                </Link>
                <Link
                  onClick={() => setMenuActive(!menuActive)}
                  to="/alquiler-de-cilindros-biombos"
                >
                  <li>biombos</li>
                </Link>
              </div>
            )}
          </ul>
        </li>
      </Link>
    </ul>
  );
};

export { NavbarList };

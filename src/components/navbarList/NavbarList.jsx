import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbarList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown as down } from "@fortawesome/free-solid-svg-icons";
const NavbarList = ({ menuActive, setMenuActive }) => {
  const [activeProducts, setActiveProducts] = useState(false);
  return (
    <ul className="navbar__list">
      <Link
        onClick={() => setMenuActive(!menuActive)}
        className="navbar_list_link"
        to="/"
      >
        <li className="navbar__list__border">inicio</li>
      </Link>
      <Link
        onClick={() => setMenuActive(!menuActive)}
        className="navbar_list_link"
        to="/contacto"
      >
        <li className="navbar__list__border">contactanos</li>
      </Link>
      <Link
        onClick={() => setMenuActive(!menuActive)}
        className="navbar_list_link"
        to="/nosotros"
      >
        <li className="navbar__list__border">nosotros</li>
      </Link>
      {/* <Link
        onClick={() => setMenuActive(!menuActive)}
        className="navbar_list_link"
        to="/nosotros"
      > */}
      <li className="navbar__list__border ">
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
              <li>bts</li>
              <li>kawaii</li>
              <li>biombos</li>
            </div>
          )}
        </ul>
      </li>
      {/* </Link> */}
      {/* <li className="navbar__list__border--none">productos</li> */}
    </ul>
  );
};

export { NavbarList };

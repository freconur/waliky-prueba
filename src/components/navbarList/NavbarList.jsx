import React from "react";
import { Link } from "react-router-dom";
import "./navbarList.css";
const NavbarList = ({ menuActive, setMenuActive }) => {
  return (
    <ul className="navbar__list">
      <Link onClick={() => setMenuActive(!menuActive)} className="navbar_list_link" to="/contacto">
        <li className="navbar__list__border">contactanos</li>
      </Link>
      <Link onClick={() => setMenuActive(!menuActive)} className="navbar_list_link" to="/nosotros">
        <li className="navbar__list__border">nosotros</li>
      </Link>
      {/* <li className="navbar__list__border--none">productos</li> */}
    </ul>
  );
};

export { NavbarList };

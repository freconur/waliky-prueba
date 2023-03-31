import React from "react";
import { Link } from "react-router-dom";
import "./navbarListFix.css";
const NavBarListFix = () => {
  return (
    <div className="navbar-list__container">
      <ul className="navbar-list">
        <li>
          <Link className="navbar-li" to="/contacto">
            contacto
          </Link>
        </li>
        <li>
          <Link className="navbar-li" to="/nosotros">
            nosotros
          </Link>
        </li>
        <li>
          <Link className="navbar-li" to="/">
            productos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBarListFix;

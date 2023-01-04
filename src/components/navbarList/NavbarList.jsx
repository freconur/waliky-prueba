import React from "react";
import './navbarList.css'
const NavbarList = () => {
  
  return (
    <ul className="navbar__list">
      <li className="navbar__list__border">contactanos</li>
      <li className="navbar__list__border">nosotros</li>
      <li className="navbar__list__border--none">productos</li>
    </ul>
  );
};

export { NavbarList };

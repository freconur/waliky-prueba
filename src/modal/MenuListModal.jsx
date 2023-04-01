import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./menuListModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown as down } from "@fortawesome/free-solid-svg-icons";
const MenuListModal = ({thirdMenuActive, setThirdMenuActive, menuActive, setMenuActive,setSecondMenuActive ,secondMenuActive}) => {
  const [activeProducts, setActiveProducts] = useState(false);

  return ReactDOM.createPortal(
    <div className="menu-list-modal">
      <ul className={`navbar-list-modal ${menuActive && "navbar-list-modal-active"}`}>
          <li>
            <Link onClick={() => setSecondMenuActive(!secondMenuActive)}>
              productos
            </Link>
            <ul className={`second-menu-modal ${secondMenuActive && "secondMenuActive-modal"}`}>
              <li>
                <Link onClick={() => setThirdMenuActive(!thirdMenuActive)}>
                  bts
                </Link>
                <ul className={`third-menu-modal ${secondMenuActive && thirdMenuActive && "thirdMenuActive-modal"}`}>
                  <li>polos</li>
                  <li>tazas</li>
                  <li>cojines</li>
                  <li>cojines mid</li>
                  <li>medias</li>
                  <li>libretas</li>
                  <li>cartucheras</li>
                  <li>poster</li>
                </ul>
              </li>
              <li>
                <Link to="/kawaii">
                  kawaii
                </Link>
              </li>
              <li>
                <Link to="/alquiler-de-cilindros-biombos">
                  biombos
                </Link>
              </li>
            </ul>
          </li>
          <li >
            <Link to="/nosotros">
              nosotros
            </Link>
          </li>
          <li>
            <Link to="contacto">
              contacto
            </Link>
          </li>
        </ul>
    </div>,
    document.getElementById("menuListPortal")
  );
};

export { MenuListModal };

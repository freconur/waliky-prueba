import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IMAGES_LINK } from "../imagesLink/images.link";
import { ButtonWhatsapp } from "./buttonWhatsapp/ButtonWhatsapp";
import { MenuBurger } from "./MenuBurger/MenuBurger";
import "./navbar.css";
import { NavbarList } from "./navbarList/NavbarList";
function useWindowsSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]) 
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth])
    }
    window.addEventListener("resize",handleResize)
  },[])
  return size
}
const Navbar = () => {
  const [height, width]= useWindowsSize()
  const [menuActive, setMenuActive] = useState(false)
  useEffect(() => {
    if(width>=720) {
      setMenuActive(true)
    }
    if(width<720) {
      setMenuActive(false)
    }
  },[width])
  console.log('width', width)
  return (
    <div className="navbar_waliky">
      <div className="navbar_container">
          <Link className="logo__link" to="/">
            <img className="logo" src={IMAGES_LINK.LOGO} alt="logo" />
          </Link>
        {menuActive && <NavbarList />}
        <MenuBurger  menuActive={menuActive} setMenuActive={setMenuActive}/>
      </div>
      <ButtonWhatsapp />
    </div>
  );
};

export { Navbar };

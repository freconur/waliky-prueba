import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IMAGES_LINK } from "../imagesLink/images.link";
import { MenuListModal } from "../modal/MenuListModal";
import { ButtonWhatsapp } from "./buttonWhatsapp/ButtonWhatsapp";
import { MenuBurger } from "./MenuBurger/MenuBurger";
import "./navbar.css";
import { NavbarList } from "./navbarList/NavbarList";
import NavBarListFix from "./navbarList/NavBarListFix";

function useWindowsSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return size;
}

const Navbar = () => {
  const [height, width] = useWindowsSize();
  const [menuActive, setMenuActive] = useState(false)
  const [secondMenuActive, setSecondMenuActive] = useState(false)
  const [thirdMenuActive, setThirdMenuActive] = useState(false)
  //deberia de tener un estado aparte para el modal
  useEffect(()=>{
    if(width > 648) {
      setMenuActive(false)
    }
  })
  return (
    <>
    <div className={`navbar_waliky ${menuActive && "navbar-waliky__active"}`}>
      <div className="navbar_container">
        <Link className="logo__link" to="/">
          <img className="logo" src={IMAGES_LINK.LOGO} alt="logo" />
        </Link>
        <NavBarListFix 
        setSecondMenuActive={setSecondMenuActive} secondMenuActive={secondMenuActive} 
        menuActive={menuActive} 
        setMenuActive={setMenuActive}
        thirdMenuActive={thirdMenuActive}
        setThirdMenuActive={setThirdMenuActive}
        />
        <MenuBurger menuActive={menuActive} setMenuActive={setMenuActive} />
        {
          menuActive && <MenuListModal menuActive={menuActive} setMenuActive={setMenuActive} setSecondMenuActive={setSecondMenuActive} secondMenuActive={secondMenuActive} 
          thirdMenuActive={thirdMenuActive} setThirdMenuActive={setThirdMenuActive}/>
        }
      </div>
    </div>
    <ButtonWhatsapp />
    </>
  );
};

export { Navbar };

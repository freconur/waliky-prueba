import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IMAGES_LINK } from "../imagesLink/images.link";
import { MenuListModal } from "../modal/MenuListModal";
import { ButtonWhatsapp } from "./buttonWhatsapp/ButtonWhatsapp";
import { MenuBurger } from "./MenuBurger/MenuBurger";
import "./navbar.css";
import { NavbarList } from "./navbarList/NavbarList";
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
  const [menuActive, setMenuActive] = useState(false);
  useEffect(()=>{
    if(width > 780) {
      setMenuActive(true)
    }
  })
  return (
    <div className="navbar_waliky">
      <div className="navbar_container">
        <Link className="logo__link" to="/">
          <img className="logo" src={IMAGES_LINK.LOGO} alt="logo" />
        </Link>
        {(menuActive) && (
          <NavbarList width={width} menuActive={menuActive} setMenuActive={setMenuActive} />
        )}

        <MenuBurger menuActive={menuActive} setMenuActive={setMenuActive} />
        
        {
          (menuActive && width<421) && <MenuListModal menuActive={menuActive} setMenuActive={setMenuActive} />
        }
      </div>
      <ButtonWhatsapp />
      {/* <MessengerCustomerChat
        pageId="101360885474783"
        appId="698097068630350"
      /> */}
    </div>
  );
};

export { Navbar };

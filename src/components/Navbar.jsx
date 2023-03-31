import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IMAGES_LINK } from "../imagesLink/images.link";
import { MenuListModal } from "../modal/MenuListModal";
import { ButtonWhatsapp } from "./buttonWhatsapp/ButtonWhatsapp";
import { MenuBurger } from "./MenuBurger/MenuBurger";
import "./navbar.css";
import { NavbarList } from "./navbarList/NavbarList";
import NavBarListFix from "./navbarList/NavBarListFix";

const Navbar = () => {
  return (
    <div className="navbar_waliky">
      <div className="navbar_container">
        <Link className="logo__link" to="/">
          <img className="logo" src={IMAGES_LINK.LOGO} alt="logo" />
        </Link>
        <NavBarListFix />
      <MenuBurger/>
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

import React from "react";
import { WalikyLocation } from "../location/WalikyLocation";
import { Social } from "../social/Social";
import "./secondNavbar.css";
const SecondNavbar = () => {
  return (
    <div className="second-navbar">
      <div className="second-navbar__container">
        <WalikyLocation />
        <Social />
      </div>
    </div>
  );
};

export { SecondNavbar };

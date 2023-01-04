import React from "react";
import "./footer.css";
import { Social } from "./social/Social";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <Social />
          <h2 className="footer__brand">©waliky 2022</h2>
      </div>
    </div>
  );
};

export { Footer };

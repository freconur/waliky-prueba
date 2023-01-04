import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SecondNavbar } from "../components/secondNavbar/SecondNavbar";
import "./pruebaa.css";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* <SecondNavbar /> */}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export { Layout };

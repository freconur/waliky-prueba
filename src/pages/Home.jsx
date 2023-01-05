import React from "react";
import { Header } from "../components/header/Header";
import { HeaderPrueba, IndividualIntervalsExample } from "../components/header/Header-prueba";
import { BtsSection } from "../components/sections/BtsSection/BtsSection";
import { KawaiSection } from "../components/sections/kawaii/kawaiSection";
import { PartySection } from "../components/sections/PartySection/PartySection";
import { SublimadosSection } from "../components/sections/sublimadosSection/SublimadosSection";
import { WalikyStoreMaps } from "../components/walikyStoreMaps/WalikyStoreMaps";
import './home.css'
const Home = () => {
  return (
    <div className="home">
      <IndividualIntervalsExample />
      {/* <Header /> */}
      {/* <SublimadosSection /> */}
      <BtsSection />
      {/* <PartySection /> */}
      <KawaiSection/>
      <WalikyStoreMaps />
    </div>
  );
};

export { Home };

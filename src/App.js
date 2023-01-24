import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { Layout } from './Container/Layout';
import { Home } from './pages/Home';
// import { Sublimados } from './pages/sublimados/Sublimados';
import { Bts } from './pages/bts/Bts';
import { CartucherasBtsPage } from './pages/bts/cartucherasBtsPage/CartucherasBtsPage';
import { PolosBtsPage } from './pages/bts/polosBtsPage/PolosBtsPage';
import { LibretasBtsPage } from './pages/bts/libretas/LibretasBtsPage';
import { CojinesBtsPage } from './pages/bts/CojinesBtsPage/CojinesBtsPage';
import { TazasBtsPage } from './pages/bts/TazasBtsPage/TazasBtsPage';
import { CojinesMidBtsPage } from './pages/bts/CojinesMidBtsPage/CojinesMidBtsPage';
import { PosterBtsPage } from './pages/bts/posterBtsPage/PosterBtsPage';
import { MediasBtsPage } from './pages/bts/mediasBtsPage/MediasBtsPage';
import { Contacto } from './pages/contacto/Contacto';
import { Nosotros } from './pages/nosotros/Nosotros';
import { KawaiiPage } from './pages/kawaii/KawaiiPage';
import { CombosBts } from './pages/bts/CombosBts/CombosBts';
import ComboPageDetails from './pages/bts/CombosBts/ComboPageDetails/ComboPageDetails';
import { CilindrosBiombos } from './pages/cilindrosBiombos/CilindrosBiombos';
import { CilindrosBiombosTheme } from './pages/cilindrosBiombos/cilindrosBiombosTheme/CilindrosBiombosTheme';
import { TazasSublimadosPersonalizados } from './pages/sublimados/tazasSublimados/TazasSublimadosPersonalizados';
import { TazasSublimadosPlantillas } from './pages/sublimados/tazasSublimadosPlantillas/TazasSublimadosPlantillas';
import { TazasSublimadosPersonalizadosDisenos } from './pages/sublimados/tazasSublimadosPersonalizadosDisenos/tazasSublimadosPersonalizadosDisenos';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
     <Layout>
      <Routes>
        <Route  exact path="/" element={<Home />} />
        {/* <Route  exact path="/sublimados" element={<Sublimados />} /> */}
        <Route  exact path="/bts" element={<Bts />} />
        <Route  exact path="/bts/cartucheras" element={<CartucherasBtsPage />} />
        <Route  exact path="/bts/polos" element={<PolosBtsPage />} />
        <Route  exact path="/bts/libretas" element={<LibretasBtsPage />} />
        <Route  exact path="/bts/cojines" element={<CojinesBtsPage />} />
        <Route  exact path="/bts/tazas" element={<TazasBtsPage />} />
        <Route  exact path="/bts/poster" element={<PosterBtsPage />} />
        <Route  exact path="/bts/medias" element={<MediasBtsPage />} />
        <Route  exact path="/bts/cojinesMid" element={<CojinesMidBtsPage />} />
        <Route  exact path="/bts/combos-bts" element={<CombosBts />} />
        <Route  exact path="/bts/combos-bts/:comboName" element={<ComboPageDetails />} />
        <Route  exact path="/contacto" element={<Contacto />} />
        <Route  exact path="/alquiler-de-cilindros-biombos" element={<CilindrosBiombos />} />
        <Route  exact path="/alquiler-de-cilindros-biombos/:cilindroBiomboId" element={<CilindrosBiombosTheme />} />
        <Route  exact path="/nosotros" element={<Nosotros />} />
        <Route  exact path="/kawaii" element={<KawaiiPage />} />
        <Route  exact path="/sublimados/tazas-sublimados-personalizados" element={<TazasSublimadosPersonalizados />} />
        {/* <Route  exact path="/sublimados/tazas-sublimados-personalizados/plantillas" element={<TazasSublimadosPlantillas />} /> */}
        <Route  exact path="/sublimados/tazas-sublimados-personalizados/:idDisenos" element={<TazasSublimadosPlantillas />} />
        <Route  exact path="/sublimados/tazas-sublimados-personalizados/plantillas" element={<TazasSublimadosPersonalizadosDisenos />} />
      </Routes>
     </Layout>
    </BrowserRouter>
  );
}

export default App;

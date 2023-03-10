import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { HEADER_IMAGE } from "../../imagesLink/headerImages";
import "./header.css";

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

function IndividualIntervalsExample() {
  const [height, width] = useWindowsSize();
  const [menuActive, setMenuActive] = useState(false);
  // useEffect(() => {
  //   if (width >= 840) {
  //     setMenuActive(true);
  //   }
  //   if (width < 840) {
  //     setMenuActive(false);
  //   }
  // }, [width]);

  return (
    <>
      {width < 840 && (
        <Carousel>
          {/* <Carousel.Item interval={5000}> */}

          <Carousel.Item interval={5000}>
            <Link to="/bts/combos-bts">
              <img
                className="d-block w-100 slider-responsive"
                src={HEADER_IMAGE.BANNER_COMBO_BTS}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <Link to="/alquiler-de-cilindros-biombos">
              <img
                className="d-block w-100 slider-responsive"
                src={HEADER_IMAGE.HEADER_BIOMBOS_MOVIL}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <Link to="/sublimados/tazas-sublimados-personalizados/">
              <img
                className="d-block w-100 slider-responsive"
                src={HEADER_IMAGE.BANNER_TAZAS_SUBLIMADOS_CUSTOM_MOVIL}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Link to="/sublimados/tazas-sublimados-personalizados/san-valentin">
              <img
                className="d-block w-100 slider-responsive"
                src={HEADER_IMAGE.BANNER_TAZAS_SUBLIMADOS_SV_MOVIL}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
        </Carousel>
        
      )}

      {width >= 840 && (
        <Carousel>
          <Carousel.Item interval={5000}>
            <Link to="/bts/combos-bts">
              <img
                className="d-block w-100 h-450 slider-responsive"
                src={HEADER_IMAGE.HEADER_PROMOTION_COLLAGE_WEB}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Link to="/alquiler-de-cilindros-biombos">
              <img
                className="d-block w-100 h-450 slider-responsive"
                src={HEADER_IMAGE.HEADER_BIOMBOS_WEB}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Link to="/sublimados/tazas-sublimados-personalizados/">
              <img
                className="d-block w-100 h-450 slider-responsive"
                src={HEADER_IMAGE.BANNER_TAZAS_SUBLIMADOS_CUSTOM_WEB}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Link to="/sublimados/tazas-sublimados-personalizados/san-valentin">
              <img
                className="d-block w-100 h-450 slider-responsive"
                src={HEADER_IMAGE.BANNER_TAZAS_SUBLIMADOS_SV_WEB}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
        </Carousel>
      )}
    </>
  );
}

export { IndividualIntervalsExample };

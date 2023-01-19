import React from "react";
import { Accordion } from "react-bootstrap";
import "./tazasSublimadosPersonalizados.css";
const TazasSublimadosPersonalizados = () => {
  return (
    <div className="tazas-sublimado-custom">
      <section className="tazas-sublimado-custom_container">
        <h2 className="tazas-sublimado-custom_title">tazas sublimados personalizados</h2>
        <p>
          crea tus tazas con todos nuestros disenos disponibles, elige el diseno
          que mas te guste y nosotros haremos el resto, echale un vistazo.
        </p>
        <div className="tazas-sublimado-custom_container-card">
          <div className="tazas-sublimados-custom_card">
            <img
              className="tazas-sublimados-custom__image"
              src="https://firebasestorage.googleapis.com/v0/b/apiwaliky.appspot.com/o/biombos%2Fcombo-cinlindros-biombos-dragon-ball.jpg?alt=media&token=3efd2041-50d4-4e34-9bdc-d8eefaee575e"
              alt=""
            />
            <h3>plantillas</h3>
          </div>
          <div className="tazas-sublimados-custom_card">
            <img
              className="tazas-sublimados-custom__image"
              src="https://firebasestorage.googleapis.com/v0/b/apiwaliky.appspot.com/o/biombos%2Fcombo-cinlindros-biombos-dragon-ball.jpg?alt=media&token=3efd2041-50d4-4e34-9bdc-d8eefaee575e"
              alt=""
            />
            <h3>Disenos</h3>
          </div>
        </div>
      </section>
      <section className="tazas-sublimado-custom_container">
        <h2 className="tazas-sublimado-custom_title">preguntas frecuentes sobre las tazas sublimados personalizados</h2>
        <div className="tazas-sublimada-custom_acordion">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <p>Cuál es la diferencia entre plantillas y disenios?</p>
              </Accordion.Header>
              <Accordion.Body>
                con las platillas tienes la opcion de poder agregar fotos tuyas
                haciendo que esta pueda ser modificado, mientras que en un
                diseño no cuentas con esa opcion, estos ya estan prestablecidos
                y no se pueden modificar.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
               <p> Si quiero que una taza sublimada tenga una foto mia, necesito
                una plantilla o diseno?</p>
              </Accordion.Header>
              <Accordion.Body>
                si quieres que una taza tenga una foto tuya, lo que necesitas es una plantilla, puedes elegir entre las plantillas que ya tenemos donde se podran hacer modificaciones
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <p>Que precios tiene una taza sublimada hecho con plantilla o con
                disenio?</p>
              </Accordion.Header>
              <Accordion.Body>
                tanto la taza con plantilla o con un diseño prestablecido tienen el precio de 15 soles.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
               <p> En cuanto tiempo estaria mi taza si mando hacer una?</p>
              </Accordion.Header>
              <Accordion.Body>
                el tiempo estimado es de 1 a 2 horas.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <p>Tienen tazas sublimadas disponibles en stock para compra
                inmediata?</p>
              </Accordion.Header>
              <Accordion.Body>
                Si, tenemos tazas con diseños ya hechos listos para ser enviados o comprados si te encuentras en nuestro local. ve a la siguiente seccion para ver las tazas que estan disponibles ya en stock.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export { TazasSublimadosPersonalizados };

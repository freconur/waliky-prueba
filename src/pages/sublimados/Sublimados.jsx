// import React, { useEffect, useReducer } from "react";
// import {
//   initialState,
//   productsReducer,
// } from "../../reducer/sublimados.reducer";
// import { getPolos, getSublimados } from "../../extension/functions";
// import "./sublimados.css";
// import { IMAGES_LINK } from "../../imagesLink/images.link";
// import { ItemCategories } from "../../components/itemCategories/ItemCategories";
// import { Link } from "react-router-dom";
// const Sublimados = () => {
//   const [state, dispatch] = useReducer(productsReducer, initialState);
//   const { sublimados, } = state;

//   useEffect(() => {
//     getPolos(dispatch);
//     getSublimados(dispatch);
//   }, []);
//   return (
//     <div className="sublimados">
//       <h1 className="sublimados__title">sublimados</h1>
//       <section className="sublimados__header">
//         aqui ira el hearder de la pagina sublimados
//       </section>
//       <section className="sublimados__about">
//         <h2 className="sublimados__title">
//           Sobre nuestros productos sublimados
//         </h2>
//         <p className="sublimados__text">
//           Waliky cuenta con productos sublimados, ya sea que quieres darte el
//           gusto de tener una taza de tu pelicula favorita, o tener un cojin en
//           tu sillon con la foto de las personas que mas quieres o quiza solo
//           quieres regalarle algo distinto y personalizado a esa persona
//           especial.
//           <br />
//           contamos con tazas, polos, cojines y cartucheras con disenos variados
//           y personalizados, asi que sin duda debes echarle un ojo nuestros
//           productos, solo dale clic abajo.
//         </p>
//         <div className="categories">
//           <h2>categorias</h2>
//           <ul className="sublimados__categories">
//             {sublimados.map((item) => {
//               return <ItemCategories key={item.id} item={item} />;
//             })}
//           </ul>
//         </div>
//       </section>
//       <section className="sublimados-personalizados">
//         <h2 className="sublimados-personalizados__title">
//           sublimados personalizados
//         </h2>
//         <div className="sublimados-personalizados__container">
//           <img
//             className="sublimados-personalizados__image"
//             src={IMAGES_LINK.SUBLIMADOS_PERSONALIZADOS}
//             alt="sublimados-personalizados"
//           />
//           <div className="about-container">
//             <p className="sublimados-personalizados__about">
//               si tener unos de nuestros productos sublimados es grandioso, ahora
//               esto te parecera aun masgrandioso, tan solo imaginate tener uno
//               personzalido, con los disenos que a ti mas te gusten, con una foto
//               tuya, con tus colores favoritos, lo que tu quieras, nosotros
//               haremos lo posible para que termines con una sonrisa al final del
//               dia.
//               <br />
//               si aun te sientes esceptico, te invito a que veas algunos de
//               nuestros disenos personzalidos que ya hemos realizados para
//               nuestros clientes que han quedado satisfechos, velo por ti mismo.
//             </p>
//             <div className="buttons__container">
//               <Link className="personalizados__link" to="/">
//                 <div className="button__link">quiero uno</div>
//               </Link>
//               <Link className="personalizados__link" to="/">
//                 <div className="button__link">ver mas</div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export { Sublimados };

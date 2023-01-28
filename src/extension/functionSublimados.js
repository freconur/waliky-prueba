import {
    getFirestore,
    collection,
    doc,
    getDoc,
    getDocs,
    onSnapshot,
  } from "firebase/firestore";
  import { app } from "../firebase/firebase.config";
import { TYPES_SUBLIMADOS } from "../reducer/sublimados.action";
import { TYPES_PATH } from "./pathFirebase/pathSublimados";
  
  const db = getFirestore(app);

  export const getTazasSublimadasPlantillas = async (dispatch, idDisenos) => {
    const colRefDiseno =  collection(db, "/sublimados/fXfA8pPqJfTFdDiAbUbu/taza-subliamdos-disenos");
    onSnapshot(colRefDiseno, (snapshot) => {
      const AllTazasPlantillas = [];
      snapshot.docs.forEach((doc) => {
        AllTazasPlantillas.push({ ...doc.data(), id: doc.id });
      });
      const findIdDiseno =  AllTazasPlantillas.find(item => item.link === idDisenos)

      const colRef = collection(db, `/sublimados/fXfA8pPqJfTFdDiAbUbu/taza-subliamdos-disenos/${findIdDiseno.id}/disenos${findIdDiseno.link}`);
    
    onSnapshot(colRef, (snapshot) => {
      let tazasPlantillas = [];
      snapshot.docs.forEach((doc) => {
        tazasPlantillas.push({ ...doc.data(), id: doc.id });
      });
      dispatch({ type: TYPES_SUBLIMADOS.GET_TAZAS_SUBLIMADOS_PLANTILLAS, payload: tazasPlantillas});
    });
    });
  };
  export const getCategoriesTazasSublimadasPlantillas = (dispatch) => {
    const colRef = collection(db, TYPES_PATH.CATEGORIES_TAZAS_SUBLIMADOS_PLANTILLAS);
    onSnapshot(colRef, (snapshot) => {
      let categoriesTazasPlantillas = [];
      snapshot.docs.forEach((doc) => {
        categoriesTazasPlantillas.push({ ...doc.data(), id: doc.id });
      });
      dispatch({ type: TYPES_SUBLIMADOS.GET_CATEGORIES_TAZAS_SUBLIMADOS_DISENOS, payload: categoriesTazasPlantillas});
    });
  };

  export const getTazasSublimadasSanValentinLiquidacion = (dispatch) => {
    const colRef = collection(db, TYPES_PATH.GET_TAZAS_SUBLIMADOS_SAN_VALENTIN_LIQUIDACION);
    onSnapshot(colRef, (snapshot) => {
      let getTazasSanValentin = [];
      snapshot.docs.forEach((doc) => {
        getTazasSanValentin.push({ ...doc.data(), id: doc.id });
      });
      dispatch({ type: TYPES_SUBLIMADOS.GET_TAZAS_SUBLIMADOS_SAN_VALENTIN_LIQUIDACION, payload: getTazasSanValentin});
    });
  };
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

  export const getTazasSublimadasPlantillas = (dispatch, idPlantillas) => {
    // const colRef = collection(db, TYPES_PATH.TAZAS_SUBLIMADOS_PLATILLAS);
    const dataString = [...idPlantillas]
    const findIndexGuion = dataString.findIndex(letra => letra === '-');
    const id = (dataString.slice(findIndexGuion+1)).join('')
    const collectionName = (dataString.slice(0,findIndexGuion)).join('')
    const colRef = collection(db, `/sublimados/fXfA8pPqJfTFdDiAbUbu/taza-subliamdos-disenos/${id}/disenos${collectionName}`);
    
    onSnapshot(colRef, (snapshot) => {
      let tazasPlantillas = [];
      snapshot.docs.forEach((doc) => {
        tazasPlantillas.push({ ...doc.data(), id: doc.id });
      });
      dispatch({ type: TYPES_SUBLIMADOS.GET_TAZAS_SUBLIMADOS_PLANTILLAS, payload: tazasPlantillas, payload2: idPlantillas  });
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
import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
  } from "firebase/firestore";
import { app } from "../firebase/firebase.config";
import { TYPES } from "../reducer/products.action";

const db = getFirestore(app);

export const getPolos = (dispatch) => {
    const colRef = collection(db, "sublimados/Xq9UGyUn6d4OukEb1jPk/cojines");
    onSnapshot(colRef, (snapshot) => {
      let favoritos = [];
      snapshot.docs.forEach((doc) => {
        favoritos.push({ ...doc.data(), id: doc.id });
      });
      dispatch({ type: TYPES.GET_POLOS_SUBLIMADOS, payload: favoritos });
    });
  };

export const getSublimados = async(dispatch) => {
    const sublimados = await getDocs(collection(db, "sublimados"));
	let docs = [];
	sublimados.forEach(doc => {
		docs.push({...doc.data(), id:doc.id});
		dispatch({type:TYPES.GET_SUBLIMADOS, payload:docs})
	})
}




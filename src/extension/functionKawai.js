import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
  } from "firebase/firestore";
import { app } from "../firebase/firebase.config";
import { TYPES_KAWAII } from "../reducer/kawaii.action";
const db = getFirestore(app);
export const getKawaii = async(dispatch) => {
    const colRefKawaii = await getDocs(collection(db, "kawaii"));
	let kawaii = [];
	colRefKawaii.forEach(doc => {
		kawaii.push({...doc.data(), id:doc.id});
		dispatch({type:TYPES_KAWAII.GET_KAWAII_ALL_PRODUCTS, payload:kawaii})
	})
}
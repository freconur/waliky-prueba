import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  onSnapshot,
  doc,
} from "firebase/firestore";

import { app } from "../firebase/firebase.config";
import { TYPES_BIOMBOS_CILINDROS } from "../reducer/cilindros-biombos.action";

const db = getFirestore(app);

export const getCilindrosBiombosThemes = async (dispatch) => {
  const colRefThemes = await getDocs(collection(db, "cilindrosBiombos"));
  let cilindrosBiombos = []
  colRefThemes.forEach(doc => {
    cilindrosBiombos.push({...doc.data(), id:doc.id});
    dispatch({type:TYPES_BIOMBOS_CILINDROS.GET_CILINDROS_BIOMBOS_THEMES, payload:cilindrosBiombos})
  })
};

export const getFiltercilindrosBiombos = async(dispatch, cilindrosBiomboId) => {
  const itemfilter = doc(db, "cilindrosBiombos", cilindrosBiomboId);
  const item = await getDoc(itemfilter);
  if(item.exists()) {
    dispatch({type: TYPES_BIOMBOS_CILINDROS.GET_CILINDROS_BIOMBOS_FILTER, payload: item.data()})
  }
}

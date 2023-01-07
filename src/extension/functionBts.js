import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { app } from "../firebase/firebase.config";
import { TYPES_BTS } from "../reducer/bts.action";

const db = getFirestore(app);

export const getCartucherasBts = (dispatch) => {
  const colRef = collection(db, "bts/Xq9UGyUn6d4OukEb1jPk/cartucheras");
  onSnapshot(colRef, (snapshot) => {
    let cartucheras = [];
    snapshot.docs.forEach((doc) => {
      cartucheras.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: TYPES_BTS.GET_BTS_CARTUCHERAS, payload: cartucheras });
  });
};
export const getLibretasBts = (dispatch) => {
  const colRef = collection(db, "bts/GEhNFGq9WCuKdxZxzF35/libretas");
  onSnapshot(colRef, (snapshot) => {
    let libretas = [];
    snapshot.docs.forEach((doc) => {
      libretas.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: TYPES_BTS.GET_BTS_LIBRETAS, payload: libretas });
  });
};
export const getCojinesBts = (dispatch) => {
  const colRef = collection(db, "bts/G91fJSTIGxPbP6YWAr4r/cojines");
  onSnapshot(colRef, (snapshot) => {
    let cojines = [];
    snapshot.docs.forEach((doc) => {
      cojines.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: TYPES_BTS.GET_BTS_COJINES, payload: cojines });
  });
};
export const getTazasBts = (dispatch) => {
  const colRef = collection(db, "bts/etkmO3TrV2WqzKwVGQQO/tazas");
  onSnapshot(colRef, (snapshot) => {
    let tazas = [];
    snapshot.docs.forEach((doc) => {
      tazas.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: TYPES_BTS.GET_BTS_TAZAS, payload: tazas });
  });
};
export const getCojinesMidBts = (dispatch) => {
  const colRef = collection(db, "bts/M399N3OWcQXBvyIPkz0H/cojinesMid");
  onSnapshot(colRef, (snapshot) => {
    let cojinesMid = [];
    snapshot.docs.forEach((doc) => {
      cojinesMid.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: TYPES_BTS.GET_BTS_COJINES_MID, payload: cojinesMid });
  });
};
export const getPolosBts = (dispatch) => {
  const colRef = collection(db, "bts/n8rVgfULKHbGhFTMWv3Z/tazas");
  onSnapshot(colRef, (snapshot) => {
    let polos = [];
    snapshot.docs.forEach((doc) => {
      polos.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: TYPES_BTS.GET_BTS_POLOS, payload: polos });
  });
};
export const getPosterBts = (dispatch) => {
  const colRef = collection(db, "bts/Fwh0KuBTK4P5xmzJB8j2/poster");
  onSnapshot(colRef, (snapshot) => {
    let poster = [];
    snapshot.docs.forEach((doc) => {
      poster.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: TYPES_BTS.GET_BTS_POSTER, payload: poster });
  });
};
export const getMediasBts = (dispatch) => {
  const colRef = collection(db, "bts/vHq1CjFvewCAZ038ICp9/medias");
  onSnapshot(colRef, (snapshot) => {
    let medias = [];
    snapshot.docs.forEach((doc) => {
      medias.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: TYPES_BTS.GET_BTS_MEDIAS, payload: medias });
  });
};

export const getBtsCategories = async (dispatch) => {
  const btsCategories = await getDocs(collection(db, "bts"));
  const docs = [];
  btsCategories.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
    dispatch({ type: TYPES_BTS.GET_BTS_CATEGORIES, payload: docs });
  });
};

export const getBtsCombos = async (dispatch) => {
  const btsCombos = await getDocs(collection(db, "combosbts"));
  const docs = [];
  btsCombos.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
    dispatch({ type: TYPES_BTS.GET_BTS_COMBOS, payload: docs });
  });
};
export const getfilterComboBts = async (dispatch, comboName) => {
  const itemCombo = doc(db, "combosbts", comboName);
  const itemsCombo = await getDoc(itemCombo);
  console.log(comboName)
  if (itemsCombo.exists()) {
    dispatch({
      type: TYPES_BTS.GET_BTS_COMBOS_FILTER,
      payload: itemsCombo.data(),
    });
  }
};
// export const allCategoriesBtsIteration = (objectCategories, setAllcategoriesBts) => {
//   let keysArray = []
//   Object.keys(objectCategories).map(key => {
//     keysArray.push(key)
//   })
//   setAllcategoriesBts(keysArray)
//   // return keysArray
// }

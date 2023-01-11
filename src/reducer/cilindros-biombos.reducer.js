import { TYPES_BIOMBOS_CILINDROS } from "./cilindros-biombos.action";

export const initialStateCilindrosBiombos = {
  allThemes: [],
  themeFilterCilindrosBiombos: []
};

export const cilindrosBiombosReducer = (
  state = initialStateCilindrosBiombos,
  action
) => {
  switch (action.type) {
    case TYPES_BIOMBOS_CILINDROS.GET_CILINDROS_BIOMBOS_THEMES: {
      return {
        ...state,
        allThemes: action.payload,
      };
    }
    case TYPES_BIOMBOS_CILINDROS.GET_CILINDROS_BIOMBOS_FILTER: {
      return {
        ...state,
        themeFilterCilindrosBiombos: action.payload,
      };
    }
    default:
      return state;
  }
};

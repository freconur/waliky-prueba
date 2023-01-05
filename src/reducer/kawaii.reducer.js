import { TYPES_KAWAII } from "./kawaii.action";

export const initialStateKawaii = {
  allProducts: [],
};

export const kawaiiReducer = (state = initialStateKawaii, action) => {
  switch (action.type) {
    case TYPES_KAWAII.GET_KAWAII_ALL_PRODUCTS: {
      return {
        ...state,
        allProducts: action.payload,
      };
    }
    default:
      return state;
  }
};

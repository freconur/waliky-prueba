import { TYPES_BTS } from "./bts.action"
import { TYPES } from "./products.action"

export const initialStateBts = {
    categories: [],
    currentlyCategory: [],
    polos: [],
    tazas: [],
    cojines: [],
    conjinesMid: [],
    cartucheras: [],
    libretas: [],
    poster: [],
    medias: [],
    combosBts: [],
    comboBtsfilter:[]
}

export const btsReducer = (state = initialStateBts, action) => {
    switch(action.type) {
        case TYPES.GET_BTS_CATEGORIES: {
        return {
            ...state,
            categories: action.payload
        }
    }
    case TYPES_BTS.GET_BTS_CARTUCHERAS: {
        return {
            ...state,
            cartucheras: action.payload
        }
    }
    case TYPES_BTS.GET_BTS_LIBRETAS: {
        return {
            ...state,
            libretas: action.payload
        }
    }
    case TYPES_BTS.GET_BTS_COJINES_MID: {
        return {
            ...state,
            conjinesMid: action.payload
        }
    }
    case TYPES_BTS.GET_BTS_COJINES: {
        return {
            ...state,
            cojines: action.payload
        }
    }
    case TYPES_BTS.GET_BTS_POLOS: {
        return {
            ...state,
            polos: action.payload
        }
    }
    case TYPES_BTS.GET_BTS_TAZAS: {
        return {
            ...state,
            tazas: action.payload
        }
    }
    case TYPES_BTS.GET_BTS_POSTER: {
        return {
            ...state,
            poster: action.payload
        }
    }
    case TYPES_BTS.GET_BTS_MEDIAS: {
        return {
            ...state,
            medias: action.payload
        }
    }
    case TYPES_BTS.GET_BTS_COMBOS: {
        return {
            ...state,
            combosBts: action.payload
        }
    }
    case TYPES_BTS.GET_BTS_COMBOS_FILTER: {
        return {
            ...state,
            comboBtsfilter: action.payload
        }
    }
    default:
    return state
    }
}
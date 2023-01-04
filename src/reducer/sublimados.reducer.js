import { TYPES } from "./products.action"

export const initialState = {
    sublimados:[],
    polos: [],
    tazas: [],
    conjin: [],
}

export const productsReducer = (state = initialState, action) => {
    switch(action.type) {
    case TYPES.GET_POLOS_SUBLIMADOS: {
        // console.log('polos', action.payload)
        return{
            ...state,
            polos: action.payload
        }
    }
    case TYPES.GET_COJIN_SUBLIMADOS: {
        console.log('cojin')
        
    }
    case TYPES.GET_TAZAS_SUBLIMADOS: {
        console.log('tazas')
        
    }
    case TYPES.GET_BTS_CATEGORIES: {
        
    }
    case TYPES.GET_SUBLIMADOS: {
        return { 
            ...state,
            sublimados: action.payload
        }
    }
    default:
    return state
    }
}
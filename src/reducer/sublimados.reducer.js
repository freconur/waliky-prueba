import { TYPES_SUBLIMADOS } from "./sublimados.action"

export const initialStateSublimados = {
    tazasSublimadosPlantillas:[],
    categoriesTazasSublimadasDisenos: [],
    tazasSanValentinLiquidacion:[]
}

export const sublimadosReducer = (state = initialStateSublimados, action) => {
    switch(action.type) {
    case TYPES_SUBLIMADOS.GET_TAZAS_SUBLIMADOS_PLANTILLAS: {
        return{
            ...state,
            tazasSublimadosPlantillas: action.payload
        }
    }
    case TYPES_SUBLIMADOS.GET_CATEGORIES_TAZAS_SUBLIMADOS_DISENOS: {
        return{
            ...state,
            categoriesTazasSublimadasDisenos: action.payload
        }
    }
    case TYPES_SUBLIMADOS.GET_TAZAS_SUBLIMADOS_SAN_VALENTIN_LIQUIDACION: {
        return{
            ...state,
            tazasSanValentinLiquidacion: action.payload
        }
    }
    default:
    return state
    }
}
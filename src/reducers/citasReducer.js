import {AGREGAR, BORRAR} from '../actions/types'

//State inicial

const stateInicial = {
    citas : []
}

export default function (state = stateInicial, action){
    switch (action.type){  
        case AGREGAR:
            return {
                ...state,
                citas : [...state.citas, action.payload]
            }   
        case BORRAR:
            return {
                ...state,
                citas : state.citas.filter(cita => cita.id !== action.payload)
            }
        default:
            return state
        }
}
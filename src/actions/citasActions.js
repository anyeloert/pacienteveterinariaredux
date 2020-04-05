import {AGREGAR, BORRAR} from './types'

export const agregarCita = cita => ({
    type : AGREGAR,
    payload : cita
})

export const borrarCita = id => ({
    type : BORRAR,
    payload : id
})
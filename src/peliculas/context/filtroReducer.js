import { types } from '../types/types'



const hoy = new Date().toISOString().substring(0,10)
let manhana = new Date()
manhana.setDate( manhana.getDate() + 1 )
manhana = manhana.toISOString().substring(0,10)
let pasado = new Date()
pasado.setDate( pasado.getDate() + 2 )
pasado = pasado.toISOString().substring(0,10)
const todos = '2023'

export const filtroReducer = ( state, action ) => {
 

    switch (action.type) {
        case types.hoy:
            return hoy
            
        
        case types.manhana:
            return manhana                
        
        case types.pasado:
            return pasado
        
        case types.todos:
            return todos

        default:
            return state;
    }

}

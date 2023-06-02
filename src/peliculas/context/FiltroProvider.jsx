import { useReducer } from "react"
import { FiltroContetext } from "./FiltroContext"
import { filtroReducer } from "./filtroReducer"


const initialState = new Date().toISOString().substring(0,10)



// eslint-disable-next-line react/prop-types
export const FiltroProvider = ({ children }) => {
    
   const [ filtroState,  dispatch] = useReducer( filtroReducer, initialState )

 

  return (
    <FiltroContetext.Provider value={{ filtroState, dispatch }}>
        { children }
    </FiltroContetext.Provider>
  )
}

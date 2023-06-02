import { useContext } from "react"
import { FiltroContetext } from "../context/FiltroContext"
import { types } from '../types/types'

export const NavBar = () => {


    const { filtroState, dispatch } = useContext(FiltroContetext)

    

    // useEffect(() => {
    //   // seleccionarDia(diaOn) 
    //   console.log('useftc')
    // }, [diaOn])
    


    const onDiaseleccionado = (tipo) => {
     
      dispatch({type: tipo})      
      console.log(filtroState)
    }


    
    

    

    const options = { weekday: 'long', day: 'numeric' }
    const diaActual = new Date().toLocaleDateString('es-ES',options)
    let manhana = new Date()
    let pasado = new Date()
    manhana.setDate( manhana.getDate() + 1 )
    manhana = manhana.toLocaleDateString('es-ES',options)
    pasado.setDate( pasado.getDate() + 2)
    pasado = pasado.toLocaleDateString('es-ES',options)

  return (
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <form className="d-flex gap-3" role="search">
            <h1 className="">Peliculas tv</h1>
            <button className="btn btn-outline-success" type="button" onClick={() => onDiaseleccionado(types.hoy)}>{diaActual}</button>
            <button className="btn btn-outline-success" type="button" onClick={() => onDiaseleccionado(types.manhana)}>{manhana}</button>
            <button className="btn btn-outline-success" type="button" onClick={() => onDiaseleccionado(types.pasado)}>{pasado}</button>
            <button className="btn btn-outline-success" type="button" onClick={() => onDiaseleccionado(types.todos)}>Todos</button>
            </form>
        </div>
    </nav>
  )
}

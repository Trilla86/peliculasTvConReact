

import { useContext, useEffect, useState } from "react"
import { getPeliculas } from "../helpers/getPeliculas"
import { Peli } from "./Peli"
import { FiltroContetext } from "../context/FiltroContext"


const hoy = new Date().toISOString().substring(0,10)



export const PelisList = () => {
    const { filtroState } = useContext(FiltroContetext)
    
    const [pelis, setPelis] = useState([])
    const [diaElegido, setDiaElegido] = useState(hoy)

    const getPelis = async() => {
        const newPelis = await getPeliculas()
        setPelis(newPelis)
        
    }

    
    

    useEffect( () => {
        
        getPelis()
    }, [])

    useEffect( () => {
        setDiaElegido(filtroState)
    }, [filtroState])
    
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 justify-content-center">
        {
            pelis.filter((peli) => {
                return peli.hora.includes(diaElegido)}).map( peli => (
                
                <Peli key={peli.id} { ...peli }/>
            ))
        }
    </div>
  )
}

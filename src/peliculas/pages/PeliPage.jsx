import { Navigate, useParams } from "react-router-dom"
import { getPeliculaById } from "../helpers/getPeliculaById"
import { useEffect, useState } from "react"
import { PeliSipnosis } from "../components/PeliSipnosis"

export const PeliPage = () => {
    const { id } = useParams()
    


    
        const [peli, setPeli] = useState([])
    
        const getPeli = async() => {
            const newPeli = await getPeliculaById(id)
            setPeli(newPeli)
        }
        useEffect( () => {
          getPeli()
      }, [])
        
       if (!peli){ 
        return <Navigate to="/" />
       }
  return (
    <PeliSipnosis { ...peli }/>
  )
}

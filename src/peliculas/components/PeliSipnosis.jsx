/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

export const PeliSipnosis = ({
    titulo,
    imgUrlPeli,
    imgUrlCanal,
    hora,
    sinopsis,
    id

}) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = new Date(hora).toLocaleDateString('es-ES',options)
    
  return (
    
        <div className="card border-0 m-5">
            <div className="row">
                <div className="col-2"style={{width: '18rem'}}>
                <Link className="btn btn-primary mb-5" to="/">Volver</Link>
                
                    <img src={imgUrlPeli} alt={titulo} className="card-img" />
                </div>
                <div className="col-10"style={{width: '30rem'}}>
                    <div className="card-body">
                        <img src={imgUrlCanal} alt="" />
                        <h5 className="card-title">{titulo}</h5>
                        <h6 className="card-subtitle">{fecha}</h6>                    
                        <h4 className="card-subtitle">{hora}</h4>
                        <p className="card-text">{sinopsis}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    
  )
}

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export const Peli = ({
    titulo,
    imgUrlPeli,
    imgUrlCanal,
    hora,
    sinopsis,
    id

}) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = new Date(hora).toLocaleDateString('es-ES',options)
    const newHora = hora.substring(hora.length- 5)
    const horaSistema = new Date().toISOString()
    // , opacity: horaSistema > hora ? 0.25 : ''
    

  return (
    <div className="card m-1 p-1" style={{width: '18rem', opacity: horaSistema > hora ? 0.40 : ''}}>
        <img src={imgUrlPeli} className="card-img-top" alt={titulo}/>
        <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{fecha}</p>
            <h6 className="cars-subtitle">Hora: <strong>{newHora}</strong></h6>
            <Link className="btn btn-primary" to={`/${id}`}>Ver sipnosis</Link>
            
            <img src={imgUrlCanal} className="card-img-right m-3" alt={titulo}/>
        </div>
    </div>
  )
}

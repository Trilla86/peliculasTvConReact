import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'
import { PelisApp } from './peliculas/PelisApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PelisApp/>
    </BrowserRouter>
  </React.StrictMode>,
)

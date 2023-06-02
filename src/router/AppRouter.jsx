import { Route, Routes } from "react-router-dom"
import { HomePage } from "../peliculas/pages/HomePage"
import { PeliPage } from "../peliculas/pages/PeliPage"



export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<PeliPage/>} />
            <Route path="/*" element={<HomePage />} />
        </Routes>
    </>
  )
}

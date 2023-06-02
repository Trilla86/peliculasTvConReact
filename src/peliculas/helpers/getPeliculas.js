

export const getPeliculas = async () => {
    const url = 'http://localhost:8080/peliculas'
    const resp = await fetch(url)
    let{ peliculas } = await resp.json()
    peliculas = peliculas.filter(peli => peli.titulo !== 'Cinexpress' && peli.titulo !== 'Cine')
    return peliculas
}
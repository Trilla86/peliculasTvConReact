

export const getPeliculaById = async( id ) => {

    const url = 'http://localhost:8080/peliculas'
    const resp = await fetch(url)
    const { peliculas } = await resp.json()
    const pelicula = peliculas.find( peli => peli.id === id )
    return pelicula
}
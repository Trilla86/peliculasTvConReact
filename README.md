### Aplicaión de React para ver la programaión de películas en la tv.

1. Inciar la aplicación
```

yarn dev
```

## Funcionamiento de la aplicación.

1. El objetivo de dicha aplicación, es listar un json mostrando el contenido del mismo y filtrarlo por días.

## Distribución de la aplicación, con el módulo películas.

# Componentes

1. **NavBar** se encarga de mostrar los botones para filtrar el contenido por días.

2. **Peli** se encarga de mostrar en forma de tarjeta del **bootstrap**, el título, la fecha, la hora y las imágenes de la película y del canal de tv.

3. **PeliList** se encarga de listar el componente **Peli** llamando a la función **getPeliculas** y de filtrar el contenido con el componente **NavBar**.

4. **PeliSipnosis** se encarga de mostrar en forma de tarjeta del **bootstrap** el contenido completo de la peícula, este componete se mustra obetiendo el id de la película por parámetro y pasándoselo como argumento a la función **getPeliculaById**, si el id no existe se hace una redericción a la página principal.

# helpers

1. **getPelicas** es una función que hace un **fetch** al servidor para proveer un 'json' con el contenido de las películas.

2. **getPeliculaById** es una función que hace un **fetch** al servidor para proveer un 'json' con el contenido de la película filtrada por 'id'.

# Pages

1. **HomePage** es un componente que se muestra en la ruta '/' y contiene los compentes **NavBar** y **PeliList**.

2. **PeliPage** es un componente que se muestra en la ruta '/:id' y contiene el componente **PeliSipnosis**.

# Router

1. **AppRouter** es un componente que se encarga de mostrar el compenente **HomePage** para la ruta '/' o cualquier ruta no definida y tambien el compenente **PeliPage** para la ruta '/:id'.

# types

1. **types** contiene un objeto con los tipos que vamos a pasar por pámetros al **filtroReducer**.

# context

1. **FiltroContext** es un compenente que crea un contexto de React.

2. **FitroProvider** es un compenente que va a tener el estado al nivel más superior de la aplicaión siendo cambiado por el **filtroReducer** pasando los **types** por el 'dispatch'.

3. **filtroReducer** es una función que recibe un estado y una acción y transforma el estado en función de los **types**.



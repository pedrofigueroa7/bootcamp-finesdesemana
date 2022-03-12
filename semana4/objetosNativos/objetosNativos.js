let texto = "hola"
console.log(texto)

let arr = [10,20,30,40,50]
console.log(arr)

let text2 = new String("buenos dias")
console.log(text2)

// crear un arreglo de objetos, donde cada objeto representa una pelicula con los siguientes cambio nombrepelicula string, anio:numbre, director:string, genero:string

let peliculas = [
    {
        nombrePelicula:"Batman Returns",
        anio:1992,
        director:"Tim Burton",
        genero:"aventura"
    },
    {
        nombrePelicula:"Superman vs Batman",
        anio:2001,
        director:" Wolfgang Petersen",
        genero:"aventura"
    },
]

// juntar propiedades y mostrarlas
for(let i = 0;i <peliculas.length;i++){
    console.log(`la pelicula ${peliculas[i].nombrePelicula} del año ${peliculas[i].anio} del director ${peliculas[i].director} `)
}



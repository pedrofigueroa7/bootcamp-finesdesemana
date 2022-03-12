let arrJuego = [
    {
        nombre:"halo",
        precio:10
    },
    {
        nombre:"civilizacion",
        precio:30
    },
    {
        nombre:"juego1",
        precio:15
    },
    {
        nombre:"juego4",
        precio:55
    }
]

let presupuesto = +prompt("cuanto deasea gastar")
let juegosComprados = []

let revisarPresupuesto = () =>{
    let juegosComprables = []
    for (let index = 0; index < arrJuego.length; index++) {
        if (presupuesto >= arrJuego[i].precio) {
            juegosComprables.push(arrJuego[i])
        }
        
    }
    console.log(juegosComprables)
    return juegosComprables
}
let agregarCarrito = (listaJuegos) =>{
    for(let i=0;i<listaJuegos.length;i++){
        if (presupuesto<listaJuegos[i].precio) {
            console.log(`se descarta ${listaJuegos[i].nombre}`)
            continue
        }
        let compra = confirm(`deseas comprar ${listaJuegos[i].nombre} cuesta S/ ${listaJuegos[i].precio} `)
        if (compra=== true) {
            juegosComprados.push(listaJuegos[i])
            presupuesto = listaJuegos
        }
    }
}
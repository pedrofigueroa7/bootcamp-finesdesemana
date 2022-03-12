/*

*/ 

let presentacion = (nombre,edad,ciudad) => `hola me llamo ${nombre} tengo ${edad} y soy de la ciudad de ${ciudad}`;

console.log(presentacion("pepito",30,"tagamandapio"))


let encontrar = (arreglo,nombre) =>{
    for(let i=0;i<arreglo.length;i++){
        if (arreglo[i] === nombre) {
            return i;
        }
    }
}

let existe = encontrar(["pepe","juanito","alcachofa"],"juanito0")

console.log(`el nombre se encuentra en ${existe}`)
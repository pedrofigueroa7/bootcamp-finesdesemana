let persona = {
    // propiedad : valor
    nombre:"juanito",
    apellidos: "alcachofa",
    edad:30,
    conduce:true,
    habilidades:["cocinar","guitarra","violin"]
}

persona.nombre="juanito alimaña"

persona.edad=26
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.habilidades[2])
// console.log(persona.edad)

//---------------------------------------
let albumMusica = {
    nombre:"Voicenotes",
    artista:"Charlie Put",
    discografia:"x records",
    anio:"2018",
    canciones:[
        {
            titulo:"The way i am",
            duracion:3.00,
            escritores:["charlie puth","pepito"]
        },
        {
            titulo:"Attention",
            duracion:3.30,
            escritores:["charlie puth","juanito"]
        }
    ]
}
console.log(albumMusica.canciones[0].escritores[1])

let perrito = {
    nombre:"pegasus",
    edad:5,
    color:"blanco",
    habitos:["ladrar","dormir","escarbar"],
    // metodo, simplementoe es una funcion asociada a una propiedad
    ladrar:function(){
        console.log("wof wof wof")
    }
}

perrito.ladrar();
perrito.color="plomo"
console.log(perrito.color)

delete perrito.edad  // elimina la propiedad
console.log(perrito.edad)
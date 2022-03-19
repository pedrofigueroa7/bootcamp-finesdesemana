// GET
let obtenerMascotas = ()=>{
    // GET
    fetch("https://622e09ac8d943bae348cffc1.mockapi.io/mascotas")

    .then((respuesta)=>{
        // info acerca de la peticion
        console.log(respuesta)
        return respuesta.json()
    })
    .then((datos)=>{
        // desempaco los datos
        console.log(datos)

    })
    .catch((error)=>{
        console(error)
    })
}
obtenerMascotas()
//POST
const crearMascota = ()=>{
    const nuevaMascota = {
        nombre:"juanito",
        edad:3,
        color:"blanco"
    }
    const metodo = {
        method:"POST",
        headers:{
            // para que la api sepa como procesar
            "Content-type":"application/json"
        },
        body:JSON.stringify(nuevaMascota)
    } 
    //fetch(url,configuracion)
    fetch("https://622e09ac8d943bae348cffc1.mockapi.io/mascotas")
    .then((respuesta)=>{
        // info acerca de la peticion
        console.log(respuesta)
        return respuesta.json()
    })
    .then((mascotaCreada)=>{
        console.log(mascotaCreada)
    })
    .catch((error)=>{
        console.error(err)
    })
}
crearMascota()

// ACTUALIZAR
const actualizarMascota = ()=>{
    // pongo los campos que tengo en mi api
    const mascotaModificada = {
        nombre:"juanito"
    }
    const configuracion = {
        method:"PUT",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(mascotaModificada)
    }
    fetch(`https://622e09ac8d943bae348cffc1.mockapi.io/mascotas/49`)
    .then((respuesta)=>{
        console.log(respuesta)
        return respuesta.json()
    })
    .then((mascotaModificada)=>{
        console.log(respuesta)
        return respuesta.json()
    })
}
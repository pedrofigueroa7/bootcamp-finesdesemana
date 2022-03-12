let miBoton = document.getElementById("boton")
let divContenido = document.getElementById("contenido")

// elemenmt.addeventlistener(evento,funcion)
miBoton.addEventListener("click",()=>{
    alert("me haz hecho click")
})

// let caja = document.createElement("div")
miBoton.addEventListener("mouseover",()=>{
    console.log("paso por encima")
})


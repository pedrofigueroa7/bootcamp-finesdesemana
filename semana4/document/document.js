// document es un objeto que me va a permitir modificar el dom
// el dom es una serie de nodos(objetos) creados al momento de interpretar el html
let titulo = document.getElementById("titulo")
console.log(titulo)

// innerhtml es una propiedad, contiene el html de un elemento
titulo.innerHTML= "<i>nuevo titulo de mi app</i>"

titulo.style.color ="red"
titulo.style.backgroundColor="blue"
titulo.style.padding="10px"

let cajitas = document.querySelectorAll(".cajita")
cajitas.forEach((caja)=>{
    caja.innerHTML="Contenido cajitas"
    caja.style.width="200px"
    caja.style.height="200px"
})


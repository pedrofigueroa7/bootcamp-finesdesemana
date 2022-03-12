let divContenido = document.getElementById("contenido")
console.log(typeof divContenido)

divContenido.innerHTML="<h1>Hola MUNDO</h1>"

let titulo = "Appstore"

divContenido.innerHTML=`<header>${titulo}</header>`

let titulo2 = document.createElement("h2")
titulo2.innerHTML="segundo"

divContenido.appendChild(titulo2)

let imagen = document.createElement("img")
imagen.setAttribute("src","imagen.png")
divContenido.prepend(imagen)
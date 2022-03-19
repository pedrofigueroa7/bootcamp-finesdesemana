/*
1 obtener los objetos del dom
2 obtener el valu input y agregarlo a un arreglo
3 mostrar las taresas en el ul
*/

let formTarea = document.getElementById("formTarea")
let ulPendiente = document.getElementById("pendientes") 
let arregloPendientes = []
// definimos variable para mostrar los resultados
let arregloCompletado = []

formTarea.addEventListener("submit",(evento)=>{
    evento.preventDefault()
    // para hacer referencia a un input que esta dentro del form
    // ["name_input"]
    let nuevaTarea = formTarea["tarea"].value
    // capturamos lo que escribimos y agregamos al arreglo vacio
    arregloPendientes.push(nuevaTarea)
    console.log(arregloPendientes)
    // va a limpiar todos los input dentro del formulario
    formTarea.reset()
    dibujarPendientes()

})

let dibujarPendientes = ()=>{
    // limpiar antes de dibujar
    ulPendiente.innerHTML=""

    // recorremos todo el array
    arregloPendientes.forEach((item,i)=>{
        // crear el elemento li
        let li = document.createElement("li")
        // le agrego el texto de item sacado con foreach
        li.innerHTML = item 
        // agrgamos el li dentro del ul con el id="pendientes"
        ulPendiente.appendChild(li)
        // agregamos lo tipeado
        li.addEventListener("dblclick",()=>{
            //agregamos el arreglo y que recorra uno por uno
            arregloCompletado.push
            (arregloPendientes[i])
        })
    })
}
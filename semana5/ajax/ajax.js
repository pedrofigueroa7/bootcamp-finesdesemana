let btnGet = document.getElementById("btnGet")
btnGet.addEventListener("click",()=>{
    // este cartera se encarga de hacer peticiones
    let cartero = new XMLHttpRequest()

    // para saber si la situacion de al carta
    cartero.addEventListener("readystatechange",()=>{
        // cartero.readyState es una propiedad que dice cual es la situacion
        
        switch (cartero.readyState) {
            case 1:
                console.log("OPEN",cartero.readyState)
                break;
                case 2:
                    // ponemos en el buzon
                console.log("SEND",cartero.readyState)
                break;
                case 3:
                    // esperando viajando
                console.log("DATA",cartero.readyState)
                break;
                case 4:
                    // ya llego y recibi respuesta
                console.log("RPTA",cartero.readyState)
                let respuesta = cartero.responseText
                console.log(respuesta)
                break;
                
        
            default:
                break;
        }
    })
    // traemos informacion con GET
    cartero.open("GET","https://reqres.in/api/users?page=2")

    cartero.send(null)
})

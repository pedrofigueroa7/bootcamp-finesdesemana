let precio = prompt("Ingrese el valor del traje por favor");
if (precio>800) {
    precio = precio *0.85;
    document.write("<h1>El precio del traje es de $"+precio +"</h1>")
}else{
    precio = precio *0.92;
    document.write("<h1>El precio del traje es de $"+precio +"</h1>");

}    
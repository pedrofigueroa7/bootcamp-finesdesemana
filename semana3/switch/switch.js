/*let producto = +prompt("ingrese el codigo del producto");

switch (producto) {
    case 1:
        console.log("papitas");
        break;
    case 2:
        console.log("chocman");
        break;
    case 3:
        console.log("tacos");
        break;
        case 3:
            console.log("Chocosoda");
            break;
        default:
            console.log("no hay");
        
}
*/
let numAlumnos = 190;
let precioFinal = 0;

switch (true) {
    case (numAlumnos >=100):
        precioFinal = numAlumnos*60;
        console.log(precioFinal)
        break;
    case(numAlumnos<100 && numAlumnos>=50):
        precioFinal = numAlumnos*70;
        console.log(precioFinal)
        break;
    case(numAlumnos<50 && numAlumnos>=30):
        precioFinal = numAlumnos*90;
        console.log(precioFinal)
        break;    
    default:
        break;
}
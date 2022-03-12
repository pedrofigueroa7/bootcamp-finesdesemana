function suma(num1,num2){
    let resultado = num1 + num2;
    return resultado;
}
console.log(suma(10,20));

function saludar(texto){
    console.log(`hola ${texto}`)
}
saludar("como estas");
saludar("amigos latinoamericanos");
saludar("que planes para hoy");

function multiplicacion(num3,num4){
    // cuando se usa return la ejecucioni se corta como el break
    return num3*num4;
    console.log("estoy despues del return")
}

console.log(multiplicacion(10,72));

function esPar(numero){
    if (numero %2===0) {
        console.log("es verdadero")
        return true;        
    }else{
        return false;
    }
}
console.log(esPar(21))

/*  NO NECESARIAMENTE TIENE QUE RETORNAR ALGO
    PARA UTILIZAR LA FUNCION DEBES LLAMARLO CON SU NOMBRE Y PARENTESIS
    EL CODIGO QUE ESTA DESPUES DEL RETURN NO SE EJECUTA*/ 
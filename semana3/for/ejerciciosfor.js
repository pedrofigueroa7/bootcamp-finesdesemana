let alumnos = ["alanCoronado","alanMuñoz","Daniel","judith","luis,","miguel","pedro","tania"]

let notas = [15,17,20,14,18,14,11,19];

for(let i=0;i<alumnos.length;i++){
    console.log(`${alumnos[i]} tiene ${notas[i]} de nota`)
}

// ejercicios
// utilizando el mismo arreglo de alumnos hacer que el usuario
// ingrese un nombre y si lo encuentre mostrar la posicion
// mostrar si no se encontro 

let nombreIngresado = prompt("Favor ingrese su nombre")

for(let i=0;i<alumnos.length;i++){
    if(nombreIngresado===alumnos[i]){
        console.log(`la posicion del alumno es ${alumnos.indexOf(alumnos[i])}`);
    }else{
        console.log("nombre no se encontro");
    }
}


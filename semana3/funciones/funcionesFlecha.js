// parametros por defecto

function restar(num1=100,num2=20){
    return num1 - num2;
}
console.log(restar(10,2));

setTimeout(function(){
    console.log("boom")
},3000)

// funciones flecha
let despedirse = (texto)=>{
    return `Adios ${texto}`;
}

console.log()
function bisiesto() {
    let anioBisiesto = [];
    let anioInicio = prompt("Favor ingrese el año de inicio");
    anioInicio = parseInt(anioInicio);
    let anioTermino = prompt("Favor ingrese el año de termino");
    anioTermino = parseInt(anioTermino);

    for (anioInicio; anioInicio <= anioTermino; anioInicio++) {
        if (anioInicio % 4 === 0 && anioInicio % 100 != 0 ||
            anioInicio % 400 === 0) {
            anioBisiesto.push(anioInicio)
        }
    }
    return `Los años bisiestos desde el ${anioInicio} hasta el año ${anioTermino} son: 
${anioBisiesto}`;}
console.log(bisiesto());

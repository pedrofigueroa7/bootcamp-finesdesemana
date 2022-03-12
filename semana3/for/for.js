let nombres = ["pepito","juanito","josesito","lalito"];

for(let i = 0;i<nombres.length;i++){
    console.log(i+" "+nombres[i])
}

let carta = ["cevivhe","cuy","tacos","secoCarne","arepa"];

let eleccion = +prompt(`indique la opcion deseada:ç
                        0. ceviche
                        1. cuy
                        2. tacos
                        3. secode carne
                        4. arepa`)

for(let i =0;i<carta.length;i++){
    if (eleccion===i) {
        console.log(`usted ha elegido ${carta[i]}`);
        break;

    }
    console.log(`me he ejecutado ${i}`)
}
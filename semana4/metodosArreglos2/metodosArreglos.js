

  let nombres =["juan","maria","diana","gaby","pepito"]
  // foreach
  // la funcion dentro de  foreach recibe el item, indice, arreglo
  nombres.forEach(function(nom,i,arreglo){
      console.log(`${i} - ${nom} - ${arreglo}`)
  })

  // map
  // transforma los elementos de un arreglo pero lo retornmaos a otra variable y esta otra variable almacena los elementos transformados
  let numeros = [100,200,300,400]
  let cuenta = numeros.map((monto,indice,array)=>{
      return `cuenta ${indice} - ${monto+120} `
  })
  console.log(cuenta)

  // filter
  let peliculasBuenas = peliculas.filter((peli)=>{
      return peli.vote_average >5
  })
  console.table(peliculasBuenas)

  // indexof
  // busca un elemento enm mi arreglo si existe retorna su posicion

  let posicion = nombres.indexOf("diana")
  console.log(posicion)

  // splice
  // sirve para eliminar x cantidad de elementos pide 2 parametros la posicino y la cantidad de elementos
  nombres.splice(1,1)
  console.log(nombres)



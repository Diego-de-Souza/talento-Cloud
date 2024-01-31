//Laço for para react

//for..in e for..of
let numeros3=[48,56,32,54]

//for(let i=0;i<numeros3.length;i++){
//    console.log(numeros3[i])
//}

for(let indice in numeros3){
    console.log(numeros3[indice])
}

for(let elemento of numeros3){
    console.log(elemento)
}

//for em objetos
let filme = {
    titulo: 'Velocidade Máxima',
    ano:  1994,
    genero: 'Ação'
}

for(let i in filme){
    console.log(`${i}: ${filme[i]}`)
}
// Operador Spread para React
//em array
let numerosImpares = [1,3,5]
//acrescenta os 3 pontos seguido da variavel do array que queros extrair os dados, isso extrai os dados e injeta no destino.
let numeros = [...numerosImpares,2,4,7]
console.log(numeros)

let numerosPares = [2,4,6]
let numeros2 = [...numerosImpares,...numerosPares]
console.log(numeros2)

//em objetos
let info ={
    nome:'Diego',
    idade: 36
}

let usuario = {
    ...info,
    login:'teste1',
    senha:'1234'
}

console.log(usuario)
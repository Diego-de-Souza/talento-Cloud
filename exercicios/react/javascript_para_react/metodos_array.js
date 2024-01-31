/*
    conceitos javascript
*/ 

//metodos de arrays
//join
console.log([1,2,3].join()) // '1,2,3', junta os elementos deparados por virgula
console.log([1,2,3].join('-')) // '1-2-3', junta os elementos deparados por traço

//metodo push()
const numeros = [15,27,52,36,41]
numeros.push(100) //15,27,52,36,41,100, adiciona o elemento no final do array
console.log(numeros)

//metodo filter
const numerosMaiores = numeros.filter((elemento)=> {return elemento > 50})//vai filtrar os elementos do array 'numeros' e os numeros que atendem a lógica para o retorno são atribuidos a variavel 'numerosMaiores'
console.log(numerosMaiores)

//metodo map()
const nomes = ['Diego', 'Thais', 'Thomas', 'Emilly']
const nomesComCaracteres = nomes.map((elemento)=>{
    return {
        nome: elemento,
        caracteres: elemento.length
    }
})
console.log(nomesComCaracteres )
 //ou
 const nomesComCaracteres2 = nomes.map((elemento)=>{
    return elemento[0]
})
console.log(nomesComCaracteres2)
//Desestruração para react
//em objetos
const produto = {
    nome: 'pão',
    valor: 2.50
}

let {nome, valor} = produto //utilizamos o nome da propriedade que iremos extrarir dentro dos colchetes
console.log(nome,valor)

//com vetores
const produtos = ['bolachas','arroz','guaraná']

let [produto1,produto2,produto3] = produtos
console.log(produto1,produto2,produto3)

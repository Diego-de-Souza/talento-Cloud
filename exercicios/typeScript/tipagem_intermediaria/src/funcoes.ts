//tipagem intermediaria de funções

//declarando as variaveis dos parametros da função, processo básico para a função não gerar erro
function subtrair(a:number,b:number){
    return a - b
}
console.log(subtrair(2,5))

//declarando além do tipo dos parametros o tipo de retorno da função que é a forma correta
function somar(a:number, b:number):number{
    return a + b
}
console.log(somar(2,6))

//exemplo com array
let funcionarios:string[] = ['Diego','Thais','Emilly'];

function retornarPrimeiro(lista:string[]){
    const primeiro = lista[0]
    return primeiro
}
console.log(retornarPrimeiro(funcionarios))

//exmplo de função que tem como paramentro o tipo objeto e o retorno string
type Aluno = {
    nome: string,
    idade: number
}
let alunos:Aluno[]= [
    {nome: 'Diego', idade: 36},
    {nome: 'Thais', idade: 31}
]

function retornarPrimeiroAluno(lista: Aluno[]):string{
    const primeiro = lista[0]
    return `O aluno ${primeiro.nome} tem ${primeiro.idade} anos` //se utiliza a interpolação por causa do tipo de retorno da função
}
/**ou
 * function retornarPrimeiroAluno(lista: Aluno[]):string{
    const primeiro = lista[0]
    return primeiro.nome
}
 */


console.log(retornarPrimeiroAluno(alunos));

//exmplo com falha de retorno

/** //neste caso ele gerara um erro interno, se passar o mouse por cima do nome da função irá ver que estara como Boolean | undefined, ou seja, como ainda existe uma condição a ser inserida ele definiu que o retorno pode ser indefinido
 * function maiorDeIdade(lista: Aluno[]){
 * const primeiro = lista[0]
 * if(primeiro.idade > 18){
 * return true
 * }else if(primeiro.idade < 18){
 * return false
 * }
 * }
 */
//forma correta declarando o retorno para que possa ajudar a verificar que falta uma declaração
function maiorDeIdade(lista: Aluno[]):boolean{
    const primeiro = lista[0]
    if(primeiro.idade > 18){
        return true
    }else if(primeiro.idade < 18){
        return false
    }else{
        return false
    }
}

//Parametros opcionais para paramentros de função, utiliza o "?"" depois da variavel seguido de ":" e o tipo
function imprimirValor(preco:number, desconto?: number):string{
    if(desconto){
        return `R$ ${preco - (preco * (desconto / 100))}`
    } else {
        return `R$ ${preco}`
    }
}

//exemplo com parcelas
function calcularPagamento(valor:number, parcelas:number, desconto?:number){
    const parcelasComValores: number[] = []
    for(let i = 1; i <= parcelas; i++){
        let valorNovo = valor
        if(desconto){
            valorNovo = valor - (valor * desconto)
        }
        parcelasComValores.push(valor/parcelas)
    }
    return parcelasComValores
}

calcularPagamento(150,3)
console.log(calcularPagamento(150,3))
console.log(calcularPagamento(150,3,0.1))
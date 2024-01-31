//tipagem intermediaria TS

//genericos com Arrays - T=tipoGenerico na maioria das vezes
type Lista<T> = T[]

let listaNumeros:Lista<number> = []
listaNumeros.push(5)

let listaNomes:  Lista<string> = []
listaNomes.push('Diego')

//exemplo tipo personalizado com genericos
type Alunos = {
    id_aluno:number,
    nome:string
}

let listaAlunos: Lista<Alunos> = []

let alunoNovo: Alunos = {
    id_aluno: 5,
    nome: 'Diego'
}

listaAlunos.push(alunoNovo)

//exemplo depersonalizado com genericos em uma lista
type ResumoLista<T> = {
    total: number,
    primeiroElemento: T,
    lista: T[]
}
type Musica = {
    nome: string,
    artista: string
}
let musicas: Musica[] = [
    {nome: 'Coisa n° 6', artista: 'Moacir Santos'},
    {nome:'Loro',artista: 'Egberto Gismonti'},
    {nome: 'Africadeus', artista: 'Naná Vasconcelos'}
]

const resumoMusicas: ResumoLista<Musica> = {
    total: musicas.length,
    primeiroElemento: musicas[0],
    lista: musicas
}

//genericos com objetos
type Filme = {
    titulo:string,
    genero: 'animação'|'ação'|'comêdia'|'românce'
}

let listaFilmes:Filme[]=[]
listaFilmes.push({
    titulo: 'Pulp number',
    genero:'ação'
})

type ResumoListaFilmes<T> = {
    total: number,
    ultimo: T,
    lista: T[]
}

let filmeMaisRecente: ResumoListaFilmes<Filme> = {
    total: listaFilmes.length,
    ultimo: listaFilmes[listaFilmes.length - 1],
    lista: listaFilmes
}

console.log(filmeMaisRecente.ultimo.genero)

//genericos em funções
function primeiroElementoDaLista<T>(lista: T[]): T {
    return lista[0]
}

let listaNumerosAleatorios = [1,3,5,6]
let listaNomesQuaisquer = ['teste', 'teste3']

console.log(primeiroElementoDaLista(listaNumerosAleatorios))
console.log(primeiroElementoDaLista(listaNomesQuaisquer))

type Produto = {
    nome: string,
    preco: number
}
let listaProdutos:Produto[] = [
    {nome: 'leite', preco: 7.99},
    {nome: 'bolacha', preco: 5.99}
]

console.log(primeiroElementoDaLista(listaProdutos))

//podemos ser mais especificosna chamada, declarando o tipo de função para aceite dos parametros
let exemploEspecifico = primeiroElementoDaLista<String>(listaNomes) //se coloca-se uma lista de qualquer outro tipo que não fosse o especificado iria gerar erro

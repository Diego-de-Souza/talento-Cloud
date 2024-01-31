//tipagem intermediaria
import {DadosArray} from './arrays.ts'

//tipagem de objetos personalizados
type Usuario = { //se utiliza o ":" ao invés de "=" para se definir o tipo das variaveis que o objeto vai receber 
    nome: string, //como está se definindo o tipo não se coloca o valor
    idade: number,
    admin: boolean,
    endereço: {
        estado: string,
        cidade: string,
        rua: string,
        numero: number,
        CEP: number,
        referencia: string
    }
}
//na hora de declaraos valor do objeto o TS te ajuda a não deixar faltar um dado ou mudança de tipo
let usuario: Usuario;

usuario = {
    nome: "diego",
    idade: 36,
    admin: true,
    endereço:{
        estado: "SP",
        cidade: "São Bernardo do Campo",
        rua: "Rua João Saldanha",
        numero: 652,
        CEP: 9842200,
        referencia: "final da estrada Galvão Bueno"
    } 
}

//outro exemplo
type NumerosPermitidos = 2 | 4 | 5 | 6;

let numero:NumerosPermitidos = 4;
/*
let numero2:NumerosPermitidos = 10;//aparece um erro, pois o numero atribuido está fora do que foi declarado como tipo
*/

//pode haver a definição de tipo como interface
//lembrando que interface é em particular de objetos então é aconselhavel usar o type
interface UsuarioInterface {
    nome: string;
    idade: number
}

//tipagem de array
let nomes:  string[] = ['Diego','Emilly'] //declaração de uma array como string
/*
nomes.push(5) //gera um erro para mostrar que como o array foi definido como string não é possivel colocar valores de outro tipo
*/

let dadosUsuarios: DadosArray[] = [ //objetos dentro da lista com tipos predefinidos
    {codigo: 125, nome:'teste1'},
    {codigo: 256, nome:'teste2'}
]


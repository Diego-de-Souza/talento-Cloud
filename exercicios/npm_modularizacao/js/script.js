//import do primeiro tipo
import {somar,subtrair} from './operacoes.js'
//importação de forma padrão com um unico objeto
//é possível renomear caso necessário este tipo de importação
import calculadora from './calculadora.js'  

const resultado = somar(2,3)
console.log(resultado)

const resultado2 = calculadora.somar(4,3)
console.log(resultado2)

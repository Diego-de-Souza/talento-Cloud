//operador ternario para React

const idade = 10
let bebida
//forma tradicional manual
if(idade >= 18){
    bebida='Vinho'
}else{
    bebida='suco'
}
//com operador ternario
let bebida2 = idade >= 18 ? 'Vinho':'suco';

console.log(bebida2)

//ternario com 3 valores diferentes
let bebida3 = idade >=18? 'Vinho': idade <= 12 ? 'suco': 'smirnof_Ice';


console.log(bebida3)

/**
 * TIPAGEM TS
 */


//tipagem implícita
let numero = 5;

let elementoHTML = document.querySelector('h1')

const nome = document.querySelector('input')
//tipgem explícita
let numero2: number = 40; //declarando uma váriavel do tipo number com tipagem

let opcao: 'verdadeiro' | 'falso' | 'talvez' = 'falso'; // declarando uma váriavel do tipo string que só pode receber 3 opção de dados.

let elementoHTML2: HTMLHeadElement | null = document.querySelector('h1')

const btnEnviar:any = document.getElementById('btn-enviar')

//sintaxe de condição de achar o elemento

btnEnviar.addEventListener('click', () => {
    if(nome){
        console.log(nome.value)
    } else{
        console.log(undefined)
    }
})

////sintase resumida da de cima
/*
btnEnviar?.addEventListener('click',()=> console.log(nome?.value))
*/

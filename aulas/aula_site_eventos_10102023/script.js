let numero = document.querySelector('h1');
let botao = document.getElementById('botao1');
let contagem = 0;

function adicionarUm(){
    contagem = contagem + 1;
    numero.innerText = contagem;
}

botao.addEventListener("click",adicionarUm);
/*
*OU podemos usar dessa forma abaixo
botao.addEventListener("click", function(){
    contagem = contagem + 1;
    numero.innerText = contagem;
})
*/
let botao2 = document.getElementById('botao2');
let span = document.querySelector('span');
let section = document.querySelector('section');
botao2.addEventListener("mouseover",function(){
    span.style.opacity="100";
})
botao2.addEventListener("mouseout",function(){
    span.style.opacity="0";
})
botao2.addEventListener("click",function(){
    section.innerText="um click simples";
})
botao2.addEventListener("dblclick",function(){
    section.innerText = "Fez um duplo click";
})


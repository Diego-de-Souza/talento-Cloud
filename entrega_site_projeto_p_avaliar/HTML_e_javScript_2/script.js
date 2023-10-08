//declarando as variaveis que receberam o id dos elementos
let h1 = document.getElementById('titulo');
let listNoOrdenada = document.getElementById('lista-naoOrdenada');
let ahref = document.querySelector('a');
let listaOrdenada = document.getElementById('lista-ordenada');

//imprimindo elementos e textos dentro do elemento dinamicamente
//imprimir texto diretodentro do elemento
h1.innerHTML = 'Elemento escrito com javaScript';
//imprimindo os elementos li e texto dentro do elemento UL
for(let x=1;x <= 3;x++){
    let listLi= document.createElement('li')
    let textList = document.createTextNode("Elemento novo da lista não ordenada "+x)
    listLi.appendChild(textList)
    let currentList = document.getElementById('li')
    listNoOrdenada.insertBefore(listLi,currentList)
}
//imprimindo texto dentro do elemento link "a"
ahref.innerHTML = "Elemento clicavel";
//imprimindo os elementos li e texto dentro do elemento OL
for(let x=1;x <= 3;x++){
    let listLi= document.createElement('li')
    let textList = document.createTextNode("Elemento novo da lista ordenada "+x)
    listLi.appendChild(textList)
    let currentList = document.getElementById('li')
    listaOrdenada.insertBefore(listLi,currentList)
}




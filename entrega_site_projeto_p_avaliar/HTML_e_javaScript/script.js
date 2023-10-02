//arquivo de exercicio de arquivo JS
//impressão no console log
let imprimir = () => console.log("Conexão foi um sucesso!!!")

imprimir()


//impressão direto na pagina
let elemento = document.getElementById('conexaoJS')
let imprimirHTML = () => "Conexão foi um Sucesso!!"
elemento.innerHTML=imprimirHTML();
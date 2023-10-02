//arquivo de exercicio de arquivo JS
//impressão no console log
let imprimir = () => {
    for(x=0;x<3;x++){
        console.log("Conexão foi um sucesso!!!")
    }
}
imprimir()


//impressão direto na pagina
let elemento = document.getElementById('conexaoJS')
let impressao="Conexão com arquivo JavaScript foi um sucesso!!!"+" \n"+ "Aperte F12 para ver no console"
elemento.innerHTML = impressao

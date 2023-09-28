numerosDaSorte = [37,14,26,5,94,87]

for(x=0;x < numerosDaSorte.length;x++){
    if((numerosDaSorte[x] % 2 == 0) && (numerosDaSorte[x] < 50)){
        console.log(numerosDaSorte[x]+" é par e menor que 50")
    }else if((!numerosDaSorte[x] % 2 == 0) && (numerosDaSorte[x] < 50)){
        console.log(numerosDaSorte[x] + " é menor que 50")
    }else {
        console.log(numerosDaSorte[x]+" é maior que 50")
    }
}
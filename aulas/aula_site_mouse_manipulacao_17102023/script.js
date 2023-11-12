let keyText = document.getElementById('key-text');
let codeText = document.getElementById('code-text');
let quadrado = document.getElementById('quadrado');
let distanciaDaEsquerda = 0;


document.addEventListener("keyup",(e)=>{
    console.log(e.key)
    this.keyText.innerText+= e.key;
    this.codeText.innerText+= e.code;
})

document.addEventListener("keydown", (e)=> {
    if(e.code == "ArrowRight"){
        distanciaDaEsquerda = distanciaDaEsquerda + 10
        console.log("Apertou a seta à direita");
        this.quadrado.style.left = distanciaDaEsquerda + "px";
    }else if(e.code == "ArrowLeft"){
        distanciaDaEsquerda = distanciaDaEsquerda - 10
        console.log("Apertou aseta para esquerda")
        this.quadrado.style.left = distanciaDaEsquerda +"px"
    }
})

/*Segunda parte da aula */
let linkProz = document.getElementById("link-proz");
let btnSubmit = document.querySelector("button[type=submit]");

btnSubmit.addEventListener("click",(e)=> {
    e.preventDefault()
    alert("Não foi possivel acessar o link")
})
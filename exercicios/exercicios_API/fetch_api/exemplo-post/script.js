//capturar elementos
const nomeProduto = document.getElementById('nome-produto');
const valorProduto = document.getElementById('valor-produto');
const descricaoProduto = document.getElementById('descricao-produto');
const btnEnviar = document.getElementById('btn-enviar');
const feedbackUsuario = document.getElementById('feedback-usuario')
const produtosCadastrados = document.getElementById('produtos-cadastrados')
//criando variavel para alternancia de cor
let corFundoProduto = 0;

//Função
function cadastrarProduto(eventos){
    eventos.preventDefault() //mudando a rotina do botão submit

    const jsonBody = JSON.stringify({ //transformando os dados recebidos em JSON
        nome: nomeProduto.value,
        valor: valorProduto.value,
        descricao: descricaoProduto.value
    })

    fetch('https://httpbin.org/post', //url que vai receber a requisição
    {
        method: 'POST',
        headers: { //cabeçalho do metodo enviando um objeto
            "Content-Type": "application/json" // avisando a API que  o arquivo é do tipo JSON
        },
        body: jsonBody //recebe o arquivo de dados de entrada em json
    })
        .then(res => res.json()) //transforma a resposta em objeto
        .then((data)=> {
            const novoProduto = document.createElement('div') //criando um elementos para colocar a respota do servidor
            novoProduto.innerHTML = `
                <p><strong>Nome do produto:</strong> ${data.json.nome}</p>
                <p><strong>Valor:</strong> ${data.json.valor}</p>
                <p><strong>Descrição:</strong> ${data.json.descricao}</p>
            `
            //laço condicional para mudança da cor do fundo do elemento
            if(corFundoProduto == 0){
                novoProduto.classList.remove('cadastroNovoProtudo2')
                novoProduto.classList.add('cadastroNovoProtudo')
                corFundoProduto = 1
            }else {
                novoProduto.classList.remove('cadastroNovoProtudo')
                novoProduto.classList.add('cadastroNovoProtudo2')
                corFundoProduto = 0
            }
            produtosCadastrados.appendChild(novoProduto) //declara o elemento novoProduto como filho do elemento produtosCadastrados
            
            //Limpar formulario
            nomeProduto.value = ""
            valorProduto.value = ""
            descricaoProduto.value = ""
            alert('Produto cadastrado com sucesso!')
        })
        .catch((err)=>{
            alert('Não foi possível cadastrar seu produto! :(')
        })
        
}

//evento
btnEnviar.addEventListener('click', (evento)=> cadastrarProduto(evento))

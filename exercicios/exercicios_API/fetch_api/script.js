// -------- Gerador de usuarios -------- //
// 1. Captura de elementos
const btnUsuario = document.getElementById('btn-usuario')
const usuariosContainer = document.getElementById('usuarios-container')
const helperTextUsuario = document.getElementById('helper-text-usuario')

// 2. Funções
function gerarUsuario(){
    helperTextUsuario.innerText = 'Carregando....' //mensagem de carregando
    fetch('https://random-data-api.com/api/v2/users')//recebe a resposta do servidor
        .then((res) => res.json())//transforma a respota de JSON em javascript
        .then((data) => { //tratamento dos dados recebidos
            const usuario = document.createElement('div')
            usuario.innerHTML = `
            <img src="${data.avatar}" />
            <span><strong>usarname:</strong> ${data.username}</span>
            `
            usuario.classList.add('usuario') //adiciona uma classe ao elemento usuario
            usuariosContainer.appendChild(usuario) // adiciona o elemento usuario ao elemento usuariosContainer como filho
            helperTextUsuario.innerText = ''//apaga a mensagem carregando
            console.log(data)
        })
        .catch((error) => {
            elperTextUsuario.innerText = ''//apaga a mensagem carregando
            alert('Não foi possível gerar um usuário')
            console.log(error)
        })// tratamento de erros
}

// 3. Eventos
btnUsuario.addEventListener('click', gerarUsuario)

// -------- Gerador de postagens -------- //
// 1. Captura de elementos
const postTitle = document.getElementById('post-title');
const postBody = document.getElementById('post-body');
const btnPost = document.getElementById('btn-post');
const postsContainer = document.getElementById('posts-container');
const helpertextPost = document.getElementById('helper-text-post')

// 2. Funções
function gerarPost(evento){
    evento.preventDefault();

    const jsonBody = JSON.stringify({  //transformando os dados recebidos do usuário em um tipo JSON
        titulo: postTitle.value,
        mensagem: postBody.value
    })

    fetch('https://jsonplaceholder.typicode.com/posts',{ //urlcom tipo de requisição
        method: 'POST', //defini o metodo de requisição que quer executar
        headers: { //cabeçalho da requisição recebendo um objeto
            "Content-Type": "application/json" //fala para a API que está recebendo um arquivo do tipo JSON
        },
        body: jsonBody //passando o arquivo JSON para o corpo da requisição
    })
    .then(res => res.json()) // recebendo a resposta do servidor e transformando ela de arquivo  JSON para objeto literal
    .then(data => {
        const post = document.createElement('div') //criando um elemento html div
        post.innerHTML = `
            <h3>${data.id} - ${data.titulo}</h3>
            <p>${data.mensagem}</p>
        ` // inserindo conteudo no html 
        post.classList.add('postagem') //adicionando uma nova classe
        postsContainer.prepend(post) //adicionando o elemento posta como elemento filho de postsContainer, mas cria ele antes do anterior

        //Limpar formulário
        postTitle.value = "";
        postBody.value = "";
        alert('Postagem criada com sucesso!')
    }) //trata os dados recebidos
    .catch((err)=> {
        console.log(err)
        helpertextPost.innerText='Não foi possível gerar a postagem :('
    })
}
// 3. Eventos
btnPost.addEventListener('click', (evento) => gerarPost(evento))
let app = document.getElementById('app')

function rendenizarBotao(texto){
    return `
        <button>
            ${texto}
        </button>
    `
}

app.innerHTML = `
<h1>Premissa do React </h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi laboriosam voluptates fuga alias cupiditate soluta voluptate, fugit facere esse, aliquam amet ex. A eos ut quia pariatur, expedita aliquid explicabo.</p>

<footer>Esse é o footer</footer>
${rendenizarBotao('Redes Sociais')}
${rendenizarBotao('Entre em contato')}
${rendenizarBotao('Trabalhe conosco')}
`
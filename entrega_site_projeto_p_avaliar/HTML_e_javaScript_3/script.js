//criação dos elementos HTML
let elementoHtml = document.createElement("div");
let elementoh1 = document.createElement("h1");
let elementoImg = document.createElement("img");
let elementoH2 = document.createElement("h2");
let elementoTexto = document.createElement("p");

//inserindo o texto no elemento h1 com o slogan do produto a venda
elementoh1.innerHTML = "NOTEBOOK GAMER";
//adicionando o atributo src no elemento src com endereço da imagem
elementoImg.src = "112074-m18-8.jpg"
//adiocinando o texto no elemento h2 com o nome do produto a venda
elementoH2.innerHTML = "Notebook Dell Alienware M16 18"
//adicionando o texto de descrição ao elemento p
elementoTexto.innerText = `Descrição:
                            Processador: 13° geração de intel Corei9-13900HX(24 core cache de 36MB, até 5.4GHz Max Turbo)
                            Sistema Operacional: Windows 11 Home
                            Placa de video: NVIDEA GeForce RTX 4070, 8GB GDDR6
                            Tela: QHD+ de 16"(2500x1600), 240Hz, 3ms, ComfortView Plus, NVIDIA G-SINC + DDS, 100% DCI-P3, camera FHD IR
                            Memória: 32 GB :2 de 16GB, DDR5, 4800MT-s `;
//adicionando os elementos dentro o elemento principal Div
elementoHtml.appendChild(elementoh1);
elementoHtml.appendChild(elementoImg);
elementoHtml.appendChild(elementoH2);
elementoHtml.appendChild(elementoTexto);

//imprimindo o conteudo no documento HTML
document.body.appendChild(elementoHtml)
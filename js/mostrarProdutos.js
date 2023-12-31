import { conectaApi } from "./conectaApi.js";

const produtos = document.querySelector("[data-product]");

export default function novoProduto(name, imageUrl, price) {
    const card = document.createElement("div");
    const conteudo = `
    <div class="produto__primeiro">
		 <img src="${imageUrl}" alt="imagem de um pokemon" />
		 <p class="produto__primeiro_titulo">${name}</p>
		 <p class="produto__primeiro_preco">${price}</p>
	     <a href="produtos.html">Ver produto</a>
	</div>
    `
    card.innerHTML = conteudo;
    return card;
};

async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => produtos.appendChild(novoProduto(elemento.name, elemento.imageUrl, elemento.price)));
    } catch {
        produtos.innerHTML = `<h2> Não foi possível carregar a lista de vídeos </h2>`
    };
};

listaProdutos();
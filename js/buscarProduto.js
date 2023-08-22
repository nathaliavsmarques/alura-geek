import { conectaApi } from "./conectaApi.js";
import novoProduto from "./mostrarProdutos.js";

async function buscarProdutos(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaProdutos(dadosDePesquisa);

    const produtos = document.querySelector("[data-product]");

    while (produtos.firstChild) {
        produtos.removeChild(produtos.firstChild)
    };

    busca.forEach(elemento => produtos.appendChild(novoProduto(elemento.name, elemento.imageUrl, elemento.price)));

    if (busca.length == 0) {
        produtos.innerHTML = `<h2> Não existem produtos com esse nome </h2>`
    };

};

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa ]");
botaoDePesquisa.addEventListener("click", evento => buscarProdutos(evento));


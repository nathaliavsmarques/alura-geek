import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
    evento.preventDefault();

    const name = document.querySelector("[data-nome]").value;
    const imageUrl = document.querySelector("[data-url]").value; 
    const price = document.querySelector("[data-preco]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const description = document.querySelector("[data-descricao]").value;

    await conectaApi.criaProdutos(name, imageUrl,  price, categoria,  description);

    window.location.href = "./index.html";
}

formulario.addEventListener("submit", evento => criarProduto(evento)); 
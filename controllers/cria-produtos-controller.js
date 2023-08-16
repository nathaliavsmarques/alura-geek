import { produtosServicos } from "../services/produtos-sevices";

const form = document.querySelector('[data-form]'); 

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const url = document.querySelector('[data-url]').value;
    const nome = document.querySelector('[data-nome]').value;
    const preco = document.querySelector('[data-preco]').value;

    produtosServicos.criaProdutos(url, nome, preco)
    .then(resposta => {
        window.location.href = '../index.html'
        console.log(resposta);
    }).catch(error => {
        console.log(error);
    })
})
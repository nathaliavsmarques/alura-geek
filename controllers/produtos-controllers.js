const produtos = document.querySelector('[data-product]');

const novoProduto = (name, id, imageUrl, price) => {
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


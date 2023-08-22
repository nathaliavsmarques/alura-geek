// GET - para incluir os produtos de forma dinâmica

async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/produto");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
};


// POST - para incluir novos produtos

async function criaProdutos(name, imageUrl, price, categoria, description) {
    const conexao = await fetch("http://localhost:3000/produto", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            imageUrl: imageUrl,
            price: price,
            categoria: categoria,
            description: description
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível criar novo produto");
    };

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;

};



async function buscaProdutos(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/produto?q=${termoDeBusca}`);
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
};


export const conectaApi = {
    listaProdutos,
    criaProdutos,
    buscaProdutos
};


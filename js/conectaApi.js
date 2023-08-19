// GET - para incluir os produtos de forma dinâmica

async function listaProdutos () {
    const conexao = await fetch("http://localhost:3000/produto"); 
    const conexaoConvertida = await conexao.json(); 

    return conexaoConvertida;
};

/*const listaProdutos = () => {
    fetch("http://localhost:3000/produto")
    .then(resposta => resposta.json())
    .catch(error => console.log(error))
};
*/

// POST - para incluir novos produtos
const criaProdutos = (name, imageUrl, price) => {
    fetch(`http://localhost:3000/produto`, {
        method:"POST", 
        headers: {
            "Content-type": "application/json"
        }, 
        body: JSON.stringify({
            name,
            imageUrl,
            price
        })
    }).then(resposta => {
        if(resposta.ok) {
            return resposta.body
        }
    })
    throw new Error("Não foi possível criar o produto");

};


export const conectaApi = {
    listaProdutos,
    criaProdutos
};


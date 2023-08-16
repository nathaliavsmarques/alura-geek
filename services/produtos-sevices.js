// GET 
const listaProdutos = () => {
    fetch("http://localhost:3000/produto")
    .then(resposta => resposta.json())
    .catch(error => console.log(error))
};

// POST 
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


export const produtosServicos = {
    listaProdutos,
    criaProdutos
};


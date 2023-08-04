const validarNomeProduto = () => {
    const nomeProduto = document.querySelector('#nomeProduto').value; 
    
    if(nomeProduto.length > 20) {
        alert('Erro. O nome do produto deve conter até 20 caracteres.')
    };
};

const validarDescricaoDoProduto = ()=>{
    const descricaoProduto = document.querySelector('#descProduto').value; 

    if(descricaoProduto.length > 150 ) {
        alert('Erro. A descrição do produto deve conter no máximo 150 caracteres'); 
    };
};


const button = document.querySelector('#btn').addEventListener('click', ()=> {
    validarNomeProduto();
    validarDescricaoDoProduto();
});
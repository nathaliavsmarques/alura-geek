const getNome = document.querySelector('#nome').value;
const getMensagem = document.querySelector('#mensagem').value; 

const validarNomeFormulario = () => {
    
    if(getNome === '') {
        alert ('O campo Nome tem que ser preenchido.')
    } else if(getNome.length > 40) {
        alert(' O nome deve contem no máximo 40 caracteres.')
    }; 
}

const validarMensagemFormulario = () => {

    if(getMensagem === '') {
        alert ('O campo Mensagem tem que ser preenchido.')
    } else if (getMensagem.length > 120) {
        alert('A mensagem deve conter no máximo 120 caracters.')
    };
    
}

const validarFormulario = () => {
    if(!getNome ==='' && !getMensagem === '' && getNome.length < 40 && getMensagem.length < 120) {
        alert('Mensagem enviada com sucesso.')
    } else {
        alert('Erro ao enviar mensagem.')
    }
}


const btn = document.querySelector('.informacoes__container__btn');
btn.addEventListener('click',  (e) => {
    e.preventDefault(); 
    validarNomeFormulario();
    validarMensagemFormulario();
    validarFormulario(); 
    
})


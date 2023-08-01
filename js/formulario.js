const validarNomeFormulario = () => {
    const getNome = document.querySelector('#nome').value;

    if (getNome == '') {
        alert('O campo Nome tem que ser preenchido.');
        return false;
    } else if (getNome.length > 40) {
        alert('Erro. O nome deve conter no máximo 40 caracteres.');
        return false;
    }
    return true;
};

const validarMensagemFormulario = () => {
    const getMensagem = document.querySelector('#mensagem').value;

    if (getMensagem == '') {
        alert('O campo de mensagem tem que ser preenchido.');
        return false;
    } else if (getMensagem.length > 120) {
        alert('Erro. A mensagem deve conter no máximo 120 caracteres.');
        return false;
    }
    return true;
};



const btn = document.querySelector('.informacoes__container__btn').addEventListener('click', (e) => {
    e.preventDefault();

    const nomeValido = validarNomeFormulario();
    const mensagemValida = validarMensagemFormulario();


    if (nomeValido && mensagemValida) {
        alert('Formulário enviado com sucesso!');

    }

});






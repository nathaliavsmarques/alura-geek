const validandoEmail = () => {
    const emailValido = document.querySelector('#email').value;
    const validarEmail = /\w+@\w+\.\w+/;
    if (emailValido == '') {
        alert('O campo do email tem que ser preenchido');

    } else if (!validarEmail.test(emailValido)) {
        alert("Erro. Insira um endereço de e-mail válido.");

    };

};


const validandoSenha = () => {
    const senhaValida = document.querySelector('#senha').value;

    if (senhaValida == '') {
        alert('O campo senha tem que ser preenchido')
    };
};

const button = document.querySelector('#btn').addEventListener('click', () => {
    validandoEmail();
    validandoSenha();
});
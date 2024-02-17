const form = document.getElementById('form-recarga');
const numeroTelefone = document.getElementById('numero-telefone');
const valorRecarga = document.getElementById('valor-recarga');

function validaFormulario(numeroTelefone, valorRecarga) {
    if (numeroTelefone.value > valorRecarga.value) {
        return true
    } else {
        return false
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let formEValido = true;

    const mensagemSucesso = `O Montante de <b>${valorRecarga.value}</b> foi adicionado aos créditos do número de telefone: <b>${numeroTelefone.value}</b>`;

    formEValido = validaFormulario(numeroTelefone, valorRecarga);

    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroTelefone.value = '';
        valorRecarga.value = '';

        numeroTelefone.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
        numeroTelefone.style.border ='1px solid black';
    } else {
        numeroTelefone.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
});

numeroTelefone.addEventListener('keyup', function(e) {
    formEValido = validaFormulario(numeroTelefone, valorRecarga);

    if (!formEValido) {
        numeroTelefone.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        numeroTelefone.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});

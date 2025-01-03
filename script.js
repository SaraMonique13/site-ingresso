

const botaoCadastro = document.getElementById('buttom');

botaoCadastro.addEventListener('click', function(event) {
    // Evita o envio do formulário
    event.preventDefault();

    alert('Formulário enviado com sucesso! Você será redirecionado para a fila de espera.');
});
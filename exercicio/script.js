document.addEventListener('DOMContentLoaded', () => {
    if (document.title.includes('Meu Portfólio')) {
        alert('Bem-vindo ao Meu Portfólio!');
    }
});
document.addEventListener('submit', (e) => {
    const form = e.target;
    if (form.id === 'form-contato') {
        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const assunto = form.assunto.value.trim();
        const mensagem = form.mensagem.value.trim();

        if (!nome || !email || !assunto || !mensagem) {
            e.preventDefault();
            alert('Por favor, preencha todos os campos.');
        } else {
            alert('Mensagem enviada com sucesso!');
        }
    }
});

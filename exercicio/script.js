document.addEventListener("DOMContentLoaded", () => {
});
document.addEventListener("submit", (e) => {
    const form = e.target;
    if (form.id === "form-contato") {
        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const assunto = form.assunto.value.trim();
        const mensagem = form.mensagem.value.trim();

        console.log("Dados do formulário:", { nome, email, assunto, mensagem });
            alert("Formulário enviado com sucesso!");
        
    }
});
document.getElementById("enviar-form").addEventListener("submit", function(event) { // Adiciona um ouvinte de evento ao botão de envio do formulário
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coleta os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value; 

    // Validação simples dos campos
    if (nome === "" || email === "" || assunto === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Exibe uma mensagem de confirmação
    showToast("Obrigado por entrar em contato! Responderemos em breve.");

    // Limpa os campos do formulário
    document.getElementById("contato-form").reset(); // Reseta o formulário
});

function showToast(message) { // Função para exibir uma mensagem tipo "toast" (Temporaria)
    let toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(function() {
        toast.classList.remove("show");
    }, 3000);

}

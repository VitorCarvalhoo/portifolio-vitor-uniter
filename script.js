document.getElementById("enviar-form").addEventListener("submit", function(event) { // Adiciona um ouvinte de evento ao botão de envio do formulário
    event.preventDefault(); // Impede o envio padrão do formulário

    // Exibe uma mensagem de confirmação
    showToast("Obrigado por entrar em contato! Responderemos em breve.");


});

function showToast(message) { // Função para exibir uma mensagem tipo "toast" (Temporaria)
    let toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(function() {
        toast.classList.remove("show");
    }, 3000);

}


function buscarConteudo() {
    var input, filter, container, items, title, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();

    // Verifica se o input existe
    if (!input) return;

    // Define o container
    container = document.querySelector(".video-container");
    if (!container) return; // Se o contêiner não existir, sai da função

    items = container.getElementsByClassName("video-item");

    // Se não houver itens, sai da função
    if (!items.length) return;

    for (var i = 0; i < items.length; i++) {
        title = items[i].getElementsByTagName("p")[0]; // Acha o título do vídeo
        if (title) {
            txtValue = title.textContent || title.innerText;
            // Exibe ou oculta o item com base na pesquisa
            items[i].style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
        }
    }
}



function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }
    
    // Validação de email (simplificada)
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('Por favor, insira um email válido.');
        return false;
    }

    alert('Mensagem enviada com sucesso!');
    return true; // Enviar o formulário
}

document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light-theme';
    document.body.classList.add(currentTheme);

    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');

        const newTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
        localStorage.setItem('theme', newTheme);
    });
});

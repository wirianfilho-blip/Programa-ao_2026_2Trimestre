// Função para simular o Login e navegar para a aba principal
function realizarLogin(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const usuarioInput = document.getElementById('usuario').value;
    const senhaInput = document.getElementById('senha').value;

    if (usuarioInput.trim() !== "" && senhaInput.trim() !== "") {
        // 1. Oculta a tela de login
        const telaLogin = document.getElementById('tela-login');
        telaLogin.style.display = 'none';

        // 2. Exibe o conteúdo principal do site
        const conteudoPrincipal = document.getElementById('conteudo-principal');
        conteudoPrincipal.style.display = 'block';

        // 3. Ativa a aba principal (Laboratório) por padrão
        const btnLaboratorio = document.querySelector('.tab-btn');
        openTab({ currentTarget: btnLaboratorio }, 'lab');

        // 4. (Opcional) Exibe uma mensagem de boas-vindas
        console.log(`Login realizado com sucesso por: ${usuarioInput}`);
    } else {
        alert("Por favor, preencha o usuário e a senha.");
    }
}

// Função para alternar entre as abas do portal
function openTab(evt, tabName) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add('active');
    }
}

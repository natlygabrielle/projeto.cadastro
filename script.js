document.getElementById('cadastroForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;

    if (nome === '' || email === '' || senha === '') {
        alert('Todos os campos são obrigatórios!');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    if (senha.length < 8) {
        alert('A senha deve ter no mínimo 8 caracteres.');
        return;
    }

    fetch('processar_cadastro.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('mensagem').innerText = data;
    })
    .catch(err => console.error('Erro:', err));
});

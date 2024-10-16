document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "teste@exemplo.com" && password === "123456") {
        alert("Login bem-sucedido!");
    } else {
        alert("Email ou senha inválidos.");
    }
});

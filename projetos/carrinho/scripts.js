let carrinho = [];
let total = 0;

function adicionarCarrinho(id, nome, preco) {
    carrinho.push({ id, nome, preco });
    total += preco;

    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoLista = document.getElementById("carrinho");
    const totalSpan = document.getElementById("total");

    carrinhoLista.innerHTML = '';

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        carrinhoLista.appendChild(li);
    });

    totalSpan.textContent = total.toFixed(2);
}

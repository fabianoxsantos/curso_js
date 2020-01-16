function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Celular', 79.99))
console.log(criarProduto('Notebook', 1279.99))
console.log(criarProduto('PlayStation', 3279.99))
// Um objeto é uma coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Celular'
produto['Marca do produto'] = 'Generica' // forma opcional de declarar atributos de um objeto. Entre []
produto.preco = 220

console.log(produto)
delete produto.preco // forma de excluir atributo de um produto

console.log(produto)
produto.preco = 79.00 // posso atribuir novamente o valor do atributo que foi deletado

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 44,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 67,
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 22 
    }],
    calcularValorSeguro(){
        //...
    }
}


carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['numero'] = 1000

console.log(carro)

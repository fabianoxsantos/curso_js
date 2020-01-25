// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promocao'
})

console.log('Extensivo:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha Escolar Branca'
delete produto.tag
console.log(produto)

// Object.seal 

const pessoa = {nome: 'Juliana', idade: 23, }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 35
console.log(pessoa)

// Object.freeze = selado + valores constantes

const carro = {marca: 'GM', modelo: 'Corsa' }
Object.freeze(carro)
console.log('Congelado:', Object.isFrozen(carro))

carro.marca = 'VW'
delete carro.modelo
carro.ano = 2002
console.log(carro)



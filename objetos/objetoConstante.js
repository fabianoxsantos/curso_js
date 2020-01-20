const pessoa = {nome: 'Joao'}
console.log(pessoa.nome)

pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa)   // congela um objeto

pessoa.nome = 'Maria'
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})  // Cria objeto constante
 

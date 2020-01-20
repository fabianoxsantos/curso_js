const pessoa = {
    nome: 'Rebeca',
    idade: 45,
    peso: 56
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach(([chave, valor]) => {   // percorre a array e utilizando o "Destructuring"
    console.log(`${chave} ${valor}`)
    
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false, 
    value: "30/06/1975"
}) 

pessoa.dataNascimento = '01/01/1975'

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign - Nova função do ECMAScript 2015

const dest = { a: 1 } 
const ob1 = { b: 2 }
const ob2 = { c: 3, a: 4}
const obj = Object.assign(dest, ob1, ob2) // concatena todos os atributos em um só objeto

Object.freeze(obj)  // congela o objeto
obj.c = 1234

console.log(obj)




console.log(obj)

 
const pilotos = ['Vetel', 'Alonso', 'Raikonen', 'Massa']
console.log(pilotos)

pilotos.pop() // ultimo elemento é eliminado
console.log(pilotos)

pilotos.push('Vestapen')
console.log(pilotos)

pilotos.shift() // remove primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // insere um elemento na primeira posicao
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa' ) // elimina e inclui elementos
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)

const alfunsPilotos1 = pilotos.slice(2) // retorno um novo Array
console.log(alfunsPilotos1)

const alfunsPilotos2 = pilotos.slice(1, 4)
console.log(alfunsPilotos2)





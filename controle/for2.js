const notas = [3.5, 6.7, 8.7, 5.6]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Fabiano',
    idade: '40 anos',
    sexo: 'Masc'
}
for (let atributos in pessoa){
    console.log(`${atributos}, ${pessoa[atributos]}`)
}
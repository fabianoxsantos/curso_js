const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)   // cria objeto a partir do prototipo 'pai' 
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

filha2.nome = 'Carla'
console.log(filha2.nome)

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?   // checa se o atributo veio por herança ou se é do próprio objeto
        console.log(key) : console.log(`Por herança ${key}`)

}
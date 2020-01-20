const a = 1
const b = 2
const c = 3

// forma antiga

const obj1 = {a: a, b: b, c: c}

// nova forma a partir do ES6

const obj2 = {a, b, c}

console.log(obj1, obj2)

// forma antiga

const nomeAttr = 'Nota'
const valorAttr = 7.89

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

// nova forma a partir do ES6

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const modelo = 'Fusca'
const placa = 'CDF 9889'

const veiculo = {[modelo]: placa}
console.log(veiculo)

// forma antiga

const obj5 = {
    funcao1: function () {
        // ...
    },
    funcao2(){
        //....
    } 
}

console.log(obj5)
// Criando Objetos

// usando a notação literal

const obj1 = {}
console.log(obj1)

// Objeto em JS - a partir da função construtora do JavaScript

console.log(typeof Object, typeof new Object) // Object é uma função para criar Objetcts, new Object cria object

const objt2 = new Object
console.log(objt2)

// Criar obejto a partir de Função Construtora.

function Produto(nome, preco, desc){        // cria a função e informa parametros de entrada
    this.nome = nome                        // 'this' torna o nome público
    this.getPrecoComDesconto = () => {      // cria método para calculo do desconto
        return preco * (1 - desc)
    }
}

const p1 = new Produto('caneta', 4.99, 0.15)     // cria uma nova instancia de produto
const p2 = new Produto('notebook', 4999, 0.15)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Criar obejto a partir da Função Factory

function criarFuncionario(nome, salario, faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario / 30) * (30 - faltas)
        }
    }   
}
const f1 = criarFuncionario('Ana', 6900, 4)
const f2 = criarFuncionario('Fabio', 12000, 1)

console.log(f1.getSalario(), f2.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna um Objeto...

const fromJSON = JSON.parse('{"info": "Sou JSON"}')
console.log(fromJSON.info)




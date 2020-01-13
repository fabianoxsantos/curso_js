let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
   return 2 * a
}

dobro = a => 2 * a // retorno implícito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui param, mas na hora de chamar a funcao pode ignorar o param

console.log(ola())



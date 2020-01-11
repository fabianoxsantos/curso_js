const pessoa = {
    saudacao: 'Bom Dia',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()


pessoa.falar()
const falar = pessoa.falar
falar() // conflirto entre paradigmas:; funcional re OO (Orientada a Objeto)

const falarDePessoa = pessoa.falar.bind(pessoa)

falarDePessoa()
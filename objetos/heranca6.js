function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bom dia', 123)
const aula2 = new Aula('Até breve', 456)
console.log(aula1, aula2)


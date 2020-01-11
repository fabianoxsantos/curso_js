function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
} 

let opcao = 0

// while é uma estrutura de repetição 
while (opcao != -1){ // enquanto o valor entre os colchetes for true ele continua repetindo até valor for false
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}`)
}
console.log('Até a próxima')
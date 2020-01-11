function soBoaNoticia(nota){
    if (nota >= 7){
        console.log('Aprovado com nota ' + nota )
        }
      
} 
// soBoaNoticia(8)
// soBoaNoticia(6)

function seForVerdadeEuFalo(valor){
    if (valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo([])
seForVerdadeEuFalo({})
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')



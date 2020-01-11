function teste1(num){
    if(num > 7)
        console.log(num) // vc pode definir uma única linha de código depois do if sem {}
    console.log('Final') // esta linha ele não executa, somente a linha após o if

}
teste1(6)
teste1(8)

function teste2(num){
    if (num > 7); { // cuidado com o ';' em uma estrura de controle Não usar
        console.log(num)
    }
}
 
teste2(6)
teste2(8)
function area(largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Valor ${area}m2 acima do permitido`)
    } else {
        return area
    }
}
console.log(area(2, 2))
console.log(area(2))
console.log(area(2, 3, 4, 7, 9))
console.log(area(5, 5))
function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 2, 3, 6, 68, 8))

console.log(soma(" Opa, ", "beleza?"))
console.log(soma(" Opa, ", "beleza?", 6))
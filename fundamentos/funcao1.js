//? função sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(5, 6)
imprimirSoma(10, 11, 12, 13)

//? função com retorno

function Soma(a, b = 1){
    return a + b
}

console.log(Soma(5, 11))
console.log(Soma(5))
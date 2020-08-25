//? Armazenando função dentro de uma variável
const imprimirSoma = function (a, b){
    console.log(a+b)
}

imprimirSoma(5,6)

//? Armazenando uma função arrow em uma variável
const soma = (a,b) => {
    return a + b
 }

console.log(soma(2,3))

//? Retorno implícito
const subtracao = (a,b) => a - b

console.log(subtracao(9, 3))

const imprimir2 = a => console.log(a)
imprimir2("Top")
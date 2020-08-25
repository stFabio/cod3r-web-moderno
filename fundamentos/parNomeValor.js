//? par nome/valor
const saudacao = "Salve!" //? contexto léxico 1 -> local no qual a variavel foi definid fisicamente no código (ex: aqui está salvo no arquivo .js)

function exec() {
    const saudacao = "Opa!" //? contexto léxico 2
    return saudacao
}

//? Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: "Pedro",
    idade: 22,
    peso: 90,
    endereco: {
        logradouro: "Rua Topzera",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
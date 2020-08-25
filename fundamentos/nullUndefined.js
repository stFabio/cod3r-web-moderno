let valor //? não foi inicializada (undefined)
console.log(valor)

valor = null //? ausência de valor
console.log(null)

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined //! evitar atribuição explicita undefined, opte por null
console.log(!!produto.preco)
//delete produto.preco
console.log(produto.preco)
produto.preco = null //! explicitamente dizer que está SEM preço

console.log(produto)
console.log(!!produto.preco)
console.log(produto)

//! Normalmente o nulo é definido pelo usuário e o undefined pela linguagem.
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(Boolean(isAtivo))
console.log(!(isAtivo))
console.log(!!(isAtivo))

console.log("Os verdadeiros:")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("Os falsos")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("Finalização")
console.log(!!(''|| null || 0 || ''|| 'epa')) //? sem o !! retorna o primeiro valor verdadeiro (se for o caso)


let nome = 'Fábio'
console.log(nome || "Desconhecido")
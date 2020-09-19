const nums = [1, 2, 3, 4, 5]

//? For com "propósito"
let = resultado = nums.map((e) => {
	return e * 2
})

console.log(resultado)

const soma = (e) => e + 10
const triplo = (e) => e * 3
const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

console.log(nums.map(soma))
console.log(nums.map(triplo))
console.log(nums.map(paraDinheiro))

resultado = nums.map(soma).map(triplo).map(paraDinheiro)
console.log(resultado)

function compras(trabalho1, trabalho2) {
    const compraSorvete = trabalho1 || trabalho2
    const compraTV50 = trabalho1 && trabalho2
    //const compraTV32 = !!(trabalho1 ^ trabalho2)
    const compraTV32 = trabalho1 != trabalho2
    const manterSaudavel = !compraSorvete //* operador unário

    return { compraSorvete, compraTV50, compraTV32, manterSaudavel } //? Recurso ES 2015
}

console.log(compras(true, true))
console.log(compras(false, true))
console.log(compras(true, false))
console.log(compras(false, false))
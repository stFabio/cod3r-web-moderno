const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"]

aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`)
})

//! Parametros: 1º valor, 2º indice, 3º array

aprovados.forEach((nome, indice) => console.log(`${indice + 1}) ${nome}`))

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)
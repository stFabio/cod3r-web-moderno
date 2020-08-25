//* Eu
function criarProduto1(nome, preco) {
  return {
    nome: `${nome}`,
    preco: `${preco}`,
  };
}

console.log(criarProduto1("Água", 3.5));

//* Professor
function criarProduto2(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1,
  };
}

console.log(criarProduto2("Água", 3.5));
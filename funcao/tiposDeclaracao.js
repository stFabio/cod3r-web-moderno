//? o JS consegue ler antes pois carrega todas as funções previamente (em caso de uso do function declaration)
console.log(soma(3,4)); 

//? O caso acima não é valido para function expression e named function expression

//* function declaration 
function soma(x, y){
    return x + y;
};

//* function expression
const sub = function (x, y){
    return x - y;
};
console.log(sub(3, 4));

//* named function expression
const mult = function mult (x, y){
    return x * y;
}; //? vantajosa para debug
console.log(mult(3, 4))
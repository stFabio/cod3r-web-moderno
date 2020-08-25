//! NA CONDIÇÃO E, AND, &&, SÓ RESULTA EM VERDADEIRO SE TODAS AS EXPRESSÕES FOREM VERDADEIRAS
console.log(true && true); //? v and v -> v
console.log(true && false); //? v and f -> f
console.log(false && false, "\n"); //? f and f -> f

//! NA CONDIÇÃO OU, OR, ||, PARA RESULTAR EM VERDADEIRO É NECESSÁRIO APENAS UMA EXPRESSÃO SER VERDADEIRA
console.log(true || true); //? v or v -> v
console.log(true || false); //? v or f -> v
console.log(false || false, "\n"); //? f or f -> f

//! XOR (OU EXCLUSIVO, APENAS CONDIÇÕES DIFERENTES DÃO VERDADEIRO)
//* OPERADOR BITWISE XOR (!!(^))
console.log(!!(true ^ true)); //? v xor v -> f
console.log(!!(true ^ false)); //? v xor f -> v
console.log(!!(false ^ true)); //? f xor v -> v
console.log(!!(false ^ false), "\n"); //? f xor f -> f

//* OPERADOR DIFERENTE (!=)
console.log(true != true); //? v xor v -> f
console.log(true != false); //? v xor f -> v
console.log(false != true); //? f xor v -> v
console.log(false != false, "\n"); //? f xor f -> f

//! NÃO, NOT, !, INVERTE A CONDIÇÃO, TORNANDO FALSO EM VERDADEIRO E VERDADEIRO EM FALSO
console.log(!false);
console.log(!true);

console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//conferir se um número é inteiro
console.log(Number.isInteger(5.5));

//conferir se não é um número
console.log(Number.isNaN('asdasd'));
console.log(Number.isNaN(NaN));
console.log(isNaN('sadasd'));

//dizer quantos números queremos após o ponto
console.log(1.52323123.toFixed(2));


//OBJETO MATH

//Mat.pow() - syntax - Math.pow(base, expoente)
console.log(Math.pow(3,2))

//Mat.sqrt()
console.log(Math.sqrt(9))

//Retornar o módulo de um número (valor absoluto) - Math.abs()
console.log(Math.abs(-5.3515));

//Arredondar um número para cima
console.log(Math.ceil(5.9));
console.log(Math.ceil(5.2));

//Arredondar um número para baixo
console.log(Math.floor(5.9));
console.log(Math.floor(5.2));

//Arredondar para o número mais próximo
console.log(Math.round(5.9));
console.log(Math.round(5.2));

//"Arredondar" pegando apenas a parte inteira do número
console.log(Math.trunc(5.9));
console.log(Math.trunc(5.2));

//Math.max() retorna o maior número que você passar como parâmetro
console.log(Math.max(1, 5, 10, 12, 5, 85));

//Math.max() retorna o menor número que você passar como parâmetro
console.log(Math.min(1, 5, 10, 12, 5, 85));

var myArray = [5, 9, 1, 3, 10, 31, 50];

console.log(Math.max(...myArray));

// Retornar um número aleatório entre 0 e 1 
var x = 5;

console.log(Math.random);
console.log(Math.random) * 10;
console.log(Math.random) * x;




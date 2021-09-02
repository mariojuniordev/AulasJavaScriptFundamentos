function sum(n1, n2, n3){
  return n1 + n2 + n3;
}

var myArray = [5, 20];
var myArray2 = [4, 5, 6];

//O operador spread (...) retorna os valores de um array "soltos"

console.log(sum(...myArray));
console.log(...myArray);
console.log(myArray);
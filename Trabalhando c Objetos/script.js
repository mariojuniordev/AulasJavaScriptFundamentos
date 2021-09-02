var myObj = {
  a: 2,
  b: 4,
  c: 6
}

//Retornar um Array com todas as chaves do objeto desejado
var keys = Object.keys(myObj);

console.log(keys);
//gerado: ["a", "b", "c"]

//Verificar se uma propriedade (chave) existe ou não num objeto literal
myObj.hasOwnProperty('a');
//gerado: true

myObj.hasOwnProperty('d');
//gerado: false

//Podemos fazer a mesma coisa do exemplo anterior da seguinte forma:
var x = 'a' in myObj
console.log(x)
//gerado: true

var y = 'd' in myObj
console.log(y)
//gerado: false

//Gerar array com as chaves e os valores do objeto
//Esse método retorna um Array em que cada array dentro do array pai tem as chaves e valores do obj
var z = Object.entries(myObj);
console.log(z)

//Evitar que um objeto tenha o nome de suas propriedades alteras nem criar novas propriedades
Object.seal(myObj);
//Quando se sela um objeto ainda é possível alterar o valor das propriedades, mas não possível
//cirar propriedades novas

//Evitar que um objeto tenha qualquer característica alterada
Object.freeze(myObj);

//Verificar se um objeto está selado ou congelado
Object.isSealed(myObj);

Object.isFrozen(myObj);




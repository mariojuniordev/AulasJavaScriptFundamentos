var myArray = [5, 10, 15, 20];

//o for(index in myArray) retorna o index de cada elemento no array desejado

for (let index in myArray){
  console.log(index);
}

//Também podemos ecessar os próprios elementos seguinto a estrutura abaixo

for (let index in myArray){
  console.log(myArray[index]);
}

//Também podemos usar o for in com objetos

var myObj = {
  a: 1,
  b: 2,
  c: 3
}

for (let index in myObj){
  console.log(index);
}

for (let index in myObj){
  console.log(myObj[index]);
}
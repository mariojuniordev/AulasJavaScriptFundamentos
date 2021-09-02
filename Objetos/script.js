var myObj = {
  length: 15,
  color: 'yellow',
  write: function(){
    console.log('Hello');
  }
}

//console.log(myObj);
//console.log(myObj.color);

//É possível criar novas propriedades em um objeto

myObj.size = 10;

console.log(myObj.size);
console.log(typeof myObj);

var myArray = [5, 8, 4, 12];

console.log(myArray);

myArray[0] = 7;

console.log(myArray[myArray.length -1]);


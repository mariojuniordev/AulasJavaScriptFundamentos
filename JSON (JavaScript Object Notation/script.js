// JSON - JavaScript Object Notation

var myObj = {a: 1, b: 2};


//A função JSON.stringify() retorna o objeto deseado no formato JSON (string)

console.log(JSON.stringify(myObj));

var myStr = JSON.stringify(myObj);

console.log(myStr);

//A função JSON.parse() faz um objeto JSON retornar ao seu formato de objeto em JavaScript

console.log(JSON.parse(myStr));
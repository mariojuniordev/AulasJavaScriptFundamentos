var myArray = [2, 4, 6];
var myObj = {d: 5, e: 10, f: 15};

var a = myArray[0];
var b = myArray[1];
var c = myArray[2];

//É possível declarar variáveis recebendo diretamente valores de arrays

var [a, b, c] = [1, 2, 3];
var [a, b, c] = myArray;

var d = myObj.d;
var e = myObj.e;
var f = myObj.f;
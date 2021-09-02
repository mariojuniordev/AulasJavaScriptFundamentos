function sum(n1,n2) {
  console.log(n1 + n2);
}

function myFunc(){
  console.log('Hello!');
}

//SYNTAX DO SETTIMEOUT
//setTimeout(Função de Callback, valor do timeout - em milisegundos - 1000 = 1s)

//setTimeout(myFunc, 5000);

//FUNÇÃO ANÔNIMA
//É uma função "sem nome" que funciona como Callback

/*setTimeout(function(){
  console.log('Hello!');
}, 5000);*/

//ARROW FUNCTIONS

setTimeout(() => console.log('Hello!'), 2000);
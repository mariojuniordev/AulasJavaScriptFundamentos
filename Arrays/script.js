var myArray = [2, 4, 6, 8, 10, 5, 3, 9, 5];

var yourArray = ['Paulo', 'João', 'Reich'];

//Verificar se todos os elementos atendem a uma condição
//Syntax - x.every(função de callback que testará a condição)

//verificar se todos os números são pares
myArray.every((n) => n % 2 === 0);

//Retornar apenas os elementos que estão dentro de uma condição desejada no array

//Retornar números ímpares de um array
myArray.filter(n => n % 2 !== 0);

//Retornar o primeiro elemento que segue uma determinada condição

//Retornar o primeiro número maior que 5
myArray.find(n => n > 5);

//Retornar o índice do primero número maior que 5
myArray.findIndex(n => n > 5);

//Verificar se, pelo menos, 1 dos números bate com a condição

//Verificar se, pelo menos, 1 dos números é par
myArray.some(n => n % 2 === 0);

//Somar os elementos de um array
myArray.reduce((acumulado, atual) => acumulado + atual);

//Ordenar elementos de um array
console.log(myArray.sort((a,b) => a > b ? 1 : -1));

//Retornar cada um dos elementos de um Array individualmente
myArray.forEach(n => console.log(n));

//Modificar elementos de um array
myArray.map(n => n*2);
//gerado: retorna o dobro de cada elemento

//Concatenar 2 arrays
myArray.concat(myArray);
//gerado: [2, 3, 4, 5, 6, 8, 9, 10, 2, 3, 4, 5, 6, 8, 9, 10]

//Verificar se um array possui um certo elemento
myArray.includes(30);
//gerado: false

//Retornar o índice de um determinado elemento no array
//Syntax myArray.indexOf(numero que se deseja saber o índice)
myArray.indexOf(2);
//gerado: 0

//Se colocarmos um número que não existe no array, ele retorna -1*******************
myArray.indexOf(20);
//gerado: -1*********************

//Retornar o índice da posição mais "longe" de um elemento de um array
myArray.lastIndexOf(5);

//Retornar todos os elmenetos do array concatenados e convertidos em uma string
myArray.join('');

yourArray.join('');

//Inverter as posições dos elementos de um Array na ordem
myArray.reverse();

//Inverter todos os caracteres de uma string
console.log('abc'.split('').reverse().join(''))

//INSERIR um elemento no FINAL de um array
myArray.push(3);
console.log(myArray);

//REMOVER um elemento no FINAL de um array
myArray.pop();
console.log(myArray);

//INSERIR um elemento no INÍCIO de um array
myArray.unshift(3);
console.log(myArray);

//INSERIR um elemento no INÍCIO de um array
myArray.shift();
console.log(myArray);

//REMOVER elementos em QUALQUER POSIÇÃO DO ARRAY
//Syntax: 
//x.splice(índice do número onde se inicia a remoção, número dele elementos a serem eliminados a partir)
myArray.splice(1,1);
console.log(myArray);
myArray.splice(1, 3);
console.log(myArray);

//INSERIR elementos em QUALQUER POSIÇÃO DO ARRAY
//Syntax: myArray.splice(indice do elemento onde será encaixado, 0, novo elemento)
myArray.splice(2, 0, 'asdf');
console.log(myArray);

//REMOVER elementos de um array através das posições
//Sytax: myArray.slice(numero inicial, numero final)
myArray.slice(1, 4);
//gerado: [5, 'asdf', 4]

//Acessar o conteúdo em texto de uma tag HTML
document.querySelector('.list-item').textContent
//gerado: Item 1

//Também é possível alterar o conteúdo em texto de uma tag HTML através do DOM com JavaScript
document.querySelector('.list-item').textContent = 'TreinaWeb'

//Alterar ou acessar uma tag HTML
document.querySelector('.list-item').innerHTML = '<b>abc</b>'

//Acessar ou retornar o elemento junto do HTML
document.querySelector('.list-item').outerHTML

//CRIANDO E REMOVENDO ELEMENTOS

//Remover elementos HTML da página 
//document.querySelector('nome da tag').remove()
document.querySelector('input').remove()

//Criar elemento
document.createElement('li')




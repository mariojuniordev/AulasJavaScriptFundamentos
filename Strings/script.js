//Acessar posição de um caractere de uma string
console.log('Hello World'[2]);

//Saber o índice de uma palavra ou caractere de uma string
console.log('Hellow World'.indexOf('World'));

//Repetir a String um determinado número de vezes
//Syntax - 'String".repeat(numero de vezes)
console.log('Hellow World'.repeat(2));

//Retornar o trecho de uma string
//Syntax - 'String'.substr(index do caractere inicial, .length de onde deve terminar)
console.log('Hello World'.substr(0, 5));

//Retornar o trecho de uma string
//Syntax - 'String'.substring(index do caractere inicial, índice onde vai parar)
console.log('Hello World'.substring(0, 8));

//Deixar tudo maiúsculo
console.log('Hello World'.toUpperCase());

//Deixar tudo minúsculo
console.log('HELLO WORLD'.toLowerCase());

//Remover espaço vazio à direita
console.log('HELLO WORLD '.trimRight());

//Remover espaço vazio à esquerda
console.log('HELLO WORLD '.trimLeft());

//Remover espaço vazio no começo e no fim da string
console.log('HELLO WORLD '.trim());

//Transformar String num array
console.log('hello world'.split(' '));

console.log('h.e.l.l.o world'.split('.'));

console.log('hello world'.split(''));

console.log('11/10/2010'.split('/'))



